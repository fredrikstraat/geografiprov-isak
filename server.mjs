import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
loadDotEnv();

const PORT = Number(process.env.PORT || 4173);
const HOST = process.env.HOST || "127.0.0.1";
const OPENAI_API_KEY = process.env.OPENAI_API_KEY || "";
const OPENAI_TTS_MODEL = process.env.OPENAI_TTS_MODEL || "gpt-4o-mini-tts";
const OPENAI_GRADER_MODEL = process.env.OPENAI_GRADER_MODEL || "gpt-4.1-mini";
const OPENAI_TTS_VOICE = process.env.OPENAI_TTS_VOICE || "alloy";
const OPENAI_TTS_SPEED = clampSpeed(process.env.OPENAI_TTS_SPEED || "0.96");
const OPENAI_TTS_VOICES = [
  "alloy",
  "ash",
  "ballad",
  "coral",
  "echo",
  "fable",
  "nova",
  "onyx",
  "sage",
  "shimmer",
  "verse"
];
const OPENAI_TTS_INSTRUCTIONS =
  process.env.OPENAI_TTS_INSTRUCTIONS ||
  "Speak in Swedish with a warm, encouraging tone for a 12-year-old student. Keep the pacing calm, the pronunciation clear, and the intonation lively enough to hold attention without sounding rushed.";
const TEACHER_CONTEXT = `
Provet handlar om namngeografi på världsdelar, världshav, stora bergskedjor, floder, regioner samt ett urval av länder och huvudstäder.
Det innehåller också en del där eleven ska jämföra två världsdelar utifrån natur, klimat, befolkning, naturresurser samt försörjning.

Lärarens checklista för jämförelser:
1. Vad? Berätta vad som är lika eller olika.
2. Varför? Förklara orsaken till att det ser ut så.
3. Exempel? Ge tydliga exempel från båda världsdelarna när det passar.

Betygskriterier i kortform:
- E: grundläggande kunskaper och enkla resonemang.
- C: goda kunskaper och utvecklade resonemang.
- A: mycket goda kunskaper och välutvecklade resonemang.

Bedömningen ska vara stöttande för en 12-åring. Var tydlig, konkret och konstruktiv. Stavning ska inte väga tungt om innehållet är begripligt.
`;

const MIME_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml"
};

