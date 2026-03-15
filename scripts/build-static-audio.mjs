import { createHash } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const audioDir = path.join(projectRoot, "audio");
const manifestPath = path.join(audioDir, "manifest.json");

loadDotEnv(path.join(projectRoot, ".env"));

const OPENAI_API_KEY = process.env.OPENAI_API_KEY || "";
const OPENAI_TTS_MODEL = process.env.OPENAI_TTS_MODEL || "gpt-4o-mini-tts";
const OPENAI_TTS_VOICE = process.env.OPENAI_TTS_VOICE || "alloy";
const OPENAI_TTS_SPEED = clampSpeed(process.env.OPENAI_TTS_SPEED || "0.96");

if (!OPENAI_API_KEY) {
  throw new Error("OPENAI_API_KEY saknas. Lägg nyckeln i .env innan du bygger ljudfilerna.");
}

const studyApi = await loadStudyApi();
const trackDefinitions = buildTrackDefinitions(studyApi);

await mkdir(audioDir, { recursive: true });

const manifest = {
  version: 1,
  generatedAt: new Date().toISOString(),
  provider: "openai",
  model: OPENAI_TTS_MODEL,
  voice: OPENAI_TTS_VOICE,
  disclosure: "Rösten är AI-genererad via OpenAI och förgenererad i projektet.",
  tracks: {}
};

for (const track of trackDefinitions) {
  console.log(`Building ${track.key}...`);
  const segments = splitTrackSpeech(track.speechText);
  const renderedSegments = [];

  for (const [index, segmentText] of segments.entries()) {
    const fileName = `${track.key}-part${index + 1}.mp3`;
    const filePath = path.join(audioDir, fileName);
    await writeSpeechFile(segmentText, filePath, track.instructions);
    renderedSegments.push({
      file: `audio/${fileName}`,
      durationSeconds: estimateSpeechDuration(segmentText),
      textHash: hashText(segmentText)
    });
  }

  manifest.tracks[track.key] = {
    title: track.title,
    kind: track.kind,
    trackId: track.trackId,
    compareA: track.compareA || "",
    compareB: track.compareB || "",
    totalDurationSeconds: renderedSegments.reduce(
      (total, segment) => total + segment.durationSeconds,
      0
    ),
    segments: renderedSegments,
    checkpointQuiz: {
      afterSegment: 0,
      questions: track.questions
    }
  };
}

await writeFile(manifestPath, JSON.stringify(manifest, null, 2));
console.log(`Wrote ${manifestPath}`);

function loadDotEnv(dotEnvPath) {
  if (!existsSync(dotEnvPath)) {
    return;
  }

  const fileContent = readFileSync(dotEnvPath, "utf8");
  for (const rawLine of fileContent.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) {
      continue;
    }

    const equalsIndex = line.indexOf("=");
    if (equalsIndex === -1) {
      continue;
    }

    const key = line.slice(0, equalsIndex).trim();
    const value = line.slice(equalsIndex + 1).trim().replace(/^['"]|['"]$/g, "");
    if (key && !(key in process.env)) {
      process.env[key] = value;
    }
  }
}

function clampSpeed(value) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) {
    return 0.96;
  }
  return Math.min(1.1, Math.max(0.8, numeric));
}

async function loadStudyApi() {
  const source = await readFile(path.join(projectRoot, "app.js"), "utf8");
  const element = createStubElement;
  const documentStub = {
    body: {
      classList: {
        add() {},
        remove() {}
      }
    },
    querySelector() {
      return element();
    },
    querySelectorAll() {
      return [];
    },
    createElement() {
      return element();
    }
  };

  const windowStub = {
    location: { protocol: "http:", host: "localhost" },
    localStorage: {
      getItem() {
        return null;
      },
      setItem() {}
    },
    speechSynthesis: {
      cancel() {},
      getVoices() {
        return [];
      },
      speak() {}
    },
    indexedDB: null,
    addEventListener() {},
    removeEventListener() {},
    setTimeout,
    clearTimeout
  };

  const context = {
    console,
    setTimeout,
    clearTimeout,
    window: windowStub,
    document: documentStub,
    localStorage: windowStub.localStorage,
    alert() {},
    URL,
    fetch: async () => {
      throw new Error("fetch is not available in the static audio builder context");
    }
  };

  context.globalThis = context;
  windowStub.window = windowStub;
  windowStub.document = documentStub;
  windowStub.URL = URL;

  vm.runInNewContext(
    `${source}
globalThis.__studyExport = {
  continents,
  appState,
  areaExamplesByContinent,
  buildComparisonRows,
  buildComparisonSpeechText,
  buildContinentStudyContent,
  buildSpeechInstructions,
  continentById,
  setComparisonPair,
  splitTextForTts
};`,
    context,
    { filename: "app.js" }
  );

  return context.__studyExport;
}

function createStubElement() {
  return {
    innerHTML: "",
    textContent: "",
    value: "",
    currentTime: 0,
    duration: 0,
    dataset: {},
    style: {},
    classList: {
      add() {},
      remove() {}
    },
    addEventListener() {},
    removeEventListener() {},
    removeAttribute() {},
    setAttribute() {},
    load() {},
    pause() {},
    play() {
      return Promise.resolve();
    },
    matches() {
      return false;
    },
    querySelector() {
      return createStubElement();
    },
    querySelectorAll() {
      return [];
    },
    closest() {
      return null;
    }
  };
}

