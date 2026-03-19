const continents = [
  {
    id: "europa",
    name: "Europa",
    intro: "Europa är en liten världsdel på norra halvklotet med lång kust, många öar och flera olika klimat.",
    memoryHook: "Tänk Europa som kuster, halvöar, många städer och flera klimat på liten yta.",
    cLevel: "För C är det viktigt att kunna koppla läge, klimat, naturresurser och befolkning till hur människor bor och arbetar.",
    dimensions: {
      location: {
        summary: "Ligger helt på norra halvklotet. Gränsen mot Asien går längs Uralbergen, Uralfloden, Kaspiska havet, Kaukasus och Svarta havet.",
        tags: ["norra halvklotet", "många kuster", "många öar och halvöar"],
        reason: "Den långa kusten och alla haven påverkar klimat, transporter och kontakter mellan platser."
      },
      climate: {
        summary: "Polarzon i norr, subtropisk zon i söder och tempererad zon i stora delar. Väster har kustklimat, inlandet inlandsklimat och söderut finns medelhavsklimat.",
        tags: ["tempererad zon", "kustklimat", "inlandsklimat", "medelhavsklimat"],
        reason: "Breddgrad, havens närhet och avståndet från kusten påverkar nederbörd, vintrar och somrar."
      },
      vegetation: {
        summary: "Tundra i de kallaste delarna. I övrigt finns skog, stäpp, buskar och höga bergsområden.",
        tags: ["tundra", "skog", "stäpp", "berg"],
        reason: "Olika temperatur och nederbörd gör att växtligheten blir olika i norr, söder, vid kusten och i bergen."
      },
      population: {
        summary: "Omkring 750 miljoner människor bor här. Befolkningen är ojämnt fördelad och nästan tre fjärdedelar bor i städer.",
        tags: ["750 miljoner", "ojämnt fördelad", "många bor i städer"],
        reason: "Täta städer, transporter, arbete och odlingsbar mark har gjort att många människor samlas i vissa delar av Europa."
      },
      livelihoods: {
        summary: "Jordbruk och industri finns kvar, men en stor andel arbetar i tjänster som handel, transport och IT.",
        tags: ["jordbruk", "industri", "handel", "transport", "IT"],
        reason: "Europa har moderna ekonomier där många arbetar med service och olika tjänster i stället för bara jordbruk och industri."
      },
      resources: {
        summary: "Har bördig jord, många floder och stora skogar. Det finns också olja, kol och naturgas samt järnmalm och andra metaller.",
        tags: ["bördig jord", "floder", "skog", "olja", "kol", "naturgas", "järnmalm"],
        reason: "Naturresurserna har gjort Europa viktigt för jordbruk, energi, industri och transporter."
      }
    }
  },
  {
    id: "afrika",
    name: "Afrika",
    intro: "Afrika är en mycket stor världsdel där ekvatorn går nästan mitt igenom och där klimatet skiftar från regnskog till öken.",
    memoryHook: "Tänk Afrika som varmt vid ekvatorn, torrare längre bort och med regnskog, savann, stäpp och öken.",
    cLevel: "För C är det viktigt att kunna förklara hur värme, regn, torra områden och naturresurser påverkar vegetation och försörjning.",
    dimensions: {
      location: {
        summary: "Ekvatorn går nästan mitt genom Afrika. Kräftans vändkrets ligger i norr och Stenbockens vändkrets i söder.",
        tags: ["ekvatorn", "kräftans vändkrets", "stenbockens vändkrets"],
        reason: "Läget kring ekvatorn och vändkretsarna gör att Afrika får stora skillnader i värme, regn och torka."
      },
      climate: {
        summary: "Varmt och regnigt kring ekvatorn. Därifrån blir det torrare med savann, stäpp och stora ökenområden längre norrut och söderut.",
        tags: ["varmt", "regn vid ekvatorn", "savann", "stäpp", "öken"],
        reason: "När man rör sig bort från ekvatorn minskar regnet i många områden och klimatet blir torrare."
      },
      vegetation: {
        summary: "Regnskog vid ekvatorn, savann och stäpp i stora områden och öken i till exempel Sahara.",
        tags: ["regnskog", "savann", "stäpp", "öken"],
        reason: "Växtligheten följer hur mycket regn som faller och hur varmt det är."
      },
      population: {
        summary: "Befolkningen är ojämnt fördelad. Människor lever både i städer och på landsbygden.",
        tags: ["ojämnt fördelad", "städer", "landsbygd"],
        reason: "Tillgång till vatten, odlingsbar mark och arbete påverkar var människor kan bo och försörja sig."
      },
      livelihoods: {
        summary: "Jordbruk, boskapsskötsel, gruvor, industri och turism är viktiga sätt att försörja sig.",
        tags: ["jordbruk", "boskap", "gruvor", "industri", "turism"],
        reason: "Klimatet och naturresurserna påverkar vilka jobb som är vanliga i olika delar av Afrika."
      },
      resources: {
        summary: "Afrika har stora tillgångar av diamanter, guld, koppar, järnmalm och olja. Solenergi kan bli viktigare.",
        tags: ["diamanter", "guld", "koppar", "järnmalm", "olja", "solenergi"],
        reason: "De stora naturresurserna påverkar både ekonomin och hur länderna kan utvecklas."
      }
    }
  },
  {
    id: "asien",
    name: "Asien",
    intro: "Asien är världens största världsdel och sträcker sig från kalla områden i norr till varma och fuktiga områden i söder.",
    memoryHook: "Tänk Asien som störst av alla, tätast i öst och syd, kallt i norr och monsun i syd och öst.",
    cLevel: "För C är det viktigt att kunna visa hur Asiens storlek påverkar klimat, befolkning, naturresurser och försörjning.",
    dimensions: {
      location: {
        summary: "Världens största världsdel med mycket stora avstånd från norr till söder och från kuster till inland.",
        tags: ["världens största", "långa avstånd", "kust och inland"],
        reason: "Den stora ytan gör att natur och klimat skiljer sig mycket mellan olika delar av Asien."
      },
      climate: {
        summary: "Kallt i norr, tempererat i vissa delar och tropiskt i söder. Monsun påverkar syd och öst, medan inlandet kan vara torrt.",
        tags: ["kallt i norr", "tempererat", "tropiskt", "monsun", "torrt inland"],
        reason: "Storleken, avståndet till haven och bergsområden påverkar både regn och temperatur."
      },
      vegetation: {
        summary: "Tundra och barrskog i norr, stäpp och öken i torra inland och regnskog i varma fuktiga delar.",
        tags: ["tundra", "barrskog", "stäpp", "öken", "regnskog"],
        reason: "Växtligheten följer klimatet och förändras när regn och temperatur skiftar."
      },
      population: {
        summary: "Över 4,6 miljarder människor bor i Asien. Befolkningen är tätast i öst och syd och många bor i stora städer.",
        tags: ["över 4,6 miljarder", "tätast i öst och syd", "stora städer"],
        reason: "Klimat, odlingsmark och arbete gör att många människor samlas i vissa delar av Asien."
      },
      livelihoods: {
        summary: "Jordbruk och fiske är viktiga, men industrin och tjänsterna har vuxit mycket.",
        tags: ["jordbruk", "fiske", "industri", "tjänster"],
        reason: "Den ekonomiska utvecklingen har gjort att fler arbetar i fabriker, städer och serviceyrken."
      },
      resources: {
        summary: "Asien har stora tillgångar av olja, kol och naturgas och i vissa delar också mycket bördig jord.",
        tags: ["olja", "kol", "naturgas", "bördig jord"],
        reason: "Naturresurserna påverkar hur länder tjänar pengar och vilka näringar som blir viktiga."
      }
    }
  },
  {
    id: "nordamerika",
    name: "Nordamerika",
    intro: "Nordamerika sträcker sig från arktiska områden i norr till varmare delar i söder och har stora naturresurser.",
    memoryHook: "Tänk Nordamerika som kallt i norr, tätare befolkat i söder och rikt på jord, olja och naturgas.",
    cLevel: "För C är det viktigt att kunna koppla Nordamerikas klimat och naturresurser till befolkning, näringar och stora städer.",
    dimensions: {
      location: {
        summary: "Sträcker sig från arktiska områden i norr till Centralamerika i söder. I väster finns Klippiga bergen och i öster de stora sjöarna.",
        tags: ["arktiska områden", "stora sjöar", "Klippiga bergen"],
        reason: "Det stora nord-sydliga läget gör att både naturen och klimatet skiftar mycket mellan olika delar."
      },
      climate: {
        summary: "Polarklimat i norr, inlandsklimat i stora delar och subtropiskt klimat i söder. Västkusten är mildare tack vare havet.",
        tags: ["polarklimat", "inlandsklimat", "subtropiskt", "mild västkust"],
        reason: "Breddgrad, avstånd till havet och bergskedjor påverkar både nederbörd och temperatur."
      },
      vegetation: {
        summary: "Tundra i norr, barrskog, prärie och torra ökenområden längre söderut.",
        tags: ["tundra", "barrskog", "prärie", "öken"],
        reason: "När klimatet skiftar mellan kallt, torrt och mildare förändras också växtligheten."
      },
      population: {
        summary: "Omkring 590 miljoner människor bor här. De flesta bor i söder och i stora städer vid kusterna och runt de stora sjöarna.",
        tags: ["590 miljoner", "fler i söder", "stora städer"],
        reason: "Mildare klimat, arbeten och viktiga transportlägen gör att fler bor i södra och tätare delar."
      },
      livelihoods: {
        summary: "Många arbetar i industri och tjänster. Jordbruket är också viktigt.",
        tags: ["industri", "tjänster", "jordbruk"],
        reason: "Naturresurser, teknik och stora marknader har gjort industri, service och jordbruk viktiga."
      },
      resources: {
        summary: "Har mycket bördig jord och stora tillgångar av järnmalm, olja och naturgas.",
        tags: ["bördig jord", "järnmalm", "olja", "naturgas"],
        reason: "De stora naturresurserna påverkar både ekonomin och vilka näringar som dominerar."
      }
    }
  },
  {
    id: "sydamerika",
    name: "Sydamerika",
    intro: "Sydamerika är en lång världsdel med Anderna längs västsidan och Amazonas i norr.",
    memoryHook: "Tänk Sydamerika som Anderna i väster, Amazonas i norr och stora skillnader mellan regnskog, savann och torrare områden.",
    cLevel: "För C är det viktigt att kunna förklara hur Anderna, Amazonas och de olika klimatzonerna påverkar natur, resurser och försörjning.",
    dimensions: {
      location: {
        summary: "En lång världsdel med Anderna längs västsidan och Amazonas i norr. Den sträcker sig långt från norr till söder.",
        tags: ["Anderna", "Amazonas", "lång nord-sydlig sträckning"],
        reason: "Den långa sträckningen och bergskedjan i väster gör att klimat och natur skiljer sig mycket mellan olika delar."
      },
      climate: {
        summary: "Största delen ligger i den tropiska zonen. Söderut finns subtropisk zon och längst i söder tempererad zon.",
        tags: ["tropisk zon", "subtropisk zon", "tempererad zon"],
        reason: "Läget från norr till söder och Andernas påverkan gör att både värme och regn varierar."
      },
      vegetation: {
        summary: "Regnskog i Amazonas, savann i vissa delar och torrare vegetation i andra områden.",
        tags: ["regnskog", "savann", "torrare vegetation"],
        reason: "Klimatet styr om det blir tät regnskog, gräsmarker eller torrare landskap."
      },
      population: {
        summary: "Befolkningen är ojämnt fördelad över världsdelens stora yta.",
        tags: ["ojämnt fördelad"],
        reason: "Berg, regnskog, klimat och viktiga transportlägen påverkar var människor lättast kan bo och arbeta."
      },
      livelihoods: {
        summary: "Jordbruk, boskapsskötsel, fiske, gruvor och industri är viktiga delar av försörjningen.",
        tags: ["jordbruk", "boskap", "fiske", "gruvor", "industri"],
        reason: "Naturresurserna och landskapet styr vilka arbeten som blir vanliga i olika delar av Sydamerika."
      },
      resources: {
        summary: "Har olja, metaller, bördig jord, vattenkraft och stora skogsområden.",
        tags: ["olja", "metaller", "bördig jord", "vattenkraft", "skog"],
        reason: "Resurserna är viktiga för export och ekonomi men påverkar också hur naturen används."
      }
    }
  },
  {
    id: "oceanien",
    name: "Oceanien",
    intro: "Oceanien består av Australien, Nya Zeeland och många öar i Stilla havet.",
    memoryHook: "Tänk Oceanien som öar och hav, liten befolkning och stor skillnad mellan Australiens inland och fuktiga öar.",
    cLevel: "För C är det viktigt att kunna koppla ö-läge, klimat och naturresurser till turism, fiske, jordbruk och andra näringar.",
    dimensions: {
      location: {
        summary: "Består av Australien, Nya Zeeland och många öar i Stilla havet.",
        tags: ["öar", "Australien", "Nya Zeeland", "Stilla havet"],
        reason: "När en världsdel består av öar och stora havsområden blir havet viktigt för transporter, fiske och kontakt."
      },
      climate: {
        summary: "Tropiskt på många öar, torrare i Australiens inland och svalare i delar av Nya Zeeland.",
        tags: ["tropiskt", "torrt inland", "svalare söderut"],
        reason: "Läget i havet och skillnader mellan öar och fastland gör att klimatet varierar mycket."
      },
      vegetation: {
        summary: "Regnskog och annan frodig växtlighet på fuktiga platser men torrare växtlighet i Australiens inland.",
        tags: ["regnskog", "fuktig växtlighet", "torrare inland"],
        reason: "Växtligheten följer regn, torka och hur nära havet olika områden ligger."
      },
      population: {
        summary: "Befolkningen är liten jämfört med andra världsdelar och många bor kustnära.",
        tags: ["liten befolkning", "kustnära"],
        reason: "Kusterna ger lättare transporter, bättre service och fler arbeten än torrare och mer avlägsna inland."
      },
      livelihoods: {
        summary: "Turism, jordbruk, fiske, gruvarbete och olika tjänster är viktiga.",
        tags: ["turism", "jordbruk", "fiske", "gruvarbete", "tjänster"],
        reason: "Havet, naturen och naturresurserna påverkar vilka jobb som blir vanliga i Oceanien."
      },
      resources: {
        summary: "Natur, fisk, jordbruksmark och olika mineraler är viktiga resurser i olika delar av Oceanien.",
        tags: ["fisk", "jordbruksmark", "mineraler", "natur"],
        reason: "Resurserna används både för försörjning i vardagen och för export och turism."
      }
    }
  },
  {
    id: "antarktis",
    name: "Antarktis",
    intro: "Antarktis ligger runt sydpolen och är den kallaste världsdelen. Nästan hela världsdelen är täckt av is.",
    memoryHook: "Tänk Antarktis som is, kyla, starka vindar, forskning och ingen permanent befolkning.",
    cLevel: "För C räcker det att kunna förklara hur det extrema klimatet påverkar växtlighet, människor och forskning.",
    dimensions: {
      location: {
        summary: "Ligger runt sydpolen och är omgiven av hav.",
        tags: ["sydpolen", "omgiven av hav"],
        reason: "Det extrema läget längst i söder gör att solen värmer mycket lite under stora delar av året."
      },
      climate: {
        summary: "Mycket kallt klimat med is, snö, kraftiga vindar och snöstormar. Vintern kan bli kallare än minus 80 grader.",
        tags: ["mycket kallt", "is", "snö", "stormar"],
        reason: "Den låga solvärmen och all is gör att Antarktis blir jordens kallaste världsdel."
      },
      vegetation: {
        summary: "Mycket lite växtlighet på land eftersom klimatet är så kallt och isigt.",
        tags: ["mycket lite växtlighet"],
        reason: "Den extrema kylan och isen gör det svårt för växter att växa."
      },
      population: {
        summary: "Ingen permanent befolkning. Bara forskare vistas där under vissa perioder.",
        tags: ["ingen permanent befolkning", "forskare"],
        reason: "Det hårda klimatet gör vanligt vardagsliv mycket svårt."
      },
      livelihoods: {
        summary: "Forskning är det viktigaste som människor gör i Antarktis.",
        tags: ["forskning"],
        reason: "Antarktis används främst för att förstå klimat, is och natur i extrem kyla."
      },
      resources: {
        summary: "Stora mängder sötvatten finns bundet i isen. Antarktis är också viktig för klimatforskning.",
        tags: ["sötvatten i is", "klimatforskning"],
        reason: "Isen och forskningen gör Antarktis viktig för att förstå jordens klimat och vatten."
      }
    }
  }
];