const server = createServer(async (request, response) => {
  try {
    const requestUrl = new URL(request.url || "/", `http://${request.headers.host || "localhost"}`);

    if (requestUrl.pathname === "/health") {
      return sendJson(response, 200, {
        ok: true,
        service: "geografiprov",
        timestamp: new Date().toISOString()
      });
    }

    if (requestUrl.pathname === "/api/tts/status") {
      return sendJson(response, 200, {
        configured: Boolean(OPENAI_API_KEY),
        provider: "openai",
        model: OPENAI_TTS_MODEL,
        graderModel: OPENAI_GRADER_MODEL,
        voice: OPENAI_TTS_VOICE,
        availableVoices: OPENAI_TTS_VOICES,
        disclosure: "Rösten är AI-genererad via OpenAI."
      });
    }

    if (requestUrl.pathname === "/api/tts") {
      if (request.method !== "POST") {
        return sendJson(response, 405, { error: "Method not allowed" });
      }

      if (!OPENAI_API_KEY) {
        return sendJson(response, 503, {
          error: "OPENAI_API_KEY saknas på serversidan."
        });
      }

      const body = await readJsonBody(request);
      const text = String(body.text || "").trim();
      const instructions = String(body.instructions || OPENAI_TTS_INSTRUCTIONS).trim();
      const requestedVoice = normalizeVoice(body.voice);

      if (!text) {
        return sendJson(response, 400, { error: "Ingen text att läsa upp." });
      }

      if (text.length > 4096) {
        return sendJson(response, 400, {
          error: "Texten är för lång för ett enskilt TTS-anrop."
        });
      }

      const upstreamResponse = await fetch("https://api.openai.com/v1/audio/speech", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: OPENAI_TTS_MODEL,
          voice: requestedVoice,
          input: text,
          instructions,
          response_format: "wav",
          speed: OPENAI_TTS_SPEED
        })
      });

      if (!upstreamResponse.ok) {
        const errorText = await upstreamResponse.text();
        return sendJson(response, upstreamResponse.status, {
          error: "OpenAI TTS misslyckades.",
          details: errorText
        });
      }

      response.writeHead(200, {
        "Content-Type": upstreamResponse.headers.get("content-type") || "audio/mpeg",
        "Cache-Control": "no-store"
      });

      const audioBuffer = Buffer.from(await upstreamResponse.arrayBuffer());
      response.end(audioBuffer);
      return;
    }

    if (requestUrl.pathname === "/api/grade-answer") {
      if (request.method !== "POST") {
        return sendJson(response, 405, { error: "Method not allowed" });
      }

      if (!OPENAI_API_KEY) {
        return sendJson(response, 503, {
          error: "OPENAI_API_KEY saknas på serversidan."
        });
      }

      const body = await readJsonBody(request);
      const answer = String(body.answer || "").trim();
      const questionTitle = String(body.questionTitle || "").trim();
      const questionDescription = String(body.questionDescription || "").trim();
      const supportPoints = Array.isArray(body.supportPoints) ? body.supportPoints : [];
      const referenceFacts = Array.isArray(body.referenceFacts) ? body.referenceFacts : [];

      if (!answer || !questionTitle || !questionDescription) {
        return sendJson(response, 400, {
          error: "Fråga och svar behövs för att kunna bedöma."
        });
      }

      const gradingSchema = {
        name: "geography_answer_feedback",
        strict: true,
        schema: {
          type: "object",
          additionalProperties: false,
          properties: {
            levelEstimate: {
              type: "string",
              enum: ["På väg mot E", "E-nivå", "C-nivå", "Mellan C och A", "A-tendens"]
            },
            scorePercent: {
              type: "integer",
              minimum: 0,
              maximum: 100
            },
            shortVerdict: { type: "string" },
            summary: { type: "string" },
            strengths: {
              type: "array",
              items: { type: "string" },
              minItems: 2,
              maxItems: 4
            },
            improvements: {
              type: "array",
              items: { type: "string" },
              minItems: 2,
              maxItems: 4
            },
            nextStep: { type: "string" },
            modelAnswer: { type: "string" },
            checks: {
              type: "object",
              additionalProperties: false,
              properties: {
                onTask: { type: "boolean" },
                usesFacts: { type: "boolean" },
                explainsWhy: { type: "boolean" },
                givesExamples: { type: "boolean" },
                usesGeographyConcepts: { type: "boolean" }
              },
              required: ["onTask", "usesFacts", "explainsWhy", "givesExamples", "usesGeographyConcepts"]
            }
          },
          required: [
            "levelEstimate",
            "scorePercent",
            "shortVerdict",
            "summary",
            "strengths",
            "improvements",
            "nextStep",
            "modelAnswer",
            "checks"
          ]
        }
      };

      const upstreamResponse = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: OPENAI_GRADER_MODEL,
          max_completion_tokens: 900,
          response_format: {
            type: "json_schema",
            json_schema: gradingSchema
          },
          messages: [
            {
              role: "system",
              content:
                "Du är en varm, tydlig geografilärare som ger återkoppling till en svensk 12-åring. Bedöm svaret mot uppgiften, inte mot vuxennivå. Använd bara uppgiften, stödorden och referensfakta som skickas in. Lägg inte till egna geografifakta från annan kunskap. Om något inte stöds av referensfakta ska du vara försiktig och inte belöna det som säker fakta."
            },
            {
              role: "user",
              content: `
${TEACHER_CONTEXT}

Uppgift: ${questionTitle}
Beskrivning: ${questionDescription}
Stödord som eleven borde få med:
${supportPoints.map((point) => `- ${point}`).join("\n")}
Referensfakta från jämförelsen. Detta är den enda tillåtna faktakällan:
${referenceFacts.length ? referenceFacts.map((fact) => `- ${fact}`).join("\n") : "- Inga extra referensfakta skickades med."}

Elevens svar:
${answer}

Bedöm hur väl svaret når ungefär C-nivå i just jämförelsen. Lyft vad som fungerar, vad som saknas och ge ett bättre modell-svar på enkel svenska. Modellsvaret måste också hålla sig till referensfakta ovan.
              `.trim()
            }
          ]
        })
      });

      if (!upstreamResponse.ok) {
        const errorText = await upstreamResponse.text();
        return sendJson(response, upstreamResponse.status, {
          error: "OpenAI-bedömningen misslyckades.",
          details: errorText
        });
      }

      const completion = await upstreamResponse.json();
      const message = completion?.choices?.[0]?.message || {};
      if (message.refusal) {
        return sendJson(response, 502, {
          error: "OpenAI avböjde att bedöma svaret just nu.",
          details: message.refusal
        });
      }

      const content =
        typeof message.content === "string"
          ? message.content
          : Array.isArray(message.content)
            ? message.content
                .map((part) => (typeof part?.text === "string" ? part.text : ""))
                .join("")
            : "";

      if (!content.trim()) {
        return sendJson(response, 502, {
          error: "OpenAI returnerade ingen bedömning att tolka."
        });
      }

      let parsed;
      try {
        parsed = JSON.parse(content);
      } catch (error) {
        return sendJson(response, 502, {
          error: "Kunde inte tolka OpenAI-bedömningen som JSON.",
          details: error instanceof Error ? error.message : String(error)
        });
      }

      return sendJson(response, 200, parsed);
    }

    if (!["GET", "HEAD"].includes(request.method || "GET")) {
      return sendJson(response, 405, { error: "Method not allowed" });
    }

    const filePath = resolveStaticPath(requestUrl.pathname);
    const fileContents = await readFile(filePath);
    const extension = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[extension] || "application/octet-stream";

    response.writeHead(200, {
      "Content-Type": contentType,
      "Cache-Control": extension === ".html" ? "no-cache" : "public, max-age=300"
    });

    if (request.method === "HEAD") {
      response.end();
      return;
    }

    response.end(fileContents);
  } catch (error) {
    const statusCode = error && error.code === "ENOENT" ? 404 : 500;
    sendJson(response, statusCode, {
      error: statusCode === 404 ? "Hittade inte filen." : "Serverfel.",
      details: error instanceof Error ? error.message : String(error)
    });
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Geografiprov server running on http://${HOST}:${PORT}`);
  if (!OPENAI_API_KEY) {
    console.log("OPENAI_API_KEY is not set. OpenAI TTS will fallback in the browser.");
  }
});