function buildTrackDefinitions(api) {
  const continentTracks = api.continents.map((continent) => {
    const content = api.buildContinentStudyContent(continent);
    return {
      key: `track-${continent.id}`,
      trackId: `track-${continent.id}`,
      title: continent.name,
      kind: "continent",
      speechText: content.speechText,
      instructions: api.buildSpeechInstructions("lesson"),
      questions: buildContinentQuiz(api, continent)
    };
  });

  const compareTracks = [];
  for (const first of api.continents) {
    for (const second of api.continents) {
      if (first.id === second.id) {
        continue;
      }

      api.setComparisonPair(first.id, second.id);
      compareTracks.push({
        key: `track-compare--${first.id}--${second.id}`,
        trackId: "track-compare",
        title: `Jämför ${first.name} och ${second.name}`,
        kind: "compare",
        compareA: first.id,
        compareB: second.id,
        speechText: api.buildComparisonSpeechText(),
        instructions: api.buildSpeechInstructions("comparison"),
        questions: buildComparisonQuiz(api, first, second)
      });
    }
  }

  return [...continentTracks, ...compareTracks];
}

function buildContinentQuiz(api, continent) {
  const otherContinents = api.continents.filter((item) => item.id !== continent.id);
  const climateCorrect = continent.dimensions.climate.summary;
  const climateOptions = createOptions(
    climateCorrect,
    otherContinents.map((item) => item.dimensions.climate.summary),
    `${continent.id}-climate`
  );
  const exampleCorrect =
    continent.keyPlaces[0] || api.areaExamplesByContinent[continent.id]?.resources || continent.name;
  const exampleOptions = createOptions(
    exampleCorrect,
    otherContinents
      .map((item) => item.keyPlaces[0] || api.areaExamplesByContinent[item.id]?.resources)
      .filter(Boolean),
    `${continent.id}-example`
  );

  return [
    {
      prompt: `Vilket påstående stämmer bäst om klimatet i ${continent.name}?`,
      options: climateOptions,
      correctIndex: climateOptions.indexOf(climateCorrect),
      explanation: `I ${continent.name} gäller: ${climateCorrect}`
    },
    {
      prompt: `Vilket exempel hör till ${continent.name}?`,
      options: exampleOptions,
      correctIndex: exampleOptions.indexOf(exampleCorrect),
      explanation: `${exampleCorrect} hör till ${continent.name} och nämndes i genomgången.`
    }
  ];
}

function buildComparisonQuiz(api, first, second) {
  api.setComparisonPair(first.id, second.id);
  const rows = api.buildComparisonRows();
  const climateRow = rows.find((row) => row.key === "climate") || rows[0];
  const resourcesRow = rows.find((row) => row.key === "resources") || rows[1] || rows[0];
  const livelihoodsRow = rows.find((row) => row.key === "livelihoods") || rows[2] || rows[0];
  const correctComparison = `${first.name}: ${climateRow.first}. ${second.name}: ${climateRow.second}.`;
  const comparisonOptions = createOptions(
    correctComparison,
    [
      `${first.name}: ${climateRow.second}. ${second.name}: ${climateRow.first}.`,
      `${first.name}: ${resourcesRow.first}. ${second.name}: ${resourcesRow.second}.`,
      `${first.name}: ${livelihoodsRow.first}. ${second.name}: ${livelihoodsRow.second}.`
    ],
    `${first.id}-${second.id}-comparison`
  );

  const exampleCorrect = climateRow.firstExamples;
  const otherNames = api.continents
    .filter((continent) => continent.id !== first.id && continent.id !== second.id)
    .map((continent) => continent.name);
  const exampleOptions = createOptions(
    first.name,
    [second.name, ...otherNames],
    `${first.id}-${second.id}-example`
  );

  return [
    {
      prompt: `Vilket påstående stämmer om klimatet när man jämför ${first.name} och ${second.name}?`,
      options: comparisonOptions,
      correctIndex: comparisonOptions.indexOf(correctComparison),
      explanation: `I jämförelsen sades att ${correctComparison}`
    },
    {
      prompt: `Vilken världsdel kopplades till ${exampleCorrect}?`,
      options: exampleOptions,
      correctIndex: exampleOptions.indexOf(first.name),
      explanation: `${exampleCorrect} hörde till ${first.name} i jämförelsen.`
    }
  ];
}

function createOptions(correct, distractors, seed) {
  const uniqueDistractors = [...new Set(distractors.filter((item) => item && item !== correct))].slice(
    0,
    3
  );
  const options = [...uniqueDistractors];
  const insertIndex = Number.parseInt(hashText(seed).slice(0, 2), 16) % (uniqueDistractors.length + 1);
  options.splice(insertIndex, 0, correct);
  return options;
}

function splitTrackSpeech(text) {
  const chunks = studyApi.splitTextForTts(text, {
    firstChunkWords: 60,
    firstChunkChars: 950
  });

  if (chunks.length <= 1) {
    return chunks;
  }

  return [chunks[0], chunks.slice(1).join(" ")];
}

async function writeSpeechFile(text, outputPath, instructions) {
  const response = await fetch("https://api.openai.com/v1/audio/speech", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: OPENAI_TTS_MODEL,
      voice: OPENAI_TTS_VOICE,
      input: text,
      instructions,
      response_format: "mp3",
      speed: OPENAI_TTS_SPEED
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`OpenAI TTS misslyckades för ${path.basename(outputPath)}: ${errorText}`);
  }

  const audioBuffer = Buffer.from(await response.arrayBuffer());
  await writeFile(outputPath, audioBuffer);
}

function estimateSpeechDuration(text) {
  const words = String(text || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(12, Math.round((words / 125) * 60));
}

function hashText(text) {
  return createHash("sha256").update(String(text)).digest("hex");
}