const guideAreas = [
  { key: "location", label: "Läge", prompt: "Var ligger den på jordklotet?" },
  { key: "climate", label: "Klimat", prompt: "Vilka klimatzoner eller klimat finns?" },
  { key: "vegetation", label: "Vegetation", prompt: "Vad växer där och hur hänger det ihop med klimatet?" },
  { key: "population", label: "Befolkning", prompt: "Var bor människor, och varför bor de just där?" },
  { key: "livelihoods", label: "Försörjning", prompt: "Vad arbetar människor med?" },
  { key: "resources", label: "Naturresurser", prompt: "Vilka rikedomar eller resurser finns?" }
];

const stepSets = {
  continent: ["Välj", "Lyssna", "Läs nyckelord", "Skriv", "Återkoppling"],
  compare: ["Välj", "Lyssna", "Jämför", "Skriv", "Återkoppling"],
  practiceExam: ["Välj", "Övningsprov", "Bedömning"],
  exam: ["Välj", "Slutprov", "Bedömning"]
};

const achievementDefinitions = [
  {
    id: "listen-first",
    title: "Första checkpointen",
    description: "Du lyssnade klart din första del och stämde av att den satt.",
    when: (stats) => stats.listenedSegments >= 1
  },
  {
    id: "listen-five",
    title: "Fem delar inne",
    description: "Du har lyssnat klart fem delområden. Fin rytm.",
    when: (stats) => stats.listenedSegments >= 5
  },
  {
    id: "listen-twelve",
    title: "Lyssningsflow",
    description: "Du har tagit dig igenom tolv lyssningsdelar. Det märks.",
    when: (stats) => stats.listenedSegments >= 12
  },
  {
    id: "continent-finished",
    title: "Världsdel klar",
    description: "Du tog en hel världsdel från lyssna till återkoppling.",
    when: (stats) => stats.continentRounds >= 1
  },
  {
    id: "compare-finished",
    title: "Jämförelsen sitter",
    description: "Du har tagit dig igenom en hel jämförelse och fått feedback.",
    when: (stats) => stats.compareRounds >= 1
  },
  {
    id: "facts-on-point",
    title: "Fakta på plats",
    description: "Du fick med tydliga fakta i ett eget svar.",
    when: (stats) => stats.goodFacts >= 1
  },
  {
    id: "why-explainer",
    title: "Varför-byggare",
    description: "Du förklarade varför i ett svar. Det lyfter direkt.",
    when: (stats) => stats.goodWhy >= 1
  },
  {
    id: "example-drop",
    title: "Exempel på plats",
    description: "Du fick med exempel i ett svar. Nice.",
    when: (stats) => stats.goodExamples >= 1
  },
  {
    id: "c-level",
    title: "C på gång",
    description: "Du nådde ett svar på C-nivå eller högre.",
    when: (stats) => stats.highestLevelRank >= 2
  },
  {
    id: "a-level",
    title: "A-känsla",
    description: "Du nådde ett svar på A-nivå. Starkt jobbat.",
    when: (stats) => stats.highestLevelRank >= 3
  }
];

const appState = {
  mode: "continent",
  selectedA: "europa",
  selectedB: "afrika",
  currentStep: 0,
  manifest: null,
  manifestError: "",
  currentSegmentIndex: 0,
  currentTrackKey: "",
  listenAwaitingQuestion: false,
  listenQuestionSegmentIndex: -1,
  listenQuestionAnswer: "",
  listenQuestionFeedback: "",
  listenQuestionAccepted: false,
  listenQuestionLoading: false,
  isPlaying: false,
  loadingAudio: false,
  audio: new Audio(),
  drafts: loadJson("geografi-drafts", {}),
  gradingLoading: false,
  gradingResult: null,
  coachingLoading: false,
  coachingResult: null,
  modelAnswerOpen: false,
  modelAnswerLevel: "c",
  achievements: null,
  examStarted: false,
  examExpired: false,
  examPaused: false,
  examRemainingMs: 30 * 60 * 1000,
  examEndsAt: 0
};

const dom = {};
let examTimerId = 0;
let popupReplayAudio = null;
const resumeStorageKey = "geografi-resume";
const achievementStorageKey = "geografi-achievements";

appState.audio.preload = "none";

function loadJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function saveJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function defaultAchievements() {
  return {
    listenedKeys: [],
    listenedSegments: 0,
    continentRounds: 0,
    compareRounds: 0,
    goodFacts: 0,
    goodWhy: 0,
    goodExamples: 0,
    highestLevelRank: 0,
    unlocked: [],
    latestUnlocked: null
  };
}

function loadAchievements() {
  const loaded = loadJson(achievementStorageKey, {});
  return { ...defaultAchievements(), ...(loaded || {}) };
}

function saveAchievements() {
  saveJson(achievementStorageKey, appState.achievements);
}

function levelRank(levelEstimate = "") {
  const text = String(levelEstimate).toLowerCase();
  if (/\ba\b|a-nivå|a nivå/.test(text)) {
    return 3;
  }
  if (/\bc\b|c-nivå|c nivå/.test(text)) {
    return 2;
  }
  if (/\be\b|e-nivå|e nivå/.test(text)) {
    return 1;
  }
  return 0;
}

function unlockAchievementsIfNeeded() {
  const unlockedNow = [];

  achievementDefinitions.forEach((achievement) => {
    if (!appState.achievements.unlocked.includes(achievement.id) && achievement.when(appState.achievements)) {
      appState.achievements.unlocked.push(achievement.id);
      unlockedNow.push(achievement.id);
    }
  });

  if (unlockedNow.length) {
    appState.achievements.latestUnlocked = unlockedNow[unlockedNow.length - 1];
    saveAchievements();
  }

  return unlockedNow;
}

function markListenedSegment(trackKey, segmentIndex) {
  if (!trackKey || segmentIndex < 0) {
    return;
  }

  const key = `${trackKey}::${segmentIndex}`;
  if (appState.achievements.listenedKeys.includes(key)) {
    return;
  }

  appState.achievements.listenedKeys.push(key);
  appState.achievements.listenedSegments += 1;
  unlockAchievementsIfNeeded();
  saveAchievements();
}

function recordGradedAnswer(result) {
  if (!result) {
    return;
  }

  if (result.checks?.usesFacts) {
    appState.achievements.goodFacts += 1;
  }
  if (result.checks?.explainsWhy) {
    appState.achievements.goodWhy += 1;
  }
  if (result.checks?.givesExamples) {
    appState.achievements.goodExamples += 1;
  }

  appState.achievements.highestLevelRank = Math.max(
    appState.achievements.highestLevelRank,
    levelRank(result.levelEstimate)
  );

  if (appState.mode === "continent") {
    appState.achievements.continentRounds += 1;
  }

  if (appState.mode === "compare") {
    appState.achievements.compareRounds += 1;
  }

  unlockAchievementsIfNeeded();
  saveAchievements();
}

function humanJoin(items = []) {
  if (!items.length) {
    return "";
  }
  if (items.length === 1) {
    return items[0];
  }
  if (items.length === 2) {
    return `${items[0]} och ${items[1]}`;
  }
  return `${items.slice(0, -1).join(", ")} och ${items[items.length - 1]}`;
}

function loadResumeSnapshot() {
  return loadJson(resumeStorageKey, null);
}

function saveResumeSnapshot(snapshot) {
  saveJson(resumeStorageKey, snapshot);
}

function continentById(continentId) {
  return continents.find((continent) => continent.id === continentId) || null;
}

function activeSelectionReady() {
  return appState.mode === "continent"
    ? Boolean(continentById(appState.selectedA))
    : Boolean(continentById(appState.selectedA) && continentById(appState.selectedB) && appState.selectedA !== appState.selectedB);
}

function areaToneClass(areaKey) {
  return `tone-${areaKey}`;
}

function currentLessonTitle() {
  const first = continentById(appState.selectedA);
  const second = continentById(appState.selectedB);

  if (appState.mode === "continent") {
    return first ? first.name : "En världsdel";
  }

  if (appState.mode === "practiceExam") {
    return first && second ? `Övningsprov: ${first.name} och ${second.name}` : "Övningsprov";
  }

  if (appState.mode === "exam") {
    return first && second ? `Slutprov: ${first.name} och ${second.name}` : "Slutprov";
  }

  if (first && second) {
    return `${first.name} och ${second.name}`;
  }

  return "Två världsdelar";
}

function currentLessonSubtitle() {
  if (appState.currentStep === 0) {
    if (appState.mode === "continent") {
      return "Välj en världsdel först. Sen tar du resten steg för steg, lugnt och tydligt.";
    }
    if (appState.mode === "practiceExam") {
      return "Välj två världsdelar först. Sen kör du ett övningsprov på 30 minuter där du kan få coachning längs vägen.";
    }
    if (appState.mode === "exam") {
      return "Välj två världsdelar först. Sen kör du ett slutprov på 30 minuter med riktig bedömning mot kriterierna.";
    }
    return "Välj två världsdelar först. Sen jämför du dem i små bitar så att det blir lättare att hänga med.";
  }

  if (appState.mode === "continent") {
    return "Lyssna först, kolla nyckelorden efteråt och skriv sedan med tydlig hjälp. Low pressure.";
  }

  if (appState.mode === "practiceExam") {
    return "Det här är övningsprov: 30 minuter, egen formulering och coachning på vägen när du behöver den.";
  }

  if (appState.mode === "exam") {
    return "Det här är provläge: 30 minuter, egen formulering och återkoppling utifrån kriterierna.";
  }

  return "Jämförelsen är upplagd för att hjälpa dig få med vad, varför och exempel utan att det blir rörigt.";
}

function snapshotCanResume(snapshot) {
  return Boolean(
    snapshot &&
    (snapshot.mode === "continent" || snapshot.mode === "compare") &&
    snapshot.currentStep > 0 &&
    snapshot.selectedA
  );
}

function currentResumeSnapshot() {
  const current = loadResumeSnapshot();
  return snapshotCanResume(current) ? current : null;
}

function resumeSummary(snapshot) {
  if (!snapshotCanResume(snapshot)) {
    return null;
  }

  const first = continentById(snapshot.selectedA);
  const second = continentById(snapshot.selectedB);
  const area = guideAreas[Math.min(snapshot.currentSegmentIndex || 0, guideAreas.length - 1)];

  if (snapshot.mode === "continent") {
    if (snapshot.currentStep === 1 && first && area) {
      return `Senast jobbade du med ${area.label.toLowerCase()} i ${first.name}.`;
    }
    if (snapshot.currentStep === 2 && first) {
      return `Senast kollade du nyckelorden för ${first.name}.`;
    }
    if (snapshot.currentStep === 3 && first) {
      return `Senast skrev du om ${first.name}.`;
    }
    if (snapshot.currentStep >= 4 && first) {
      return `Senast tittade du på återkopplingen för ${first.name}.`;
    }
  }

  if (snapshot.mode === "compare" && first && second) {
    if (snapshot.currentStep === 1 && area) {
      return `Senast jobbade du med ${area.label.toLowerCase()} i jämförelsen mellan ${first.name} och ${second.name}.`;
    }
    if (snapshot.currentStep === 2) {
      return `Senast kollade du jämförelsen mellan ${first.name} och ${second.name}.`;
    }
    if (snapshot.currentStep === 3) {
      return `Senast skrev du jämförelsen mellan ${first.name} och ${second.name}.`;
    }
    if (snapshot.currentStep >= 4) {
      return `Senast tittade du på återkopplingen för ${first.name} och ${second.name}.`;
    }
  }

  return null;
}

function resumeActionLabel(snapshot) {
  if (!snapshotCanResume(snapshot)) {
    return "Fortsätt";
  }

  const area = guideAreas[Math.min(snapshot.currentSegmentIndex || 0, guideAreas.length - 1)];

  if (snapshot.currentStep === 1 && area) {
    return `Fortsätt med ${area.label.toLowerCase()}`;
  }

  if (snapshot.currentStep === 2) {
    return "Till nyckelorden";
  }

  if (snapshot.currentStep === 3) {
    return "Fortsätt skriva";
  }

  return "Öppna återkopplingen";
}

function currentTrackKey() {
  if (!activeSelectionReady()) {
    return "";
  }

  if (appState.mode === "continent") {
    return `track-${appState.selectedA}`;
  }

  const direct = `track-compare--${appState.selectedA}--${appState.selectedB}`;
  const reversed = `track-compare--${appState.selectedB}--${appState.selectedA}`;
  return appState.manifest?.tracks?.[direct] ? direct : reversed;
}

function currentTrack() {
  const key = currentTrackKey();
  if (!key) {
    return null;
  }
  return appState.manifest?.tracks?.[key] || null;
}

function draftKey() {
  if (appState.mode === "continent") {
    return `continent::${appState.selectedA}`;
  }
  if (appState.mode === "exam") {
    return `exam::${[appState.selectedA, appState.selectedB].join("--")}`;
  }
  if (appState.mode === "practiceExam") {
    return `practice-exam::${[appState.selectedA, appState.selectedB].join("--")}`;
  }
  return `compare::${[appState.selectedA, appState.selectedB].join("--")}`;
}

function buildContinentStarter(continent) {
  if (!continent) {
    return "";
  }

  return [
    `Läge: ${continent.name} ligger ...`,
    "",
    `Klimat: Klimatet i ${continent.name} är ...`,
    "",
    `Vegetation: Där finns ...`,
    "",
    `Befolkning: Många människor bor ...`,
    "",
    `Försörjning: Människor arbetar ofta med ...`,
    "",
    `Naturresurser: Viktiga resurser är ...`
  ].join("\n");
}

