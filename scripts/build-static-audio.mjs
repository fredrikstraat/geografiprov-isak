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
const SKIP_AUDIO = process.env.SKIP_AUDIO === "1";

if (!SKIP_AUDIO && !OPENAI_API_KEY) {
  throw new Error("OPENAI_API_KEY saknas. Lägg nyckeln i .env innan du bygger ljudfilerna.");
}

const studyApi = await loadStudyApi();
const trackDefinitions = buildTrackDefinitions(studyApi);

await mkdir(audioDir, { recursive: true });

const manifest = {
  version: 2,
  generatedAt: new Date().toISOString(),
  provider: "openai",
  model: OPENAI_TTS_MODEL,
  voice: OPENAI_TTS_VOICE,
  disclosure: "Rösten är AI-genererad via OpenAI och förgenererad i projektet.",
  tracks: {}
};

for (const track of trackDefinitions) {
  console.log(`Building ${track.key}...`);
  const renderedSegments = [];

  for (const [index, segment] of track.segments.entries()) {
    const fileName = `${track.key}-part${index + 1}.mp3`;
    const filePath = path.join(audioDir, fileName);
    if (!SKIP_AUDIO) {
      await writeSpeechFile(segment.text, filePath, track.instructions);
    }
    renderedSegments.push({
      key: segment.key,
      label: segment.label,
      file: `audio/${fileName}`,
      durationSeconds: estimateSpeechDuration(segment.text),
      textHash: hashText(segment.text)
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
    segmentQuizzes: track.segmentQuizzes
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
  buildComparisonRows,
  buildComparisonSpeechSections,
  buildContinentSpeechSections,
  buildSpeechInstructions,
  continentById,
  setComparisonPair
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
  const continentTracks = api.continents.map((continent) => ({
    key: `track-${continent.id}`,
    trackId: `track-${continent.id}`,
    title: continent.name,
    kind: "continent",
    segments: api.buildContinentSpeechSections(continent),
    instructions: api.buildSpeechInstructions("lesson"),
    segmentQuizzes: buildContinentQuizzes(api, continent)
  }));

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
        segments: api.buildComparisonSpeechSections(),
        instructions: api.buildSpeechInstructions("comparison"),
        segmentQuizzes: buildComparisonQuizzes(api, first, second)
      });
    }
  }

  return [...continentTracks, ...compareTracks];
}

function buildContinentQuizzes(api, continent) {
  const otherContinents = api.continents.filter((item) => item.id !== continent.id);
  const areaKeys = [
    "location",
    "climate",
    "vegetation",
    "population",
    "livelihoods",
    "resources"
  ];

  return areaKeys.map((areaKey) => {
    const correct = continent.dimensions[areaKey].summary;
    const summaryOptions = createOptions(
      correct,
      otherContinents.map((item) => item.dimensions[areaKey]?.summary).filter(Boolean),
      `${continent.id}-${areaKey}-summary`
    );
    const exampleCorrect = areaExampleFor(continent, areaKey);
    const exampleOptions = createOptions(
      exampleCorrect,
      otherContinents.map((item) => areaExampleFor(item, areaKey)).filter(Boolean),
      `${continent.id}-${areaKey}-example`
    );

    return {
      key: areaKey,
      label: areaLabel(areaKey),
      questions: [
        {
          prompt: `Vilket påstående stämmer bäst om ${areaLabel(areaKey).toLowerCase()} i ${continent.name}?`,
          options: summaryOptions,
          correctIndex: summaryOptions.indexOf(correct),
          explanation: `I ${continent.name} gäller: ${correct}`
        },
        {
          prompt: `Vilket exempel hör till ${areaLabel(areaKey).toLowerCase()} i ${continent.name}?`,
          options: exampleOptions,
          correctIndex: exampleOptions.indexOf(exampleCorrect),
          explanation: `${exampleCorrect} hör till ${continent.name} i delen om ${areaLabel(areaKey).toLowerCase()}.`
        }
      ]
    };
  });
}

function buildComparisonQuizzes(api, first, second) {
  api.setComparisonPair(first.id, second.id);
  const rows = api.buildComparisonRows();

  return rows.map((row) => {
    const correct = `${first.name}: ${row.first}. ${second.name}: ${row.second}.`;
    const summaryOptions = createOptions(
      correct,
      [
        `${first.name}: ${row.second}. ${second.name}: ${row.first}.`,
        `${first.name}: ${row.firstExamples}. ${second.name}: ${row.secondExamples}.`,
        `${first.name}: ${row.firstReason}. ${second.name}: ${row.secondReason}.`
      ],
      `${first.id}-${second.id}-${row.key}-summary`
    );
    const exampleCorrect = `${first.name}: ${row.firstExamples}. ${second.name}: ${row.secondExamples}.`;
    const exampleOptions = createOptions(
      exampleCorrect,
      [
        `${first.name}: ${row.secondExamples}. ${second.name}: ${row.firstExamples}.`,
        `${first.name}: ${row.first}. ${second.name}: ${row.second}.`,
        `${first.name}: ${row.firstReason}. ${second.name}: ${row.secondReason}.`
      ],
      `${first.id}-${second.id}-${row.key}-example`
    );

    return {
      key: row.key,
      label: row.label,
      questions: [
        {
          prompt: `Vilket påstående stämmer om ${row.label.toLowerCase()} när man jämför ${first.name} och ${second.name}?`,
          options: summaryOptions,
          correctIndex: summaryOptions.indexOf(correct),
          explanation: `I jämförelsen sades att ${correct}`
        },
        {
          prompt: `Vilka exempel hör till ${row.label.toLowerCase()} när man jämför ${first.name} och ${second.name}?`,
          options: exampleOptions,
          correctIndex: exampleOptions.indexOf(exampleCorrect),
          explanation: `Exemplen i jämförelsen var: ${exampleCorrect}`
        }
      ]
    };
  });
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
  return Math.max(10, Math.round((words / 125) * 60));
}

function hashText(text) {
  return createHash("sha256").update(String(text)).digest("hex");
}

function areaLabel(areaKey) {
  const labels = {
    location: "Läge",
    climate: "Klimat",
    vegetation: "Vegetation",
    population: "Befolkning",
    livelihoods: "Försörjning",
    resources: "Naturresurser"
  };

  return labels[areaKey] || areaKey;
}

function areaExampleFor(continent, areaKey) {
  const exampleByArea = {
    location: continent.keyPlaces[0] || continent.name,
    climate: continent.dimensions.climate.tags[0] || continent.dimensions.climate.summary,
    vegetation: continent.dimensions.vegetation.tags[0] || continent.dimensions.vegetation.summary,
    population: continent.dimensions.population.tags[0] || continent.dimensions.population.summary,
    livelihoods: continent.dimensions.livelihoods.tags[0] || continent.dimensions.livelihoods.summary,
    resources: continent.dimensions.resources.tags[0] || continent.dimensions.resources.summary
  };

  return exampleByArea[areaKey] || continent.name;
}
