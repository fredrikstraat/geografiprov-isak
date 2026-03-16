import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
loadDotEnv();

const PORT = Number(process.env.PORT || 4173);
const HOST = process.env.HOST || "0.0.0.0";
const OPENAI_API_KEY = process.env.OPENAI_API_KEY || "";
const OPENAI_GRADER_MODEL = process.env.OPENAI_GRADER_MODEL || "gpt-4.1-mini";
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
  ".mp3": "audio/mpeg",
  ".svg": "image/svg+xml",
  ".wav": "audio/wav"
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

    if (requestUrl.pathname === "/api/check-short-answer") {
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
      const questionPrompt = String(body.questionPrompt || "").trim();
      const referenceFacts = Array.isArray(body.referenceFacts) ? body.referenceFacts : [];

      if (!answer || !questionTitle || !questionPrompt || !referenceFacts.length) {
        return sendJson(response, 400, {
          error: "Fråga, svar och referensfakta behövs för att kunna kolla svaret."
        });
      }

      const checkpointSchema = {
        name: "geography_short_answer_check",
        strict: true,
        schema: {
          type: "object",
          additionalProperties: false,
          properties: {
            accepted: { type: "boolean" },
            feedback: { type: "string" },
            nudge: { type: "string" },
            matchedFacts: {
              type: "array",
              items: { type: "string" },
              minItems: 1,
              maxItems: 2
            }
          },
          required: ["accepted", "feedback", "nudge", "matchedFacts"]
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
          max_completion_tokens: 260,
          response_format: {
            type: "json_schema",
            json_schema: checkpointSchema
          },
          messages: [
            {
              role: "system",
              content:
                "Du är en varm, tydlig geografilärare för en svensk 12-åring. Bedöm ett mycket kort skrivsvar om geografi. Använd bara referensfakta som skickas in. Godkänn korta och enkla svar om de fångar kärnan. Stavning och perfekta meningar är inte viktiga. Om svaret inte riktigt räcker, ge en kort och lugn hint i enkel svenska utan att avslöja hela svaret."
            },
            {
              role: "user",
              content: `
${TEACHER_CONTEXT}

Deluppgift: ${questionTitle}
Fråga: ${questionPrompt}
Referensfakta. Detta är den enda tillåtna faktakällan:
${referenceFacts.map((fact) => `- ${fact}`).join("\n")}

Elevens korta svar:
${answer}

Svara mycket kort. "accepted" ska vara true om eleven verkar ha förstått kärnan i just detta delområde.
              `.trim()
            }
          ]
        })
      });

      if (!upstreamResponse.ok) {
        const errorText = await upstreamResponse.text();
        return sendJson(response, upstreamResponse.status, {
          error: "OpenAI-kollen för delsvaret misslyckades.",
          details: errorText
        });
      }

      const completion = await upstreamResponse.json();
      const message = completion?.choices?.[0]?.message || {};
      if (message.refusal) {
        return sendJson(response, 502, {
          error: "OpenAI avböjde att kolla delsvaret just nu.",
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
          error: "OpenAI skickade inget innehåll för delsvaret."
        });
      }

      let parsed;
      try {
        parsed = JSON.parse(content);
      } catch (error) {
        return sendJson(response, 502, {
          error: "Kunde inte tolka OpenAI-svaret för delsvaret.",
          details: error.message
        });
      }

      return sendJson(response, 200, parsed);
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

    if (requestUrl.pathname === "/api/coach-answer") {
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
          error: "Fråga och svar behövs för att kunna coacha."
        });
      }

      const coachSchema = {
        name: "geography_answer_coaching",
        strict: true,
        schema: {
          type: "object",
          additionalProperties: false,
          properties: {
            coachVerdict: { type: "string" },
            whatWorks: {
              type: "array",
              items: { type: "string" },
              minItems: 2,
              maxItems: 3
            },
            missingNow: {
              type: "array",
              items: { type: "string" },
              minItems: 2,
              maxItems: 3
            },
            nextStep: { type: "string" },
            sentenceStarters: {
              type: "array",
              items: { type: "string" },
              minItems: 2,
              maxItems: 3
            }
          },
          required: ["coachVerdict", "whatWorks", "missingNow", "nextStep", "sentenceStarters"]
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
          max_completion_tokens: 500,
          response_format: {
            type: "json_schema",
            json_schema: coachSchema
          },
          messages: [
            {
              role: "system",
              content:
                "Du är en varm, tydlig geografilärare som coachar en svensk 12-åring mitt under ett övningsprov. Använd bara referensfakta som skickas in. Ge inte ett färdigt facit. Visa i stället vad som redan fungerar, vad som saknas just nu och ge enkla meningstarter som hjälper eleven vidare."
            },
            {
              role: "user",
              content: `
${TEACHER_CONTEXT}

Uppgift: ${questionTitle}
Beskrivning: ${questionDescription}
Stödord:
${supportPoints.map((point) => `- ${point}`).join("\n")}
Referensfakta. Detta är den enda tillåtna faktakällan:
${referenceFacts.length ? referenceFacts.map((fact) => `- ${fact}`).join("\n") : "- Inga extra referensfakta skickades med."}

Elevens utkast:
${answer}

Coacha eleven vidare. Ge inte ett helt färdigt svar. Håll tonen enkel, varm och tydlig.
              `.trim()
            }
          ]
        })
      });

      if (!upstreamResponse.ok) {
        const errorText = await upstreamResponse.text();
        return sendJson(response, upstreamResponse.status, {
          error: "OpenAI-coachningen misslyckades.",
          details: errorText
        });
      }

      const completion = await upstreamResponse.json();
      const message = completion?.choices?.[0]?.message || {};
      if (message.refusal) {
        return sendJson(response, 502, {
          error: "OpenAI avböjde att coacha svaret just nu.",
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
          error: "OpenAI returnerade ingen coachning att tolka."
        });
      }

      let parsed;
      try {
        parsed = JSON.parse(content);
      } catch (error) {
        return sendJson(response, 502, {
          error: "Kunde inte tolka OpenAI-coachningen.",
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
    console.log("OPENAI_API_KEY is not set. OpenAI grading and coaching will be unavailable.");
  }
});

function resolveStaticPath(pathname) {
  const normalizedPath = pathname === "/" ? "/index.html" : pathname;
  const decodedPath = decodeURIComponent(normalizedPath);
  const allowedRootFiles = new Set([
    "/index.html",
    "/app.js",
    "/styles.css",
    "/favicon.svg"
  ]);

  if (!allowedRootFiles.has(decodedPath) && !decodedPath.startsWith("/audio/")) {
    const error = new Error("Missing file");
    error.code = "ENOENT";
    throw error;
  }

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