function buildComparisonStarter(first, second) {
  if (!first || !second) {
    return "";
  }

  return [
    `Vad: ${first.name} och ${second.name} är lika eller olika genom att ...`,
    "",
    `Varför: Det beror på att ${first.name} ... medan ${second.name} ...`,
    "",
    `Exempel från ${first.name}: ...`,
    "",
    `Exempel från ${second.name}: ...`,
    "",
    `Avslutning: Därför påverkar detta hur människor bor och arbetar i de två världsdelarna.`
  ].join("\n");
}

function buildExamStarter(first, second) {
  if (!first || !second) {
    return "";
  }

  return [
    `Vad: ${first.name} och ${second.name} är lika eller olika genom att ...`,
    "",
    `Varför: Det beror på att ...`,
    "",
    `Exempel från ${first.name}: ...`,
    "",
    `Exempel från ${second.name}: ...`,
    "",
    `Slutsats: Därför påverkar det här hur människor bor och arbetar ...`
  ].join("\n");
}

function currentStarterText() {
  const first = continentById(appState.selectedA);
  const second = continentById(appState.selectedB);
  if (appState.mode === "continent") {
    return buildContinentStarter(first);
  }
  if (appState.mode === "exam") {
    return buildExamStarter(first, second);
  }
  if (appState.mode === "practiceExam") {
    return buildExamStarter(first, second);
  }
  return buildComparisonStarter(first, second);
}

function currentDraft() {
  const key = draftKey();
  const starter = currentStarterText();
  if (!key) {
    return starter;
  }
  if (!appState.drafts[key]) {
    appState.drafts[key] = starter;
    saveJson("geografi-drafts", appState.drafts);
  }
  return appState.drafts[key];
}

function setDraft(value) {
  const key = draftKey();
  if (!key) {
    return;
  }
  appState.drafts[key] = value;
  saveJson("geografi-drafts", appState.drafts);
}

function buildCompareRows() {
  const first = continentById(appState.selectedA);
  const second = continentById(appState.selectedB);
  if (!first || !second) {
    return [];
  }

  return guideAreas.map((area) => ({
    key: area.key,
    label: area.label,
    prompt: area.prompt,
    firstName: first.name,
    secondName: second.name,
    firstSummary: first.dimensions[area.key].summary,
    secondSummary: second.dimensions[area.key].summary,
    firstTags: first.dimensions[area.key].tags,
    secondTags: second.dimensions[area.key].tags,
    firstReason: first.dimensions[area.key].reason,
    secondReason: second.dimensions[area.key].reason
  }));
}

function supportPoints() {
  if (appState.mode === "continent") {
    return [
      "Skriv något kort om varje område: läge, klimat, vegetation, befolkning, försörjning och naturresurser.",
      "Det räcker långt att använda ett eller två nyckelord i varje del.",
      "Försök få med en mening om varför naturen eller klimatet påverkar människor."
    ];
  }

  if (appState.mode === "exam" || appState.mode === "practiceExam") {
    return [
      "Jämför båda världsdelarna tydligt.",
      "Förklara varför det är lika eller olika.",
      "Ge exempel från båda världsdelarna.",
      "Knyt gärna ihop natur, klimat, befolkning, försörjning och naturresurser."
    ];
  }

  return [
    "Börja med vad som är lika eller olika.",
    "Fortsätt med varför det blir så.",
    "Avsluta med tydliga exempel från båda världsdelarna. Det är där svaret börjar kännas riktigt starkt."
  ];
}

function ensureDifferentSecond(firstId) {
  return continents.find((continent) => continent.id !== firstId)?.id || "";
}

function recommendedNextMove() {
  if (appState.mode === "continent") {
    const first = continentById(appState.selectedA);
    return {
      eyebrow: "Nästa moment",
      title: "Jämför två världsdelar",
      summary: first
        ? `Bra jobbat. Nu har du grunden i ${first.name}. Nästa steg är att jämföra ${first.name} med en annan världsdel och träna på vad, varför och exempel.`
        : "Bra jobbat. Nästa steg är att jämföra två världsdelar och träna på vad, varför och exempel.",
      button: "Till jämförelsen"
    };
  }

  if (appState.mode === "compare") {
    return {
      eyebrow: "Nästa moment",
      title: "Övningsprov",
      summary: "Nu har du jämfört världsdelarna. Nästa steg är att skriva ett helt svar i övningsprovet med coachning på vägen.",
      button: "Till övningsprov"
    };
  }

  return null;
}

function currentFocusGuide() {
  if (appState.currentStep === 0) {
    return {
      now: "Välj det som ska tränas",
      next: appState.mode === "continent" ? "Lyssna" : appState.mode === "compare" ? "Lyssna på jämförelsen" : "Starta provet",
      after: "Ta en liten bit i taget"
    };
  }

  if (appState.mode === "exam") {
    return {
      now: "Skriv ditt provsvar",
      next: "Lämna in för bedömning",
      after: "Se vad som redan sitter"
    };
  }

  if (appState.mode === "practiceExam") {
    return {
      now: "Skriv ditt övningsprov",
      next: "Coacha eller lämna in",
      after: "Få tydlig bedömning"
    };
  }

  if (appState.currentStep === 1) {
    return {
      now: "Lyssna på nästa del",
      next: "Svara kort i popupen",
      after: "Fortsätt till nästa område"
    };
  }

  if (appState.currentStep === 2) {
    return {
      now: "Kolla nyckelorden",
      next: "Plocka ut det viktigaste",
      after: "Gå vidare till skrivdelen"
    };
  }

  if (appState.currentStep === 3) {
    return {
      now: "Skriv i små steg",
      next: "Få med vad, varför och exempel",
      after: "Skicka in och få feedback"
    };
  }

  return {
    now: "Ta in återkopplingen",
    next: "Se nästa moment",
    after: "Fortsätt medan det sitter"
  };
}

function checkpointSuccessText() {
  const area = listenArea(appState.listenQuestionSegmentIndex);
  const track = currentTrack();
  const nextSegment = track?.segments?.[appState.listenQuestionSegmentIndex + 1];
  const currentLabel = area?.label?.toLowerCase() || "den här delen";

  if (nextSegment?.label) {
    return `Bra. Nu sitter ${currentLabel}. Nästa är ${nextSegment.label.toLowerCase()}.`;
  }

  if (appState.mode === "continent") {
    const first = continentById(appState.selectedA);
    return `Bra. Nu sitter ${currentLabel}. ${first ? `${first.name} är klar för nästa steg.` : "Den här världsdelen är klar för nästa steg."}`;
  }

  return `Bra. Nu sitter ${currentLabel}. Den här jämförelsen är klar för nästa steg.`;
}

function microFeedbackLists(result) {
  const gotNow = [];
  const needsNow = [];

  if (result.checks?.usesFacts) {
    gotNow.push("Du fick med fakta.");
  } else {
    needsNow.push("Lägg till tydliga fakta.");
  }

  if (result.checks?.explainsWhy) {
    gotNow.push("Du förklarade varför.");
  } else {
    needsNow.push("Skriv varför det blir så.");
  }

  if (result.checks?.givesExamples) {
    gotNow.push("Du gav exempel.");
  } else {
    needsNow.push("Lägg till minst ett tydligt exempel.");
  }

  if (result.checks?.onTask) {
    gotNow.push("Du höll dig till uppgiften.");
  } else {
    needsNow.push("Håll dig närmare själva uppgiften.");
  }

  if (!gotNow.length) {
    gotNow.push("Du är igång och har ett svar att jobba vidare med.");
  }

  if (!needsNow.length) {
    needsNow.push("Inget akut saknas just nu. Vässa svaret med ett ännu tydligare exempel.");
  }

  return { gotNow, needsNow };
}

function achievementById(id) {
  return achievementDefinitions.find((achievement) => achievement.id === id) || null;
}

function nextListeningMilestone() {
  const milestones = [1, 5, 12];
  return milestones.find((milestone) => appState.achievements.listenedSegments < milestone) || null;
}

function totalXp() {
  const stats = appState.achievements;
  return (
    stats.listenedSegments * 12 +
    stats.continentRounds * 60 +
    stats.compareRounds * 90 +
    stats.goodFacts * 18 +
    stats.goodWhy * 24 +
    stats.goodExamples * 24 +
    (stats.highestLevelRank >= 2 ? 80 : 0) +
    (stats.highestLevelRank >= 3 ? 120 : 0)
  );
}

function levelInfoFromXp(xp) {
  let level = 1;
  let spent = 0;
  let requirement = 120;

  while (xp >= spent + requirement) {
    spent += requirement;
    level += 1;
    requirement += 60;
  }

  return {
    level,
    currentXp: xp - spent,
    nextXp: requirement,
    percent: Math.max(4, Math.min(100, Math.round(((xp - spent) / requirement) * 100)))
  };
}

function renderAchievementsPanel() {
  const unlocked = appState.achievements.unlocked.map(achievementById).filter(Boolean);
  const latest = achievementById(appState.achievements.latestUnlocked);
  const xp = totalXp();
  const level = levelInfoFromXp(xp);
  const nextMilestone = nextListeningMilestone();
  const remainingToNext = nextMilestone ? nextMilestone - appState.achievements.listenedSegments : 0;

  dom.achievementContent.innerHTML = `
    <div class="beta-xp-row">
      <div class="beta-xp-head">
        <p class="beta-label">XP</p>
        <h3>Level ${level.level}</h3>
      </div>
      <div class="beta-xp-progress-block">
        <div class="beta-xp-track">
          <span class="beta-xp-fill" style="width:${level.percent}%"></span>
        </div>
        <div class="beta-xp-meta">
          <span>${level.currentXp}/${level.nextXp} XP till nästa level</span>
          <span>${unlocked.length} unlocks</span>
        </div>
      </div>
      <div class="beta-xp-badge">
        <strong>${xp} XP</strong>
      </div>
    </div>
    <div class="beta-xp-foot">
      <span class="beta-xp-latest">${
        latest ? `Senast: ${latest.title}` : "Första boost: lyssna klart första delen"
      }</span>
      <span class="beta-xp-next">${
        nextMilestone ? `${remainingToNext} delar till nästa boost` : "Alla lyssningsboostar klara"
      }</span>
    </div>
  `;
}

function renderFocusStrip() {
  if (appState.currentStep === 0) {
    return "";
  }

  const guide = currentFocusGuide();
  return `
    <section class="beta-focus-strip">
      <div class="beta-focus-item is-now">
        <p class="beta-label">Nu</p>
        <strong>${guide.now}</strong>
      </div>
      <div class="beta-focus-item">
        <p class="beta-label">Sen</p>
        <strong>${guide.next}</strong>
      </div>
      <div class="beta-focus-item">
        <p class="beta-label">Efter det</p>
        <strong>${guide.after}</strong>
      </div>
    </section>
  `;
}

function shouldShowModelAnswer() {
  return appState.mode === "compare" && activeSelectionReady();
}

function openModelAnswer(level = "c") {
  if (!shouldShowModelAnswer()) {
    return;
  }
  appState.modelAnswerLevel = level;
  appState.modelAnswerOpen = true;
  render();
}

function closeModelAnswer() {
  appState.modelAnswerOpen = false;
  render();
}

function moveToRecommendedNext() {
  stopAudio();
  resetListenCheckpointState();
  appState.modelAnswerOpen = false;
  appState.currentSegmentIndex = 0;
  appState.currentTrackKey = "";
  appState.gradingResult = null;
  appState.coachingResult = null;
  resetExamState();

  if (appState.mode === "continent") {
    appState.mode = "compare";
    if (!continentById(appState.selectedB) || appState.selectedA === appState.selectedB) {
      appState.selectedB = ensureDifferentSecond(appState.selectedA);
    }
    appState.currentStep = 0;
    render();
    return;
  }

  if (appState.mode === "compare") {
    appState.mode = "practiceExam";
    if (!continentById(appState.selectedB) || appState.selectedA === appState.selectedB) {
      appState.selectedB = ensureDifferentSecond(appState.selectedA);
    }
    appState.currentStep = 0;
    render();
  }
}

function startCurrentSelection() {
  if (!activeSelectionReady()) {
    return;
  }

  const nextStep = 1;
  const shouldAutoplayListen = appState.mode !== "exam" && appState.mode !== "practiceExam";

  appState.currentStep = nextStep;

  if (appState.mode === "exam" || appState.mode === "practiceExam") {
    resetExamState();
    appState.coachingResult = null;
    startExamTimer();
  }

  if (shouldAutoplayListen) {
    stopAudio();
    appState.currentSegmentIndex = 0;
    appState.currentTrackKey = "";
    resetListenCheckpointState();
  }

  render();

  if (shouldAutoplayListen) {
    playCurrentTrack();
  }
}

function lineForLabel(text, label) {
  return text
    .split("\n")
    .find((line) => line.trim().startsWith(`${label}:`))
    ?.trim() || "";
}

function sectionEdited(label) {
  const starterLine = lineForLabel(currentStarterText(), label);
  const draftLine = lineForLabel(currentDraft(), label);
  return Boolean(draftLine) && draftLine !== starterLine;
}

function continentWritingSteps() {
  return [
    {
      tone: "location",
      title: "Börja",
      hint: "Fyll på läge och klimat först.",
      done: sectionEdited("Läge") || sectionEdited("Klimat")
    },
    {
      tone: "vegetation",
      title: "Fortsätt",
      hint: "Ta vegetation och befolkning sen.",
      done: sectionEdited("Vegetation") || sectionEdited("Befolkning")
    },
    {
      tone: "livelihoods",
      title: "Avsluta",
      hint: "Runda av med försörjning och naturresurser.",
      done: sectionEdited("Försörjning") || sectionEdited("Naturresurser")
    }
  ];
}

function comparisonWritingSteps() {
  const first = continentById(appState.selectedA);
  const second = continentById(appState.selectedB);
  return [
    {
      tone: "location",
      title: "Vad",
      hint: "Skriv vad som är lika eller olika.",
      done: sectionEdited("Vad")
    },
    {
      tone: "climate",
      title: "Varför",
      hint: "Förklara varför det blir så.",
      done: sectionEdited("Varför")
    },
    {
      tone: "resources",
      title: "Exempel",
      hint: "Ge ett exempel från båda världsdelarna.",
      done:
        (first ? sectionEdited(`Exempel från ${first.name}`) : false) ||
        (second ? sectionEdited(`Exempel från ${second.name}`) : false)
    }
  ];
}

function writingStepsForCurrentMode() {
  return appState.mode === "continent" ? continentWritingSteps() : comparisonWritingSteps();
}