function resolveStaticPath(pathname) {
  const normalizedPath = pathname === "/" ? "/index.html" : pathname;
  const decodedPath = decodeURIComponent(normalizedPath);
  const unsafePath = path.join(__dirname, decodedPath);
  const safePath = path.normalize(unsafePath);

  if (!safePath.startsWith(__dirname)) {
    const error = new Error("Invalid path");
    error.code = "ENOENT";
    throw error;
  }

  if (!existsSync(safePath)) {
    const error = new Error("Missing file");
    error.code = "ENOENT";
    throw error;
  }

  return safePath;
}

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store"
  });
  response.end(JSON.stringify(payload));
}

function clampSpeed(rawValue) {
  const parsed = Number(rawValue);
  if (!Number.isFinite(parsed)) {
    return 1;
  }
  return Math.min(4, Math.max(0.25, parsed));
}

function normalizeVoice(rawVoice) {
  const voice = String(rawVoice || OPENAI_TTS_VOICE).trim().toLowerCase();
  return OPENAI_TTS_VOICES.includes(voice) ? voice : OPENAI_TTS_VOICE;
}

async function readJsonBody(request) {
  const chunks = [];

  for await (const chunk of request) {
    chunks.push(chunk);
    const size = chunks.reduce((total, item) => total + item.length, 0);
    if (size > 64 * 1024) {
      throw new Error("Request body too large");
    }
  }

  if (!chunks.length) {
    return {};
  }

  const rawBody = Buffer.concat(chunks).toString("utf8");
  return JSON.parse(rawBody);
}

function loadDotEnv() {
  const envPath = path.join(__dirname, ".env");
  if (!existsSync(envPath)) {
    return;
  }

  const envContents = readFileSync(envPath, "utf8");
  for (const line of envContents.split(/\r?\n/)) {
    const trimmedLine = line.trim();
    if (!trimmedLine || trimmedLine.startsWith("#")) {
      continue;
    }

    const separatorIndex = trimmedLine.indexOf("=");
    if (separatorIndex === -1) {
      continue;
    }

    const key = trimmedLine.slice(0, separatorIndex).trim();
    let value = trimmedLine.slice(separatorIndex + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    if (!(key in process.env)) {
      process.env[key] = value;
    }
  }
}