function renderWritingMiniSteps() {
  return `
    <div class="beta-writing-steps">
      ${writingStepsForCurrentMode()
        .map(
          (step, index) => `
            <article class="beta-writing-step ${areaToneClass(step.tone || "location")} ${step.done ? "is-done" : ""}">
              <span class="beta-writing-step-number">${index + 1}</span>
              <div>
                <strong>${step.title}</strong>
                <p class="beta-small">${step.hint}</p>
              </div>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function modelAnswerForLevel(level) {
  const first = continentById(appState.selectedA);
  const second = continentById(appState.selectedB);
  const rows = buildCompareRows();

  if (!first || !second || !rows.length) {
    return null;
  }

  const byKey = (key) => rows.find((row) => row.key === key);
  const location = byKey("location");
  const climate = byKey("climate");
  const vegetation = byKey("vegetation");
  const population = byKey("population");
  const livelihoods = byKey("livelihoods");
  const resources = byKey("resources");

  const copy = {
    e: {
      title: "E-nivå",
      kicker: "Grundläggande jämförelse",
      hint: "Här räcker det att få med tydliga fakta och några enkla skillnader.",
      text: [
        `${first.name} och ${second.name} är två olika världsdelar. När det gäller läge ser man att ${first.name}: ${location.firstSummary} ${second.name}: ${location.secondSummary}`,
        `Klimatet skiljer sig också. ${first.name}: ${climate.firstSummary} ${second.name}: ${climate.secondSummary} Det påverkar växtligheten. ${first.name}: ${vegetation.firstSummary} ${second.name}: ${vegetation.secondSummary}`,
        `Befolkning, naturresurser och försörjning skiljer sig också. ${first.name}: ${population.firstSummary} och ${livelihoods.firstSummary} ${resources.firstSummary} ${second.name}: ${population.secondSummary} och ${livelihoods.secondSummary} ${resources.secondSummary}`
      ]
    },
    c: {
      title: "C-nivå",
      kicker: "Jämför och förklara",
      hint: "Här behöver svaret både jämföra och förklara varför det ser ut så.",
      text: [
        `${first.name} och ${second.name} skiljer sig åt i läge, klimat, vegetation, befolkning, naturresurser och försörjning. När det gäller läge ser man att ${first.name}: ${location.firstSummary} ${second.name}: ${location.secondSummary} Det påverkar klimatet i de två världsdelarna.`,
        `${first.name}: ${climate.firstSummary} ${second.name}: ${climate.secondSummary} Skillnaderna beror på att ${first.name.toLowerCase()}: ${climate.firstReason} ${second.name}: ${climate.secondReason} Därför ser växtligheten också olika ut. ${first.name}: ${vegetation.firstSummary} ${second.name}: ${vegetation.secondSummary}`,
        `Befolkningen påverkas också av natur och klimat. ${first.name}: ${population.firstSummary} ${second.name}: ${population.secondSummary} Naturresurserna och försörjningen ser också olika ut. ${first.name}: ${resources.firstSummary} och ${livelihoods.firstSummary} ${second.name}: ${resources.secondSummary} och ${livelihoods.secondSummary} Därför påverkar naturen hur människor bor och arbetar i de två världsdelarna.`
      ]
    },
    a: {
      title: "A-nivå",
      kicker: "Jämför, förklara och dra slutsats",
      hint: "Här märks det att svaret binder ihop natur, människor och orsaker på ett tydligt sätt.",
      text: [
        `${first.name} och ${second.name} är både lika och olika när man jämför läge, klimat, vegetation, befolkning, naturresurser och försörjning. När det gäller läge ser man att ${first.name}: ${location.firstSummary} ${second.name}: ${location.secondSummary} Det gör att naturförhållandena skiljer sig tydligt mellan världsdelarna.`,
        `Klimatet är en viktig skillnad. ${first.name}: ${climate.firstSummary} ${second.name}: ${climate.secondSummary} Det här hänger ihop med läget eftersom ${first.name.toLowerCase()}: ${climate.firstReason} ${second.name}: ${climate.secondReason} Därför blir också växtligheten olika. ${first.name}: ${vegetation.firstSummary} ${second.name}: ${vegetation.secondSummary}`,
        `Skillnaderna märks också i hur människor lever. ${first.name}: ${population.firstSummary} ${second.name}: ${population.secondSummary} Näringar och försörjning påverkas av vilka resurser som finns. ${first.name}: ${resources.firstSummary} Därför är ${livelihoods.firstSummary.toLowerCase()} ${second.name}: ${resources.secondSummary} Därför är ${livelihoods.secondSummary.toLowerCase()}`,
        `Samtidigt finns en likhet: i båda världsdelarna påverkar naturen hur människor bor och arbetar. Sammanfattningsvis kan man säga att läge och klimat påverkar vegetation, befolkning, naturresurser och försörjning, och därför utvecklas ${first.name} och ${second.name} på olika sätt.`
      ]
    }
  };

  return copy[level] || copy.c;
}

function renderModelAnswerPopup() {
  const content = modelAnswerForLevel(appState.modelAnswerLevel);
  if (!content) {
    dom.overlayShell.innerHTML = "";
    return;
  }

  dom.overlayShell.innerHTML = `
    <div class="beta-overlay-backdrop">
      <section class="beta-popup beta-model-popup" role="dialog" aria-modal="true" aria-labelledby="beta-model-answer-title">
        <p class="beta-label">Modellsvar</p>
        <h3 id="beta-model-answer-title">${content.title}: ${currentLessonTitle()}</h3>
        <p class="beta-small">${content.hint}</p>
        <div class="beta-model-levels">
          <button class="beta-button ${appState.modelAnswerLevel === "e" ? "beta-button-primary" : "beta-button-secondary"}" id="beta-model-level-e">E-nivå</button>
          <button class="beta-button ${appState.modelAnswerLevel === "c" ? "beta-button-primary" : "beta-button-secondary"}" id="beta-model-level-c">C-nivå</button>
          <button class="beta-button ${appState.modelAnswerLevel === "a" ? "beta-button-primary" : "beta-button-secondary"}" id="beta-model-level-a">A-nivå</button>
        </div>
        <div class="beta-support-card beta-model-summary-card">
          <p class="beta-label">${content.kicker}</p>
          <div class="beta-model-answer-copy">
            ${content.text.map((paragraph) => `<p>${paragraph}</p>`).join("")}
          </div>
        </div>
        <div class="beta-popup-footer">
          <p class="beta-status is-ready">Använd det här som förebild: först vad, sedan varför, och till sist tydliga exempel.</p>
          <div class="beta-popup-actions">
            <button class="beta-button beta-button-primary" id="beta-close-model-answer">
              Stäng
            </button>
          </div>
        </div>
      </section>
    </div>
  `;
}

function promptPayload() {
  const first = continentById(appState.selectedA);
  const second = continentById(appState.selectedB);

  if (appState.mode === "continent") {
    return {
      questionTitle: `Textfråga: Berätta om ${first.name}`,
      questionDescription: `Beskriv ${first.name} utifrån läge, klimat, vegetation, befolkning, försörjning och naturresurser.`,
      supportPoints: supportPoints(),
      referenceFacts: guideAreas.map(
        (area) =>
          `${area.label}. ${first.dimensions[area.key].summary} Varför: ${first.dimensions[area.key].reason} Nyckelord: ${humanJoin(first.dimensions[area.key].tags)}.`
      )
    };
  }

  if (appState.mode === "exam" || appState.mode === "practiceExam") {
    const rows = buildCompareRows();
    return {
      questionTitle: `${appState.mode === "exam" ? "Slutprov" : "Övningsprov"}: Jämför ${first.name} och ${second.name}`,
      questionDescription: `Du har 30 minuter. Jämför ${first.name} och ${second.name} utifrån läge, klimat, vegetation, befolkning, försörjning och naturresurser. För att nå högre nivå behöver du inte bara nämna fakta, utan också förklara varför det ser ut så och ge tydliga exempel från båda världsdelarna.`,
      supportPoints: supportPoints(),
      referenceFacts: rows.map(
        (row) =>
          `${row.label}. ${row.firstName}: ${row.firstSummary} Varför: ${row.firstReason}. ${row.secondName}: ${row.secondSummary} Varför: ${row.secondReason}.`
      )
    };
  }

  const rows = buildCompareRows();
  return {
    questionTitle: `Textfråga: Jämför ${first.name} och ${second.name}`,
    questionDescription: `Jämför ${first.name} och ${second.name} utifrån läge, klimat, vegetation, befolkning, försörjning och naturresurser.`,
    supportPoints: supportPoints(),
    referenceFacts: rows.map(
      (row) =>
        `${row.label}. ${row.firstName}: ${row.firstSummary} Varför: ${row.firstReason}. ${row.secondName}: ${row.secondSummary} Varför: ${row.secondReason}.`
    )
  };
}

function resetListenCheckpointState() {
  appState.listenAwaitingQuestion = false;
  appState.listenQuestionSegmentIndex = -1;
  appState.listenQuestionAnswer = "";
  appState.listenQuestionFeedback = "";
  appState.listenQuestionAccepted = false;
  appState.listenQuestionLoading = false;
}

function stopAudio() {
  appState.audio.pause();
  appState.audio.currentTime = 0;
  appState.isPlaying = false;
  appState.loadingAudio = false;

  if (popupReplayAudio) {
    popupReplayAudio.pause();
    popupReplayAudio.currentTime = 0;
    popupReplayAudio = null;
  }
}

function resetExamState() {
  if (examTimerId) {
    window.clearInterval(examTimerId);
    examTimerId = 0;
  }
  appState.examStarted = false;
  appState.examExpired = false;
  appState.examPaused = false;
  appState.examRemainingMs = 30 * 60 * 1000;
  appState.examEndsAt = 0;
}

function formatExamTime(ms) {
  const safeMs = Math.max(0, ms);
  const totalSeconds = Math.ceil(safeMs / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function clearExamTimer() {
  if (examTimerId) {
    window.clearInterval(examTimerId);
    examTimerId = 0;
  }
}

function runExamTimer() {
  clearExamTimer();

  const tick = () => {
    appState.examRemainingMs = Math.max(0, appState.examEndsAt - Date.now());

    if (appState.examRemainingMs <= 0) {
      appState.examRemainingMs = 0;
      appState.examExpired = true;
      appState.examPaused = false;
      clearExamTimer();
      render();
      return;
    }

    syncExamTimerDom();
  };

  tick();
  examTimerId = window.setInterval(tick, 1000);
}

function startExamTimer() {
  resetExamState();
  appState.examStarted = true;
  appState.examPaused = false;
  appState.examEndsAt = Date.now() + appState.examRemainingMs;
  render();
  runExamTimer();
}

function pauseExamTimer() {
  if (!appState.examStarted || appState.examExpired || appState.examPaused) {
    return;
  }

  appState.examRemainingMs = Math.max(0, appState.examEndsAt - Date.now());
  appState.examPaused = true;
  clearExamTimer();
  render();
}

function resumeExamTimer() {
  if (!appState.examStarted || appState.examExpired || !appState.examPaused) {
    return;
  }

  appState.examPaused = false;
  appState.examEndsAt = Date.now() + appState.examRemainingMs;
  render();
  runExamTimer();
}

function toggleExamPause() {
  if (appState.examPaused) {
    resumeExamTimer();
  } else {
    pauseExamTimer();
  }
}

function examPauseButtonLabel() {
  return appState.examPaused ? "Fortsätt tiden" : "Pausa tiden";
}

function examSupportText(activeText, expiredText) {
  if (appState.examExpired) {
    if (appState.mode === "practiceExam") {
      return "Tiden är ute, men du kan fortsätta skriva och använda coachningen tills texten känns klar.";
    }
    return expiredText;
  }

  if (appState.examPaused) {
    return appState.mode === "practiceExam"
      ? "Tiden är pausad just nu. Du kan fortfarande skriva och använda coachningen. När du är redo trycker du på Fortsätt tiden."
      : "Tiden är pausad just nu. När du är redo trycker du på Fortsätt tiden så startar nedräkningen igen.";
  }

  return activeText;
}

function examStatePillText() {
  return appState.examExpired
    ? appState.mode === "practiceExam"
      ? "Tiden är ute, men du kan fortsätta öva"
      : "Tiden är ute"
    : appState.examPaused
      ? "Tiden är pausad"
      : appState.mode === "practiceExam"
        ? "Övningsprovet är igång"
        : "Provet är igång";
}

function examTextareaReadonly() {
  return appState.mode === "exam" && appState.examExpired;
}

function examCanSubmit() {
  return appState.examStarted;
}

function examCanCoach() {
  if (!appState.examStarted) {
    return false;
  }

  if (appState.mode === "practiceExam") {
    return true;
  }

  return !appState.examExpired && !appState.examPaused;
}

function examPauseButton() {
  if (!appState.examStarted || appState.examExpired) {
    return "";
  }

  return `
    <button class="beta-button beta-button-secondary" id="beta-toggle-exam-pause">
      ${examPauseButtonLabel()}
    </button>
  `;
}

function syncExamTimerDom() {
  const timeEl = document.querySelector("#beta-exam-time");
  if (timeEl) {
    timeEl.textContent = formatExamTime(appState.examRemainingMs);
    timeEl.classList.toggle("is-expired", appState.examExpired);
  }

  const stateEl = document.querySelector("#beta-exam-state-pill");
  if (stateEl) {
    stateEl.textContent = examStatePillText();
  }

  const pauseButton = document.querySelector("#beta-toggle-exam-pause");
  if (pauseButton) {
    pauseButton.textContent = examPauseButtonLabel();
  }

  const coachButton = document.querySelector("#beta-coach-answer");
  if (coachButton instanceof HTMLButtonElement) {
    coachButton.disabled = appState.coachingLoading || !examCanCoach();
  }

  const supportText = document.querySelector("#beta-exam-support-text");
  if (supportText) {
    supportText.textContent =
      appState.mode === "practiceExam"
        ? examSupportText(
            "Timern startade direkt när du valde övningsprovet. Skriv som i ett riktigt prov och använd coachningen om du fastnar.",
            "Tiden är slut. Nu kan du inte skriva mer, men du kan fortfarande lämna in och få bedömning."
          )
        : examSupportText(
            "Timern startade direkt när du valde provet. Skriv lugnt och få med vad som är lika eller olika, varför det blir så och exempel från båda världsdelarna.",
            "Tiden är slut. Nu är det bara att lämna in provet för bedömning."
          );
  }

  const textarea = document.querySelector("#beta-writing-answer");
  if (textarea instanceof HTMLTextAreaElement) {
    textarea.readOnly = examTextareaReadonly();
  }
}

async function playCurrentTrack() {
  const track = currentTrack();
  if (!track?.segments?.length) {
    return;
  }

  const segment = track.segments[appState.currentSegmentIndex] || track.segments[0];
  if (!segment) {
    return;
  }

  appState.loadingAudio = true;
  appState.isPlaying = true;
  render();

  try {
    appState.currentTrackKey = currentTrackKey();
    appState.audio.src = segment.file;
    await appState.audio.play();
    appState.loadingAudio = false;
    render();
  } catch (error) {
    console.warn("Beta audio failed", error);
    appState.loadingAudio = false;
    appState.isPlaying = false;
    render();
  }
}

function togglePlay() {
  const track = currentTrack();
  if (!track?.segments?.length) {
    return;
  }

  if (appState.isPlaying) {
    appState.audio.pause();
    appState.isPlaying = false;
    render();
    return;
  }

  if (appState.currentSegmentIndex >= track.segments.length) {
    appState.currentSegmentIndex = 0;
    resetListenCheckpointState();
  }

  if (appState.currentTrackKey !== currentTrackKey()) {
    appState.currentSegmentIndex = 0;
    resetListenCheckpointState();
  }

  playCurrentTrack();
}

function listenArea(segmentIndex) {
  const track = currentTrack();
  const fallbackArea = guideAreas[segmentIndex] || null;
  const areaKey = track?.segmentQuizzes?.[segmentIndex]?.key || fallbackArea?.key;
  return guideAreas.find((area) => area.key === areaKey) || fallbackArea;
}

function listenQuestionSpec(segmentIndex) {
  const area = listenArea(segmentIndex);
  if (!area) {
    return null;
  }

  if (appState.mode === "continent") {
    const continent = continentById(appState.selectedA);
    if (!continent) {
      return null;
    }

    const info = continent.dimensions[area.key];
    return {
      title: `${area.label}: ${continent.name}`,
      prompt: `Vad är viktigast om ${area.label.toLowerCase()} i ${continent.name}? Skriv 1-2 meningar.`,
      placeholder: `${area.label}: I ${continent.name} ...`,
      referenceFacts: [
        `${area.label}. ${info.summary}`,
        `Varför detta spelar roll: ${info.reason}`,
        `Nyckelord: ${humanJoin(info.tags)}`
      ]
    };
  }

  const row = buildCompareRows().find((item) => item.key === area.key);
  if (!row) {
    return null;
  }

  return {
    title: `${area.label}: ${row.firstName} och ${row.secondName}`,
    prompt: `Vad är viktigast om ${area.label.toLowerCase()} när du jämför ${row.firstName} och ${row.secondName}? Skriv 1-2 meningar.`,
    placeholder: `${area.label}: ${row.firstName} ... medan ${row.secondName} ...`,
    referenceFacts: [
      `${row.firstName}: ${row.firstSummary} Varför: ${row.firstReason}`,
      `${row.secondName}: ${row.secondSummary} Varför: ${row.secondReason}`
    ]
  };
}

function listenStepProgress() {
  const track = currentTrack();
  if (!track?.segments?.length) {
    return { completedCount: 0, revealedCount: 0, progressPercent: 0 };
  }

  const completedCount = Math.min(appState.currentSegmentIndex, track.segments.length);
  const revealedCount =
    completedCount +
    (appState.isPlaying || appState.listenAwaitingQuestion ? 1 : 0);
  const progressPercent = Math.min(100, Math.round((completedCount / track.segments.length) * 100));

  return {
    completedCount,
    revealedCount: Math.min(revealedCount, track.segments.length),
    progressPercent
  };
}

function advanceFromCheckpoint() {
  const track = currentTrack();
  const nextIndex = appState.listenQuestionSegmentIndex + 1;
  const completedTrackKey = currentTrackKey();
  const completedSegmentIndex = appState.listenQuestionSegmentIndex;
  if (popupReplayAudio) {
    popupReplayAudio.pause();
    popupReplayAudio.currentTime = 0;
    popupReplayAudio = null;
  }
  markListenedSegment(completedTrackKey, completedSegmentIndex);
  resetListenCheckpointState();

  if (!track?.segments?.length || nextIndex >= track.segments.length) {
    appState.isPlaying = false;
    appState.currentSegmentIndex = track?.segments?.length || 0;
    render();
    return;
  }

  appState.currentSegmentIndex = nextIndex;
  playCurrentTrack();
}

async function replayCheckpointSegment() {
  const track = currentTrack();
  const segment = track?.segments?.[appState.listenQuestionSegmentIndex];

  if (!segment?.file) {
    return;
  }

  if (popupReplayAudio) {
    popupReplayAudio.pause();
    popupReplayAudio.currentTime = 0;
  }

  try {
    popupReplayAudio = new Audio(segment.file);
    popupReplayAudio.preload = "auto";
    await popupReplayAudio.play();
  } catch (error) {
    console.warn("Replay audio failed", error);
  }
}

function listenSummaryCards() {
  const track = currentTrack();
  if (!track?.segments?.length) {
    return "";
  }

  const { completedCount, revealedCount } = listenStepProgress();

  if (appState.mode === "continent") {
    const continent = continentById(appState.selectedA);
    return guideAreas
      .slice(0, revealedCount)
      .map((area, index) => ({ area, index }))
      .reverse()
      .map(({ area, index }) => {
        const info = continent.dimensions[area.key];
        const stateClass =
          index < completedCount
            ? "is-done"
            : index === appState.currentSegmentIndex
              ? "is-active"
              : "";

        return `
          <article class="beta-summary-card ${areaToneClass(area.key)} ${stateClass}">
            <p class="beta-label">${area.label}</p>
            <p class="beta-summary-text">${info.summary}</p>
            <div class="beta-chip-row">
              ${info.tags.slice(0, 3).map((tag) => `<span class="beta-chip">${tag}</span>`).join("")}
            </div>
          </article>
        `;
      })
      .join("");
  }

  return buildCompareRows()
    .slice(0, revealedCount)
    .map((row, index) => ({ row, index }))
    .reverse()
    .map(({ row, index }) => {
      const stateClass =
        index < completedCount
          ? "is-done"
          : index === appState.currentSegmentIndex
            ? "is-active"
            : "";

      return `
        <article class="beta-summary-card ${areaToneClass(row.key)} ${stateClass}">
          <p class="beta-label">${row.label}</p>
          <p class="beta-summary-text"><strong>${row.firstName}:</strong> ${row.firstSummary}</p>
          <p class="beta-summary-text"><strong>${row.secondName}:</strong> ${row.secondSummary}</p>
        </article>
      `;
    })
    .join("");
}

function areaCardsForContinent(continent) {
  return guideAreas
    .map((area) => {
      const info = continent.dimensions[area.key];
      return `
        <article class="beta-card ${areaToneClass(area.key)}">
          <p class="beta-label">${area.label}</p>
          <h3 class="beta-area-title">${area.prompt}</h3>
          <p class="beta-area-summary">${info.summary}</p>
          <div class="beta-chip-row">
            ${info.tags.map((tag) => `<span class="beta-chip">${tag}</span>`).join("")}
          </div>
        </article>
      `;
    })
    .join("");
}

function areaCardsForComparison() {
  return buildCompareRows()
    .map(
      (row) => `
        <article class="beta-card beta-comparison-card ${areaToneClass(row.key)}">
          <div>
            <p class="beta-label">${row.label}</p>
            <h3>${row.prompt}</h3>
          </div>
          <div class="beta-comparison-sides">
            <section class="beta-comparison-side">
              <p class="beta-label">${row.firstName}</p>
              <p>${row.firstSummary}</p>
              <div class="beta-chip-row">
                ${row.firstTags.map((tag) => `<span class="beta-chip">${tag}</span>`).join("")}
              </div>
            </section>
            <section class="beta-comparison-side">
              <p class="beta-label">${row.secondName}</p>
              <p>${row.secondSummary}</p>
              <div class="beta-chip-row">
                ${row.secondTags.map((tag) => `<span class="beta-chip">${tag}</span>`).join("")}
              </div>
            </section>
          </div>
        </article>
      `
    )
    .join("");
}

function renderModeButtons() {
  dom.modeGrid.innerHTML = [
    {
      id: "continent",
      title: "En världsdel i taget",
      description: "Lyssna, kolla nyckelord och skriv med en tydlig mall."
    },
    {
      id: "compare",
      title: "Jämför två världsdelar",
      description: "Träna på vad, varför och exempel inför C, utan att det blir för mycket på en gång."
    },
    {
      id: "practiceExam",
      title: "Övningsprov",
      description: "Kör provläge med timer och coachning på vägen."
    },
    {
      id: "exam",
      title: "Slutprov 30 min",
      description: "Kör ett tidsatt provläge och få bedömning utifrån kriterierna."
    }
  ]
    .map(
      (mode) => `
        <button class="beta-mode-button ${appState.mode === mode.id ? "is-active" : ""}" data-mode="${mode.id}">
          <strong>${mode.title}</strong>
          <span>${mode.description}</span>
        </button>
      `
    )
    .join("");
}

function renderStepper() {
  const steps = stepSets[appState.mode];
  dom.stepper.innerHTML = steps
    .map(
      (step, index) => `
        <li class="${index === appState.currentStep ? "is-current" : ""} ${index < appState.currentStep ? "is-done" : ""}">
          <span class="beta-step-number">${index + 1}</span>
          <span class="beta-step-title">${step}</span>
          <span class="beta-step-copy">${
            appState.mode === "exam"
              ? index === 0
                ? "Välj provdel"
                : index === 1
                  ? "30 minuter"
                  : "Kriterier"
              : appState.mode === "practiceExam"
                ? index === 0
                  ? "Välj provdel"
                  : index === 1
                    ? "Timer + coach"
                    : "Bedömning"
              : index === 0
                ? "Vi börjar soft"
                : index === 3
                  ? "Skriv med stöd"
                  : "En grej i taget"
          }</span>
        </li>
      `
    )
    .join("");
}

function overallProgress() {
  const steps = stepSets[appState.mode];
  const totalSteps = steps.length;
  const completedSteps = Math.max(0, Math.min(appState.currentStep, totalSteps - 1));
  let fraction = completedSteps / totalSteps;
  let text = "Vi börjar här.";

  if (appState.currentStep === 0) {
    text = activeSelectionReady()
      ? appState.mode === "exam"
        ? "Valet är klart. Nästa steg är provläget."
        : "Valet är klart. Nästa steg är att lyssna."
      : "Välj det som ska tränas, så rullar vi igång.";
    return {
      percent: activeSelectionReady() ? 8 : 2,
      text
    };
  }

  if (appState.mode === "exam" || appState.mode === "practiceExam") {
    if (appState.currentStep === 1) {
      const fractionOfTime = appState.examStarted ? (1 - appState.examRemainingMs / (30 * 60 * 1000)) : 0;
      fraction = (1 + Math.max(0.05, fractionOfTime)) / totalSteps;
      text = appState.examExpired
        ? "Tiden är slut. Lämna in provet för bedömning."
        : `${appState.mode === "practiceExam" ? "Övningsprovet" : "Provet"} pågår. ${formatExamTime(appState.examRemainingMs)} kvar.`;
    } else if (appState.currentStep >= 2) {
      fraction = 1;
      text = appState.mode === "practiceExam" ? "Övningsprovet är bedömt." : "Provbedömningen är klar.";
    }

    return {
      percent: Math.max(2, Math.min(100, Math.round(fraction * 100))),
      text
    };
  }

  if (appState.currentStep === 1) {
    const track = currentTrack();
    const segmentCount = track?.segments?.length || 1;
    const listenFraction = Math.min(appState.currentSegmentIndex, segmentCount) / segmentCount;
    fraction = (1 + listenFraction) / totalSteps;
    text =
      appState.currentSegmentIndex >= segmentCount
        ? "Lyssnandet är klart. Nu sitter grunden."
        : `Lyssna klart del ${Math.min(appState.currentSegmentIndex + 1, segmentCount)} av ${segmentCount}.`;
  } else if (appState.currentStep === 2) {
    fraction = (2.55) / totalSteps;
    text = "Nyckelorden är uppe. Nu ser du det viktigaste på skärmen.";
  } else if (appState.currentStep === 3) {
    const draft = currentDraft().trim();
    const starter = currentStarterText().trim();
    const hasMovedPastStarter = draft.length > starter.length + 12;
    fraction = (3 + (hasMovedPastStarter ? 0.45 : 0.15)) / totalSteps;
    text = hasMovedPastStarter
      ? "Skrivandet är igång. Nice, nu börjar svaret ta form."
      : "Nu bygger du ditt eget svar med tydlig struktur.";
  } else if (appState.currentStep >= 4) {
    fraction = 1;
    text = "Återkopplingen är klar. Den här rundan sitter.";
  }

  return {
    percent: Math.max(2, Math.min(100, Math.round(fraction * 100))),
    text
  };
}

function renderSelectionStep() {
  const resume = currentResumeSnapshot();
  const resumeText = resumeSummary(resume);
  const continentOptions = continents
    .map((continent) => `<option value="${continent.id}" ${continent.id === appState.selectedA ? "selected" : ""}>${continent.name}</option>`)
    .join("");
  const secondOptions = continents
    .map((continent) => `<option value="${continent.id}" ${continent.id === appState.selectedB ? "selected" : ""}>${continent.name}</option>`)
    .join("");

  if (appState.mode === "continent") {
    const selected = continentById(appState.selectedA);
    return `
      <div class="beta-grid">
        <div class="beta-stack">
          <div class="beta-helper">
            <strong>Hej.</strong>
            <p class="beta-small">Välj en världsdel först. Sen är det bara att ta nästa steg, ett i taget. Du behöver inte kunna allt direkt.</p>
          </div>
          ${
            resume?.mode === "continent" && resumeText
              ? `
                <div class="beta-support-card beta-resume-card">
                  <p class="beta-label">Fortsätt där du var</p>
                  <div class="beta-resume-row">
                    <p class="beta-small">${resumeText}</p>
                    <button class="beta-button beta-button-secondary" id="beta-resume-last-session">
                      ${resumeActionLabel(resume)}
                    </button>
                  </div>
                </div>
              `
              : ""
          }
          <label class="beta-select-label">
            Välj världsdel
            <select class="beta-select" id="beta-select-a">${continentOptions}</select>
          </label>
          <div class="beta-start-band beta-start-band-selection">
            <p class="beta-label">Börja här</p>
            <p class="beta-small">När du har valt världsdel trycker du här för att starta lyssna direkt.</p>
            <button class="beta-button beta-button-primary" id="beta-start-continent">
              Starta lyssna
            </button>
          </div>
        </div>
        <div class="beta-support-card">
          <p class="beta-label">Bra att börja med</p>
          <h3>${selected.name}</h3>
          <p class="beta-small">${selected.intro}</p>
          <div class="beta-chip-row">
            <span class="beta-chip">${selected.memoryHook}</span>
          </div>
        </div>
      </div>
    `;
  }

  if (appState.mode === "exam") {
    const first = continentById(appState.selectedA);
    const second = continentById(appState.selectedB);
    return `
      <div class="beta-grid">
        <div class="beta-stack">
          <div class="beta-helper">
            <strong>Det här är provläge.</strong>
            <p class="beta-small">Välj två världsdelar. Sedan får du 30 minuter på dig att skriva ett jämförande svar som bedöms mot kriterierna.</p>
          </div>
          <div class="beta-select-grid">
            <label class="beta-select-label">
              Första världsdelen
              <select class="beta-select" id="beta-select-a">${continentOptions}</select>
            </label>
            <label class="beta-select-label">
              Andra världsdelen
              <select class="beta-select" id="beta-select-b">${secondOptions}</select>
            </label>
          </div>
          <div class="beta-start-band">
            <p class="beta-label">Redo när du är</p>
            <p class="beta-small">När de två världsdelarna är valda kan du starta direkt här.</p>
            <button class="beta-button beta-button-primary" id="beta-enter-exam">
              Starta slutprov
            </button>
          </div>
        </div>
        <div class="beta-support-card">
          <p class="beta-label">Slutprov</p>
          <h3>${first && second ? `${first.name} och ${second.name}` : "Välj två världsdelar"}</h3>
          <ul class="beta-bullet-list">
            <li>30 minuter tidspress.</li>
            <li>Jämför utifrån läge, klimat, vegetation, befolkning, försörjning och naturresurser.</li>
            <li>Förklara varför och ge exempel från båda världsdelarna.</li>
          </ul>
        </div>
      </div>
    `;
  }

  if (appState.mode === "practiceExam") {
    const first = continentById(appState.selectedA);
    const second = continentById(appState.selectedB);
    return `
      <div class="beta-grid">
        <div class="beta-stack">
          <div class="beta-helper">
            <strong>Det här är övningsprov.</strong>
            <p class="beta-small">Välj två världsdelar. Du får 30 minuter och kan be om coachning på vägen innan du lämnar in.</p>
          </div>
          <div class="beta-select-grid">
            <label class="beta-select-label">
              Första världsdelen
              <select class="beta-select" id="beta-select-a">${continentOptions}</select>
            </label>
            <label class="beta-select-label">
              Andra världsdelen
              <select class="beta-select" id="beta-select-b">${secondOptions}</select>
            </label>
          </div>
          <div class="beta-start-band">
            <p class="beta-label">Redo när du är</p>
            <p class="beta-small">När de två världsdelarna är valda kan du köra igång övningsprovet direkt här.</p>
            <button class="beta-button beta-button-primary" id="beta-enter-practice-exam">
              Starta övningsprov
            </button>
          </div>
        </div>
        <div class="beta-support-card">
          <p class="beta-label">Övningsprov</p>
          <h3>${first && second ? `${first.name} och ${second.name}` : "Välj två världsdelar"}</h3>
          <ul class="beta-bullet-list">
            <li>30 minuter tidspress.</li>
            <li>Du kan få coachning utan att få facit.</li>
            <li>Bedömningen efteråt visar hur nära du ligger kriterierna.</li>
          </ul>
        </div>
      </div>
    `;
  }

  const first = continentById(appState.selectedA);
  const second = continentById(appState.selectedB);
  return `
    <div class="beta-grid">
      <div class="beta-stack">
        <div class="beta-helper">
          <strong>Välj bara två världsdelar här.</strong>
          <p class="beta-small">Resten av lektionen byggs automatiskt och hjälper dig träna på jämförelsen mot C, utan att allt kommer på en gång.</p>
        </div>
        ${
          resume?.mode === "compare" && resumeText
            ? `
              <div class="beta-support-card beta-resume-card">
                <p class="beta-label">Fortsätt där du var</p>
                <div class="beta-resume-row">
                  <p class="beta-small">${resumeText}</p>
                  <button class="beta-button beta-button-secondary" id="beta-resume-last-session">
                    ${resumeActionLabel(resume)}
                  </button>
                </div>
              </div>
            `
            : ""
        }
        <div class="beta-select-grid">
          <label class="beta-select-label">
            Första världsdelen
            <select class="beta-select" id="beta-select-a">${continentOptions}</select>
          </label>
          <label class="beta-select-label">
            Andra världsdelen
            <select class="beta-select" id="beta-select-b">${secondOptions}</select>
          </label>
        </div>
        <div class="beta-start-band beta-start-band-selection">
          <p class="beta-label">Börja här</p>
          <p class="beta-small">När du har valt två världsdelar trycker du här för att starta lyssna direkt.</p>
          <button class="beta-button beta-button-primary" id="beta-start-compare">
            Starta lyssna
          </button>
        </div>
      </div>
      <div class="beta-support-card">
        <p class="beta-label">Fokus i jämförelsen</p>
        <h3>${first && second ? `${first.name} och ${second.name}` : "Välj två världsdelar"}</h3>
        <ul class="beta-bullet-list">
          <li>Börja med vad som är lika eller olika.</li>
          <li>Fortsätt med varför det blir så.</li>
          <li>Avsluta med tydliga exempel från båda.</li>
        </ul>
        <button class="beta-button beta-button-secondary" id="beta-open-model-answer">
          Se modellsvar E / C / A
        </button>
      </div>
    </div>
  `;
}

function renderListenStep() {
  const track = currentTrack();

  if (!track) {
    return `<div class="beta-empty"><p class="beta-small">Välj först det som ska tränas, så dyker ljudet upp här.</p></div>`;
  }

  const { completedCount, progressPercent } = listenStepProgress();
  const activeSegment = track.segments[Math.min(appState.currentSegmentIndex, track.segments.length - 1)];

  return `
    <div class="beta-grid">
      <div class="beta-stack">
        <div class="beta-audio-player">
          <div class="beta-audio-header">
            <div>
              <p class="beta-label">Lyssna först</p>
              <h3>${track.title}</h3>
              <p class="beta-audio-note">Lyssna på en liten del i taget. Efter varje del kommer en kort skrivfråga så att vi ser att det sitter.</p>
            </div>
            <button class="beta-button beta-button-primary" id="beta-play-audio" ${appState.listenAwaitingQuestion ? "disabled" : ""}>
              ${appState.listenAwaitingQuestion ? "Svara i popupen" : appState.isPlaying ? "Pausa" : "Spela upp"}
            </button>
          </div>
          <div class="beta-audio-progress">
            <div class="beta-audio-bar"><span class="beta-audio-fill" style="width:${progressPercent}%"></span></div>
            <p class="beta-status ${appState.manifestError ? "is-error" : "is-ready"}">
              ${
                appState.manifestError
                  ? appState.manifestError
                  : appState.loadingAudio
                    ? "Startar ljudet..."
                    : appState.listenAwaitingQuestion
                      ? `Stanna här en sec. Nu kommer en kort skrivfråga om ${track.segments[appState.listenQuestionSegmentIndex]?.label?.toLowerCase()}.`
                      : appState.isPlaying
                        ? `Spelar ${activeSegment?.label?.toLowerCase() || "nästa del"} · del ${Math.min(appState.currentSegmentIndex + 1, track.segments.length)} av ${track.segments.length}.`
                        : completedCount >= track.segments.length
                          ? "Alla delar är klara. Nu kan du gå vidare."
                          : "Tryck på spela upp när du är redo."
              }
            </p>
          </div>
          <div class="beta-segment-list">
            ${track.segments
              .map(
                (segment, index) => `
                  <article class="beta-segment ${areaToneClass(listenArea(index)?.key || "location")} ${index === appState.currentSegmentIndex && (appState.isPlaying || appState.listenAwaitingQuestion) ? "is-active" : ""} ${index < completedCount ? "is-done" : ""}">
                    <strong>${segment.label}</strong>
                    <p class="beta-small">${segment.durationSeconds} sekunder</p>
                  </article>
                `
              )
              .join("")}
          </div>
        </div>
      </div>
      <div class="beta-stack">
        <div class="beta-support-card">
          <p class="beta-label">Sammanfattning</p>
          <h3>Texten fylls på i takt med rösten</h3>
          <p class="beta-small">Här landar nyckelorden efter varje del. Då slipper du hålla allt i huvudet samtidigt.</p>
        </div>
        <div class="beta-stack">
          ${listenSummaryCards() || `<article class="beta-support-card"><p class="beta-small">När första delen startar dyker den första sammanfattningen upp här, med den senaste överst.</p></article>`}
        </div>
      </div>
    </div>
  `;
}

function renderExamStep() {
  const first = continentById(appState.selectedA);
  const second = continentById(appState.selectedB);
  const value = currentDraft();
  const canSubmit = examCanSubmit();

  return `
    <div class="beta-writing-layout">
      <div class="beta-stack">
        <div class="beta-helper">
          <strong>Slutprov: jämför ${first.name} och ${second.name}</strong>
          <p class="beta-small">Skriv ett helt svar där du jämför världsdelarna och förklarar varför det ser ut som det gör. Ge tydliga exempel från båda.</p>
        </div>
        <div class="beta-exam-bar">
          <div>
            <p class="beta-label">Tid kvar</p>
            <h3 class="beta-exam-time ${appState.examExpired ? "is-expired" : ""}" id="beta-exam-time">${formatExamTime(appState.examRemainingMs)}</h3>
          </div>
          <div class="beta-exam-state-pill" id="beta-exam-state-pill">
            ${examStatePillText()}
          </div>
        </div>
        <div class="beta-support-card">
          <p class="beta-small" id="beta-exam-support-text">
            ${examSupportText(
              "Timern startade direkt när du valde provet. Skriv lugnt och få med vad som är lika eller olika, varför det blir så och exempel från båda världsdelarna.",
              "Tiden är slut. Nu är det bara att lämna in provet för bedömning."
            )}
          </p>
        </div>
        <textarea class="beta-textarea beta-exam-textarea" id="beta-writing-answer" ${examTextareaReadonly() ? "readonly" : ""}>${value}</textarea>
        <div class="beta-exam-actions beta-exam-actions-single">
          ${examPauseButton()}
          <button class="beta-button beta-button-primary" id="beta-grade-answer" ${(appState.gradingLoading || !canSubmit) ? "disabled" : ""}>
            ${appState.gradingLoading ? "Bedömer..." : "Lämna in provet"}
          </button>
        </div>
      </div>
      <div class="beta-support-card">
        <p class="beta-label">Det som bedöms</p>
        <h3>Så här kan du nå högre nivå</h3>
        <ul class="beta-bullet-list">
          <li>Du jämför faktiskt båda världsdelarna.</li>
          <li>Du förklarar varför skillnader eller likheter finns.</li>
          <li>Du använder exempel från båda världsdelarna.</li>
          <li>Du får gärna väva in natur, klimat, befolkning, försörjning och naturresurser.</li>
        </ul>
      </div>
    </div>
  `;
}

function renderPracticeExamStep() {
  const first = continentById(appState.selectedA);
  const second = continentById(appState.selectedB);
  const value = currentDraft();
  const canSubmit = examCanSubmit();

  return `
    <div class="beta-writing-layout">
      <div class="beta-stack">
        <div class="beta-helper">
          <strong>Övningsprov: jämför ${first.name} och ${second.name}</strong>
          <p class="beta-small">Skriv som i ett riktigt prov, men använd coachningen när du fastnar eller vill se vad som saknas just nu.</p>
        </div>
        <div class="beta-exam-bar">
          <div>
            <p class="beta-label">Tid kvar</p>
            <h3 class="beta-exam-time ${appState.examExpired ? "is-expired" : ""}" id="beta-exam-time">${formatExamTime(appState.examRemainingMs)}</h3>
          </div>
          <div class="beta-exam-state-pill" id="beta-exam-state-pill">
            ${examStatePillText()}
          </div>
        </div>
        <div class="beta-support-card">
          <p class="beta-small" id="beta-exam-support-text">
            ${examSupportText(
              "Timern startade direkt när du valde övningsprovet. Skriv som i ett riktigt prov och använd coachningen om du fastnar.",
              "Tiden är slut. Nu kan du inte skriva mer, men du kan fortfarande lämna in och få bedömning."
            )}
          </p>
        </div>
        <textarea class="beta-textarea beta-exam-textarea" id="beta-writing-answer" ${examTextareaReadonly() ? "readonly" : ""}>${value}</textarea>
        <div class="beta-exam-actions">
          ${examPauseButton()}
          <button class="beta-button beta-button-secondary" id="beta-coach-answer" ${(appState.coachingLoading || !examCanCoach()) ? "disabled" : ""}>
            ${appState.coachingLoading ? "Coachar..." : "Coacha mitt svar"}
          </button>
          <button class="beta-button beta-button-primary" id="beta-grade-answer" ${(appState.gradingLoading || !canSubmit) ? "disabled" : ""}>
            ${appState.gradingLoading ? "Bedömer..." : "Lämna in övningsprovet"}
          </button>
        </div>
      </div>
      <div class="beta-stack">
        <div class="beta-support-card">
          <p class="beta-label">Det som bedöms</p>
          <h3>Så här kan du vässa svaret</h3>
          <ul class="beta-bullet-list">
            <li>Jämför båda världsdelarna tydligt.</li>
            <li>Förklara varför skillnader eller likheter finns.</li>
            <li>Ge exempel från båda världsdelarna.</li>
          </ul>
        </div>
        ${
          appState.coachingResult
            ? `
              <div class="beta-support-card beta-coach-card">
                <p class="beta-label">Coachning på vägen</p>
                <h3>${appState.coachingResult.coachVerdict}</h3>
                <div class="beta-coach-section">
                  <strong>Du fick med</strong>
                  <ul class="beta-bullet-list">
                    ${appState.coachingResult.whatWorks.map((item) => `<li>${item}</li>`).join("")}
                  </ul>
                </div>
                <div class="beta-coach-section">
                  <strong>Nu saknas</strong>
                  <ul class="beta-bullet-list">
                    ${appState.coachingResult.missingNow.map((item) => `<li>${item}</li>`).join("")}
                  </ul>
                </div>
                <div class="beta-coach-section">
                  <strong>Testa nu</strong>
                  <p class="beta-small">${appState.coachingResult.nextStep}</p>
                </div>
                <div class="beta-coach-section">
                  <strong>Börja så här</strong>
                  <ul class="beta-bullet-list">
                    ${appState.coachingResult.sentenceStarters.map((item) => `<li>${item}</li>`).join("")}
                  </ul>
                </div>
              </div>
            `
            : `
              <div class="beta-support-card beta-coach-card">
                <p class="beta-label">Coachning på vägen</p>
                <h3>Fastnar du? Tryck på coachknappen.</h3>
                <p class="beta-small">Då får du hjälp med vad som redan fungerar, vad som saknas och några meningstarter att bygga vidare med.</p>
              </div>
            `
        }
      </div>
    </div>
  `;
}

function renderListenPopup() {
  if (!appState.listenAwaitingQuestion) {
    dom.overlayShell.innerHTML = "";
    return;
  }

  const spec = listenQuestionSpec(appState.listenQuestionSegmentIndex);
  if (!spec) {
    dom.overlayShell.innerHTML = "";
    return;
  }

  const feedbackClass = appState.listenQuestionFeedback
    ? appState.listenQuestionAccepted
      ? "is-ready"
      : "is-error"
    : "";

  dom.overlayShell.innerHTML = `
    <div class="beta-overlay-backdrop">
      <section class="beta-popup" role="dialog" aria-modal="true" aria-labelledby="beta-popup-title">
        <p class="beta-label">Snabb check</p>
        <h3 id="beta-popup-title">${spec.title}</h3>
        <p class="beta-small ${areaToneClass(listenArea(appState.listenQuestionSegmentIndex)?.key || "location")} beta-question-prompt">${spec.prompt}</p>
        <textarea
          class="beta-textarea beta-popup-textarea"
          id="beta-listen-answer"
          placeholder="${spec.placeholder}"
          ${appState.listenQuestionLoading || appState.listenQuestionAccepted ? "disabled" : ""}
        >${appState.listenQuestionAnswer}</textarea>
        <div class="beta-popup-footer">
          <p class="beta-status ${feedbackClass}">
            ${
              appState.listenQuestionFeedback ||
              "Skriv kort. När kärnan sitter kan du fortsätta till nästa del."
            }
          </p>
          <div class="beta-popup-actions">
            <button class="beta-button beta-button-secondary" id="beta-replay-listen-segment" ${
              appState.listenQuestionLoading ? "disabled" : ""
            }>
              Hör delen igen
            </button>
            ${
              appState.listenQuestionAccepted
                ? `
                  <button class="beta-button beta-button-primary" id="beta-close-listen-popup">
                    Stäng och fortsätt
                  </button>
                `
                : `
                  <button class="beta-button beta-button-primary" id="beta-submit-listen-answer" ${
                    appState.listenQuestionLoading ? "disabled" : ""
                  }>
                    ${appState.listenQuestionLoading ? "Kollar..." : "Skicka svar"}
                  </button>
                `
            }
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderReadStep() {
  const first = continentById(appState.selectedA);

  if (appState.mode === "continent") {
    return `
      <div class="beta-stack">
      <div class="beta-helper">
        <strong>Nu kommer bara nyckelorden.</strong>
        <p class="beta-small">Här slipper du långa stycken. Kolla ett område i taget och använd orden som stöd.</p>
      </div>
        <div class="beta-reading-grid">
          ${areaCardsForContinent(first)}
        </div>
      </div>
    `;
  }

  return `
    <div class="beta-stack">
      <div class="beta-helper">
        <strong>Nu ser du jämförelsen enkelt.</strong>
        <p class="beta-small">Kolla bara en rad i taget och lägg märke till vad som skiljer eller liknar. Det räcker långt.</p>
      </div>
      <div class="beta-support-card beta-inline-support-card">
        <p class="beta-label">Behöver du en förebild?</p>
        <p class="beta-small">Öppna ett modellsvar och jämför hur E, C och A skiljer sig åt.</p>
        <button class="beta-button beta-button-secondary" id="beta-open-model-answer">
          Se modellsvar E / C / A
        </button>
      </div>
      <div class="beta-stack">
        ${areaCardsForComparison()}
      </div>
    </div>
  `;
}

function renderWritingStep() {
  const first = continentById(appState.selectedA);
  const second = continentById(appState.selectedB);
  const value = currentDraft();
  const title = appState.mode === "continent" ? `Skriv om ${first.name}` : `Jämför ${first.name} och ${second.name}`;
  const helperTitle = appState.mode === "continent" ? "Skriv i den ordning som står i rutan" : "Skriv först vad, sedan varför, sedan exempel";

  return `
    <div class="beta-writing-layout">
      <div class="beta-stack">
        <div class="beta-helper">
          <strong>${title}</strong>
          <p class="beta-small">Rutan är redan igångskriven så att det blir lättare att komma igång. Bara fyll på där det känns rimligt.</p>
        </div>
        ${renderWritingMiniSteps()}
        <textarea class="beta-textarea" id="beta-writing-answer">${value}</textarea>
        <button class="beta-button beta-button-primary" id="beta-grade-answer" ${appState.gradingLoading ? "disabled" : ""}>
          ${appState.gradingLoading ? "Bedömer..." : "Skicka till OpenAI"}
        </button>
      </div>
      <div class="beta-support-card">
        <p class="beta-label">Skrivhjälp</p>
        <h3>${helperTitle}</h3>
        <ul class="beta-bullet-list">
          ${supportPoints()
            .map((point) => `<li>${point}</li>`)
            .join("")}
        </ul>
        <p class="beta-small">${appState.mode === "continent" ? first.cLevel : "För C behöver svaret jämföra, förklara och ge exempel från båda världsdelarna. Det är exakt det du tränar här."}</p>
        ${
          shouldShowModelAnswer()
            ? `
              <button class="beta-button beta-button-secondary" id="beta-open-model-answer">
                Se modellsvar E / C / A
              </button>
            `
            : ""
        }
      </div>
    </div>
  `;
}

function renderFeedbackStep() {
  if (!appState.gradingResult) {
    return `
      <div class="beta-empty">
        <div>
          <h3>Här kommer återkopplingen</h3>
          <p class="beta-small">När svaret har skickats till OpenAI visas här vad som redan sitter och vad som kan levela upp svaret.</p>
        </div>
      </div>
    `;
  }

  const result = appState.gradingResult;
  const feedbackLabel =
    appState.mode === "exam"
      ? "Provbedömning"
      : appState.mode === "practiceExam"
        ? "Övningsbedömning"
        : "Återkoppling";
  const levelLabel =
    appState.mode === "exam"
      ? "Nivå i provet"
      : appState.mode === "practiceExam"
        ? "Nivå i övningsprovet"
        : "Nivå just nu";
  const topStrengths = result.strengths.slice(0, 2);
  const extraStrengths = result.strengths.slice(2);
  const topImprovements = result.improvements.slice(0, 2);
  const extraImprovements = result.improvements.slice(2);
  const isExamMode = appState.mode === "exam" || appState.mode === "practiceExam";
  const nextMove = recommendedNextMove();
  const first = continentById(appState.selectedA);
  const { gotNow, needsNow } = microFeedbackLists(result);

  if (isExamMode) {
    return `
      <div class="beta-feedback-stack">
        <div class="beta-feedback-card beta-feedback-card-hero">
          <p class="beta-label">${feedbackLabel}</p>
          <h3>${result.shortVerdict}</h3>
          <p class="beta-feedback-summary">${result.summary}</p>
          <div class="beta-checks">
            ${Object.entries(result.checks)
              .map(
                ([key, passed]) =>
                  `<span class="beta-check ${passed ? "is-yes" : "is-no"}">${labelForCheck(key)}: ${passed ? "Ja" : "Inte än"}</span>`
              )
              .join("")}
          </div>
          <div class="beta-feedback-meta">
            <div>
              <p class="beta-label">${levelLabel}</p>
              <strong>${result.levelEstimate}</strong>
            </div>
            <div>
              <p class="beta-label">Match mot uppgiften</p>
              <strong>${result.scorePercent}%</strong>
            </div>
          </div>
        </div>
        <div class="beta-feedback-card">
          <p class="beta-label">Gör detta nu</p>
          <h3>Ett litet steg till</h3>
          <div class="beta-mini-steps">
            ${topImprovements
              .map(
                (item, index) => `
                  <div class="beta-mini-step">
                    <span class="beta-mini-step-number">${index + 1}</span>
                    <p>${item}</p>
                  </div>
                `
              )
              .join("")}
          </div>
          <p class="beta-small">${result.nextStep}</p>
        </div>
        <div class="beta-feedback-card">
          <p class="beta-label">Kort feedback</p>
          <div class="beta-micro-feedback">
            <div>
              <strong>Du fick med</strong>
              <ul class="beta-bullet-list">
                ${gotNow.slice(0, 3).map((item) => `<li>${item}</li>`).join("")}
              </ul>
            </div>
            <div>
              <strong>Nu saknas</strong>
              <ul class="beta-bullet-list">
                ${needsNow.slice(0, 3).map((item) => `<li>${item}</li>`).join("")}
              </ul>
            </div>
            <div>
              <strong>Lägg till nu</strong>
              <p class="beta-small">${result.improvements[0] || result.nextStep}</p>
            </div>
          </div>
        </div>
        <div class="beta-feedback-card">
          <p class="beta-label">Det här sitter redan</p>
          <ul class="beta-bullet-list">
            ${topStrengths.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
        <details class="beta-feedback-more">
          <summary>Visa mer feedback</summary>
          <div class="beta-feedback-more-body">
            ${
              extraImprovements.length
                ? `
                  <div class="beta-feedback-card">
                    <p class="beta-label">Mer att förbättra</p>
                    <ul class="beta-bullet-list">
                      ${extraImprovements.map((item) => `<li>${item}</li>`).join("")}
                    </ul>
                  </div>
                `
                : ""
            }
            ${
              extraStrengths.length
                ? `
                  <div class="beta-feedback-card">
                    <p class="beta-label">Mer som fungerar</p>
                    <ul class="beta-bullet-list">
                      ${extraStrengths.map((item) => `<li>${item}</li>`).join("")}
                    </ul>
                  </div>
                `
                : ""
            }
            <div class="beta-feedback-card">
              <p class="beta-label">Exempel på starkare svar</p>
              <p class="beta-feedback-summary">${result.modelAnswer}</p>
            </div>
          </div>
        </details>
      </div>
    `;
  }

  return `
    <div class="beta-feedback-grid">
      <div class="beta-feedback-card">
        <p class="beta-label">${feedbackLabel}</p>
        <h3>${result.shortVerdict}</h3>
        <p class="beta-feedback-summary">${result.summary}</p>
        <div class="beta-checks">
          ${Object.entries(result.checks)
            .map(
              ([key, passed]) =>
                `<span class="beta-check ${passed ? "is-yes" : "is-no"}">${labelForCheck(key)}: ${passed ? "Ja" : "Inte än"}</span>`
            )
            .join("")}
        </div>
      </div>
      <div class="beta-support-card">
        <p class="beta-label">${levelLabel}</p>
        <h3>${result.levelEstimate}</h3>
        <p class="beta-small">${result.scorePercent}% match mot uppgiften.</p>
        <p class="beta-small">${result.nextStep}</p>
      </div>
      <div class="beta-feedback-card">
        <p class="beta-label">Kort feedback</p>
        <div class="beta-micro-feedback">
          <div>
            <strong>Du fick med</strong>
            <ul class="beta-bullet-list">
              ${gotNow.slice(0, 3).map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </div>
          <div>
            <strong>Nu saknas</strong>
            <ul class="beta-bullet-list">
              ${needsNow.slice(0, 3).map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </div>
          <div>
            <strong>Lägg till nu</strong>
            <p class="beta-small">${result.improvements[0] || result.nextStep}</p>
          </div>
        </div>
      </div>
      <div class="beta-feedback-card">
        <p class="beta-label">Det här fungerar bra</p>
        <ul class="beta-bullet-list">
          ${result.strengths.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </div>
      <div class="beta-feedback-card">
        <p class="beta-label">Det här kan förbättras</p>
        <ul class="beta-bullet-list">
          ${result.improvements.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </div>
      <div class="beta-feedback-card">
        <p class="beta-label">Exempel på starkare svar</p>
        <p class="beta-feedback-summary">${result.modelAnswer}</p>
      </div>
      ${
        appState.mode === "continent" && first
          ? `
            <div class="beta-support-card beta-next-moment-card">
              <p class="beta-label">Checkpoint</p>
              <h3>${first.name} är klar</h3>
              <p class="beta-small">Du har nu tränat läge, klimat, vegetation, befolkning, försörjning och naturresurser. Det är en bra grund att bygga vidare på.</p>
              <div class="beta-chip-row">
                ${guideAreas.map((area) => `<span class="beta-chip">${area.label}</span>`).join("")}
              </div>
            </div>
          `
          : ""
      }
      ${
        nextMove
          ? `
            <div class="beta-support-card beta-next-moment-card">
              <p class="beta-label">${nextMove.eyebrow}</p>
              <h3>${nextMove.title}</h3>
              <p class="beta-small">${nextMove.summary}</p>
              <button class="beta-button beta-button-primary" id="beta-go-next-moment">
                ${nextMove.button}
              </button>
            </div>
          `
          : ""
      }
    </div>
  `;
}

function labelForCheck(key) {
  const labels = {
    onTask: "På uppgiften",
    usesFacts: "Fakta",
    explainsWhy: "Varför",
    givesExamples: "Exempel",
    usesGeographyConcepts: "Begrepp"
  };
  return labels[key] || key;
}

function renderStage() {
  let content = "";

  if (appState.currentStep === 0) {
    content = renderSelectionStep();
  } else if (appState.mode === "practiceExam") {
    if (appState.currentStep === 1) {
      content = renderPracticeExamStep();
    } else {
      content = renderFeedbackStep();
    }
  } else if (appState.mode === "exam") {
    if (appState.currentStep === 1) {
      content = renderExamStep();
    } else {
      content = renderFeedbackStep();
    }
  } else if (appState.currentStep === 1) {
    content = renderListenStep();
  } else if (appState.currentStep === 2) {
    content = renderReadStep();
  } else if (appState.currentStep === 3) {
    content = renderWritingStep();
  } else {
    content = renderFeedbackStep();
  }

  dom.stage.innerHTML = `${renderFocusStrip()}${content}`;
}

function updateButtons() {
  const steps = stepSets[appState.mode];
  const progress = overallProgress();
  dom.backStep.disabled =
    appState.currentStep === 0 ||
    appState.gradingLoading ||
    ((appState.mode === "exam" || appState.mode === "practiceExam") &&
      ((appState.currentStep === 1 && appState.examStarted) || appState.currentStep === 2));
  dom.backStep.textContent = "Tillbaka";

  if (appState.currentStep === 0) {
    dom.nextStep.textContent =
      appState.mode === "exam"
        ? "Starta slutprov"
        : appState.mode === "practiceExam"
          ? "Starta övningsprov"
          : "Till lyssna";
    dom.nextStep.disabled = !activeSelectionReady() || appState.gradingLoading;
  } else if ((appState.mode === "exam" || appState.mode === "practiceExam") && appState.currentStep === 1) {
    dom.nextStep.textContent = "Lämna in provet först";
    dom.nextStep.disabled = true;
  } else if ((appState.mode === "exam" || appState.mode === "practiceExam") && appState.currentStep === 2) {
    dom.nextStep.textContent = "Klart för nu";
    dom.nextStep.disabled = true;
  } else if (appState.currentStep === 1) {
    dom.nextStep.textContent = appState.mode === "continent" ? "Till nyckelorden" : "Till jämförelsen";
    dom.nextStep.disabled = appState.gradingLoading || currentTrack()?.segments?.length !== appState.currentSegmentIndex;
  } else if (appState.currentStep === 2) {
    dom.nextStep.textContent = "Till skrivdelen";
    dom.nextStep.disabled = appState.gradingLoading;
  } else if (appState.currentStep === 3) {
    dom.nextStep.textContent = "Skicka svaret först";
    dom.nextStep.disabled = true;
  } else {
    const nextMove = recommendedNextMove();
    dom.nextStep.textContent = nextMove ? nextMove.button : "Klart för nu";
    dom.nextStep.disabled = !nextMove;
  }

  dom.lessonTitle.textContent = currentLessonTitle();
  dom.lessonSubtitle.textContent = currentLessonSubtitle();
  dom.stepPill.textContent = `Steg ${appState.currentStep + 1} av ${steps.length}`;
  dom.progressFill.style.width = `${progress.percent}%`;
  dom.progressText.textContent = progress.text;
  dom.progressKicker.textContent = `${progress.percent}% klart`;
}

function captureWritingSelection() {
  const active = document.activeElement;
  if (!(active instanceof HTMLTextAreaElement) || active.id !== "beta-writing-answer") {
    return null;
  }

  return {
    start: active.selectionStart,
    end: active.selectionEnd
  };
}

function restoreWritingSelection(snapshot) {
  if (!snapshot) {
    return;
  }

  const textarea = document.querySelector("#beta-writing-answer");
  if (!(textarea instanceof HTMLTextAreaElement)) {
    return;
  }

  textarea.focus({ preventScroll: true });
  textarea.setSelectionRange(snapshot.start, snapshot.end);
}

function render() {
  const writingSelection = captureWritingSelection();

  if (appState.currentStep > 0 && (appState.mode === "continent" || appState.mode === "compare")) {
    saveResumeSnapshot({
      mode: appState.mode,
      selectedA: appState.selectedA,
      selectedB: appState.selectedB,
      currentStep: appState.currentStep,
      currentSegmentIndex: appState.currentSegmentIndex
    });
  }

  renderModeButtons();
  renderStepper();
  renderStage();
  dom.lessonCard.classList.toggle("is-selection-step", appState.currentStep === 0);
  renderAchievementsPanel();
  dom.stage.classList.toggle("is-selection", appState.currentStep === 0);
  updateButtons();
  restoreWritingSelection(writingSelection);
  if (appState.listenAwaitingQuestion) {
    renderListenPopup();
  } else if (appState.modelAnswerOpen) {
    renderModelAnswerPopup();
  } else {
    dom.overlayShell.innerHTML = "";
  }
}

async function gradeAnswer() {
  const textarea = document.querySelector("#beta-writing-answer");
  const answer = textarea?.value.trim() || "";

  if (!answer) {
    alert("Skriv några meningar först, så kan OpenAI hjälpa till.");
    return;
  }

  setDraft(textarea.value);
  appState.gradingLoading = true;
  appState.gradingResult = null;
  if ((appState.mode === "exam" || appState.mode === "practiceExam") && examTimerId) {
    window.clearInterval(examTimerId);
    examTimerId = 0;
  }
  render();

  const payload = promptPayload();

  try {
    const response = await fetch("/api/grade-answer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        questionTitle: payload.questionTitle,
        questionDescription: payload.questionDescription,
        supportPoints: payload.supportPoints,
        referenceFacts: payload.referenceFacts,
        answer
      })
    });

    if (!response.ok) {
      const errorPayload = await response.json().catch(() => ({}));
      throw new Error(errorPayload?.details || errorPayload?.error || "Kunde inte bedöma svaret just nu.");
    }

    appState.gradingResult = await response.json();
    recordGradedAnswer(appState.gradingResult);
    appState.currentStep = (appState.mode === "exam" || appState.mode === "practiceExam") ? 2 : 4;
  } catch (error) {
    appState.gradingResult = {
      shortVerdict: "Bedömningen kunde inte hämtas just nu",
      levelEstimate: "Försök igen",
      scorePercent: 0,
      summary: error.message || "Det gick inte att nå OpenAI just nu.",
      checks: {
        onTask: false,
        usesFacts: false,
        explainsWhy: false,
        givesExamples: false,
        usesGeographyConcepts: false
      },
      strengths: ["Ditt svar finns kvar i rutan, så du behöver inte skriva om allt."],
      improvements: ["Försök igen om en liten stund när servern och OpenAI svarar."],
      nextStep: "När tjänsten svarar igen kan du skicka samma text en gång till.",
      modelAnswer: "Det här är bara ett tillfälligt fel. Prova igen om en stund, du är fortfarande good."
    };
    appState.currentStep = (appState.mode === "exam" || appState.mode === "practiceExam") ? 2 : 4;
  } finally {
    appState.gradingLoading = false;
    render();
  }
}

async function submitListenAnswer() {
  const spec = listenQuestionSpec(appState.listenQuestionSegmentIndex);
  const answer = appState.listenQuestionAnswer.trim();

  if (!spec) {
    return;
  }

  if (!answer) {
    appState.listenQuestionFeedback = "Skriv ett kort svar först, så kollar vi det direkt.";
    appState.listenQuestionAccepted = false;
    renderListenPopup();
    return;
  }

  appState.listenQuestionLoading = true;
  appState.listenQuestionFeedback = "";
  renderListenPopup();

  try {
    const response = await fetch("/api/check-short-answer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        questionTitle: spec.title,
        questionPrompt: spec.prompt,
        referenceFacts: spec.referenceFacts,
        answer
      })
    });

    if (!response.ok) {
      if (response.status === 404 || response.status === 405) {
        const fallbackResult = await submitListenAnswerFallback(spec, answer);
        appState.listenQuestionAccepted = fallbackResult.accepted;
        appState.listenQuestionFeedback = fallbackResult.feedback;
        renderListenPopup();
        return;
      }

      const errorPayload = await response.json().catch(() => ({}));
      throw new Error(errorPayload?.details || errorPayload?.error || "Kunde inte kolla svaret just nu.");
    }

    const result = await response.json();
    appState.listenQuestionAccepted = Boolean(result.accepted);
    appState.listenQuestionFeedback = result.accepted
      ? checkpointSuccessText()
      : `Bra start. Nu saknas ${result.feedback || result.nudge || "lite mer av det viktigaste."}`;
    renderListenPopup();
  } catch (error) {
    appState.listenQuestionAccepted = false;
    appState.listenQuestionFeedback = error.message || "Det gick inte att kolla svaret just nu.";
    renderListenPopup();
  } finally {
    appState.listenQuestionLoading = false;
    renderListenPopup();
  }
}

async function submitListenAnswerFallback(spec, answer) {
  const response = await fetch("/api/grade-answer", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      questionTitle: `Snabbfråga: ${spec.title}`,
      questionDescription: `${spec.prompt} Bedöm svaret mycket kort och generöst eftersom eleven bara ska visa att kärnan sitter efter uppläsningen.`,
      supportPoints: [
        "Svara kort men på rätt delområde.",
        "Få med minst en central fakta från uppläsningen.",
        "Det räcker att visa att kärnan är förstådd."
      ],
      referenceFacts: spec.referenceFacts,
      answer
    })
  });

  if (!response.ok) {
    const errorPayload = await response.json().catch(() => ({}));
    throw new Error(errorPayload?.details || errorPayload?.error || "Kunde inte kolla svaret just nu.");
  }

  const result = await response.json();
  const accepted =
    result?.checks?.onTask &&
    (result?.checks?.usesFacts || result?.scorePercent >= 45);

  return {
    accepted,
    feedback: accepted
      ? checkpointSuccessText()
      : `Bra start. Nu saknas ${result?.nextStep || result?.summary || "lite mer av det viktigaste. Testa igen."}`
  };
}

async function requestCoachAnswer() {
  const textarea = document.querySelector("#beta-writing-answer");
  const answer = textarea?.value.trim() || "";

  if (!answer) {
    alert("Skriv några meningar först, så kan coachningen hjälpa dig vidare.");
    return;
  }

  setDraft(textarea.value);
  appState.coachingLoading = true;
  render();

  const payload = promptPayload();

  try {
    const response = await fetch("/api/coach-answer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        questionTitle: payload.questionTitle,
        questionDescription: payload.questionDescription,
        supportPoints: payload.supportPoints,
        referenceFacts: payload.referenceFacts,
        answer
      })
    });

    if (!response.ok) {
      const errorPayload = await response.json().catch(() => ({}));
      throw new Error(errorPayload?.details || errorPayload?.error || "Kunde inte coacha svaret just nu.");
    }

    appState.coachingResult = await response.json();
  } catch (error) {
    appState.coachingResult = {
      coachVerdict: "Coachningen kunde inte hämtas just nu",
      whatWorks: ["Ditt utkast finns kvar, så du kan fortsätta jobba vidare utan att börja om."],
      missingNow: ["Prova igen om en liten stund när OpenAI svarar igen."],
      nextStep: error.message || "Coachningen kunde inte hämtas just nu.",
      sentenceStarters: [
        "En tydlig skillnad är att ...",
        "Det beror på att ...",
        "Ett exempel från den första världsdelen är ..."
      ]
    };
  } finally {
    appState.coachingLoading = false;
    render();
  }
}

function bindEvents() {
  dom.modeGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-mode]");
    if (!button) {
      return;
    }

    const nextMode = button.dataset.mode;
    if (!nextMode || nextMode === appState.mode) {
      return;
    }

    stopAudio();
    appState.mode = nextMode;
    appState.currentStep = 0;
    appState.currentSegmentIndex = 0;
    appState.currentTrackKey = "";
    resetListenCheckpointState();
    resetExamState();
    appState.gradingResult = null;
    appState.coachingResult = null;
    render();
  });

  dom.stage.addEventListener("change", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    if (target.id === "beta-select-a") {
      appState.selectedA = target.value;
      if (appState.mode !== "continent" && appState.selectedA === appState.selectedB) {
        appState.selectedB = continents.find((continent) => continent.id !== appState.selectedA)?.id || "";
      }
      appState.currentSegmentIndex = 0;
      appState.currentTrackKey = "";
      resetListenCheckpointState();
      resetExamState();
      appState.gradingResult = null;
      appState.coachingResult = null;
      stopAudio();
      render();
    }

    if (target.id === "beta-select-b") {
      appState.selectedB = target.value;
      if (appState.selectedA === appState.selectedB) {
        appState.selectedA = continents.find((continent) => continent.id !== appState.selectedB)?.id || "";
      }
      appState.currentSegmentIndex = 0;
      appState.currentTrackKey = "";
      resetListenCheckpointState();
      resetExamState();
      appState.gradingResult = null;
      appState.coachingResult = null;
      stopAudio();
      render();
    }

  });

  dom.stage.addEventListener("input", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    if (target.id === "beta-writing-answer") {
      setDraft(target.value);
    }
  });

  dom.overlayShell.addEventListener("input", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    if (target.id === "beta-listen-answer") {
      appState.listenQuestionAnswer = target.value;
      if (appState.listenQuestionFeedback && !appState.listenQuestionLoading) {
        appState.listenQuestionFeedback = "";
        appState.listenQuestionAccepted = false;
        renderListenPopup();
      }
    }
  });

  dom.stage.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) {
      return;
    }

    if (event.target.closest("#beta-play-audio")) {
      togglePlay();
      return;
    }

    if (event.target.closest("#beta-grade-answer")) {
      gradeAnswer();
      return;
    }

    if (
      event.target.closest("#beta-start-continent") ||
      event.target.closest("#beta-start-compare") ||
      event.target.closest("#beta-enter-exam") ||
      event.target.closest("#beta-enter-practice-exam")
    ) {
      startCurrentSelection();
      return;
    }

    if (event.target.closest("#beta-resume-last-session")) {
      const resume = currentResumeSnapshot();
      if (!resume) {
        return;
      }

      stopAudio();
      appState.mode = resume.mode;
      appState.selectedA = resume.selectedA;
      appState.selectedB = resume.selectedB || ensureDifferentSecond(resume.selectedA);
      appState.currentStep = resume.currentStep;
      appState.currentSegmentIndex = resume.currentSegmentIndex || 0;
      appState.currentTrackKey = "";
      resetListenCheckpointState();
      appState.gradingResult = null;
      appState.coachingResult = null;
      render();
      return;
    }

    if (event.target.closest("#beta-coach-answer")) {
      requestCoachAnswer();
      return;
    }

    if (event.target.closest("#beta-toggle-exam-pause")) {
      toggleExamPause();
      return;
    }

    if (event.target.closest("#beta-open-model-answer")) {
      openModelAnswer("c");
      return;
    }

    if (event.target.closest("#beta-go-next-moment")) {
      moveToRecommendedNext();
      return;
    }

  });

  dom.overlayShell.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) {
      return;
    }

    if (event.target.closest("#beta-submit-listen-answer")) {
      submitListenAnswer();
      return;
    }

    if (event.target.closest("#beta-replay-listen-segment")) {
      replayCheckpointSegment();
      return;
    }

    if (event.target.closest("#beta-model-level-e")) {
      appState.modelAnswerLevel = "e";
      render();
      return;
    }

    if (event.target.closest("#beta-model-level-c")) {
      appState.modelAnswerLevel = "c";
      render();
      return;
    }

    if (event.target.closest("#beta-model-level-a")) {
      appState.modelAnswerLevel = "a";
      render();
      return;
    }

    if (event.target.closest("#beta-close-model-answer")) {
      closeModelAnswer();
      return;
    }

    if (event.target.closest("#beta-close-listen-popup")) {
      advanceFromCheckpoint();
    }
  });

  dom.overlayShell.addEventListener("keydown", (event) => {
    if (!(event.target instanceof HTMLTextAreaElement)) {
      return;
    }

    if (event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
      event.preventDefault();
      submitListenAnswer();
    }
  });

  dom.backStep.addEventListener("click", () => {
    if (appState.currentStep === 0 || appState.gradingLoading) {
      return;
    }
    if (appState.currentStep === 4) {
      appState.currentStep = 3;
    } else if ((appState.mode === "exam" || appState.mode === "practiceExam") && appState.currentStep === 2) {
      appState.currentStep = 1;
    } else {
      appState.currentStep -= 1;
    }
    render();
  });

  dom.nextStep.addEventListener("click", () => {
    if (dom.nextStep.disabled) {
      return;
    }
    if (appState.currentStep >= stepSets[appState.mode].length - 1) {
      moveToRecommendedNext();
      return;
    }
    const nextStep = Math.min(appState.currentStep + 1, stepSets[appState.mode].length - 1);
    const shouldAutoplayListen = appState.currentStep === 0 && nextStep === 1 && appState.mode !== "exam" && appState.mode !== "practiceExam";

    appState.currentStep = nextStep;

    if ((appState.mode === "exam" || appState.mode === "practiceExam") && appState.currentStep === 1) {
      resetExamState();
      appState.coachingResult = null;
      startExamTimer();
    }

    if (shouldAutoplayListen) {
      stopAudio();
      appState.currentSegmentIndex = 0;
      appState.currentTrackKey = "";
      resetListenCheckpointState();
    }

    render();

    if (shouldAutoplayListen) {
      playCurrentTrack();
    }
  });

  appState.audio.addEventListener("ended", () => {
    const track = currentTrack();
    if (!track?.segments?.length) {
      appState.isPlaying = false;
      render();
      return;
    }

    appState.isPlaying = false;
    appState.loadingAudio = false;
    appState.listenAwaitingQuestion = true;
    appState.listenQuestionSegmentIndex = appState.currentSegmentIndex;
    appState.listenQuestionAnswer = "";
    appState.listenQuestionFeedback = "";
    appState.listenQuestionAccepted = false;
    appState.listenQuestionLoading = false;
    render();
  });
}

async function loadManifest() {
  try {
    const response = await fetch("./audio/manifest.json", {
      headers: { Accept: "application/json" }
    });

    if (!response.ok) {
      throw new Error("Kunde inte läsa ljudfilerna.");
    }

    appState.manifest = await response.json();
    appState.manifestError = "";
  } catch (error) {
    appState.manifestError = error.message || "Kunde inte läsa ljudfilerna.";
  } finally {
    render();
  }
}

function cacheDom() {
  dom.modeGrid = document.querySelector("#beta-mode-grid");
  dom.achievementContent = document.querySelector("#beta-achievement-content");
  dom.lessonCard = document.querySelector(".beta-lesson-card");
  dom.lessonTitle = document.querySelector("#beta-lesson-title");
  dom.lessonSubtitle = document.querySelector("#beta-lesson-subtitle");
  dom.stepPill = document.querySelector("#beta-step-pill");
  dom.stepper = document.querySelector("#beta-stepper");
  dom.stage = document.querySelector("#beta-stage");
  dom.backStep = document.querySelector("#beta-back-step");
  dom.nextStep = document.querySelector("#beta-next-step");
  dom.overlayShell = document.querySelector("#beta-overlay-shell");
  dom.progressFill = document.querySelector("#beta-progress-fill");
  dom.progressText = document.querySelector("#beta-progress-text");
  dom.progressKicker = document.querySelector("#beta-progress-kicker");
}

function init() {
  appState.achievements = loadAchievements();
  cacheDom();
  bindEvents();
  render();
  loadManifest();
}

init();
