const continents = [
  {
    id: "europa",
    name: "Europa",
    intro:
      "Europa är en liten världsdel på norra halvklotet med lång kust, många öar och flera olika klimat.",
    memoryHook:
      "Tänk Europa som kuster, halvöar, många städer och flera klimat på liten yta.",
    countries: ["Sverige", "Norge", "Finland", "Frankrike", "Tyskland"],
    keyPlaces: ["Alperna", "Uralbergen", "Medelhavet", "Svarta havet"],
    cLevel:
      "För C ska Isak kunna koppla Europas läge, klimat, naturresurser och stora stadsbefolkning till hur människor bor och arbetar.",
    audio:
      "Europa ligger helt på norra halvklotet. Gränsen mot Asien går längs Uralbergen, Uralfloden, Kaspiska havet, Kaukasus och Svarta havet. Europa har lång kust, många öar och flera halvöar. Klimatet varierar med breddgraden. I väster finns kustklimat, längre in inlandsklimat och i söder medelhavsklimat. I norr finns polar klimat och tundra. Omkring 750 miljoner människor bor i Europa och nästan tre fjärdedelar bor i städer. Europa har bördig jord, stora floder, stora skogar och tillgång till olja, kol, naturgas och järnmalm.",
    dimensions: {
      location: {
        summary:
          "Ligger helt på norra halvklotet. Gränsen mot Asien går längs Uralbergen, Uralfloden, Kaspiska havet, Kaukasus och Svarta havet.",
        tags: ["norra halvklotet", "många kuster", "många öar och halvöar"],
        reason:
          "Den långa kusten och alla haven gör att havet påverkar både klimat, transporter och kontakter mellan platser."
      },
      climate: {
        summary:
          "Polarzon i norr, subtropisk zon i söder och tempererad zon i stora delar. Väster har kustklimat, inlandet inlandsklimat och söderut finns medelhavsklimat.",
        tags: ["tempererad zon", "kustklimat", "inlandsklimat", "medelhavsklimat"],
        reason:
          "Breddgrad, havens närhet och avståndet från kusten påverkar nederbörd, vintrar och somrar."
      },
      vegetation: {
        summary:
          "Tundra i de kallaste delarna. I övrigt finns skog, stäpp, buskar och höga bergsområden.",
        tags: ["tundra", "skog", "stäpp", "berg"],
        reason:
          "Olika temperatur och nederbörd gör att växtligheten blir olika i norr, söder, vid kusten och i bergen."
      },
      population: {
        summary:
          "Omkring 750 miljoner människor bor här. Befolkningen är ojämnt fördelad och nästan tre fjärdedelar bor i städer.",
        tags: ["750 miljoner", "ojämnt fördelad", "många bor i städer"],
        reason:
          "Täta städer, transporter, arbete och odlingsbar mark har gjort att många människor samlas i vissa delar av Europa."
      },
      livelihoods: {
        summary:
          "Jordbruk och industri finns kvar, men en stor andel arbetar i tjänster som handel, transport och IT.",
        tags: ["jordbruk", "industri", "handel", "transport", "IT"],
        reason:
          "Europa har moderna ekonomier där många arbetar med service och olika tjänster i stället för bara jordbruk och industri."
      },
      resources: {
        summary:
          "Har bördig jord, många floder och stora skogar. Det finns också olja, kol och naturgas samt järnmalm och andra metaller.",
        tags: ["bördig jord", "floder", "skog", "olja", "kol", "naturgas", "järnmalm"],
        reason:
          "Naturresurserna har gjort Europa viktigt för jordbruk, energi, industri och transporter."
      }
    }
  },
  {
    id: "afrika",
    name: "Afrika",
    intro:
      "Afrika är en mycket stor världsdel där ekvatorn går nästan mitt igenom och där klimatet skiftar från regnskog till öken.",
    memoryHook:
      "Tänk Afrika som varmt vid ekvatorn, torrare längre bort och med regnskog, savann, stäpp och öken.",
    countries: ["Egypten", "Nigeria", "Kenya", "Sydafrika", "Etiopien"],
    keyPlaces: ["Sahara", "Nilen", "Kongo", "Atlasbergen"],
    cLevel:
      "För C ska Isak kunna förklara hur värme, regn, torra områden och naturresurser påverkar vegetation och försörjning i Afrika.",
    audio:
      "Afrika är den näst största världsdelen. Ekvatorn går nästan mitt genom Afrika. Kräftans vändkrets går genom norra delen och Stenbockens vändkrets genom södra delen. Nära ekvatorn är det varmt och regnigt. Längre bort följer savann, stäpp och öken. Därför finns både regnskog, gräsmarker och stora ökenområden som Sahara. Jordbruk, boskapsskötsel, gruvor, industri och turism är viktiga. Afrika har stora tillgångar av diamanter, guld, koppar, järnmalm och olja. Solenergi kan också bli en viktig resurs i framtiden.",
    dimensions: {
      location: {
        summary:
          "Ekvatorn går nästan mitt genom Afrika. Kräftans vändkrets ligger i norr och Stenbockens vändkrets i söder.",
        tags: ["ekvatorn", "kräftans vändkrets", "stenbockens vändkrets"],
        reason:
          "Läget kring ekvatorn och vändkretsarna gör att Afrika får stora skillnader i värme, regn och torka."
      },
      climate: {
        summary:
          "Varmt och regnigt kring ekvatorn. Därifrån blir det torrare med savann, stäpp och stora ökenområden längre norrut och söderut.",
        tags: ["varmt", "regn vid ekvatorn", "savann", "stäpp", "öken"],
        reason:
          "När man rör sig bort från ekvatorn minskar regnet i många områden och klimatet blir torrare."
      },
      vegetation: {
        summary:
          "Regnskog vid ekvatorn, savann och stäpp i stora områden och öken i till exempel Sahara.",
        tags: ["regnskog", "savann", "stäpp", "öken"],
        reason:
          "Växtligheten följer hur mycket regn som faller och hur varmt det är."
      },
      population: {
        summary:
          "Befolkningen är ojämnt fördelad. Människor lever både i städer och på landsbygden.",
        tags: ["ojämnt fördelad", "städer", "landsbygd"],
        reason:
          "Tillgång till vatten, odlingsbar mark och arbete påverkar var människor kan bo och försörja sig."
      },
      livelihoods: {
        summary:
          "Jordbruk, boskapsskötsel, gruvor, industri och turism är viktiga sätt att försörja sig.",
        tags: ["jordbruk", "boskap", "gruvor", "industri", "turism"],
        reason:
          "Klimatet och naturresurserna påverkar vilka jobb som är vanliga i olika delar av Afrika."
      },
      resources: {
        summary:
          "Afrika har stora tillgångar av diamanter, guld, koppar, järnmalm och olja. Solenergi kan bli viktigare.",
        tags: ["diamanter", "guld", "koppar", "järnmalm", "olja", "solenergi"],
        reason:
          "De stora naturresurserna påverkar både ekonomin och hur länderna kan utvecklas."
      }
    }
  },
  {
    id: "asien",
    name: "Asien",
    intro:
      "Asien är världens största världsdel och sträcker sig från kalla områden i norr till varma och fuktiga områden i söder.",
    memoryHook:
      "Tänk Asien som störst av alla, tätast i öst och syd, kallt i norr och monsun i syd och öst.",
    countries: ["Kina", "Indien", "Japan", "Thailand", "Saudiarabien"],
    keyPlaces: ["Himalaya", "Sibirien", "Arabiska halvön", "Indiska oceanen"],
    cLevel:
      "För C ska Isak kunna visa hur Asiens storlek påverkar klimat, befolkning, naturresurser och försörjning.",
    audio:
      "Asien är världens största världsdel. I norr finns kalla områden med tundra och barrskog. I södra och östra delarna påverkar monsunen klimatet. Inland långt från havet kan vara mycket torrt. Därför finns både tundra, skog, stäpp, öken och regnskog i Asien. Över 4,6 miljarder människor bor här och befolkningen är tätast i öst och syd. Många arbetar fortfarande med jordbruk och fiske, men industrin och tjänsterna växer snabbt. Asien har också stora tillgångar av olja, kol och naturgas.",
    dimensions: {
      location: {
        summary:
          "Världens största världsdel med mycket stora avstånd från norr till söder och från kuster till inland.",
        tags: ["världens största", "långa avstånd", "kust och inland"],
        reason:
          "Den stora ytan gör att natur och klimat skiljer sig mycket mellan olika delar av Asien."
      },
      climate: {
        summary:
          "Kallt i norr, tempererat i vissa delar och tropiskt i söder. Monsun påverkar syd och öst, medan inlandet kan vara torrt.",
        tags: ["kallt i norr", "tempererat", "tropiskt", "monsun", "torrt inland"],
        reason:
          "Storleken, avståndet till haven och bergsområden påverkar både regn och temperatur."
      },
      vegetation: {
        summary:
          "Tundra och barrskog i norr, stäpp och öken i torra inland och regnskog i varma fuktiga delar.",
        tags: ["tundra", "barrskog", "stäpp", "öken", "regnskog"],
        reason:
          "Växtligheten följer klimatet och förändras när regn och temperatur skiftar."
      },
      population: {
        summary:
          "Över 4,6 miljarder människor bor i Asien. Befolkningen är tätast i öst och syd och många bor i stora städer.",
        tags: ["över 4,6 miljarder", "tätast i öst och syd", "stora städer"],
        reason:
          "Klimat, odlingsmark och arbete gör att många människor samlas i vissa delar av Asien."
      },
      livelihoods: {
        summary:
          "Jordbruk och fiske är viktiga, men industrin och tjänsterna har vuxit mycket.",
        tags: ["jordbruk", "fiske", "industri", "tjänster"],
        reason:
          "Den ekonomiska utvecklingen har gjort att fler arbetar i fabriker, städer och serviceyrken."
      },
      resources: {
        summary:
          "Asien har stora tillgångar av olja, kol och naturgas och i vissa delar också mycket bördig jord.",
        tags: ["olja", "kol", "naturgas", "bördig jord"],
        reason:
          "Naturresurserna påverkar hur länder tjänar pengar och vilka näringar som blir viktiga."
      }
    }
  },
  {
    id: "nordamerika",
    name: "Nordamerika",
    intro:
      "Nordamerika sträcker sig från arktiska områden i norr till varmare delar i söder och har stora naturresurser.",
    memoryHook:
      "Tänk Nordamerika som kallt i norr, tätare befolkat i söder och rikt på jord, olja och naturgas.",
    countries: ["Kanada", "USA", "Mexiko"],
    keyPlaces: ["Klippiga bergen", "Stora sjöarna", "Hudson Bay", "Centralamerika"],
    cLevel:
      "För C ska Isak kunna koppla Nordamerikas klimat och naturresurser till befolkning, näringar och stora städer.",
    audio:
      "I Nordamerika bor ungefär 590 miljoner människor. De flesta bor i söder, vid kusterna och kring de stora sjöarna. I norr finns mycket kalla områden. I mitten finns breda slätter och i väster Klippiga bergen. Klimatet varierar från polarklimat i norr till subtropiskt klimat i söder. Västkusten är mildare tack vare Stilla havet. Här finns tundra, barrskog, prärie och öken. Nordamerika har bördig jord och stora tillgångar av järnmalm, olja och naturgas. Många arbetar i industri och tjänster.",
    dimensions: {
      location: {
        summary:
          "Sträcker sig från arktiska områden i norr till Centralamerika i söder. I väster finns Klippiga bergen och i öster de stora sjöarna.",
        tags: ["arktiska områden", "stora sjöar", "Klippiga bergen"],
        reason:
          "Det stora nord-sydliga läget gör att både naturen och klimatet skiftar mycket mellan olika delar."
      },
      climate: {
        summary:
          "Polarklimat i norr, inlandsklimat i stora delar och subtropiskt klimat i söder. Västkusten är mildare tack vare havet.",
        tags: ["polarklimat", "inlandsklimat", "subtropiskt", "mild västkust"],
        reason:
          "Breddgrad, avstånd till havet och bergskedjor påverkar både nederbörd och temperatur."
      },
      vegetation: {
        summary:
          "Tundra i norr, barrskog, prärie och torra ökenområden längre söderut.",
        tags: ["tundra", "barrskog", "prärie", "öken"],
        reason:
          "När klimatet skiftar mellan kallt, torrt och mildare förändras också växtligheten."
      },
      population: {
        summary:
          "Omkring 590 miljoner människor bor här. De flesta bor i söder och i stora städer vid kusterna och runt de stora sjöarna.",
        tags: ["590 miljoner", "fler i söder", "stora städer"],
        reason:
          "Mildare klimat, arbeten och viktiga transportlägen gör att fler bor i södra och tätare delar."
      },
      livelihoods: {
        summary:
          "Många arbetar i industri och tjänster. Jordbruket är också viktigt.",
        tags: ["industri", "tjänster", "jordbruk"],
        reason:
          "Naturresurser, teknik och stora marknader har gjort industri, service och jordbruk viktiga."
      },
      resources: {
        summary:
          "Har mycket bördig jord och stora tillgångar av järnmalm, olja och naturgas.",
        tags: ["bördig jord", "järnmalm", "olja", "naturgas"],
        reason:
          "De stora naturresurserna påverkar både ekonomin och vilka näringar som dominerar."
      }
    }
  },
  {
    id: "sydamerika",
    name: "Sydamerika",
    intro:
      "Sydamerika är en lång världsdel med Anderna längs västsidan och Amazonas i norr.",
    memoryHook:
      "Tänk Sydamerika som Anderna i väster, Amazonas i norr och stora skillnader mellan regnskog, savann och torrare områden.",
    countries: ["Brasilien", "Argentina", "Chile", "Peru", "Bolivia"],
    keyPlaces: ["Anderna", "Amazonas", "Patagonien", "Eldslandet"],
    cLevel:
      "För C ska Isak kunna förklara hur Anderna, Amazonas och de olika klimatzonerna påverkar natur, resurser och försörjning i Sydamerika.",
    audio:
      "Den största delen av Sydamerika ligger i den tropiska klimatzonen. Söderut finns subtropisk zon och längst i söder tempererad zon. Längs västsidan ligger Anderna. I norr finns Amazonas med regnskog. Därför finns både regnskog, savann och torrare områden. Sydamerika har flera viktiga naturresurser som olja, metaller, bördig jord, vattenkraft och skog. Jordbruk, boskapsskötsel, fiske, gruvor och industri är viktiga näringar.",
    dimensions: {
      location: {
        summary:
          "En lång världsdel med Anderna längs västsidan och Amazonas i norr. Den sträcker sig långt från norr till söder.",
        tags: ["Anderna", "Amazonas", "lång nord-sydlig sträckning"],
        reason:
          "Den långa sträckningen och bergskedjan i väster gör att klimat och natur skiljer sig mycket mellan olika delar."
      },
      climate: {
        summary:
          "Största delen ligger i den tropiska zonen. Söderut finns subtropisk zon och längst i söder tempererad zon.",
        tags: ["tropisk zon", "subtropisk zon", "tempererad zon"],
        reason:
          "Läget från norr till söder och Andernas påverkan gör att både värme och regn varierar."
      },
      vegetation: {
        summary:
          "Regnskog i Amazonas, savann i vissa delar och torrare vegetation i andra områden.",
        tags: ["regnskog", "savann", "torrare vegetation"],
        reason:
          "Klimatet styr om det blir tät regnskog, gräsmarker eller torrare landskap."
      },
      population: {
        summary:
          "Befolkningen är ojämnt fördelad över världsdelens stora yta.",
        tags: ["ojämnt fördelad"],
        reason:
          "Berg, regnskog, klimat och viktiga transportlägen påverkar var människor lättast kan bo och arbeta."
      },
      livelihoods: {
        summary:
          "Jordbruk, boskapsskötsel, fiske, gruvor och industri är viktiga delar av försörjningen.",
        tags: ["jordbruk", "boskap", "fiske", "gruvor", "industri"],
        reason:
          "Naturresurserna och landskapet styr vilka arbeten som blir vanliga i olika delar av Sydamerika."
      },
      resources: {
        summary:
          "Har olja, metaller, bördig jord, vattenkraft och stora skogsområden.",
        tags: ["olja", "metaller", "bördig jord", "vattenkraft", "skog"],
        reason:
          "Resurserna är viktiga för export och ekonomi men påverkar också hur naturen används."
      }
    }
  },
  {
    id: "oceanien",
    name: "Oceanien",
    intro:
      "Oceanien består av Australien, Nya Zeeland och många öar i Stilla havet.",
    memoryHook:
      "Tänk Oceanien som öar och hav, liten befolkning och stor skillnad mellan Australiens inland och fuktiga öar.",
    countries: ["Australien", "Nya Zeeland", "Fiji", "Papua Nya Guinea"],
    keyPlaces: ["Stilla havet", "Australien", "Nya Zeeland", "Stillahavsöarna"],
    cLevel:
      "För C ska Isak kunna koppla Oceaniens ö-läge, klimat och naturresurser till turism, fiske, jordbruk och andra näringar.",
    audio:
      "Oceanien är en liten världsdel som består av Australien, Nya Zeeland och många öar i Stilla havet. Klimatet varierar. På många öar är det tropiskt, medan stora delar av Australiens inland är torra. Nya Zeeland har också svalare områden. Befolkningen är liten jämfört med andra världsdelar och många bor vid kusterna. Turism, jordbruk, fiske och gruvarbete är viktiga. Havet och naturen betyder mycket för både vardag och ekonomi i Oceanien.",
    dimensions: {
      location: {
        summary:
          "Består av Australien, Nya Zeeland och många öar i Stilla havet.",
        tags: ["öar", "Australien", "Nya Zeeland", "Stilla havet"],
        reason:
          "När en världsdel består av öar och stora havsområden blir havet viktigt för transporter, fiske och kontakt."
      },
      climate: {
        summary:
          "Tropiskt på många öar, torrare i Australiens inland och svalare i delar av Nya Zeeland.",
        tags: ["tropiskt", "torrt inland", "svalare söderut"],
        reason:
          "Läget i havet och skillnader mellan öar och fastland gör att klimatet varierar mycket."
      },
      vegetation: {
        summary:
          "Regnskog och annan frodig växtlighet på fuktiga platser men torrare växtlighet i Australiens inland.",
        tags: ["regnskog", "fuktig växtlighet", "torrare inland"],
        reason:
          "Växtligheten följer regn, torka och hur nära havet olika områden ligger."
      },
      population: {
        summary:
          "Befolkningen är liten jämfört med andra världsdelar och många bor kustnära.",
        tags: ["liten befolkning", "kustnära"],
        reason:
          "Kusterna ger lättare transporter, bättre service och fler arbeten än torrare och mer avlägsna inland."
      },
      livelihoods: {
        summary:
          "Turism, jordbruk, fiske, gruvarbete och olika tjänster är viktiga.",
        tags: ["turism", "jordbruk", "fiske", "gruvarbete", "tjänster"],
        reason:
          "Havet, naturen och naturresurserna påverkar vilka jobb som blir vanliga i Oceanien."
      },
      resources: {
        summary:
          "Natur, fisk, jordbruksmark och olika mineraler är viktiga resurser i olika delar av Oceanien.",
        tags: ["fisk", "jordbruksmark", "mineraler", "natur"],
        reason:
          "Resurserna används både för försörjning i vardagen och för export och turism."
      }
    }
  },
  {
    id: "antarktis",
    name: "Antarktis",
    intro:
      "Antarktis ligger runt sydpolen och är den kallaste världsdelen. Nästan hela världsdelen är täckt av is.",
    memoryHook:
      "Tänk Antarktis som is, kyla, starka vindar, forskning och ingen permanent befolkning.",
    countries: [],
    keyPlaces: ["Sydpolen", "Inlandsisen", "Södra ishavet"],
    cLevel:
      "För C räcker det att kunna förklara hur det extrema klimatet påverkar växtlighet, människor och varför Antarktis främst används för forskning.",
    audio:
      "Antarktis ligger runt sydpolen. Nästan hela världsdelen är täckt av is. Vintern kan bli kallare än minus 80 grader och sommartid blir det ändå sällan varmare än noll. Det finns också kraftiga vindar och snöstormar. Därför finns ingen permanent befolkning. Bara forskare arbetar där under perioder. Antarktis är viktig eftersom stora mängder sötvatten finns bundet i isen och för att forskare kan studera klimatet där.",
    dimensions: {
      location: {
        summary:
          "Ligger runt sydpolen och är omgiven av hav.",
        tags: ["sydpolen", "omgiven av hav"],
        reason:
          "Det extrema läget längst i söder gör att solen värmer mycket lite under stora delar av året."
      },
      climate: {
        summary:
          "Mycket kallt klimat med is, snö, kraftiga vindar och snöstormar. Vintern kan bli kallare än minus 80 grader.",
        tags: ["mycket kallt", "is", "snö", "stormar"],
        reason:
          "Den låga solvärmen och all is gör att Antarktis blir jordens kallaste världsdel."
      },
      vegetation: {
        summary:
          "Mycket lite växtlighet på land eftersom klimatet är så kallt och isigt.",
        tags: ["mycket lite växtlighet"],
        reason:
          "Den extrema kylan och isen gör det svårt för växter att växa."
      },
      population: {
        summary:
          "Ingen permanent befolkning. Bara forskare vistas där under vissa perioder.",
        tags: ["ingen permanent befolkning", "forskare"],
        reason:
          "Det hårda klimatet gör vanligt vardagsliv mycket svårt."
      },
      livelihoods: {
        summary:
          "Forskning är det viktigaste som människor gör i Antarktis.",
        tags: ["forskning"],
        reason:
          "Antarktis används främst för att förstå klimat, is och natur i extrem kyla."
      },
      resources: {
        summary:
          "Stora mängder sötvatten finns bundet i isen. Antarktis är också viktig för klimatforskning.",
        tags: ["sötvatten i is", "klimatforskning"],
        reason:
          "Isen och forskningen gör Antarktis viktig för att förstå jordens klimat och vatten."
      }
    }
  }
];

const guideAreas = [
  {
    key: "location",
    label: "Läge",
    prompt: "Var ligger den på jordklotet? Vilka hav, gränser eller stora områden hör ihop med den?"
  },
  {
    key: "climate",
    label: "Klimat",
    prompt: "Vilka klimatzoner eller klimat finns? Till exempel tropiskt, subtropiskt, tempererat eller polarzon."
  },
  {
    key: "vegetation",
    label: "Vegetation",
    prompt: "Vad växer där? Till exempel regnskog, öken, savann eller barrskog. Hur hänger det ihop med klimatet?"
  },
  {
    key: "population",
    label: "Befolkning",
    prompt: "Var bor folk, och var är det glesare? Varför bor människor just där?"
  },
  {
    key: "livelihoods",
    label: "Försörjning",
    prompt: "Vad arbetar människor med, till exempel industri, turism, jordbruk eller fiske? Hur används naturen i jobben?"
  },
  {
    key: "resources",
    label: "Naturresurser",
    prompt: "Vilka rikedomar finns? Tänk både på förnybara och icke-förnybara resurser."
  }
];

const comparisonWords = {
  different: ["däremot", "till skillnad från", "å andra sidan"],
  similar: ["på samma sätt som", "precis som", "båda världsdelarna har"]
};

const areaExamplesByContinent = {
  europa: {
    location: "Uralbergen, Kaspiska havet och Svarta havet",
    climate: "kustklimat i väster och medelhavsklimat i söder",
    vegetation: "tundra i norr och skog i stora delar",
    population: "många människor i städer",
    livelihoods: "handel, transport och IT",
    resources: "bördig jord, stora floder och järnmalm"
  },
  afrika: {
    location: "ekvatorn mitt på kontinenten och Sahara i norr",
    climate: "regn vid ekvatorn men torrare längre bort",
    vegetation: "regnskog, savann och öken",
    population: "människor i både städer och på landsbygden",
    livelihoods: "jordbruk, boskapsskötsel och gruvor",
    resources: "diamanter, guld, koppar och olja"
  },
  asien: {
    location: "Sibirien i norr och den arabiska halvön i sydväst",
    climate: "monsun i syd och öst men torrt inland",
    vegetation: "tundra i norr och regnskog i varma fuktiga delar",
    population: "mycket tät befolkning i öst och syd",
    livelihoods: "jordbruk, fiske, industri och tjänster",
    resources: "olja, kol och naturgas"
  },
  nordamerika: {
    location: "Klippiga bergen i väster och de stora sjöarna i öster",
    climate: "polarklimat i norr och subtropiskt klimat i söder",
    vegetation: "tundra i norr och prärie längre söderut",
    population: "många bor i söder och runt de stora sjöarna",
    livelihoods: "industri, tjänster och jordbruk",
    resources: "bördig jord, olja och naturgas"
  },
  sydamerika: {
    location: "Anderna i väster och Amazonas i norr",
    climate: "tropisk zon i stora delar och tempererad zon längst i söder",
    vegetation: "regnskog i Amazonas och savann i andra delar",
    population: "ojämn befolkning över den stora ytan",
    livelihoods: "jordbruk, fiske, gruvor och industri",
    resources: "olja, metaller, vattenkraft och skog"
  },
  oceanien: {
    location: "Australien, Nya Zeeland och många öar i Stilla havet",
    climate: "tropiskt på många öar men torrare i Australiens inland",
    vegetation: "frodig växtlighet på fuktiga öar och torrare inland i Australien",
    population: "många bor nära kusterna",
    livelihoods: "turism, fiske, jordbruk och gruvarbete",
    resources: "fisk, jordbruksmark och mineraler"
  },
  antarktis: {
    location: "sydpolen och den stora inlandsisen",
    climate: "extrem kyla, kraftiga vindar och snöstormar",
    vegetation: "mycket lite växtlighet",
    population: "forskare under kortare perioder",
    livelihoods: "forskning om klimat, is och natur",
    resources: "sötvatten bundet i isen"
  }
};

function renderTagChips(tags = []) {
  return `
    <div class="tag-chip-row">
      ${tags.map((tag) => `<span class="tag-chip">${tag}</span>`).join("")}
    </div>
  `;
}

const drillCollections = {
  hav: [
    {
      id: "hav-1",
      front: "Stilla havet",
      back:
        "Världens största ocean. Ligger mellan Asien/Oceanien och Nord-/Sydamerika."
    },
    {
      id: "hav-2",
      front: "Atlanten",
      back: "Ligger mellan Amerika i väster och Europa/Afrika i öster."
    },
    {
      id: "hav-3",
      front: "Indiska oceanen",
      back: "Ligger mellan Afrika, Asien och Australien."
    },
    {
      id: "hav-4",
      front: "Norra ishavet",
      back: "Finns kring Arktis norr om Europa, Asien och Nordamerika."
    },
    {
      id: "hav-5",
      front: "Södra ishavet",
      back: "Omgiver Antarktis."
    }
  ],
  berg: [
    {
      id: "berg-1",
      front: "Himalaya",
      back: "Ligger i Asien. Här finns Mount Everest."
    },
    {
      id: "berg-2",
      front: "Anderna",
      back: "Lång bergskedja längs Sydamerikas västkust."
    },
    {
      id: "berg-3",
      front: "Klippiga bergen",
      back: "Ligger i västra Nordamerika."
    },
    {
      id: "berg-4",
      front: "Alperna",
      back: "Ligger i Europa och sträcker sig genom flera länder."
    },
    {
      id: "berg-5",
      front: "Atlasbergen",
      back: "Ligger i nordvästra Afrika."
    },
    {
      id: "berg-6",
      front: "Uralbergen",
      back: "Brukar användas som gräns mellan Europa och Asien."
    }
  ],
  floder: [
    {
      id: "flod-1",
      front: "Nilen",
      back: "Finns i Afrika och är en mycket viktig flod för jordbruk och städer."
    },
    {
      id: "flod-2",
      front: "Amazonas",
      back: "Stor flod i Sydamerika som rinner genom regnskog."
    },
    {
      id: "flod-3",
      front: "Mississippi",
      back: "Stor flod i Nordamerika."
    },
    {
      id: "flod-4",
      front: "Ganges",
      back: "Viktig flod i Asien, framför allt i Indien och Bangladesh."
    },
    {
      id: "flod-5",
      front: "Yangtze",
      back: "Lång flod i Kina i Asien."
    },
    {
      id: "flod-6",
      front: "Donau",
      back: "Stor europeisk flod som flyter genom flera länder."
    }
  ],
  regioner: [
    {
      id: "region-1",
      front: "Skandinavien",
      back: "Sverige, Norge och Danmark."
    },
    {
      id: "region-2",
      front: "Mellanöstern",
      back: "Region mellan Europa, Asien och Afrika. Kändes bland annat för olja och torra klimat."
    },
    {
      id: "region-3",
      front: "Sydostasien",
      back: "Region i Asien med bland annat Thailand, Vietnam och Indonesien."
    },
    {
      id: "region-4",
      front: "Centralamerika",
      back: "Område mellan Nordamerika och Sydamerika."
    },
    {
      id: "region-5",
      front: "Sahara",
      back: "Stor ökenregion i norra Afrika."
    },
    {
      id: "region-6",
      front: "Sahel",
      back: "Halvtorrt övergångsområde söder om Sahara."
    }
  ],
  lander: [
    { id: "land-1", front: "Sverige", back: "Huvudstad: Stockholm" },
    { id: "land-2", front: "Norge", back: "Huvudstad: Oslo" },
    { id: "land-3", front: "Finland", back: "Huvudstad: Helsingfors" },
    { id: "land-4", front: "Storbritannien", back: "Huvudstad: London" },
    { id: "land-5", front: "Frankrike", back: "Huvudstad: Paris" },
    { id: "land-6", front: "Tyskland", back: "Huvudstad: Berlin" },
    { id: "land-7", front: "Spanien", back: "Huvudstad: Madrid" },
    { id: "land-8", front: "Italien", back: "Huvudstad: Rom" },
    { id: "land-9", front: "Ukraina", back: "Huvudstad: Kyiv" },
    { id: "land-10", front: "Egypten", back: "Huvudstad: Kairo" },
    { id: "land-11", front: "Kenya", back: "Huvudstad: Nairobi" },
    { id: "land-12", front: "Nigeria", back: "Huvudstad: Abuja" },
    { id: "land-13", front: "Kina", back: "Huvudstad: Peking" },
    { id: "land-14", front: "Japan", back: "Huvudstad: Tokyo" },
    { id: "land-15", front: "Indien", back: "Huvudstad: New Delhi" },
    { id: "land-16", front: "Thailand", back: "Huvudstad: Bangkok" },
    { id: "land-17", front: "USA", back: "Huvudstad: Washington, D.C." },
    { id: "land-18", front: "Kanada", back: "Huvudstad: Ottawa" },
    { id: "land-19", front: "Mexiko", back: "Huvudstad: Mexico City" },
    { id: "land-20", front: "Brasilien", back: "Huvudstad: Brasilia" },
    { id: "land-21", front: "Argentina", back: "Huvudstad: Buenos Aires" },
    { id: "land-22", front: "Chile", back: "Huvudstad: Santiago" },
    { id: "land-23", front: "Australien", back: "Huvudstad: Canberra" },
    { id: "land-24", front: "Nya Zeeland", back: "Huvudstad: Wellington" }
  ]
};

const countryQuizItems = [
  { country: "Sverige", capital: "Stockholm", continent: "Europa" },
  { country: "Frankrike", capital: "Paris", continent: "Europa" },
  { country: "Tyskland", capital: "Berlin", continent: "Europa" },
  { country: "Egypten", capital: "Kairo", continent: "Afrika" },
  { country: "Nigeria", capital: "Abuja", continent: "Afrika" },
  { country: "Kenya", capital: "Nairobi", continent: "Afrika" },
  { country: "Kina", capital: "Peking", continent: "Asien" },
  { country: "Indien", capital: "New Delhi", continent: "Asien" },
  { country: "Japan", capital: "Tokyo", continent: "Asien" },
  { country: "Kanada", capital: "Ottawa", continent: "Nordamerika" },
  { country: "USA", capital: "Washington, D.C.", continent: "Nordamerika" },
  { country: "Mexiko", capital: "Mexico City", continent: "Nordamerika" },
  { country: "Brasilien", capital: "Brasilia", continent: "Sydamerika" },
  { country: "Argentina", capital: "Buenos Aires", continent: "Sydamerika" },
  { country: "Chile", capital: "Santiago", continent: "Sydamerika" },
  { country: "Australien", capital: "Canberra", continent: "Oceanien" },
  { country: "Nya Zeeland", capital: "Wellington", continent: "Oceanien" }
];

const blindMapItems = [
  {
    id: "map-stockholm",
    country: "Sverige",
    capital: "Stockholm",
    continent: "Europa",
    x: 548,
    y: 125,
    countryAliases: ["konungariket sverige"],
    capitalAliases: []
  },
  {
    id: "map-paris",
    country: "Frankrike",
    capital: "Paris",
    continent: "Europa",
    x: 486,
    y: 173,
    countryAliases: [],
    capitalAliases: []
  },
  {
    id: "map-berlin",
    country: "Tyskland",
    capital: "Berlin",
    continent: "Europa",
    x: 520,
    y: 163,
    countryAliases: [],
    capitalAliases: []
  },
  {
    id: "map-kairo",
    country: "Egypten",
    capital: "Kairo",
    continent: "Afrika",
    x: 552,
    y: 237,
    countryAliases: [],
    capitalAliases: ["cairo"]
  },
  {
    id: "map-abuja",
    country: "Nigeria",
    capital: "Abuja",
    continent: "Afrika",
    x: 470,
    y: 300,
    countryAliases: [],
    capitalAliases: []
  },
  {
    id: "map-nairobi",
    country: "Kenya",
    capital: "Nairobi",
    continent: "Afrika",
    x: 575,
    y: 318,
    countryAliases: [],
    capitalAliases: []
  },
  {
    id: "map-peking",
    country: "Kina",
    capital: "Peking",
    continent: "Asien",
    x: 770,
    y: 180,
    countryAliases: ["folkrepubliken kina"],
    capitalAliases: ["beijing"]
  },
  {
    id: "map-tokyo",
    country: "Japan",
    capital: "Tokyo",
    continent: "Asien",
    x: 847,
    y: 197,
    countryAliases: [],
    capitalAliases: []
  },
  {
    id: "map-delhi",
    country: "Indien",
    capital: "New Delhi",
    continent: "Asien",
    x: 689,
    y: 236,
    countryAliases: ["india"],
    capitalAliases: ["delhi", "newdelhi"]
  },
  {
    id: "map-bangkok",
    country: "Thailand",
    capital: "Bangkok",
    continent: "Asien",
    x: 740,
    y: 281,
    countryAliases: [],
    capitalAliases: []
  },
  {
    id: "map-ottawa",
    country: "Kanada",
    capital: "Ottawa",
    continent: "Nordamerika",
    x: 217,
    y: 175,
    countryAliases: ["canada"],
    capitalAliases: []
  },
  {
    id: "map-washington",
    country: "USA",
    capital: "Washington, D.C.",
    continent: "Nordamerika",
    x: 224,
    y: 218,
    countryAliases: ["förenta staterna", "united states", "usa"],
    capitalAliases: ["washington dc", "washington d c", "washington"]
  },
  {
    id: "map-mexico-city",
    country: "Mexiko",
    capital: "Mexico City",
    continent: "Nordamerika",
    x: 184,
    y: 267,
    countryAliases: ["mexico"],
    capitalAliases: ["mexiko city", "mexico city"]
  },
  {
    id: "map-brasilia",
    country: "Brasilien",
    capital: "Brasilia",
    continent: "Sydamerika",
    x: 323,
    y: 366,
    countryAliases: ["brasil"],
    capitalAliases: ["brasilia", "brasilia"]
  },
  {
    id: "map-buenos-aires",
    country: "Argentina",
    capital: "Buenos Aires",
    continent: "Sydamerika",
    x: 343,
    y: 455,
    countryAliases: [],
    capitalAliases: ["buenos aires"]
  },
  {
    id: "map-santiago",
    country: "Chile",
    capital: "Santiago",
    continent: "Sydamerika",
    x: 286,
    y: 429,
    countryAliases: [],
    capitalAliases: []
  },
  {
    id: "map-canberra",
    country: "Australien",
    capital: "Canberra",
    continent: "Oceanien",
    x: 867,
    y: 409,
    countryAliases: ["australia"],
    capitalAliases: []
  },
  {
    id: "map-wellington",
    country: "Nya Zeeland",
    capital: "Wellington",
    continent: "Oceanien",
    x: 936,
    y: 454,
    countryAliases: ["new zealand"],
    capitalAliases: []
  }
];

const reasoningQuestions = [
  {
    prompt: "Varför bor många människor nära floder och kuster?",
    answer: "Det är lättare med vatten, transporter, handel och ibland odling.",
    options: [
      "Det är lättare med vatten, transporter, handel och ibland odling.",
      "Det finns aldrig risk för översvämningar där.",
      "Bergig mark är alltid bättre än slätter.",
      "Man får automatiskt mer mineraler där."
    ],
    explanation:
      "Floder och kuster ger ofta vatten, fiske, handel, transporter och goda platser för städer och jordbruk.",
    category: "Resonemang"
  },
  {
    prompt: "Vilket svar visar ett bättre C-resonemang när man jämför världsdelar?",
    answer:
      "Europa är mer tempererat medan Afrika har fler tropiska och torra områden, vilket påverkar vegetation och jobb.",
    options: [
      "Europa är mer tempererat medan Afrika har fler tropiska och torra områden, vilket påverkar vegetation och jobb.",
      "Europa är kallare.",
      "Afrika är varmt.",
      "De ligger inte på samma plats."
    ],
    explanation:
      "På C-nivå vill läraren att eleven förklarar skillnader och kopplar dem till konsekvenser för natur och människor.",
    category: "Resonemang"
  },
  {
    prompt: "Varför kan samma världsdel ha olika vegetationstyper?",
    answer: "För att klimat, nederbörd, höga berg och avstånd till hav varierar.",
    options: [
      "För att klimat, nederbörd, höga berg och avstånd till hav varierar.",
      "För att alla människor planterar olika träd.",
      "För att kartor visar fel.",
      "För att vegetation inte har med klimat att göra."
    ],
    explanation:
      "Vegetation styrs mycket av temperatur och nederbörd. Berg och avstånd till hav kan skapa tydliga skillnader.",
    category: "Resonemang"
  },
  {
    prompt: "Varför är naturresurser viktiga i geografi?",
    answer:
      "De påverkar hur människor bor, arbetar, handlar och hur landskapet används.",
    options: [
      "De påverkar hur människor bor, arbetar, handlar och hur landskapet används.",
      "De visar bara var berg ligger.",
      "De betyder inget för klimatet.",
      "De finns bara i Europa."
    ],
    explanation:
      "Resurser som vatten, skog, metaller och odlingsmark påverkar både livsmiljö och ekonomi.",
    category: "Resonemang"
  },
  {
    prompt: "Vilket exempel är bäst om du ska förklara försörjning?",
    answer:
      "Hur människor tjänar pengar, till exempel genom jordbruk, industri, handel eller turism.",
    options: [
      "Hur människor tjänar pengar, till exempel genom jordbruk, industri, handel eller turism.",
      "Vilket land som är störst på kartan.",
      "Hur många bokstäver en huvudstad har.",
      "Hur man ritar gradnät."
    ],
    explanation:
      "Försörjning handlar om hur människor arbetar och får inkomst.",
    category: "Resonemang"
  },
  {
    prompt: "Vilken förklaring visar samband mellan klimat och befolkning?",
    answer:
      "Där klimatet gör det lättare att odla, resa och bygga städer bor ofta fler människor.",
    options: [
      "Där klimatet gör det lättare att odla, resa och bygga städer bor ofta fler människor.",
      "Människor bor alltid på den kallaste platsen.",
      "Befolkning har inget att göra med klimat.",
      "Alla bor på samma sätt i hela världen."
    ],
    explanation:
      "Klimat påverkar vatten, odling, transporter och risker, vilket i sin tur påverkar befolkning och bosättning.",
    category: "Resonemang"
  }
];

const continentNamePool = continents.map((continent) => continent.name);
const capitalPool = countryQuizItems.map((item) => item.capital);
const countryPool = countryQuizItems.map((item) => item.country);
const planStartIso = "2026-03-14";
const examDateIso = "2026-03-20";
const lessonDurationMinutes = 15;
const comparisonPresets = [
  {
    id: "europa-afrika",
    compareA: "europa",
    compareB: "afrika",
    label: "Europa och Afrika",
    detail: "Klimat, befolkning och naturresurser"
  },
  {
    id: "asien-nordamerika",
    compareA: "asien",
    compareB: "nordamerika",
    label: "Asien och Nordamerika",
    detail: "Storlek, klimat och försörjning"
  },
  {
    id: "nordamerika-sydamerika",
    compareA: "nordamerika",
    compareB: "sydamerika",
    label: "Nordamerika och Sydamerika",
    detail: "Natur, städer och resurser"
  }
];

const writingPrompts = [
  {
    id: "prompt-europa-afrika",
    title: "Textfråga: Jämför Europa och Afrika",
    description:
      "Förklara skillnader och likheter mellan Europa och Afrika utifrån klimat, befolkning, naturresurser och försörjning.",
    supportPoints: [
      "Börja med vad som är lika eller olika.",
      "Förklara varför det ser ut så med geografiord.",
      "Ge minst ett tydligt exempel från båda världsdelarna.",
      "Skriv 4 till 6 meningar i lugn, tydlig ordning."
    ],
    compareA: "europa",
    compareB: "afrika",
    target: "C"
  },
  {
    id: "prompt-asien-nordamerika",
    title: "Textfråga: Jämför Asien och Nordamerika",
    description:
      "Förklara hur läge, klimat och naturresurser påverkar hur människor bor och arbetar i Asien och Nordamerika.",
    supportPoints: [
      "Säg något om läge eller storlek.",
      "Koppla klimat till befolkning, vegetation eller jobb.",
      "Ge exempel från båda världsdelarna.",
      "Skriv ett sammanhängande jämförelsesvar."
    ],
    compareA: "asien",
    compareB: "nordamerika",
    target: "C"
  },
  {
    id: "prompt-nordamerika-sydamerika",
    title: "Textfråga: Jämför Nordamerika och Sydamerika",
    description:
      "Jämför Nordamerika och Sydamerika och förklara hur natur, befolkning och naturresurser påverkar människors liv.",
    supportPoints: [
      "Berätta något som är lika eller olika.",
      "Förklara varför med klimat, natur eller resurser.",
      "Ge minst ett tydligt exempel från båda.",
      "Skriv så att svaret låter som ett utvecklat resonemang."
    ],
    compareA: "nordamerika",
    compareB: "sydamerika",
    target: "C"
  }
];

const lessons = [
  {
    id: "lesson-1",
    order: 1,
    title: "Europa och Afrika",
    theme: "Fem tydliga delar i lugn ordning.",
    summary:
      "Först lyssnar Isak på Europa. Sedan Afrika. Efter det lyssnar han på jämförelsen, svarar på textfrågan och avslutar med ett kort belöningsspel.",
    steps: [
      {
        minutes: 3,
        mode: "Första världsdelen",
        description: "Lyssna på Europa i lugn takt.",
        action: { type: "listen", trackId: "track-europa" }
      },
      {
        minutes: 3,
        mode: "Andra världsdelen",
        description: "Lyssna på Afrika i lugn takt.",
        action: { type: "listen", trackId: "track-afrika" }
      },
      {
        minutes: 3,
        mode: "Jämförelsen",
        description: "Lyssna på jämförelsen mellan Europa och Afrika.",
        action: { type: "listen", trackId: "track-compare", compareA: "europa", compareB: "afrika" }
      },
      {
        minutes: 5,
        mode: "Textfrågan",
        description: "Svara på textfrågan om Europa och Afrika.",
        action: { type: "writing", promptId: "prompt-europa-afrika", compareA: "europa", compareB: "afrika" }
      },
      {
        minutes: 1,
        mode: "Belöningsspel",
        description: "Spela Flappy Globe som en kort belöning.",
        action: { type: "game" }
      }
    ]
  },
  {
    id: "lesson-2",
    order: 2,
    title: "Asien och Nordamerika",
    theme: "Samma tydliga femstegsflöde.",
    summary:
      "Isak följer samma lugna ordning: lyssna på båda världsdelarna, lyssna på jämförelsen, svara på textfrågan och avsluta med en snabb belöning.",
    steps: [
      {
        minutes: 3,
        mode: "Första världsdelen",
        description: "Lyssna på Asien.",
        action: { type: "listen", trackId: "track-asien" }
      },
      {
        minutes: 3,
        mode: "Andra världsdelen",
        description: "Lyssna på Nordamerika.",
        action: { type: "listen", trackId: "track-nordamerika" }
      },
      {
        minutes: 3,
        mode: "Jämförelsen",
        description: "Lyssna på jämförelsen mellan Asien och Nordamerika.",
        action: { type: "listen", trackId: "track-compare", compareA: "asien", compareB: "nordamerika" }
      },
      {
        minutes: 5,
        mode: "Textfrågan",
        description: "Svara på textfrågan om Asien och Nordamerika.",
        action: { type: "writing", promptId: "prompt-asien-nordamerika", compareA: "asien", compareB: "nordamerika" }
      },
      {
        minutes: 1,
        mode: "Belöningsspel",
        description: "Spela Flappy Globe som en kort belöning.",
        action: { type: "game" }
      }
    ]
  },
  {
    id: "lesson-3",
    order: 3,
    title: "Nordamerika och Sydamerika",
    theme: "Lyssna först, skriv sedan och avsluta lätt.",
    summary:
      "Här tränar Isak på två världsdelar som ligger nära varandra på kartan men skiljer sig i natur, befolkning och resurser, och avslutar med en kort spelbelöning.",
    steps: [
      {
        minutes: 3,
        mode: "Första världsdelen",
        description: "Lyssna på Nordamerika.",
        action: { type: "listen", trackId: "track-nordamerika" }
      },
      {
        minutes: 3,
        mode: "Andra världsdelen",
        description: "Lyssna på Sydamerika.",
        action: { type: "listen", trackId: "track-sydamerika" }
      },
      {
        minutes: 3,
        mode: "Jämförelsen",
        description: "Lyssna på jämförelsen mellan Nordamerika och Sydamerika.",
        action: { type: "listen", trackId: "track-compare", compareA: "nordamerika", compareB: "sydamerika" }
      },
      {
        minutes: 5,
        mode: "Textfrågan",
        description: "Svara på textfrågan om Nordamerika och Sydamerika.",
        action: { type: "writing", promptId: "prompt-nordamerika-sydamerika", compareA: "nordamerika", compareB: "sydamerika" }
      },
      {
        minutes: 1,
        mode: "Belöningsspel",
        description: "Spela Flappy Globe som en kort belöning.",
        action: { type: "game" }
      }
    ]
  }
];

const appState = {
  activeTab: "quickpass",
  selectedLessonId: "",
  completedLessons: new Set(loadSavedJson("geografi-completed-lessons", [])),
  guidedLessonId: null,
  guidedStepIndex: 0,
  guidedStepRemaining: 0,
  guidedStepTotalSeconds: 0,
  guidedStepRunning: false,
  guidedStepDone: false,
  guidedStepInterval: null,
  selectedContinent: continents[0].id,
  selectedDrillCategory: "lander",
  revealedCards: new Set(),
  drillDrafts: {},
  drillResults: {},
  listenTrackId: "track-europa",
  quizBank: [],
  quizRound: [],
  quizIndex: 0,
  quizScore: 0,
  quizAnswered: false,
  quizFinished: false,
  mapQuizRound: [],
  mapQuizIndex: 0,
  mapQuizScore: 0,
  mapQuizAnswered: false,
  mapQuizFinished: false,
  mapQuizDraft: "",
  lessonCompareA: "",
  lessonCompareB: "",
  compareA: "",
  compareB: "",
  selectedComparePresetId: "",
  comparisonVersion: 0,
  comparisonNotes: loadSavedJson("geografi-comparison-notes", {}),
  selectedWritingPromptId: writingPrompts[0].id,
  writingDrafts: loadSavedJson("geografi-writing-drafts", {}),
  gradingResult: null,
  gradingLoading: false,
  rewardGameBest: loadSavedJson("geografi-reward-game-best", 0),
  rewardGameScore: 0,
  rewardGameRunning: false,
  rewardGameStarted: false,
  rewardGameCrashed: false,
  rewardGameAnimationFrame: null,
  rewardGameLastTime: 0,
  rewardGamePendingBoost: false,
  rewardGameGlobeY: 160,
  rewardGameGlobeVelocity: 0,
  rewardGameObstacles: [],
  rewardGameMessage: "Tryck på start och hjälp globen mellan öarna.",
  stats: loadSavedJson("geografi-stats", {
    quizRounds: 0,
    bestScore: 0,
    notesSaved: 0
  }),
  ttsAvailable: false,
  ttsLoading: false,
  ttsVoice: "",
  availableTtsVoices: [],
  ttsStatusTone: "muted",
  ttsStatusMessage: "Kontrollerar uppläsningstjänst...",
  ttsLastError: "",
  ttsAudio: null,
  ttsAudioUrl: null,
  ttsPlayToken: 0,
  ttsCache: new Map(),
  ttsWarmupTimer: null,
  bookImages: [],
  imageUrls: []
};

const drillCategoryNames = {
  hav: "Världshav",
  berg: "Bergskedjor",
  floder: "Floder",
  regioner: "Regioner",
  lander: "Länder och huvudstäder"
};

function loadSavedJson(key, fallback) {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    return fallback;
  }
}

function saveJson(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn(`Could not save ${key}`, error);
  }
}

function shuffle(items) {
  const next = [...items];
  for (let index = next.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [next[index], next[randomIndex]] = [next[randomIndex], next[index]];
  }
  return next;
}

function sample(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function sampleSeveral(list, count, excluded = []) {
  return shuffle(list.filter((item) => !excluded.includes(item))).slice(0, count);
}

function formatTimer(seconds) {
  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const remainder = String(seconds % 60).padStart(2, "0");
  return `${minutes}:${remainder}`;
}

function setActiveTab(tabId) {
  if (tabId !== "game") {
    stopRewardGameLoop();
    updateRewardGameHud();
  }
  if (tabId === "game") {
    renderRewardGamePanel();
  }
  appState.activeTab = tabId;
  document.querySelectorAll(".tab").forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === tabId);
  });
  document.querySelectorAll(".panel").forEach((panel) => {
    panel.classList.toggle("active", panel.id === `panel-${tabId}`);
  });
}

function continentById(id) {
  return continents.find((continent) => continent.id === id);
}

function renderStats() {
  const statsGrid = document.querySelector("#stats-grid");
  const savedNoteCount = Object.values(appState.comparisonNotes).filter(Boolean).length;
  const completedCount = appState.completedLessons.size;

  const stats = [
    {
      label: "Klara lektioner",
      value: `${completedCount}/${lessons.length}`,
      detail: "Varje lektion är planerad till ungefär 15 minuter."
    },
    {
      label: "Studietid",
      value: `${getStudiedMinutes()} min`,
      detail: "Appen räknar 15 minuter per avklarad lektion."
    },
    {
      label: "Bästa quizresultat",
      value: `${appState.stats.bestScore}%`,
      detail: "75 procent eller mer är ett bra steg mot C."
    },
    {
      label: "Sparade stöd",
      value: savedNoteCount + appState.bookImages.length,
      detail: "Jämförelsenoter och bokbilder hjälper när något känns svårt."
    }
  ];

  statsGrid.innerHTML = stats
    .map(
      (stat) => `
        <article>
          <p class="panel-label">${stat.label}</p>
          <strong>${stat.value}</strong>
          <p class="microcopy">${stat.detail}</p>
        </article>
      `
    )
    .join("");
}

function parseLocalDate(isoDate) {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Date(year, month - 1, day, 12, 0, 0);
}

function lessonById(lessonId) {
  const dynamicLesson = buildSelectedLesson();
  if (dynamicLesson?.id === lessonId) {
    return dynamicLesson;
  }
  return lessons.find((lesson) => lesson.id === lessonId);
}

function writingPromptById(promptId) {
  const savedPrompt = writingPrompts.find((prompt) => prompt.id === promptId);
  if (savedPrompt) {
    return savedPrompt;
  }

  const match = String(promptId || "").match(/^prompt-dynamic-(.+)-(.+)$/);
  if (!match) {
    return undefined;
  }

  return buildWritingPromptForPair(match[1], match[2]);
}

function getStudiedMinutes() {
  return appState.completedLessons.size * lessonDurationMinutes;
}

function getNextLesson() {
  return buildSelectedLesson();
}

function selectedLesson() {
  return buildSelectedLesson();
}

function nextLessonAfter(lesson) {
  return null;
}

function lessonWritingStep(lesson) {
  return lesson?.steps.find((step) => step.action.type === "writing") || null;
}

function lessonComparisonPair(lesson) {
  const compareAction = lesson?.steps.find(
    (step) => step.action.compareA && step.action.compareB
  )?.action;

  if (compareAction?.compareA && compareAction?.compareB) {
    return {
      compareA: compareAction.compareA,
      compareB: compareAction.compareB
    };
  }

  const prompt = writingPromptById(lessonWritingStep(lesson)?.action.promptId);
  if (prompt?.compareA && prompt?.compareB) {
    return {
      compareA: prompt.compareA,
      compareB: prompt.compareB
    };
  }

  return null;
}

function buildWritingPromptForPair(compareA, compareB) {
  const first = continentById(compareA);
  const second = continentById(compareB);
  if (!first || !second) {
    return undefined;
  }

  return {
    id: `prompt-dynamic-${compareA}-${compareB}`,
    title: `Förhör: Jämför ${first.name} och ${second.name}`,
    description:
      `Du blir förhörd på jämförelsen mellan ${first.name} och ${second.name}. Förklara skillnader och likheter utifrån klimat, befolkning, naturresurser och försörjning.`,
    supportPoints: [
      "Svara på jämförelsen mellan de två världsdelarna, inte om bara en av dem.",
      "Börja med vad som är lika eller olika.",
      "Förklara varför det ser ut så med geografiord.",
      "Ge minst ett tydligt exempel från båda världsdelarna.",
      "Skriv 4 till 6 meningar i lugn, tydlig ordning."
    ],
    compareA,
    compareB,
    target: "C"
  };
}

function buildSelectedLesson() {
  const first = continentById(appState.lessonCompareA);
  const second = continentById(appState.lessonCompareB);
  if (!first || !second) {
    return null;
  }

  const prompt = buildWritingPromptForPair(first.id, second.id);
  return {
    id: `lesson-dynamic-${first.id}-${second.id}`,
    order: 1,
    title: `${first.name} och ${second.name}`,
    theme: "Fem tydliga delar i lugn ordning.",
    summary:
      `Först lyssnar Isak på ${first.name}. Sedan ${second.name}. Efter det lyssnar han på jämförelsen, svarar på textfrågan och avslutar med ett kort belöningsspel.`,
    steps: [
      {
        minutes: 3,
        mode: "Första världsdelen",
        description: `Lyssna på ${first.name} i lugn takt.`,
        action: { type: "listen", trackId: `track-${first.id}` }
      },
      {
        minutes: 3,
        mode: "Andra världsdelen",
        description: `Lyssna på ${second.name} i lugn takt.`,
        action: { type: "listen", trackId: `track-${second.id}` }
      },
      {
        minutes: 3,
        mode: "Jämförelsen",
        description: `Lyssna på jämförelsen mellan ${first.name} och ${second.name}.`,
        action: { type: "listen", trackId: "track-compare", compareA: first.id, compareB: second.id }
      },
      {
        minutes: 5,
        mode: "Textfrågan",
        description: `Svara på textfrågan om ${first.name} och ${second.name}.`,
        action: { type: "writing", promptId: prompt.id, compareA: first.id, compareB: second.id }
      },
      {
        minutes: 1,
        mode: "Belöningsspel",
        description: "Spela Flappy Globe som en kort belöning.",
        action: { type: "game" }
      }
    ]
  };
}

function recommendedWritingPromptId() {
  const activeStep = guidedStep();
  if (guidedLesson() && activeStep?.action.type === "writing") {
    return activeStep.action.promptId;
  }

  const lesson = guidedLessonIsComplete() ? selectedLesson() : guidedLesson() || selectedLesson();
  return lessonWritingStep(lesson)?.action.promptId || writingPrompts[0].id;
}

function recommendedWritingLesson() {
  if (guidedLesson() && guidedStep()?.action.type === "writing") {
    return guidedLesson();
  }

  return guidedLessonIsComplete() ? selectedLesson() : guidedLesson() || selectedLesson() || lessons[0];
}

function recommendedCompareLesson() {
  if (guidedLesson()) {
    return guidedLesson();
  }

  return selectedLesson() || lessons[0];
}

function compareFocusData() {
  const lesson = recommendedCompareLesson();
  const pair = guidedLesson()
    ? lessonComparisonPair(lesson)
    : { compareA: appState.compareA, compareB: appState.compareB };
  const first = continentById(pair?.compareA || appState.compareA);
  const second = continentById(pair?.compareB || appState.compareB);

  if (!first || !second) {
    return {
      lesson,
      first: null,
      second: null,
      title: "Välj två världsdelar",
      description:
        "Välj först två olika världsdelar här ovanför. Då visar appen jämförelsen direkt."
    };
  }

  return {
    lesson,
    first,
    second,
    title: `Jämför ${first.name} och ${second.name}`,
    description:
      guidedLesson() && guidedStep()?.action.type === "writing"
        ? `Nu är Isak på sista delen i ${lesson.title}. Bygg svaret i ordningen vad, varför och exempel.`
        : guidedLesson() && guidedStep()?.action.type === "listen" && guidedStep()?.action.trackId === "track-compare"
          ? `Nu lyssnar Isak på jämförelsen i ${lesson.title}. Fokusera på vad, varför och exempel område för område.`
          : `I ${lesson.title} är ${first.name} och ${second.name} paret i fokus. Använd checklistan område för område.`
  };
}

function setComparisonPair(compareA, compareB) {
  appState.compareA = compareA;
  appState.compareB = compareB;
  appState.selectedComparePresetId = "";
}

function setLessonPair(compareA, compareB) {
  appState.lessonCompareA = compareA;
  appState.lessonCompareB = compareB;
  const lesson = buildSelectedLesson();
  appState.selectedLessonId = lesson?.id || "";
  if (!lesson) {
    return;
  }

  const firstListenStep = lesson.steps.find((step) => step.action.type === "listen");
  if (firstListenStep?.action?.trackId) {
    appState.listenTrackId = firstListenStep.action.trackId;
  }
  const writingStep = lessonWritingStep(lesson);
  if (writingStep?.action?.promptId) {
    appState.selectedWritingPromptId = writingStep.action.promptId;
    appState.gradingResult = null;
  }
}

function renderLessonChoices() {
  const firstSelect = document.querySelector("#lesson-compare-a");
  const secondSelect = document.querySelector("#lesson-compare-b");
  if (!firstSelect || !secondSelect) {
    return;
  }

  const options = [
    `<option value="">Välj en världsdel</option>`,
    ...continents.map((continent) => `<option value="${continent.id}">${continent.name}</option>`)
  ].join("");

  firstSelect.innerHTML = options;
  secondSelect.innerHTML = options;
  firstSelect.value = appState.lessonCompareA;
  secondSelect.value = appState.lessonCompareB;
}

function guidedLesson() {
  return appState.guidedLessonId ? lessonById(appState.guidedLessonId) : null;
}

function guidedStep() {
  const lesson = guidedLesson();
  return lesson?.steps[appState.guidedStepIndex] || null;
}

function guidedLessonIsComplete() {
  const lesson = guidedLesson();
  if (!lesson) {
    return false;
  }

  return (
    appState.guidedStepDone &&
    appState.guidedStepIndex >= lesson.steps.length - 1 &&
    !appState.guidedStepRunning &&
    appState.guidedStepRemaining === 0
  );
}

function completeGuidedCurrentStep() {
  if (!guidedLesson() || !guidedStep()) {
    return;
  }

  clearGuidedStepTimer();
  appState.guidedStepRunning = false;
  appState.guidedStepDone = true;
  appState.guidedStepRemaining = 0;
  renderLessonCoach();
  renderQuickPass();
}

function clearGuidedStepTimer() {
  if (appState.guidedStepInterval) {
    clearInterval(appState.guidedStepInterval);
    appState.guidedStepInterval = null;
  }
}

function guidedCompleteLabel(step) {
  const labels = {
    learn: "Jag har läst klart",
    listen: "Jag har lyssnat klart",
    drill: "Jag är klar med korten",
    quiz: "Jag är klar med quizet",
    compare: "Jag är klar med jämförelsen",
    writing: "Jag har svarat klart",
    game: "Jag är klar med spelet"
  };

  return labels[step?.action?.type] || "Jag är klar";
}

function guidedSupportText(step) {
  if (step?.action?.type === "listen" && step.action.trackId === "track-compare") {
    return "Isak, lyssna efter vad som är lika eller olika, varför det blir så och vilka exempel som nämns. När du känner att du fått med det viktigaste kan du gå vidare.";
  }

  const messages = {
    learn: "Isak, läs i lugn takt. När du känner att du är klar kan du gå vidare direkt.",
    listen: "Isak, lyssna lugnt. När du känner att du är klar kan du gå vidare direkt.",
    drill: "Isak, skriv ett svar på varje kort och vänd sedan för att rätta. Gå vidare när du känner att du tränat klart.",
    quiz: "Isak, gör frågorna i lugn takt. När du känner dig färdig med quizet kan du gå vidare direkt.",
    compare: "Isak, fokusera på att jämföra lugnt och tydligt. När du känner dig färdig kan du gå vidare direkt.",
    writing: "Isak, svara på textfrågan med vad, varför och exempel. När du känner dig klar kan du gå vidare direkt.",
    game: "Isak, nu får du en kort belöning. Klicka eller tryck mellanslag för att hålla globen i luften och ta några poäng."
  };

  return messages[step?.action?.type] || "Isak, jobba i lugn takt och gå vidare när du känner dig klar.";
}

function estimateSpeechDuration(text) {
  const words = String(text || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(18, Math.round((words / 125) * 60));
}

function syncGuidedListenDuration(seconds) {
  if (!guidedLesson() || guidedStep()?.action?.type !== "listen") {
    return;
  }

  const totalSeconds = Math.max(1, Math.ceil(seconds));
  appState.guidedStepTotalSeconds = totalSeconds;
  appState.guidedStepRemaining = totalSeconds;
  appState.guidedStepRunning = true;
  appState.guidedStepDone = false;
  renderLessonCoach();
}

function guidedActionLabel(step) {
  const labels = {
    learn: "Öppna läsningen",
    listen: "Öppna lyssning",
    drill: "Öppna kortträning",
    quiz: "Öppna quiz",
    compare: "Öppna jämförelse",
    writing: "Öppna skrivdelen",
    game: "Öppna belöningsspel"
  };

  return labels[step?.action?.type] || "Öppna moment";
}

function updateLessonFocusMode() {
  const stepType = guidedStep()?.action?.type || "";
  const body = document.body;
  const focusClasses = [
    "lesson-focus",
    "focus-step-learn",
    "focus-step-drill",
    "focus-step-listen",
    "focus-step-quiz",
    "focus-step-compare",
    "focus-step-writing",
    "focus-step-game"
  ];

  body.classList.remove(...focusClasses);

  if (!guidedLesson() || guidedLessonIsComplete()) {
    return;
  }

  body.classList.add("lesson-focus");
  if (stepType) {
    body.classList.add(`focus-step-${stepType}`);
  }
}

function applyGuidedAutostart() {
  const step = guidedStep();
  if (!step) {
    return;
  }

  if (step.action.type === "listen") {
    const track = listenTracks.find((item) => item.id === appState.listenTrackId);
    if (track) {
      speakText(getListenTrackPresentation(track).speechText, { kind: "lesson" }).catch((error) => {
        console.warn("Could not auto-play lesson audio", error);
      });
    }
  }

  if (step.action.type === "writing") {
    window.setTimeout(() => {
      document.querySelector("#writing-answer")?.focus();
    }, 50);
  }

  if (step.action.type === "game") {
    window.setTimeout(() => {
      startRewardGame();
    }, 50);
  }
}

function syncGuidedStepToContent() {
  const lesson = guidedLesson();
  const step = guidedStep();
  if (!lesson || !step) {
    return;
  }

  appState.selectedLessonId = lesson.id;
  openLessonStep(lesson.id, appState.guidedStepIndex, { skipLessonCoachRender: true });
  updateLessonFocusMode();
  applyGuidedAutostart();
}

function startGuidedLesson(lessonId) {
  const lesson = lessonById(lessonId);
  if (!lesson) {
    return;
  }

  clearGuidedStepTimer();
  appState.guidedLessonId = lesson.id;
  appState.guidedStepIndex = 0;
  appState.guidedStepDone = false;
  appState.guidedStepRunning = false;
  appState.guidedStepTotalSeconds = lesson.steps[0].minutes * 60;
  appState.guidedStepRemaining = lesson.steps[0].minutes * 60;
  appState.selectedLessonId = lesson.id;
  startGuidedStepTimer({ syncContent: true });
}

function startGuidedStepTimer(options = {}) {
  const { syncContent = false } = options;
  const step = guidedStep();
  if (!step) {
    return;
  }

  clearGuidedStepTimer();
  if (!appState.guidedStepRemaining || appState.guidedStepDone) {
    appState.guidedStepTotalSeconds = step.minutes * 60;
    appState.guidedStepRemaining = step.minutes * 60;
    appState.guidedStepDone = false;
  }

  appState.guidedStepRunning = true;
  if (syncContent) {
    syncGuidedStepToContent();
  } else {
    updateLessonFocusMode();
  }
  renderLessonCoach();
  renderQuickPass();

  appState.guidedStepInterval = window.setInterval(() => {
    appState.guidedStepRemaining -= 1;

    if (appState.guidedStepRemaining <= 0) {
      appState.guidedStepRemaining = 0;
      appState.guidedStepRunning = false;
      appState.guidedStepDone = true;
      clearGuidedStepTimer();
      renderLessonCoach();
      renderQuickPass();
      return;
    }

    renderLessonCoach();
  }, 1000);
}

function pauseGuidedStepTimer() {
  appState.guidedStepRunning = false;
  clearGuidedStepTimer();
  renderLessonCoach();
}

function resetGuidedStepTimer() {
  const step = guidedStep();
  if (!step) {
    return;
  }

  clearGuidedStepTimer();
  appState.guidedStepRunning = false;
  appState.guidedStepDone = false;
  appState.guidedStepTotalSeconds = step.minutes * 60;
  appState.guidedStepRemaining = step.minutes * 60;
  renderLessonCoach();
}

function nextGuidedStep() {
  const lesson = guidedLesson();
  if (!lesson) {
    return;
  }

  clearGuidedStepTimer();
  const nextIndex = appState.guidedStepIndex + 1;

  if (nextIndex >= lesson.steps.length) {
    appState.guidedStepRunning = false;
    appState.guidedStepDone = true;
    appState.guidedStepRemaining = 0;
    if (!appState.completedLessons.has(lesson.id)) {
      appState.completedLessons.add(lesson.id);
      saveJson("geografi-completed-lessons", [...appState.completedLessons]);
      renderStats();
      renderProgressBoard();
    }
    setActiveTab("quickpass");
    renderLessonCoach();
    renderQuickPass();
    return;
  }

  appState.guidedStepIndex = nextIndex;
  appState.guidedStepTotalSeconds = lesson.steps[nextIndex].minutes * 60;
  appState.guidedStepRemaining = lesson.steps[nextIndex].minutes * 60;
  appState.guidedStepRunning = false;
  appState.guidedStepDone = false;
  startGuidedStepTimer({ syncContent: true });
}

function endGuidedLesson() {
  clearGuidedStepTimer();
  appState.guidedLessonId = null;
  appState.guidedStepIndex = 0;
  appState.guidedStepRemaining = 0;
  appState.guidedStepTotalSeconds = 0;
  appState.guidedStepRunning = false;
  appState.guidedStepDone = false;
  renderLessonCoach();
  renderQuickPass();
}

function formatDayLabel(isoDate) {
  return new Intl.DateTimeFormat("sv-SE", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(parseLocalDate(isoDate));
}

function progressPercent(value, total) {
  if (!total) {
    return 0;
  }
  return Math.min(100, Math.max(0, (value / total) * 100));
}

function renderProgressBoard() {
  const container = document.querySelector("#progress-board");
  const planStart = parseLocalDate(planStartIso);
  const examDate = parseLocalDate(examDateIso);
  const today = new Date();
  const studiedMinutes = getStudiedMinutes();
  const totalPlannedMinutes = lessons.length * lessonDurationMinutes;
  const totalDuration = Math.max(1, examDate.getTime() - planStart.getTime());
  const elapsedDuration = Math.min(Math.max(today.getTime() - planStart.getTime(), 0), totalDuration);
  const expectedMinutes = Math.round((elapsedDuration / totalDuration) * totalPlannedMinutes);
  const daysLeft = Math.max(0, Math.ceil((examDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)));
  const calendarPercent = progressPercent(elapsedDuration, totalDuration);
  const studiedPercent = progressPercent(studiedMinutes, totalPlannedMinutes);
  const expectedPercent = progressPercent(expectedMinutes, totalPlannedMinutes);
  const paceMessage =
    studiedMinutes >= expectedMinutes
      ? "Isak ligger i fas eller lite före planen."
      : `Isak ligger cirka ${expectedMinutes - studiedMinutes} minuter efter planen just nu.`;

  container.innerHTML = `
    <article class="progress-card">
      <p class="panel-label">Mot provet</p>
      <h3>Studieplan fram till ${formatDayLabel(examDateIso)}</h3>
      <div class="progress-bar-shell">
        <span class="progress-bar-fill" style="width: ${studiedPercent}%"></span>
        <span class="progress-bar-target" style="left: ${expectedPercent}%"></span>
      </div>
      <div class="progress-legend">
        <span>Studerat: ${studiedMinutes} min</span>
        <span>Borde vara: ${expectedMinutes} min</span>
        <span>Mål: ${totalPlannedMinutes} min</span>
      </div>
      <p class="microcopy progress-note">${paceMessage}</p>
    </article>
    <article class="progress-card">
      <p class="panel-label">Kalender</p>
      <h3>${daysLeft} dagar kvar till provdatumet</h3>
      <div class="progress-bar-shell">
        <span class="progress-bar-fill" style="width: ${calendarPercent}%"></span>
      </div>
      <div class="progress-legend">
        <span>Planstart: ${formatDayLabel(planStartIso)}</span>
        <span>Prov: ${formatDayLabel(examDateIso)}</span>
      </div>
      <p class="microcopy progress-note">
        Provdatumet är nu satt till fredag 20 mars 2026.
      </p>
    </article>
  `;
}

function renderLessonCoach() {
  const container = document.querySelector("#lesson-coach");
  const lesson = guidedLesson() || selectedLesson();
  if (!lesson) {
    container.innerHTML = `
      <article class="guided-card">
        <div class="guided-header">
          <div>
            <p class="panel-label">Lektionscoach</p>
            <p class="microcopy guided-welcome">Hej Isak. Vi börjar med att välja två världsdelar.</p>
            <h2>Välj två världsdelar för att starta lektionen</h2>
            <p class="microcopy">När ni har valt två olika världsdelar bygger appen hela femstegslektionen direkt.</p>
          </div>
          <div class="lesson-meta">
            <span>15 min</span>
          </div>
        </div>
      </article>
    `;
    updateLessonFocusMode();
    return;
  }
  const step = guidedLesson() ? guidedStep() : lesson.steps[0];
  const lessonIsActive = Boolean(appState.guidedLessonId);
  const lessonIsComplete = lessonIsActive && guidedLessonIsComplete();
  const upcomingLesson = lessonIsComplete ? nextLessonAfter(lesson) : null;
  const completedStepCount = lessonIsActive
    ? Math.min(
        lesson.steps.length,
        appState.guidedStepIndex + (appState.guidedStepDone || lessonIsComplete ? 1 : 0)
      )
    : 0;

  const activeStepTotal = lessonIsActive ? appState.guidedStepTotalSeconds || step.minutes * 60 : step.minutes * 60;
  const timerPercent = step ? progressPercent(activeStepTotal - appState.guidedStepRemaining, activeStepTotal) : 0;
  const encouragement =
    lessonIsComplete
      ? `Fantastiskt jobbat, Isak. Lektionen är klar.`
      : appState.guidedStepDone
        ? `Snyggt jobbat, Isak. Nu tar vi nästa steg.`
        : lessonIsActive
          ? `En sak i taget. Följ steget framför dig.`
          : `Vi tar det lugnt och tydligt, ett steg i taget.`;
  const finishEarlyLabel = guidedCompleteLabel(step);
  const timerStateClass = lessonIsComplete
    ? "is-finished"
    : appState.guidedStepDone
      ? "is-finished"
      : appState.guidedStepRunning
        ? "is-running"
        : "";
  const timerStatus = lessonIsComplete
    ? "Lektion klar"
    : appState.guidedStepDone
      ? "Tiden är ute"
      : lessonIsActive
        ? "Tid kvar"
        : "Planerad tid";
  const primaryAction = lessonIsComplete
      ? upcomingLesson
        ? `<button class="primary" id="start-guided-lesson" data-guided-start="${upcomingLesson.id}">Starta nästa lektion: ${upcomingLesson.title}</button>`
        : `<button class="primary" id="start-guided-lesson" data-guided-start="${lesson.id}">Kör sista repetitionen igen</button>`
    : appState.guidedStepDone
      ? `<button class="primary" id="next-guided-step">Jag är klar, gå vidare</button>`
      : lessonIsActive
        ? `<button class="primary" id="complete-guided-step">${finishEarlyLabel}</button>`
        : `<button class="primary" id="start-guided-lesson" data-guided-start="${lesson.id}">Starta vald lektion</button>`;

  container.innerHTML = `
    <article class="guided-card ${appState.guidedStepRunning ? "is-running" : ""} ${lessonIsComplete ? "is-complete" : ""}">
      <div class="guided-header">
        <div>
          <p class="panel-label">Lektionscoach</p>
          <p class="microcopy guided-welcome">
            Hej Isak. Fokus nu: ${lessonIsActive ? step.mode.toLowerCase() : "vald lektion"}.
          </p>
          <h2>${lessonIsActive ? `Nu jobbar du med ${lesson.title}` : `Vald lektion för dig, Isak: ${lesson.title}`}</h2>
          <p class="microcopy">
            ${encouragement}
          </p>
        </div>
        <div class="lesson-meta">
          <span>Lektion ${lesson.order}</span>
          <span>${lessonDurationMinutes} min</span>
        </div>
      </div>
      <div class="guided-body">
        <div class="guided-copy">
          <div class="guided-step-meta">
            <span>Steg ${lessonIsActive ? Math.min(appState.guidedStepIndex + 1, lesson.steps.length) : 1} av ${lesson.steps.length}</span>
            <span>${step.mode} · ${step.minutes} min</span>
          </div>
          <div class="guided-countdown ${timerStateClass}">
            <span class="guided-countdown-label">${timerStatus}</span>
            <strong class="guided-countdown-value">${lessonIsActive ? formatTimer(appState.guidedStepRemaining) : formatTimer(step.minutes * 60)}</strong>
            <span class="guided-countdown-note">
              ${lessonIsActive && step.action.type === "listen" ? "Följer uppläsningen" : "Fokusstöd"}
            </span>
          </div>
          <h3 class="guided-step-title">${lessonIsComplete ? "Lektion klar" : step.description}</h3>
          <p>
            ${
              lessonIsComplete
                ? `Du har tjänat ihop ännu en klar lektion. Nästa steg är ${upcomingLesson?.title || "att repetera lugnt"}.`
                : lessonIsActive
                  ? guidedSupportText(step)
                  : "När du trycker start öppnas första momentet direkt och steg-timern börjar av sig själv."
            }
          </p>
          <div class="progress-bar-shell guided-progress-shell ${timerStateClass}">
            <span class="progress-bar-fill" style="width: ${lessonIsActive ? timerPercent : 0}%"></span>
          </div>
          <p class="microcopy progress-note">
            ${
              lessonIsComplete
                ? `${upcomingLesson ? `Nästa lektion är ${upcomingLesson.order}: ${upcomingLesson.title}.` : "Alla lektioner är klara, Isak."}`
                : appState.guidedStepDone
                  ? "Bra kämpat, Isak."
                  : lessonIsActive
                    ? "Timern är bara stöd. Tryck Klar när du känner att momentet sitter."
                    : "Starta när du är redo."
            }
          </p>
          <div class="guided-steps">
            ${lesson.steps
              .map((lessonStep, index) => {
                let stateClass = "is-upcoming";
                if (lessonIsActive) {
                  if (index < completedStepCount) {
                    stateClass = "is-done";
                  } else if (index === appState.guidedStepIndex && !lessonIsComplete) {
                    stateClass = "is-current";
                  }
                }

                return `<span class="guided-step-pill ${stateClass}">${index + 1}. ${lessonStep.mode}</span>`;
              })
              .join("")}
          </div>
        </div>
      </div>
      <div class="guided-actions">
        ${primaryAction}
      </div>
    </article>
  `;

  updateLessonFocusMode();
}

function renderQuickPass() {
  const grid = document.querySelector("#quickpass-grid");
  const jumpButton = document.querySelector("#jump-next-lesson");
  const startCta = document.querySelector("#lesson-start-cta");
  const startHint = document.querySelector("#lesson-start-hint");
  renderLessonChoices();
  const lesson = guidedLesson() || selectedLesson();
  if (jumpButton) {
    jumpButton.disabled = !lesson;
    jumpButton.textContent = lesson ? `Starta lektionen: ${lesson.title}` : "Välj två världsdelar först";
  }
  if (startCta) {
    startCta.disabled = !lesson;
    startCta.textContent = lesson ? `Starta lektionen om ${lesson.title}` : "Välj två världsdelar först";
  }
  if (startHint) {
    startHint.textContent = lesson
      ? `Nu är lektionen byggd. Tryck på den stora knappen för att starta direkt.`
      : "Välj två olika världsdelar för att bygga lektionen.";
  }
  if (!lesson) {
    grid.innerHTML = `
      <article class="lesson-card is-next">
        <div class="lesson-card-header">
          <div>
            <p class="panel-label">Lektionsstart</p>
            <h3>Välj två världsdelar först</h3>
            <p>Det är första steget innan Isak startar sin lektion.</p>
          </div>
          <div class="lesson-meta">
            <span>${lessonDurationMinutes} min</span>
            <span>Väntar</span>
          </div>
        </div>
        <p class="microcopy">När två olika världsdelar är valda bygger appen en tydlig lektion med föreläsningar, jämförelse, textfråga och ett kort belöningsspel.</p>
      </article>
    `;
    return;
  }
  const isComplete = appState.completedLessons.has(lesson.id);
  const isActive = guidedLesson()?.id === lesson.id;

  grid.innerHTML = `
    <article class="lesson-card ${isComplete ? "is-complete" : "is-next"}">
      <div class="lesson-card-header">
        <div>
          <p class="panel-label">Lektion ${lesson.order}</p>
          <h3>${lesson.title}</h3>
          <p>${lesson.theme}</p>
        </div>
        <div class="lesson-meta">
          <span>${lessonDurationMinutes} min</span>
          <span>${isActive ? "Pågår nu" : isComplete ? "Redan klar" : "Vald nu"}</span>
        </div>
      </div>
      <p class="microcopy">${lesson.summary}</p>
      ${lesson.steps
        .map(
          (step, stepIndex) => `
            <div class="lesson-step">
              <div class="lesson-step-copy">
                <strong>${step.mode} · ${step.minutes} min</strong>
                <p>${step.description}</p>
              </div>
              <span class="lesson-meta"><span>${stepIndex + 1}</span></span>
            </div>
          `
        )
        .join("")}
      <div class="lesson-card-header">
        <p class="microcopy">
          ${isActive ? "Isak följer nu ett låst fokusflöde steg för steg." : "Det här är lektionen för de världsdelar ni valt. Starta bara här, så sköter appen resten."}
        </p>
        <button class="primary" data-lesson-start="${lesson.id}">
          ${isActive ? "Fortsätt lektionen" : isComplete ? "Gör lektionen igen" : "Starta lektionen"}
        </button>
      </div>
    </article>
  `;
}

const rewardGameConfig = {
  width: 760,
  height: 320,
  globeX: 150,
  globeRadius: 20,
  gravity: 820,
  boost: -290,
  obstacleWidth: 66,
  obstacleGap: 118,
  obstacleSpeed: 180,
  spawnSpacing: 260
};

function rewardGameStatusText() {
  if (appState.rewardGameRunning) {
    return "Spelet är igång. Klicka eller tryck mellanslag för att studsa.";
  }
  if (appState.rewardGameCrashed) {
    return "Bra försök, Isak. Tryck på spela igen och försök slå ditt rekord.";
  }
  if (appState.rewardGameStarted) {
    return "Snyggt jobbat. Du kan spela en gång till om du vill.";
  }
  return "Klicka på start och håll globen i luften mellan öarna.";
}

function renderRewardGamePanel() {
  const container = document.querySelector("#reward-game-panel");
  if (!container) {
    return;
  }

  const activeLesson = guidedLesson();
  const isGuidedGame = activeLesson && guidedStep()?.action.type === "game";
  const introText = isGuidedGame
    ? "Det här är del 5. Nu får du en kort belöning, Isak."
    : "En kort geografi-belöning när du vill ha en liten paus.";

  container.innerHTML = `
    <article class="reward-card">
      <div class="reward-header">
        <div>
          <p class="panel-label">Flappy Globe</p>
          <h3>Korta hopp mellan öarna</h3>
          <p class="microcopy">${introText}</p>
        </div>
        <div class="lesson-meta">
          <span>Poäng: <strong id="reward-score">${appState.rewardGameScore}</strong></span>
          <span>Bäst: <strong id="reward-best">${appState.rewardGameBest}</strong></span>
        </div>
      </div>
      <div class="reward-stage-shell" id="reward-game-stage" tabindex="0" aria-label="Flappy Globe">
        <canvas id="reward-game-canvas" width="${rewardGameConfig.width}" height="${rewardGameConfig.height}"></canvas>
        <div class="reward-stage-overlay ${appState.rewardGameRunning ? "is-hidden" : ""}" id="reward-stage-overlay">
          <div>
            <strong>${appState.rewardGameCrashed ? "Försök igen" : "Redo för en snabb runda?"}</strong>
            <p>${rewardGameStatusText()}</p>
          </div>
        </div>
      </div>
      <div class="reward-footer">
        <p class="microcopy" id="reward-message">${appState.rewardGameMessage || rewardGameStatusText()}</p>
        <div class="reward-actions">
          <button class="primary" id="reward-game-start">${appState.rewardGameRunning ? "Spelet pågår" : appState.rewardGameStarted ? "Spela igen" : "Starta spelet"}</button>
          <button class="ghost" id="reward-game-flap">Hoppa</button>
        </div>
      </div>
    </article>
  `;

  updateRewardGameHud();
  drawRewardGameFrame();
}

function updateRewardGameHud() {
  const score = document.querySelector("#reward-score");
  const best = document.querySelector("#reward-best");
  const message = document.querySelector("#reward-message");
  const overlay = document.querySelector("#reward-stage-overlay");
  const startButton = document.querySelector("#reward-game-start");
  const flapButton = document.querySelector("#reward-game-flap");

  if (score) {
    score.textContent = String(appState.rewardGameScore);
  }
  if (best) {
    best.textContent = String(appState.rewardGameBest);
  }
  if (message) {
    message.textContent = appState.rewardGameMessage || rewardGameStatusText();
  }
  if (overlay) {
    overlay.classList.toggle("is-hidden", appState.rewardGameRunning);
    overlay.innerHTML = appState.rewardGameRunning
      ? ""
      : `
          <div>
            <strong>${appState.rewardGameCrashed ? "Försök igen" : "Redo för en snabb runda?"}</strong>
            <p>${rewardGameStatusText()}</p>
          </div>
        `;
  }
  if (startButton) {
    startButton.disabled = appState.rewardGameRunning;
    startButton.textContent = appState.rewardGameRunning
      ? "Spelet pågår"
      : appState.rewardGameStarted
        ? "Spela igen"
        : "Starta spelet";
  }
  if (flapButton) {
    flapButton.disabled = !appState.rewardGameRunning;
  }
}

function resetRewardGameState() {
  appState.rewardGameScore = 0;
  appState.rewardGameRunning = false;
  appState.rewardGameStarted = false;
  appState.rewardGameCrashed = false;
  appState.rewardGameAnimationFrame = null;
  appState.rewardGameLastTime = 0;
  appState.rewardGamePendingBoost = false;
  appState.rewardGameGlobeY = rewardGameConfig.height / 2;
  appState.rewardGameGlobeVelocity = 0;
  appState.rewardGameObstacles = [];
  appState.rewardGameMessage = "Tryck på start och hjälp globen mellan öarna.";
}

function stopRewardGameLoop() {
  if (appState.rewardGameAnimationFrame) {
    cancelAnimationFrame(appState.rewardGameAnimationFrame);
    appState.rewardGameAnimationFrame = null;
  }
  appState.rewardGameRunning = false;
}

function createRewardObstacle(x) {
  const safeMargin = 46;
  const gapRange = rewardGameConfig.height - rewardGameConfig.obstacleGap - safeMargin * 2;
  const gapTop = safeMargin + Math.random() * gapRange;
  return {
    x,
    width: rewardGameConfig.obstacleWidth,
    gapTop,
    scored: false
  };
}

function startRewardGame() {
  stopRewardGameLoop();
  resetRewardGameState();
  appState.rewardGameStarted = true;
  appState.rewardGameRunning = true;
  appState.rewardGameMessage = "Nu kör vi, Isak. Ta dig mellan öarna.";
  appState.rewardGameObstacles = [
    createRewardObstacle(rewardGameConfig.width + 120),
    createRewardObstacle(rewardGameConfig.width + 120 + rewardGameConfig.spawnSpacing),
    createRewardObstacle(rewardGameConfig.width + 120 + rewardGameConfig.spawnSpacing * 2)
  ];
  renderRewardGamePanel();
  document.querySelector("#reward-game-stage")?.focus();
  appState.rewardGameAnimationFrame = requestAnimationFrame(runRewardGameFrame);
}

function queueRewardGameBoost() {
  if (!appState.rewardGameRunning) {
    return;
  }
  appState.rewardGamePendingBoost = true;
}

function rewardGameBoundsHit() {
  return (
    appState.rewardGameGlobeY - rewardGameConfig.globeRadius <= 0 ||
    appState.rewardGameGlobeY + rewardGameConfig.globeRadius >= rewardGameConfig.height
  );
}

function rewardGameObstacleHit(obstacle) {
  const globeLeft = rewardGameConfig.globeX - rewardGameConfig.globeRadius;
  const globeRight = rewardGameConfig.globeX + rewardGameConfig.globeRadius;
  const globeTop = appState.rewardGameGlobeY - rewardGameConfig.globeRadius;
  const globeBottom = appState.rewardGameGlobeY + rewardGameConfig.globeRadius;
  const obstacleRight = obstacle.x + obstacle.width;
  const gapBottom = obstacle.gapTop + rewardGameConfig.obstacleGap;
  const overlapsX = globeRight > obstacle.x && globeLeft < obstacleRight;
  const overlapsY = globeTop < obstacle.gapTop || globeBottom > gapBottom;
  return overlapsX && overlapsY;
}

function finishRewardGame(crashed = false) {
  stopRewardGameLoop();
  appState.rewardGameCrashed = crashed;
  if (appState.rewardGameScore > appState.rewardGameBest) {
    appState.rewardGameBest = appState.rewardGameScore;
    saveJson("geografi-reward-game-best", appState.rewardGameBest);
  }
  appState.rewardGameMessage = crashed
    ? `Du fick ${appState.rewardGameScore} poäng. Bra kämpat, Isak.`
    : `Snyggt, Isak. Du avslutade på ${appState.rewardGameScore} poäng.`;
  updateRewardGameHud();
  drawRewardGameFrame();
}

function runRewardGameFrame(timestamp) {
  if (!appState.rewardGameRunning) {
    return;
  }

  const lastTime = appState.rewardGameLastTime || timestamp;
  const delta = Math.min((timestamp - lastTime) / 1000, 0.03);
  appState.rewardGameLastTime = timestamp;

  if (appState.rewardGamePendingBoost) {
    appState.rewardGameGlobeVelocity = rewardGameConfig.boost;
    appState.rewardGamePendingBoost = false;
  }

  appState.rewardGameGlobeVelocity += rewardGameConfig.gravity * delta;
  appState.rewardGameGlobeY += appState.rewardGameGlobeVelocity * delta;

  let rightmostX = 0;
  appState.rewardGameObstacles = appState.rewardGameObstacles
    .map((obstacle) => {
      const nextObstacle = { ...obstacle, x: obstacle.x - rewardGameConfig.obstacleSpeed * delta };
      rightmostX = Math.max(rightmostX, nextObstacle.x);
      if (!nextObstacle.scored && nextObstacle.x + nextObstacle.width < rewardGameConfig.globeX) {
        nextObstacle.scored = true;
        appState.rewardGameScore += 1;
        appState.rewardGameMessage = `Snyggt, Isak. Nu har du ${appState.rewardGameScore} poäng.`;
      }
      return nextObstacle;
    })
    .filter((obstacle) => obstacle.x + obstacle.width > -20);

  while (appState.rewardGameObstacles.length < 3) {
    rightmostX = Math.max(
      rightmostX,
      rewardGameConfig.width + 120 + rewardGameConfig.spawnSpacing * (appState.rewardGameObstacles.length + 1)
    );
    appState.rewardGameObstacles.push(createRewardObstacle(rightmostX + rewardGameConfig.spawnSpacing));
  }

  if (
    rewardGameBoundsHit() ||
    appState.rewardGameObstacles.some((obstacle) => rewardGameObstacleHit(obstacle))
  ) {
    finishRewardGame(true);
    return;
  }

  updateRewardGameHud();
  drawRewardGameFrame();
  appState.rewardGameAnimationFrame = requestAnimationFrame(runRewardGameFrame);
}

function drawRewardGameFrame() {
  const canvas = document.querySelector("#reward-game-canvas");
  if (!canvas) {
    return;
  }

  const context = canvas.getContext("2d");
  if (!context) {
    return;
  }

  const { width, height, globeX, globeRadius, obstacleGap } = rewardGameConfig;
  context.clearRect(0, 0, width, height);

  const sky = context.createLinearGradient(0, 0, 0, height);
  sky.addColorStop(0, "#cde8ee");
  sky.addColorStop(0.55, "#edf7f4");
  sky.addColorStop(1, "#f6e4be");
  context.fillStyle = sky;
  context.fillRect(0, 0, width, height);

  context.strokeStyle = "rgba(25, 51, 77, 0.08)";
  context.lineWidth = 1;
  for (let x = 40; x < width; x += 80) {
    context.beginPath();
    context.moveTo(x, 0);
    context.lineTo(x, height);
    context.stroke();
  }
  for (let y = 40; y < height; y += 60) {
    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(width, y);
    context.stroke();
  }

  context.fillStyle = "rgba(255, 255, 255, 0.76)";
  [
    [120, 54, 28],
    [320, 70, 22],
    [560, 50, 30]
  ].forEach(([x, y, size]) => {
    context.beginPath();
    context.arc(x, y, size, Math.PI, 0);
    context.arc(x + size * 0.85, y + 4, size * 0.8, Math.PI, 0);
    context.arc(x - size * 0.9, y + 6, size * 0.75, Math.PI, 0);
    context.closePath();
    context.fill();
  });

  appState.rewardGameObstacles.forEach((obstacle) => {
    const gapBottom = obstacle.gapTop + obstacleGap;
    context.fillStyle = "#87a96b";
    context.fillRect(obstacle.x, 0, obstacle.width, obstacle.gapTop);
    context.fillRect(obstacle.x, gapBottom, obstacle.width, height - gapBottom);

    context.fillStyle = "#d0b37a";
    context.beginPath();
    context.moveTo(obstacle.x, obstacle.gapTop);
    context.lineTo(obstacle.x + obstacle.width / 2, obstacle.gapTop - 22);
    context.lineTo(obstacle.x + obstacle.width, obstacle.gapTop);
    context.closePath();
    context.fill();

    context.beginPath();
    context.moveTo(obstacle.x, gapBottom);
    context.lineTo(obstacle.x + obstacle.width / 2, gapBottom + 22);
    context.lineTo(obstacle.x + obstacle.width, gapBottom);
    context.closePath();
    context.fill();
  });

  context.save();
  context.translate(globeX, appState.rewardGameGlobeY);
  context.rotate(Math.max(-0.35, Math.min(0.35, appState.rewardGameGlobeVelocity / 400)));
  context.fillStyle = "#2b8db7";
  context.beginPath();
  context.arc(0, 0, globeRadius, 0, Math.PI * 2);
  context.fill();
  context.fillStyle = "#8fbd68";
  context.beginPath();
  context.ellipse(-5, -3, 8, 5, 0.3, 0, Math.PI * 2);
  context.ellipse(7, 4, 6, 4, -0.5, 0, Math.PI * 2);
  context.ellipse(-2, 10, 5, 3, 0.1, 0, Math.PI * 2);
  context.fill();
  context.strokeStyle = "rgba(255, 255, 255, 0.85)";
  context.lineWidth = 1.5;
  context.beginPath();
  context.arc(0, 0, globeRadius - 4, 0.6, 2.4);
  context.stroke();
  context.beginPath();
  context.arc(0, 0, globeRadius - 8, -1.1, 1.2);
  context.stroke();
  context.restore();
}

function renderContinentButtons() {
  const container = document.querySelector("#continent-buttons");
  container.innerHTML = continents
    .map(
      (continent) => `
        <button class="topic-button ${continent.id === appState.selectedContinent ? "active" : ""}" data-continent-id="${continent.id}">
          <strong>${continent.name}</strong>
          <span class="microcopy">${continent.memoryHook}</span>
        </button>
      `
    )
    .join("");
}

function renderContinentDetail() {
  const continent = continentById(appState.selectedContinent);
  const card = document.querySelector("#continent-detail");

  card.innerHTML = buildContinentStudyContent(continent).html;
}

function areaExamplesText(continent, area) {
  const explicitExample = areaExamplesByContinent[continent.id]?.[area.key];
  if (explicitExample) {
    return explicitExample;
  }
  const dimension = continent.dimensions[area.key];
  return humanJoin(dimension.tags) || dimension.summary;
}

function buildLectureStepsMarkup(mode, names) {
  const subjectText =
    mode === "compare"
      ? `${names.first} och ${names.second}`
      : names.first;

  const steps =
    mode === "compare"
      ? [
          "Vad? Berätta vad som är lika eller olika mellan världsdelarna.",
          "Varför? Förklara orsaken till att det ser ut så.",
          "Exempel? Ge tydliga exempel från båda världsdelarna."
        ]
      : [
          `Vad? Fånga de viktigaste fakta om ${subjectText}.`,
          "Varför? Lyssna efter varför klimat, läge och natur påverkar människor.",
          `Exempel? Lägg märke till tydliga exempel som du kan använda senare när du jämför ${subjectText}.`
        ];

  return `
    <article class="checklist-card lecture-steps-card">
      <h3>${mode === "compare" ? "Bygg ditt svar i tre steg" : "Bygg förståelsen i tre steg"}</h3>
      <ol>
        ${steps.map((step) => `<li>${step}</li>`).join("")}
      </ol>
    </article>
  `;
}

function buildComparisonWordsMarkup() {
  return `
    <article class="checklist-card lecture-words-card">
      <h3>Använd jämförelseord</h3>
      <p class="microcopy"><strong>När det är olika:</strong></p>
      <ul>
        ${comparisonWords.different.map((word) => `<li>...${word}...</li>`).join("")}
      </ul>
      <p class="microcopy"><strong>När det är lika:</strong></p>
      <ul>
        ${comparisonWords.similar.map((word) => `<li>...${word}...</li>`).join("")}
      </ul>
    </article>
  `;
}

function buildContinentStudyContent(continent) {
  const areaMarkup = guideAreas
    .map((area) => {
      const dimension = continent.dimensions[area.key];
      return `
        <article class="lecture-area-card">
          <div class="lecture-area-prompt">
            <p class="panel-label">Område</p>
            <h3>${area.label}</h3>
            <p>${area.prompt}</p>
          </div>
          <div class="lecture-area-answer">
            <p class="panel-label">Kort sagt i ${continent.name}</p>
            <p>${dimension.summary}</p>
            ${renderTagChips(dimension.tags)}
          </div>
        </article>
      `;
    })
    .join("");

  const speechSections = guideAreas.map((area) => {
    const dimension = continent.dimensions[area.key];
    return [
      `${area.label}.`,
      `Att tänka på: ${area.prompt}`,
      `I ${continent.name} ser man att ${dimension.summary.toLowerCase()}.`,
      `Det är viktigt därför att ${dimension.reason.toLowerCase()}.`,
      `Nyckelord som hjälper dig att minnas är ${humanJoin(dimension.tags)}.`,
      `Ett tydligt sätt att säga det är att ${continent.name} hänger ihop genom ${areaExamplesText(continent, area)}.`
    ].join(" ");
  });

  return {
    html: `
    <div class="lecture-guide-flow">
      <article class="study-card lecture-intro-card">
        <p class="panel-label">Guide</p>
        <h2>${continent.name}</h2>
        <p>${continent.intro}</p>
        <div class="insight-strip">
          <strong>Vad du ska kunna för att nå C</strong>
          <p>${continent.cLevel}</p>
        </div>
      </article>
      <div class="compare-checklist lecture-guide-top">
        ${buildLectureStepsMarkup("continent", { first: continent.name })}
        <article class="checklist-card lecture-purpose-card">
          <h3>Checklista för dina områden</h3>
          <p>
            Vi går igenom samma sex områden som sedan används när Isak ska jämföra
            världsdelar: läge, klimat, vegetation, befolkning, försörjning och
            naturresurser.
          </p>
        </article>
      </div>
      <div class="lecture-area-grid">
        ${areaMarkup}
      </div>
      <div class="compare-checklist lecture-guide-bottom">
        <article class="checklist-card">
          <h3>Exempel att namnge</h3>
          <ul>
            ${continent.keyPlaces.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </article>
        <article class="checklist-card">
          <h3>Minnesknep</h3>
          <p>${continent.memoryHook}</p>
        </article>
      </div>
    </div>
  `,
    speechText: [
      `${continent.name}. ${continent.intro}`,
      `Först bygger vi förståelsen i tre steg. Vad? Fånga de viktigaste fakta om ${continent.name}. Varför? Lyssna efter hur läge, klimat och natur påverkar människor. Exempel? Lägg märke till tydliga exempel som du kan använda senare när du jämför.`,
      `Nu kommer en lugn genomgång område för område. Försök inte minnas allt på en gång. Lyssna efter huvudidén först och ta sedan stöd av nyckelorden på skärmen.`,
      `Nu tar vi områdena ett i taget.`,
      ...speechSections,
      `Exempel att namnge i ${continent.name}: ${continent.keyPlaces.join(", ")}.`,
      `Minnesknep: ${continent.memoryHook}`,
      `Bra jobbat Isak. Nu har du hört en längre genomgång av ${continent.name}, och nästa steg blir lättare när du jämför världsdelarna.`
    ].join(" ")
  };
}

function renderDrillCategories() {
  const container = document.querySelector("#drill-category-buttons");
  container.innerHTML = Object.entries(drillCategoryNames)
    .map(
      ([key, label]) => `
        <button class="${key === appState.selectedDrillCategory ? "active" : ""}" data-drill-category="${key}">
          ${label}
        </button>
      `
    )
    .join("");
}

function renderDrillGrid() {
  const container = document.querySelector("#drill-grid");
  const items = drillCollections[appState.selectedDrillCategory];

  container.innerHTML = items
    .map((item) => {
      const isRevealed = appState.revealedCards.has(item.id);
      const draft = appState.drillDrafts[item.id] || "";
      const result = appState.drillResults[item.id];
      const prompt = buildDrillPrompt(item, appState.selectedDrillCategory);
      return `
        <article class="drill-card ${isRevealed ? "revealed" : ""} ${result?.isCorrect ? "is-correct" : ""} ${isRevealed && result && !result.isCorrect ? "is-wrong" : ""}">
          <p class="panel-label">Ledtråd</p>
          <p class="drill-prompt">${prompt}</p>
          <form class="drill-form" data-drill-form="${item.id}">
            <label class="notes-label" for="drill-input-${item.id}">Skriv ditt svar</label>
            <input
              class="drill-input"
              id="drill-input-${item.id}"
              type="text"
              autocomplete="off"
              data-drill-input="${item.id}"
              value="${escapeHtml(draft)}"
              placeholder="Skriv svaret här"
              ${isRevealed ? "disabled" : ""}
            />
            <button class="ghost drill-submit" type="submit" ${isRevealed ? "disabled" : ""}>Vänd kort och rätta</button>
          </form>
          <div class="answer-text drill-answer-slot ${isRevealed ? "is-visible" : ""}">
            ${
              isRevealed
                ? `
                  <p class="drill-feedback ${result?.isCorrect ? "is-correct" : "is-wrong"}">
                    ${result?.isCorrect ? "Rätt jobbat, Isak." : "Bra försök, Isak."}
                  </p>
                  <p class="microcopy">Du skrev: ${result?.userAnswer ? escapeHtml(result.userAnswer) : "inget svar"}</p>
                  <p><strong>Rätt svar:</strong> ${item.front}</p>
                  <p class="microcopy">${item.back}</p>
                `
                : `<p class="microcopy">Skriv ditt svar och vänd sedan kortet för att rätta.</p>`
            }
          </div>
        </article>
      `;
    })
    .join("");
}

function buildDrillPrompt(item, category) {
  if (category === "lander") {
    const capital = item.back.replace(/^Huvudstad:\s*/i, "").trim();
    return `Vilket land har huvudstaden ${capital}?`;
  }

  return item.back;
}

function drillExpectedAnswers(item) {
  const aliasMap = {
    USA: ["Förenta staterna", "United States"],
    Storbritannien: ["United Kingdom", "UK"],
    "Nya Zeeland": ["New Zealand"]
  };

  return [item.front, ...(aliasMap[item.front] || [])].map(normalizeAnswer);
}

function resetDrillPractice() {
  appState.revealedCards.clear();
  appState.drillDrafts = {};
  appState.drillResults = {};
}

function checkDrillCard(cardId) {
  const items = drillCollections[appState.selectedDrillCategory] || [];
  const item = items.find((entry) => entry.id === cardId);
  if (!item || appState.revealedCards.has(cardId)) {
    return;
  }

  const userAnswer = (appState.drillDrafts[cardId] || "").trim();
  if (!userAnswer) {
    alert("Skriv ett svar först, Isak.");
    return;
  }

  appState.revealedCards.add(cardId);
  appState.drillResults[cardId] = {
    userAnswer,
    isCorrect: drillExpectedAnswers(item).includes(normalizeAnswer(userAnswer))
  };
  renderDrillGrid();
}

function buildListenTracks() {
  const continentTracks = continents.map((continent) => ({
    id: `track-${continent.id}`,
    title: continent.name,
    description: "Område för område enligt jämförelsemallen.",
    kind: "continent",
    continentId: continent.id
  }));

  const compareTrack = {
    id: "track-compare",
    title: "Jämförelsen",
    description: "Vad, varför, exempel och checklista område för område.",
    kind: "compare",
    text: ""
  };

  return [...continentTracks, compareTrack];
}

const listenTracks = buildListenTracks();

function getVisibleListenTracks() {
  const lesson = guidedLesson() || selectedLesson();
  if (lesson) {
    const lessonTrackIds = lesson.steps
      .filter((step) => step.action.type === "listen")
      .map((step) => step.action.trackId);
    return listenTracks.filter((track) => lessonTrackIds.includes(track.id));
  }

  return listenTracks;
}

function getListenTrackPresentation(track) {
  if (track.kind === "continent") {
    const continent = continentById(track.continentId);
    const content = buildContinentStudyContent(continent);
    return {
      title: continent.name,
      description: "Följer samma områden som i jämförelsemallen: läge, klimat, vegetation, befolkning, försörjning och naturresurser.",
      html: content.html,
      speechText: content.speechText
    };
  }

  if (track.kind === "compare") {
    const first = continentById(appState.compareA);
    const second = continentById(appState.compareB);
    if (!first || !second) {
      return {
        title: "Jämförelsen",
        description: "Välj två världsdelar i Jämför först, så kan du lyssna på jämförelsen här.",
        html: `<div class="script-box">Välj två världsdelar i avsnittet Jämför för att skapa en jämförelse.</div>`,
        speechText:
          "Välj först två världsdelar i avsnittet Jämför. Då kan appen läsa upp jämförelsen."
      };
    }
    const speechText = buildComparisonSpeechText();
    return {
      title: `Jämför ${first.name} och ${second.name}`,
      description: "Samma struktur som i studieplanen: först vad, varför och exempel, sedan område för område.",
      html: `
        <div class="lecture-guide-flow">
          <article class="study-card lecture-intro-card">
            <p class="panel-label">Guide</p>
            <h2>Din guide för att jämföra ${first.name} och ${second.name}</h2>
            <p>
              När du jämför två världsdelar ska du inte bara skriva fakta. Du ska
              förklara hur allt hänger ihop. Använd den här checklistan som stöd.
            </p>
          </article>
          <div class="compare-checklist lecture-guide-top">
            ${buildLectureStepsMarkup("compare", { first: first.name, second: second.name })}
            ${buildComparisonWordsMarkup()}
          </div>
          <div class="lecture-area-grid">
            ${buildComparisonRows()
              .map(
                (row) => `
                  <article class="comparison-card comparison-card-structured">
                    <div class="lecture-area-prompt">
                      <p class="panel-label">Område</p>
                      <h3>${row.label}</h3>
                      <p>${row.prompt}</p>
                    </div>
                    <div class="comparison-simple-grid">
                      <section class="comparison-side">
                        <p class="panel-label">${row.firstName}</p>
                        <p>${row.first}</p>
                        ${renderTagChips(row.firstTags)}
                      </section>
                      <section class="comparison-side">
                        <p class="panel-label">${row.secondName}</p>
                        <p>${row.second}</p>
                        ${renderTagChips(row.secondTags)}
                      </section>
                    </div>
                  </article>
                `
              )
              .join("")}
          </div>
        </div>
      `,
      speechText
    };
  }

  return {
    title: track.title,
    description: track.description,
    html: `<div class="script-box">${track.text}</div>`,
    speechText: track.text
  };
}

function renderListenTracks() {
  const buttons = document.querySelector("#listen-buttons");
  const visibleTracks = getVisibleListenTracks();
  buttons.innerHTML = visibleTracks
    .map(
      (track) => `
        <button class="${track.id === appState.listenTrackId ? "active" : ""}" data-listen-id="${track.id}">
          <strong>${track.title}</strong>
          <span class="microcopy">${track.description}</span>
        </button>
      `
    )
    .join("");

  const currentTrack =
    visibleTracks.find((track) => track.id === appState.listenTrackId) || visibleTracks[0];
  if (currentTrack && currentTrack.id !== appState.listenTrackId) {
    appState.listenTrackId = currentTrack.id;
  }
  const presentation = getListenTrackPresentation(currentTrack);
  document.querySelector("#listen-title").textContent = presentation.title;
  document.querySelector("#listen-description").textContent = presentation.description;
  document.querySelector("#listen-study-content").innerHTML = presentation.html;
}

function createCountryQuestion(item) {
  const options = shuffle([
    item.capital,
    ...sampleSeveral(capitalPool, 3, [item.capital])
  ]);

  return {
    prompt: `Vilken är huvudstaden i ${item.country}?`,
    answer: item.capital,
    options,
    explanation: `${item.capital} är huvudstad i ${item.country}, som ligger i ${item.continent}.`,
    category: "Länder och huvudstäder"
  };
}

function createCapitalQuestion(item) {
  const options = shuffle([
    item.country,
    ...sampleSeveral(countryPool, 3, [item.country])
  ]);

  return {
    prompt: `Vilket land har huvudstaden ${item.capital}?`,
    answer: item.country,
    options,
    explanation: `${item.country} har huvudstaden ${item.capital}.`,
    category: "Länder och huvudstäder"
  };
}

function buildQuizBank() {
  const mountainQuestions = [
    {
      prompt: "I vilken världsdel ligger Himalaya?",
      answer: "Asien",
      options: shuffle(["Asien", "Europa", "Afrika", "Sydamerika"]),
      explanation: "Himalaya ligger i Asien och är världens högsta bergssystem.",
      category: "Bergskedjor"
    },
    {
      prompt: "I vilken världsdel ligger Anderna?",
      answer: "Sydamerika",
      options: shuffle(["Nordamerika", "Sydamerika", "Europa", "Afrika"]),
      explanation: "Anderna sträcker sig längs Sydamerikas västkust.",
      category: "Bergskedjor"
    },
    {
      prompt: "Vad är Atlasbergen?",
      answer: "En bergskedja i nordvästra Afrika",
      options: shuffle([
        "En bergskedja i nordvästra Afrika",
        "En flod i Europa",
        "En region i Sydamerika",
        "Ett hav vid Antarktis"
      ]),
      explanation: "Atlasbergen ligger i nordvästra Afrika, bland annat i Marocko och Algeriet.",
      category: "Bergskedjor"
    }
  ];

  const riverQuestions = [
    {
      prompt: "Vilken flod är starkast kopplad till regnskogen i Sydamerika?",
      answer: "Amazonas",
      options: shuffle(["Amazonas", "Donau", "Nilen", "Ganges"]),
      explanation: "Amazonas rinner genom stora delar av Sydamerikas regnskog.",
      category: "Floder"
    },
    {
      prompt: "Vilken flod ligger i Afrika?",
      answer: "Nilen",
      options: shuffle(["Nilen", "Donau", "Mississippi", "Yangtze"]),
      explanation: "Nilen ligger i Afrika och är viktig för liv och jordbruk i flera länder.",
      category: "Floder"
    },
    {
      prompt: "Vilken flod flyter genom flera länder i Europa?",
      answer: "Donau",
      options: shuffle(["Donau", "Amazonas", "Ganges", "Nilen"]),
      explanation: "Donau är en stor europeisk flod som flyter genom flera länder.",
      category: "Floder"
    }
  ];

  const oceanQuestions = [
    {
      prompt: "Vilket hav ligger mellan Afrika, Asien och Australien?",
      answer: "Indiska oceanen",
      options: shuffle(["Indiska oceanen", "Atlanten", "Södra ishavet", "Norra ishavet"]),
      explanation: "Indiska oceanen ligger mellan Afrika, Asien och Australien.",
      category: "Världshav"
    },
    {
      prompt: "Vilket hav är störst i världen?",
      answer: "Stilla havet",
      options: shuffle(["Stilla havet", "Atlanten", "Indiska oceanen", "Södra ishavet"]),
      explanation: "Stilla havet är världens största ocean.",
      category: "Världshav"
    },
    {
      prompt: "Vilket hav omger Antarktis?",
      answer: "Södra ishavet",
      options: shuffle(["Södra ishavet", "Atlanten", "Stilla havet", "Norra ishavet"]),
      explanation: "Södra ishavet ligger runt Antarktis.",
      category: "Världshav"
    }
  ];

  const continentQuestions = [
    {
      prompt: "Vilken världsdel har både regnskog, savann och stora ökenområden?",
      answer: "Afrika",
      options: shuffle(continentNamePool.filter((item) => item !== "Antarktis")),
      explanation:
        "Afrika sträcker sig över flera klimatzoner och har både regnskog vid ekvatorn och torra ökenområden.",
      category: "Världsdelar"
    },
    {
      prompt: "Vilken världsdel är störst till ytan?",
      answer: "Asien",
      options: shuffle(["Asien", "Afrika", "Europa", "Nordamerika"]),
      explanation: "Asien är världens största världsdel.",
      category: "Världsdelar"
    },
    {
      prompt: "Vilken världsdel används mest för forskning eftersom klimatet är extremt?",
      answer: "Antarktis",
      options: shuffle(["Antarktis", "Europa", "Oceanien", "Sydamerika"]),
      explanation: "Antarktis har ingen permanent befolkning och används mest för forskning.",
      category: "Världsdelar"
    }
  ];

  return shuffle([
    ...countryQuizItems.map(createCountryQuestion),
    ...countryQuizItems.map(createCapitalQuestion),
    ...reasoningQuestions,
    ...mountainQuestions,
    ...riverQuestions,
    ...oceanQuestions,
    ...continentQuestions
  ]);
}

function startQuizRound() {
  appState.quizBank = buildQuizBank();
  appState.quizRound = appState.quizBank.slice(0, 10);
  appState.quizIndex = 0;
  appState.quizScore = 0;
  appState.quizAnswered = false;
  appState.quizFinished = false;
  renderQuiz();
}

function renderQuiz() {
  const progressFill = document.querySelector("#quiz-progress-fill");
  const progressText = document.querySelector("#quiz-progress-text");
  const card = document.querySelector("#quiz-card");

  if (appState.quizFinished) {
    const scorePercent = Math.round((appState.quizScore / appState.quizRound.length) * 100);
    const feedback =
      scorePercent >= 85
        ? "Starkt jobbat. Det här är över målet för C och visar att du kan mycket redan."
        : scorePercent >= 70
          ? "Bra grund. Fortsätt med jämförelser och några till kort för att göra svaren mer säkra."
          : "Bra start. Repetera några kort, lyssna på en sammanfattning och kör sedan en ny runda.";

    progressFill.style.width = "100%";
    progressText.textContent = `Rundan är klar. ${appState.quizScore} av ${appState.quizRound.length} rätt.`;

    card.innerHTML = `
      <p class="panel-label">Resultat</p>
      <h2>${scorePercent}% rätt</h2>
      <p>${feedback}</p>
      <div class="insight-strip">
        <strong>För C på provet:</strong>
        <p>Fortsätt träna på att förklara samband, inte bara komma ihåg namn. Använd jämförelsedelen efter quizet.</p>
      </div>
      <button class="primary" id="quiz-retry-finished">Köra en ny runda</button>
    `;

    const retryButton = document.querySelector("#quiz-retry-finished");
    retryButton?.addEventListener("click", startQuizRound);
    return;
  }

  const currentQuestion = appState.quizRound[appState.quizIndex];
  const progressPercent = (appState.quizIndex / appState.quizRound.length) * 100;

  progressFill.style.width = `${progressPercent}%`;
  progressText.textContent = `Fraga ${appState.quizIndex + 1} av ${appState.quizRound.length}`;

  card.innerHTML = `
    <div class="quiz-meta">
      <span>${currentQuestion.category}</span>
      <span>Poäng: ${appState.quizScore}</span>
    </div>
    <div class="quiz-question">${currentQuestion.prompt}</div>
    <div class="answer-list">
      ${currentQuestion.options
        .map(
          (option) => `
            <button class="answer-button" data-answer="${escapeHtml(option)}">${option}</button>
          `
        )
        .join("")}
    </div>
    <div class="quiz-feedback" id="quiz-feedback"></div>
  `;

  document.querySelectorAll(".answer-button").forEach((button) => {
    button.addEventListener("click", () => handleQuizAnswer(button.textContent));
  });
}

function handleQuizAnswer(answer) {
  if (appState.quizAnswered || appState.quizFinished) {
    return;
  }

  const currentQuestion = appState.quizRound[appState.quizIndex];
  const isCorrect = answer === currentQuestion.answer;
  appState.quizAnswered = true;

  if (isCorrect) {
    appState.quizScore += 1;
  }

  document.querySelectorAll(".answer-button").forEach((button) => {
    button.disabled = true;
    if (button.textContent === currentQuestion.answer) {
      button.classList.add("correct");
    } else if (button.textContent === answer) {
      button.classList.add("wrong");
    }
  });

  const feedback = document.querySelector("#quiz-feedback");
  feedback.innerHTML = `
    <p><strong>${isCorrect ? "Rätt!" : "Inte riktigt."}</strong> ${currentQuestion.explanation}</p>
    <button class="primary" id="quiz-next-button">${appState.quizIndex === appState.quizRound.length - 1 ? "Visa resultat" : "Nästa fråga"}</button>
  `;

  document.querySelector("#quiz-next-button").addEventListener("click", () => {
    appState.quizIndex += 1;
    appState.quizAnswered = false;

    if (appState.quizIndex >= appState.quizRound.length) {
      appState.quizFinished = true;
      appState.stats.quizRounds += 1;
      const scorePercent = Math.round((appState.quizScore / appState.quizRound.length) * 100);
      appState.stats.bestScore = Math.max(appState.stats.bestScore, scorePercent);
      saveJson("geografi-stats", appState.stats);
      renderStats();
    }

    renderQuiz();
  });
}

function normalizeAnswer(text) {
  return String(text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function createBlindMapQuestion(item, answerType) {
  const answer = answerType === "capital" ? item.capital : item.country;
  const aliases = answerType === "capital" ? item.capitalAliases : item.countryAliases;
  const answerLabel = answerType === "capital" ? "huvudstaden" : "landet";
  const normalizedAnswers = [answer, ...(aliases || [])].map(normalizeAnswer);

  return {
    id: `${item.id}-${answerType}`,
    item,
    answerType,
    prompt:
      answerType === "capital"
        ? "Skriv huvudstaden där markören ligger."
        : "Skriv landet där markören ligger.",
    answer,
    answerLabel,
    normalizedAnswers
  };
}

function buildBlindMapRound() {
  return shuffle(blindMapItems)
    .slice(0, 8)
    .map((item, index) => createBlindMapQuestion(item, index % 2 === 0 ? "country" : "capital"));
}

function startMapQuizRound() {
  appState.mapQuizRound = buildBlindMapRound();
  appState.mapQuizIndex = 0;
  appState.mapQuizScore = 0;
  appState.mapQuizAnswered = false;
  appState.mapQuizFinished = false;
  appState.mapQuizDraft = "";
  renderMapQuiz();
}

function buildWorldMapSvg(question) {
  const markerX = question.item.x;
  const markerY = question.item.y;

  return `
    <svg viewBox="0 0 1000 520" aria-label="Förenklad världskarta">
      <path class="mapquiz-land" d="M93 118l57-31 55 4 36 33-17 36 24 33-34 31-45-4-33-24-46 14-27-26 9-34 27-12 14-20-20-26z"></path>
      <path class="mapquiz-land" d="M285 97l44-11 47 24 22 39 41 6 29 29-12 29-38 8-22 24-43-8-24-28-29 2-13-35 20-23-20-29z"></path>
      <path class="mapquiz-land" d="M455 154l45 6 30 33 33 4 24 28-9 29-26 22-8 43-29 31-19 53-34 9-17-28-7-73-24-29 5-42 24-24 2-34z"></path>
      <path class="mapquiz-land" d="M577 121l75-26 126 11 89 27 25 39-13 33-41 6-33 33-40-8-16 18 12 29-32 38-57 5-35 31-45-10-25-29-43-8-22-38-40-2-22-26 22-29 55-7 33-22 27-46z"></path>
      <path class="mapquiz-land" d="M800 353l37-11 52 14 36 28-11 34-39 21-55-8-34-29z"></path>
      <path class="mapquiz-land" d="M919 433l22-8 18 16-8 26-25 12-23-17z"></path>
      <circle class="mapquiz-ring" cx="${markerX}" cy="${markerY}" r="22"></circle>
      <circle class="mapquiz-marker" cx="${markerX}" cy="${markerY}" r="9"></circle>
    </svg>
  `;
}

function renderMapQuiz() {
  const progressFill = document.querySelector("#mapquiz-progress-fill");
  const progressText = document.querySelector("#mapquiz-progress-text");
  const stage = document.querySelector("#mapquiz-stage");
  const card = document.querySelector("#mapquiz-card");

  if (!appState.mapQuizRound.length) {
    startMapQuizRound();
    return;
  }

  if (appState.mapQuizFinished) {
    const scorePercent = Math.round((appState.mapQuizScore / appState.mapQuizRound.length) * 100);
    progressFill.style.width = "100%";
    progressText.textContent = `Blindkartan är klar. ${appState.mapQuizScore} av ${appState.mapQuizRound.length} rätt.`;
    stage.innerHTML = `
      <div class="script-box">
        Stark insats, Isak. Blindkartan tränar precis det där extra steget där du både måste hitta platsen och skriva svaret själv.
      </div>
    `;
    card.innerHTML = `
      <p class="panel-label">Resultat</p>
      <h2>${scorePercent}% rätt</h2>
      <p>${scorePercent >= 75 ? "Bra jobbat. Det här är fin provträning." : "Fortsätt lugnt. Några rundor till gör stor skillnad."}</p>
      <button class="primary" id="mapquiz-retry">Köra en ny runda</button>
    `;
    document.querySelector("#mapquiz-retry")?.addEventListener("click", startMapQuizRound);
    return;
  }

  const question = appState.mapQuizRound[appState.mapQuizIndex];
  const progressPercentValue = (appState.mapQuizIndex / appState.mapQuizRound.length) * 100;
  progressFill.style.width = `${progressPercentValue}%`;
  progressText.textContent = `Fråga ${appState.mapQuizIndex + 1} av ${appState.mapQuizRound.length}`;
  stage.innerHTML = `
    ${buildWorldMapSvg(question)}
    <div class="mapquiz-caption">
      <span>Markören visar en plats på världskartan.</span>
      <span>${question.item.continent}</span>
    </div>
  `;

  const feedbackMarkup = appState.mapQuizAnswered
    ? `
        <div class="mapquiz-feedback ${question.wasCorrect ? "is-correct" : "is-wrong"}">
          <p><strong>${question.wasCorrect ? "Rätt, Isak!" : "Inte riktigt den här gången."}</strong> Rätt svar är ${question.answer}. Markören ligger vid ${question.item.capital}, ${question.item.country}.</p>
          <button class="primary" id="mapquiz-next-button">${appState.mapQuizIndex === appState.mapQuizRound.length - 1 ? "Visa resultat" : "Nästa plats"}</button>
        </div>
      `
    : "";

  card.innerHTML = `
    <p class="panel-label">Skriv svaret</p>
    <div class="quiz-meta">
      <span>${question.answerType === "capital" ? "Huvudstad" : "Land"}</span>
      <span>Poäng: ${appState.mapQuizScore}</span>
    </div>
    <div class="quiz-question">${question.prompt}</div>
    <form class="mapquiz-form" id="mapquiz-form">
      <label class="notes-label" for="mapquiz-input">Skriv ${question.answerLabel} här</label>
      <input
        class="mapquiz-input"
        id="mapquiz-input"
        type="text"
        autocomplete="off"
        placeholder="${question.answerType === "capital" ? "Till exempel Stockholm" : "Till exempel Sverige"}"
        value="${escapeHtml(appState.mapQuizDraft)}"
        ${appState.mapQuizAnswered ? "disabled" : ""}
      />
      <button class="primary" type="submit" ${appState.mapQuizAnswered ? "disabled" : ""}>Kontrollera</button>
    </form>
    ${feedbackMarkup}
  `;

  document.querySelector("#mapquiz-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    submitMapQuizAnswer();
  });

  document.querySelector("#mapquiz-input")?.addEventListener("input", (event) => {
    appState.mapQuizDraft = event.target.value;
  });

  document.querySelector("#mapquiz-next-button")?.addEventListener("click", nextMapQuizQuestion);
}

function submitMapQuizAnswer() {
  if (appState.mapQuizAnswered || appState.mapQuizFinished) {
    return;
  }

  const question = appState.mapQuizRound[appState.mapQuizIndex];
  const normalizedDraft = normalizeAnswer(appState.mapQuizDraft);
  if (!normalizedDraft) {
    alert("Skriv ett svar först, Isak.");
    return;
  }

  const isCorrect = question.normalizedAnswers.includes(normalizedDraft);
  appState.mapQuizAnswered = true;
  question.wasCorrect = isCorrect;

  if (isCorrect) {
    appState.mapQuizScore += 1;
  }

  renderMapQuiz();
}

function nextMapQuizQuestion() {
  appState.mapQuizIndex += 1;
  appState.mapQuizAnswered = false;
  appState.mapQuizDraft = "";

  if (appState.mapQuizIndex >= appState.mapQuizRound.length) {
    appState.mapQuizFinished = true;
  }

  renderMapQuiz();
}

function intersectTags(first = [], second = []) {
  return first.filter((tag) => second.includes(tag));
}

function uniqueTags(primary = [], secondary = []) {
  return primary.filter((tag) => !secondary.includes(tag));
}

function humanJoin(list) {
  if (!list.length) {
    return "";
  }
  if (list.length === 1) {
    return list[0];
  }
  if (list.length === 2) {
    return `${list[0]} och ${list[1]}`;
  }
  return `${list.slice(0, -1).join(", ")} och ${list[list.length - 1]}`;
}

function buildComparisonRows() {
  const first = continentById(appState.compareA);
  const second = continentById(appState.compareB);
  if (!first || !second) {
    return [];
  }
  return guideAreas.map((area) => {
    const firstDimension = first.dimensions[area.key];
    const secondDimension = second.dimensions[area.key];
    const firstOnly = uniqueTags(firstDimension.tags, secondDimension.tags);
    const secondOnly = uniqueTags(secondDimension.tags, firstDimension.tags);

    return {
      key: area.key,
      label: area.label,
      prompt: area.prompt,
      firstName: first.name,
      secondName: second.name,
      first: humanJoin(firstOnly) || firstDimension.summary,
      second: humanJoin(secondOnly) || secondDimension.summary,
      firstTags: firstDimension.tags,
      secondTags: secondDimension.tags,
      firstReason: firstDimension.reason,
      secondReason: secondDimension.reason,
      firstExamples: areaExamplesText(first, area),
      secondExamples: areaExamplesText(second, area)
    };
  });
}

function buildSampleAnswer() {
  const first = continentById(appState.compareA);
  const second = continentById(appState.compareB);
  if (!first || !second) {
    return "När du har valt två världsdelar visas ett exempel på hur ett jämförelsesvar på C-nivå kan låta.";
  }

  const variants = [
    `${first.name} och ${second.name} skiljer sig åt i både läge och klimat. ${first.name} ${first.dimensions.location.summary.toLowerCase()} medan ${second.name} ${second.dimensions.location.summary.toLowerCase()}. Klimatet blir olika eftersom ${first.dimensions.climate.reason.toLowerCase()} I ${second.name} påverkas klimatet i stället av att ${second.dimensions.climate.reason.toLowerCase()} Därför skiljer sig också vegetation och jobb åt.`,
    `När man jämför ${first.name} och ${second.name} ser man tydliga skillnader i befolkning och försörjning. I ${first.name} märks ofta ${first.dimensions.population.summary.toLowerCase()}, medan ${second.name} snarare har ${second.dimensions.population.summary.toLowerCase()}. Det påverkar också hur människor arbetar. I ${first.name} är ${humanJoin(first.dimensions.livelihoods.tags).toLowerCase()} viktiga delar, medan ${second.name} ofta kopplas till ${humanJoin(second.dimensions.livelihoods.tags).toLowerCase()}.`,
    `${first.name} och ${second.name} visar hur naturen påverkar människors liv på olika sätt. ${first.name} har ofta ${humanJoin(first.dimensions.resources.tags).toLowerCase()}, medan ${second.name} har ${humanJoin(second.dimensions.resources.tags).toLowerCase()}. Klimat och naturresurser påverkar därför både var människor bor och vad de kan arbeta med. Ett tydligt exempel är att livsmiljöer och näringar blir olika i de två världsdelarna.`
  ];

  return variants[appState.comparisonVersion % variants.length];
}

function renderComparison() {
  const grid = document.querySelector("#comparison-grid");
  const rows = buildComparisonRows();
  const focus = compareFocusData();

  populateCompareSelects();
  document.querySelector("#compare-focus-title").textContent = focus.title;
  document.querySelector("#compare-focus-description").textContent = focus.description;

  grid.innerHTML = rows.length
    ? rows
        .map(
          (row) => `
            <article class="comparison-card comparison-card-structured">
              <div class="lecture-area-prompt">
                <p class="panel-label">Område</p>
                <h3>${row.label}</h3>
                <p>${row.prompt}</p>
              </div>
              <div class="comparison-simple-grid">
                <section class="comparison-side">
                  <p class="panel-label">${row.firstName}</p>
                  <p>${row.first}</p>
                  ${renderTagChips(row.firstTags)}
                </section>
                <section class="comparison-side">
                  <p class="panel-label">${row.secondName}</p>
                  <p>${row.second}</p>
                  ${renderTagChips(row.secondTags)}
                </section>
              </div>
            </article>
          `
        )
        .join("")
    : `
        <article class="study-card">
          <p class="microcopy">Välj två olika världsdelar för att se jämförelsen här.</p>
        </article>
      `;

  const key = comparisonStorageKey();
  document.querySelector("#comparison-notes").value = appState.comparisonNotes[key] || "";
  document.querySelector("#sample-answer-text").textContent = buildSampleAnswer();
  scheduleTtsWarmup();
}

function comparisonStorageKey() {
  return [appState.compareA, appState.compareB].sort().join("--");
}

function populateCompareSelects() {
  const options = [
    `<option value="">Välj en världsdel</option>`,
    ...continents.map((continent) => `<option value="${continent.id}">${continent.name}</option>`)
  ]
    .join("");

  const firstSelect = document.querySelector("#compare-a");
  const secondSelect = document.querySelector("#compare-b");
  if (!firstSelect || !secondSelect) {
    return;
  }

  firstSelect.innerHTML = options;
  secondSelect.innerHTML = options;
  firstSelect.value = appState.compareA;
  secondSelect.value = appState.compareB;
}

function updateComparisonSelection(source, nextValue) {
  if (source === "a") {
    appState.compareA = nextValue;
    if (appState.compareA && appState.compareA === appState.compareB) {
      appState.compareB = continents.find((continent) => continent.id !== nextValue)?.id || appState.compareB;
    }
  }

  if (source === "b") {
    appState.compareB = nextValue;
    if (appState.compareB && appState.compareA === appState.compareB) {
      appState.compareA = continents.find((continent) => continent.id !== nextValue)?.id || appState.compareA;
    }
  }

  renderComparison();
}

function renderWritingPrompts() {
  const nextPromptId = recommendedWritingPromptId();
  if (appState.selectedWritingPromptId !== nextPromptId) {
    appState.gradingResult = null;
  }
  appState.selectedWritingPromptId = nextPromptId;
}

function buildWritingStarter() {
  const first = continentById(appState.compareA);
  const second = continentById(appState.compareB);
  const lesson = recommendedWritingLesson();

  if (!first || !second) {
    return "Vad: De två världsdelarna är lika/olika genom att ...\n\nVarför: Det beror på att ...\n\nExempel: I den ena världsdelen finns ... medan den andra har ...";
  }

  return [
    `Vad: ${first.name} och ${second.name} är lika eller olika genom att ...`,
    "",
    `Varför: Det beror på att ${first.name} ... medan ${second.name} ...`,
    "",
    `Exempel: I ${first.name} finns ... medan ${second.name} har ...`,
    "",
    `Avslutning: Därför påverkar detta hur människor bor och arbetar i ${lesson.title.toLowerCase()}.`
  ].join("\n");
}

function renderWritingPanel() {
  renderWritingPrompts();
  const prompt = writingPromptById(appState.selectedWritingPromptId);
  const lesson = recommendedWritingLesson();
  const currentStep = guidedStep();
  const starterText = buildWritingStarter();
  const savedDraft = appState.writingDrafts[prompt.id] || starterText;
  if (!appState.writingDrafts[prompt.id]) {
    appState.writingDrafts[prompt.id] = starterText;
    saveJson("geografi-writing-drafts", appState.writingDrafts);
  }

  document.querySelector("#writing-context").textContent =
    guidedLesson() && currentStep?.action.type === "writing"
      ? `Nu blir Isak förhörd på jämförelsen i ${lesson.title}. Svara bara på den här frågan nu, med bokfakta från fotona.`
      : `Det här är förhöret som hör till ${lesson.title}. Svara på jämförelsen med bokfakta för att träna mot C.`;
  document.querySelector("#writing-title").textContent = prompt.title;
  document.querySelector("#writing-description").textContent = prompt.description;
  document.querySelector("#writing-support-points").innerHTML = prompt.supportPoints
    .map((point) => `<li>${point}</li>`)
    .join("");
  document.querySelector("#writing-structure-points").innerHTML = [
    "Vad? Börja med att säga vad som är lika eller olika mellan världsdelarna.",
    "Varför? Förklara orsaken med geografiord som klimat, naturresurser, befolkning eller försörjning.",
    "Exempel? Ge minst ett tydligt exempel som visar att du förstår.",
    "Knyt ihop svaret i 4 till 6 meningar så att det blir ett utvecklat resonemang."
  ]
    .map((point) => `<li>${point}</li>`)
    .join("");
  document.querySelector("#writing-answer").value = savedDraft;
  renderGradingResult();
}

function renderGradingResult() {
  const container = document.querySelector("#grading-result");
  const gradeButton = document.querySelector("#grade-writing-answer");
  const clearButton = document.querySelector("#clear-writing-answer");
  const answerField = document.querySelector("#writing-answer");

  if (gradeButton) {
    gradeButton.disabled = appState.gradingLoading;
    gradeButton.textContent = appState.gradingLoading ? "Bedömer..." : "Bedöm med OpenAI";
  }

  if (clearButton) {
    clearButton.disabled = appState.gradingLoading;
  }

  if (answerField) {
    answerField.disabled = appState.gradingLoading;
  }

  if (appState.gradingLoading) {
    container.innerHTML = `
      <p class="panel-label">Återkoppling</p>
      <div class="grading-loading">
        <span class="loading-dot" aria-hidden="true"></span>
        <div>
          <strong>OpenAI tänker och läser svaret</strong>
          <p class="microcopy">Jämför nu texten med uppgiften och bokfakta från fotona, och letar efter fakta, varför-förklaringar och exempel.</p>
        </div>
      </div>
    `;
    return;
  }

  if (!appState.gradingResult) {
    container.innerHTML = `
      <p class="panel-label">Återkoppling</p>
      <p class="microcopy">Här visas återkoppling när ni skickat in ett svar.</p>
    `;
    return;
  }

  const result = appState.gradingResult;
  container.innerHTML = `
    <div class="grading-header">
      <div>
        <p class="panel-label">Återkoppling</p>
        <h3>${result.shortVerdict}</h3>
      </div>
      <div class="lesson-meta">
        <span>${result.levelEstimate}</span>
        <span>${result.scorePercent}%</span>
      </div>
    </div>
    <p>${result.summary}</p>
    <div class="grading-checks">
      ${Object.entries(result.checks)
        .map(
          ([key, passed]) => `
            <span class="grading-chip ${passed ? "is-yes" : "is-no"}">${labelForCheck(key)}: ${passed ? "Ja" : "Inte än"}</span>
          `
        )
        .join("")}
    </div>
    <section>
      <h3>Det här fungerar bra</h3>
      <ul class="mini-list">
        ${result.strengths.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </section>
    <section>
      <h3>Det här kan förbättras</h3>
      <ul class="mini-list">
        ${result.improvements.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </section>
    <section>
      <h3>Nästa steg</h3>
      <p>${result.nextStep}</p>
      <div class="insight-strip">
        <strong>Exempel på starkare svar</strong>
        <p>${result.modelAnswer}</p>
      </div>
    </section>
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

function openLessonStep(lessonId, stepIndex, options = {}) {
  const { skipLessonCoachRender = false } = options;
  const lesson = lessonById(lessonId);
  const step = lesson?.steps[stepIndex];
  if (!step) {
    return;
  }

  appState.selectedLessonId = lessonId;

  if (step.action.type === "learn") {
    appState.selectedContinent = step.action.continentId;
    renderContinentButtons();
    renderContinentDetail();
    setActiveTab("learn");
  } else if (step.action.type === "listen") {
    if (step.action.compareA && step.action.compareB) {
      setComparisonPair(step.action.compareA, step.action.compareB);
      renderComparison();
    }
    appState.listenTrackId = step.action.trackId;
    renderListenTracks();
    scheduleTtsWarmup();
    setActiveTab("listen");
  } else if (step.action.type === "drill") {
    appState.selectedDrillCategory = step.action.category;
    resetDrillPractice();
    renderDrillCategories();
    renderDrillGrid();
    setActiveTab("learn");
  } else if (step.action.type === "quiz") {
    startQuizRound();
    setActiveTab("quiz");
  } else if (step.action.type === "compare") {
    setComparisonPair(step.action.compareA, step.action.compareB);
    populateCompareSelects();
    renderComparison();
    setActiveTab("compare");
  } else if (step.action.type === "writing") {
    if (step.action.compareA && step.action.compareB) {
      setComparisonPair(step.action.compareA, step.action.compareB);
      renderComparison();
    }
    appState.selectedWritingPromptId = step.action.promptId;
    appState.gradingResult = null;
    renderWritingPanel();
    setActiveTab("writing");
  } else if (step.action.type === "game") {
    renderRewardGamePanel();
    setActiveTab("game");
  }

  if (!skipLessonCoachRender) {
    renderLessonCoach();
  }
  renderQuickPass();
}

function toggleLessonComplete(lessonId) {
  if (appState.completedLessons.has(lessonId)) {
    appState.completedLessons.delete(lessonId);
  } else {
    appState.completedLessons.add(lessonId);
  }

  saveJson("geografi-completed-lessons", [...appState.completedLessons]);
  renderQuickPass();
  renderStats();
  renderProgressBoard();
  renderLessonCoach();
}

async function gradeWritingAnswer() {
  const prompt = writingPromptById(appState.selectedWritingPromptId);
  const answer = document.querySelector("#writing-answer").value.trim();
  const referenceFacts = buildComparisonRows().map(
    (row) =>
      `${row.label}. Att tänka på: ${row.prompt} ${row.firstName}: ${row.first}. Varför: ${row.firstReason}. Exempel: ${row.firstExamples}. ${row.secondName}: ${row.second}. Varför: ${row.secondReason}. Exempel: ${row.secondExamples}.`
  );

  if (!answer) {
    alert("Skriv ett svar först, så kan OpenAI ge återkoppling.");
    return;
  }

  appState.gradingLoading = true;
  appState.gradingResult = null;
  renderGradingResult();

  try {
    const response = await fetch("/api/grade-answer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        questionTitle: prompt.title,
        questionDescription: prompt.description,
        supportPoints: prompt.supportPoints,
        referenceFacts,
        answer
      })
    });

    if (!response.ok) {
      const payload = await response.json().catch(() => ({}));
      throw new Error(payload.error || "Bedömningen misslyckades.");
    }

    appState.gradingResult = await response.json();
  } catch (error) {
    appState.gradingResult = {
      levelEstimate: "Ingen bedömning",
      scorePercent: 0,
      shortVerdict: "Det gick inte att bedöma svaret just nu.",
      summary: error.message,
      strengths: ["Prova igen när servern är igång och OpenAI-nyckeln fungerar."],
      improvements: ["Kontrollera att appen körs via den lokala servern."],
      nextStep: "Spara svaret och försök igen om en stund.",
      modelAnswer: "Ingen modelltext kunde hämtas just nu.",
      checks: {
        onTask: false,
        usesFacts: false,
        explainsWhy: false,
        givesExamples: false,
        usesGeographyConcepts: false
      }
    };
  } finally {
    appState.gradingLoading = false;
    renderGradingResult();
  }
}

function escapeHtml(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderTtsStatus() {
  const statusElement = document.querySelector("#tts-status");
  const speakButton = document.querySelector("#speak-button");
  const audioElement = document.querySelector("#tts-audio");

  if (statusElement) {
    statusElement.textContent = appState.ttsStatusMessage;
    statusElement.classList.remove("is-ready", "is-warning", "is-error");
    if (appState.ttsStatusTone === "ready") {
      statusElement.classList.add("is-ready");
    } else if (appState.ttsStatusTone === "warning") {
      statusElement.classList.add("is-warning");
    } else if (appState.ttsStatusTone === "error") {
      statusElement.classList.add("is-error");
    }
  }

  if (speakButton) {
    speakButton.disabled = appState.ttsLoading;
    speakButton.textContent = appState.ttsLoading ? "Skapar röst..." : "Läs upp";
  }

  if (audioElement) {
    audioElement.hidden = !audioElement.src;
  }
}

function buildTtsCacheKey(text, options = {}) {
  const voice = options.voice || appState.ttsVoice || "alloy";
  return `${voice}::${options.kind || "lesson"}::${text}`;
}

function splitIntoStandardTtsChunks(text, maxChunkLength = 3800) {
  const normalized = String(text || "").replace(/\s+/g, " ").trim();
  if (!normalized) {
    return [];
  }

  if (normalized.length <= maxChunkLength) {
    return [normalized];
  }

  const sentences = normalized.match(/[^.!?]+[.!?]?/g) || [normalized];
  const chunks = [];
  let current = "";

  const pushChunk = () => {
    if (current.trim()) {
      chunks.push(current.trim());
      current = "";
    }
  };

  for (const sentence of sentences) {
    const trimmedSentence = sentence.trim();
    if (!trimmedSentence) {
      continue;
    }

    if (trimmedSentence.length > maxChunkLength) {
      pushChunk();
      const words = trimmedSentence.split(" ");
      let wordChunk = "";
      for (const word of words) {
        const candidate = wordChunk ? `${wordChunk} ${word}` : word;
        if (candidate.length > maxChunkLength) {
          if (wordChunk) {
            chunks.push(wordChunk.trim());
          }
          wordChunk = word;
        } else {
          wordChunk = candidate;
        }
      }
      if (wordChunk.trim()) {
        chunks.push(wordChunk.trim());
      }
      continue;
    }

    const candidate = current ? `${current} ${trimmedSentence}` : trimmedSentence;
    if (candidate.length > maxChunkLength) {
      pushChunk();
      current = trimmedSentence;
    } else {
      current = candidate;
    }
  }

  pushChunk();
  return chunks;
}

function splitTextForTts(text, options = {}) {
  const {
    maxChunkLength = 3800,
    firstChunkWords = 60,
    firstChunkChars = 950
  } = options;
  const normalized = String(text || "").replace(/\s+/g, " ").trim();
  if (!normalized) {
    return [];
  }

  const sentences = normalized.match(/[^.!?]+[.!?]?/g) || [normalized];
  const wordCount = normalized.split(/\s+/).filter(Boolean).length;
  if (normalized.length <= maxChunkLength && wordCount <= firstChunkWords + 10) {
    return [normalized];
  }

  let firstChunk = "";
  let consumedSentences = 0;
  let consumedWords = 0;

  for (const sentence of sentences) {
    const trimmedSentence = sentence.trim();
    if (!trimmedSentence) {
      continue;
    }

    const sentenceWords = trimmedSentence.split(/\s+/).filter(Boolean).length;
    const candidate = firstChunk ? `${firstChunk} ${trimmedSentence}` : trimmedSentence;
    const wouldExceedChars = candidate.length > firstChunkChars;
    const wouldExceedWords = consumedWords + sentenceWords > firstChunkWords;

    if (firstChunk && (wouldExceedChars || wouldExceedWords)) {
      break;
    }

    firstChunk = candidate;
    consumedSentences += 1;
    consumedWords += sentenceWords;

    if (firstChunk.length >= firstChunkChars || consumedWords >= firstChunkWords) {
      break;
    }
  }

  if (!firstChunk) {
    firstChunk = normalized.slice(0, firstChunkChars).trim();
    const remainderFallback = normalized.slice(firstChunk.length).trim();
    return remainderFallback
      ? [firstChunk, ...splitIntoStandardTtsChunks(remainderFallback, maxChunkLength)]
      : [firstChunk];
  }

  const remainder = sentences
    .slice(consumedSentences)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();

  return remainder
    ? [firstChunk, ...splitIntoStandardTtsChunks(remainder, maxChunkLength)]
    : [firstChunk];
}

function buildComparisonSpeechText() {
  const rows = buildComparisonRows();
  if (!rows.length) {
    return "";
  }
  const first = continentById(appState.compareA);
  const second = continentById(appState.compareB);
  return [
    `Din guide för att jämföra ${first.name} och ${second.name}.`,
    "Bygg svaret i tre steg: vad, varför och exempel.",
    "Nu går vi kort och tydligt område för område.",
    ...rows.map(
      (row) =>
        `${row.label}. ${first.name} har ${row.first}, medan ${second.name} har ${row.second}. Det hänger ihop med att ${row.firstName} ${row.firstReason.toLowerCase()}, medan ${row.secondName} ${row.secondReason.toLowerCase()}. Tänk till exempel på ${row.firstExamples} och ${row.secondExamples}.`
    ),
    `Nu har du hört jämförelsen. När du skriver kan du börja med vad som skiljer sig, sedan förklara varför, och till sist ge exempel.`
  ].join(" ");
}

function waitForAudioMetadata(audioElement) {
  return new Promise((resolve) => {
    if (Number.isFinite(audioElement.duration) && audioElement.duration > 0) {
      resolve(audioElement.duration);
      return;
    }

    const handleLoadedMetadata = () => {
      audioElement.removeEventListener("loadedmetadata", handleLoadedMetadata);
      resolve(audioElement.duration);
    };

    audioElement.addEventListener("loadedmetadata", handleLoadedMetadata, { once: true });
  });
}

async function fetchTtsBlob(text, options = {}) {
  const chosenVoice = options.voice || appState.ttsVoice || "alloy";
  const cacheKey = buildTtsCacheKey(text, { ...options, voice: chosenVoice });
  let audioBlob = appState.ttsCache.get(cacheKey);

  if (audioBlob) {
    return { audioBlob, chosenVoice };
  }

  const requestPayload = {
    text,
    voice: chosenVoice,
    instructions: buildSpeechInstructions(options.kind)
  };

  let lastError = null;
  for (let attempt = 0; attempt < 2; attempt += 1) {
    try {
      const response = await fetch("/api/tts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "audio/wav"
        },
        body: JSON.stringify(requestPayload)
      });

      if (!response.ok) {
        const errorPayload = await response.json().catch(() => ({}));
        const message = errorPayload.details || errorPayload.error || "OpenAI TTS request failed";
        if (attempt === 0 && (response.status === 429 || response.status >= 500)) {
          await new Promise((resolve) => window.setTimeout(resolve, 900));
          lastError = new Error(message);
          continue;
        }
        throw new Error(message);
      }

      audioBlob = await response.blob();
      appState.ttsCache.set(cacheKey, audioBlob);
      return { audioBlob, chosenVoice };
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));
      if (attempt === 0) {
        await new Promise((resolve) => window.setTimeout(resolve, 900));
        continue;
      }
    }
  }

  throw lastError || new Error("OpenAI TTS request failed");
}

function getAudioBlobDuration(audioBlob) {
  return new Promise((resolve) => {
    const tempAudio = document.createElement("audio");
    const tempUrl = URL.createObjectURL(audioBlob);
    tempAudio.preload = "metadata";
    tempAudio.src = tempUrl;

    const finish = (duration) => {
      URL.revokeObjectURL(tempUrl);
      resolve(Number.isFinite(duration) && duration > 0 ? duration : 0);
    };

    tempAudio.addEventListener(
      "loadedmetadata",
      () => {
        finish(tempAudio.duration);
      },
      { once: true }
    );

    tempAudio.addEventListener(
      "error",
      () => {
        finish(0);
      },
      { once: true }
    );
  });
}

function getWarmupText() {
  const currentTrack = listenTracks.find((track) => track.id === appState.listenTrackId) || listenTracks[0];
  return currentTrack ? getListenTrackPresentation(currentTrack).speechText : "";
}

function getWarmupTexts() {
  const visibleTracks = getVisibleListenTracks();
  const currentTrack = visibleTracks.find((track) => track.id === appState.listenTrackId);
  if (!currentTrack) {
    return [];
  }
  return [getListenTrackPresentation(currentTrack).speechText].filter(Boolean);
}

function scheduleTtsWarmup() {
  if (!appState.ttsAvailable) {
    return;
  }

  if (appState.ttsWarmupTimer) {
    clearTimeout(appState.ttsWarmupTimer);
  }

  appState.ttsWarmupTimer = window.setTimeout(async () => {
    const warmupTexts = getWarmupTexts();
    if (!warmupTexts.length) {
      return;
    }

    for (const text of warmupTexts) {
      const chunks = splitTextForTts(text).slice(0, 1);
      try {
        for (const chunk of chunks) {
          await fetchTtsBlob(chunk, {
            kind: "lesson"
          });
        }
      } catch (error) {
        console.warn("Could not warm TTS cache", error);
      }
    }
  }, 1200);
}

function setTtsStatus(message, tone = "muted") {
  appState.ttsStatusMessage = message;
  appState.ttsStatusTone = tone;
  renderTtsStatus();
}

async function hydrateTtsStatus() {
  if (window.location.protocol === "file:") {
    setTtsStatus(
      "OpenAI-uppläsning kräver att appen körs via den lokala servern. Annars används webbläsarröst.",
      "warning"
    );
    return;
  }

  try {
    const response = await fetch("/api/tts/status", {
      headers: { Accept: "application/json" }
    });

    if (!response.ok) {
      throw new Error("Status endpoint unavailable");
    }

    const payload = await response.json();
    appState.ttsAvailable = Boolean(payload.configured);
    appState.ttsVoice = payload.voice || "";
    appState.availableTtsVoices = Array.isArray(payload.availableVoices)
      ? payload.availableVoices
      : [];
    appState.ttsLastError = "";
    scheduleTtsWarmup();

    if (appState.ttsAvailable) {
      setTtsStatus("OpenAI-röst aktiv.", "ready");
    } else {
      setTtsStatus(
        "OpenAI-uppläsning är inte konfigurerad än. Appen använder webbläsarröst tills OPENAI_API_KEY finns.",
        "warning"
      );
    }
  } catch (error) {
    appState.ttsAvailable = false;
    appState.ttsLastError = error instanceof Error ? error.message : String(error);
    setTtsStatus(
      "Kunde inte nå den lokala TTS-servern. Appen använder webbläsarröst just nu.",
      "warning"
    );
  }
}

function stopSpeaking(options = {}) {
  if (options.bumpToken !== false) {
    appState.ttsPlayToken += 1;
  }

  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }

  if (appState.ttsAudio) {
    appState.ttsAudio.pause();
    appState.ttsAudio.currentTime = 0;
    appState.ttsAudio.removeAttribute("src");
    appState.ttsAudio.load();
  }

  if (appState.ttsAudioUrl) {
    URL.revokeObjectURL(appState.ttsAudioUrl);
    appState.ttsAudioUrl = null;
  }

  if (!options.keepStatus) {
    if (appState.ttsAvailable) {
      setTtsStatus("OpenAI-röst redo.", "ready");
    } else {
      setTtsStatus("Webbläsarröst redo.", "warning");
    }
  } else {
    renderTtsStatus();
  }
}

function speakWithBrowser(text) {
  if (!("speechSynthesis" in window)) {
    setTtsStatus("Den här webbläsaren stöder inte uppläsning.", "error");
    return;
  }

  stopSpeaking({ keepStatus: true });

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "sv-SE";
  utterance.rate = 0.95;
  syncGuidedListenDuration(estimateSpeechDuration(text));

  const voices = window.speechSynthesis.getVoices();
  const swedishVoice = voices.find((voice) => voice.lang.toLowerCase().startsWith("sv"));
  if (swedishVoice) {
    utterance.voice = swedishVoice;
  }

  utterance.onend = () => {
    setTtsStatus("Webbläsarröst redo.", "warning");
  };

  window.speechSynthesis.speak(utterance);
  setTtsStatus("Webbläsarröst spelar upp texten.", "warning");
}

function buildSpeechInstructions(kind = "lesson") {
  if (kind === "comparison") {
    return "Speak in Swedish like a warm geography tutor for a 12-year-old. Use a slightly slower pace, clear emphasis on comparison words, and varied intonation to keep attention.";
  }

  return "Speak in Swedish like a warm, encouraging study coach for a 12-year-old. Keep the pace calm, the pronunciation clear, and the tone lively enough to help focus.";
}

async function speakWithOpenAi(text, options = {}) {
  const chosenVoice = appState.ttsVoice || "alloy";
  appState.ttsLoading = true;
  renderTtsStatus();
  const chunks = splitTextForTts(text);
  stopSpeaking({ keepStatus: true });
  const playToken = appState.ttsPlayToken;
  setTtsStatus(
    chunks.length > 1 ? `Skapar OpenAI-röst i ${chunks.length} delar...` : "Skapar OpenAI-röst...",
    "muted"
  );

  try {
    const audioElement = appState.ttsAudio || document.querySelector("#tts-audio");
    appState.ttsAudio = audioElement;
    const partPromises = chunks.map((chunk, index) => {
      const loadPart = async () => {
        const { audioBlob } = await fetchTtsBlob(chunk, { ...options, voice: chosenVoice });
        const duration = await getAudioBlobDuration(audioBlob);
        return { audioBlob, duration };
      };

      return index === 0 ? loadPart() : null;
    });

    const firstPart = await partPromises[0];
    if (appState.ttsPlayToken !== playToken) {
      return;
    }

    syncGuidedListenDuration(
      firstPart.duration > 0 && chunks.length === 1
        ? firstPart.duration
        : estimateSpeechDuration(text)
    );

    if (chunks.length > 1) {
      for (let index = 1; index < chunks.length; index += 1) {
        partPromises[index] =
          partPromises[index] ||
          (async () => {
            const { audioBlob } = await fetchTtsBlob(chunks[index], { ...options, voice: chosenVoice });
            const duration = await getAudioBlobDuration(audioBlob);
            return { audioBlob, duration };
          })();
      }
    }

    appState.ttsLoading = false;
    renderTtsStatus();

    for (let index = 0; index < chunks.length; index += 1) {
      if (appState.ttsPlayToken !== playToken) {
        return;
      }

      const part = index === 0 ? firstPart : await partPromises[index];

      if (appState.ttsAudioUrl) {
        URL.revokeObjectURL(appState.ttsAudioUrl);
        appState.ttsAudioUrl = null;
      }

      appState.ttsAudioUrl = URL.createObjectURL(part.audioBlob);
      audioElement.src = appState.ttsAudioUrl;
      await waitForAudioMetadata(audioElement);

      setTtsStatus(
        chunks.length > 1
          ? `OpenAI-röst spelar upp del ${index + 1} av ${chunks.length}.`
          : "OpenAI-röst spelar upp.",
        "ready"
      );

      await new Promise((resolve, reject) => {
        audioElement.onended = () => resolve();
        audioElement.onerror = () => reject(new Error("Ljudspelaren kunde inte spela upp OpenAI-rösten."));
        audioElement.play().catch(reject);
      });
    }

    if (appState.ttsPlayToken === playToken) {
      setTtsStatus("OpenAI-röst redo.", "ready");
    }
  } finally {
    appState.ttsLoading = false;
    renderTtsStatus();
  }
}

async function speakText(text, options = {}) {
  if (appState.ttsLoading) {
    return;
  }

  if (appState.ttsAvailable) {
    try {
      appState.ttsLastError = "";
      await speakWithOpenAi(text, options);
      return;
    } catch (error) {
      appState.ttsLastError = error instanceof Error ? error.message : String(error);
      console.warn("OpenAI TTS failed", error);
      setTtsStatus(
        "OpenAI-rösten svarade inte just nu. Försök igen om ett par sekunder.",
        "error"
      );
      return;
    }
  }

  speakWithBrowser(text);
}

function bindEvents() {
  document.querySelector("#tab-row").addEventListener("click", (event) => {
    if (guidedLesson() && !guidedLessonIsComplete()) {
      return;
    }
    const button = event.target.closest("[data-tab]");
    if (!button) {
      return;
    }
    setActiveTab(button.dataset.tab);
  });
  document.querySelector("#jump-next-lesson").addEventListener("click", () => {
    const lesson = selectedLesson();
    if (!lesson) {
      return;
    }
    startGuidedLesson(lesson.id);
  });
  document.querySelector("#lesson-start-cta").addEventListener("click", () => {
    const lesson = selectedLesson();
    if (!lesson) {
      return;
    }
    startGuidedLesson(lesson.id);
  });
  document.querySelector("#restart-quiz").addEventListener("click", startQuizRound);
  document.querySelector("#restart-mapquiz").addEventListener("click", startMapQuizRound);

  document.querySelector("#lesson-coach").addEventListener("click", (event) => {
    const startButton = event.target.closest("#start-guided-lesson");
    if (startButton) {
      const lessonId = startButton.dataset.guidedStart || selectedLesson()?.id;
      if (!lessonId) {
        return;
      }
      startGuidedLesson(lessonId);
      return;
    }

    if (event.target.closest("#complete-guided-step")) {
      completeGuidedCurrentStep();
      return;
    }

    if (event.target.closest("#next-guided-step")) {
      if (guidedLesson() && (appState.guidedStepDone || appState.guidedStepRemaining === 0)) {
        nextGuidedStep();
      }
    }
  });

  document.querySelector("#quickpass-grid").addEventListener("click", (event) => {
    const startButton = event.target.closest("[data-lesson-start]");
    if (startButton) {
      startGuidedLesson(startButton.dataset.lessonStart);
      return;
    }
  });

  const syncLessonSelection = () => {
    if (guidedLesson()) {
      return;
    }

    const nextA = document.querySelector("#lesson-compare-a")?.value || "";
    const nextB = document.querySelector("#lesson-compare-b")?.value || "";
    setLessonPair(nextA, nextB);
    if (appState.lessonCompareA && appState.lessonCompareA === appState.lessonCompareB) {
      const fallback = continents.find((continent) => continent.id !== appState.lessonCompareA)?.id || "";
      appState.lessonCompareB = fallback;
      document.querySelector("#lesson-compare-b").value = fallback;
      setLessonPair(appState.lessonCompareA, fallback);
    }
    renderQuickPass();
    renderLessonCoach();
    renderWritingPanel();
  };

  document.querySelector("#lesson-compare-a").addEventListener("change", syncLessonSelection);
  document.querySelector("#lesson-compare-b").addEventListener("change", syncLessonSelection);

  document.querySelector("#continent-buttons").addEventListener("click", (event) => {
    const button = event.target.closest("[data-continent-id]");
    if (!button) {
      return;
    }
    appState.selectedContinent = button.dataset.continentId;
    renderContinentButtons();
    renderContinentDetail();
  });

  document.querySelector("#drill-category-buttons").addEventListener("click", (event) => {
    const button = event.target.closest("[data-drill-category]");
    if (!button) {
      return;
    }
    appState.selectedDrillCategory = button.dataset.drillCategory;
    resetDrillPractice();
    renderDrillCategories();
    renderDrillGrid();
  });

  document.querySelector("#drill-grid").addEventListener("input", (event) => {
    const input = event.target.closest("[data-drill-input]");
    if (!input) {
      return;
    }
    appState.drillDrafts[input.dataset.drillInput] = input.value;
  });

  document.querySelector("#drill-grid").addEventListener("submit", (event) => {
    const form = event.target.closest("[data-drill-form]");
    if (!form) {
      return;
    }
    event.preventDefault();
    checkDrillCard(form.dataset.drillForm);
  });

  document.querySelector("#listen-buttons").addEventListener("click", (event) => {
    const button = event.target.closest("[data-listen-id]");
    if (!button) {
      return;
    }
    appState.listenTrackId = button.dataset.listenId;
    renderListenTracks();
    scheduleTtsWarmup();
  });

  document.querySelector("#speak-button").addEventListener("click", async () => {
    const track = listenTracks.find((item) => item.id === appState.listenTrackId);
    if (!track) {
      return;
    }
    await speakText(getListenTrackPresentation(track).speechText, { kind: "lesson" });
  });
  document.querySelector("#stop-speaking").addEventListener("click", stopSpeaking);

  document.querySelector("#compare-a").addEventListener("change", (event) => {
    updateComparisonSelection("a", event.target.value);
  });

  document.querySelector("#compare-b").addEventListener("change", (event) => {
    updateComparisonSelection("b", event.target.value);
  });

  document.querySelector("#listen-comparison").addEventListener("click", async () => {
    const speechText = buildComparisonSpeechText();
    if (!speechText) {
      setTtsStatus("Välj två världsdelar först, så kan appen läsa upp jämförelsen.", "warning");
      return;
    }
    await speakText(speechText, { kind: "comparison" });
  });

  document.querySelector("#refresh-sample-answer").addEventListener("click", () => {
    appState.comparisonVersion += 1;
    document.querySelector("#sample-answer-text").textContent = buildSampleAnswer();
  });

  document.querySelector("#comparison-notes").addEventListener("input", (event) => {
    const key = comparisonStorageKey();
    appState.comparisonNotes[key] = event.target.value;
    saveJson("geografi-comparison-notes", appState.comparisonNotes);
    appState.stats.notesSaved = Object.values(appState.comparisonNotes).filter(Boolean).length;
    saveJson("geografi-stats", appState.stats);
    renderStats();
  });

  document.querySelector("#writing-answer").addEventListener("input", (event) => {
    appState.writingDrafts[appState.selectedWritingPromptId] = event.target.value;
    saveJson("geografi-writing-drafts", appState.writingDrafts);
  });

  document.querySelector("#grade-writing-answer").addEventListener("click", gradeWritingAnswer);
  document.querySelector("#clear-writing-answer").addEventListener("click", () => {
    const starterText = buildWritingStarter();
    appState.writingDrafts[appState.selectedWritingPromptId] = starterText;
    saveJson("geografi-writing-drafts", appState.writingDrafts);
    document.querySelector("#writing-answer").value = starterText;
    appState.gradingResult = null;
    renderGradingResult();
  });

  document.querySelector("#reward-game-panel").addEventListener("click", (event) => {
    if (event.target.closest("#reward-game-start")) {
      startRewardGame();
      return;
    }
    if (event.target.closest("#reward-game-flap")) {
      queueRewardGameBoost();
      return;
    }
    if (event.target.closest("#reward-game-stage")) {
      if (!appState.rewardGameRunning) {
        startRewardGame();
        return;
      }
      queueRewardGameBoost();
    }
  });

  window.addEventListener("keydown", (event) => {
    if (appState.activeTab !== "game") {
      return;
    }
    if (event.target instanceof Element && event.target.matches("textarea, input, select")) {
      return;
    }
    if (event.code === "Space" || event.code === "ArrowUp") {
      event.preventDefault();
      if (!appState.rewardGameRunning) {
        startRewardGame();
        return;
      }
      queueRewardGameBoost();
    }
  });

  document.querySelector("#book-image-input").addEventListener("change", async (event) => {
    const files = Array.from(event.target.files || []);
    if (!files.length) {
      return;
    }
    await saveBookImages(files);
    event.target.value = "";
  });

  document.querySelector("#book-gallery").addEventListener("click", async (event) => {
    const button = event.target.closest("[data-remove-image-id]");
    if (!button) {
      return;
    }

    await deleteBookImage(Number(button.dataset.removeImageId));
  });

  document.querySelector("#book-gallery").addEventListener("input", async (event) => {
    if (!event.target.matches("[data-note-image-id]")) {
      return;
    }
    const id = Number(event.target.dataset.noteImageId);
    await updateBookImageNote(id, event.target.value);
  });
}

function renderBookGallery() {
  const gallery = document.querySelector("#book-gallery");
  appState.imageUrls.forEach((url) => URL.revokeObjectURL(url));
  appState.imageUrls = [];

  if (!appState.bookImages.length) {
    gallery.innerHTML = `
      <article class="empty-state">
        Inga bokbilder upplagda än. Lägg in foton på kartan eller boksidorna som är viktigast för provet.
      </article>
    `;
    return;
  }

  gallery.innerHTML = appState.bookImages
    .map((image) => {
      const url = URL.createObjectURL(image.blob);
      appState.imageUrls.push(url);
      return `
        <article class="book-card">
          <img src="${url}" alt="${escapeHtml(image.name)}" />
          <div class="book-meta">
            <strong>${image.name}</strong>
            <textarea rows="4" data-note-image-id="${image.id}" placeholder="Skriv vad ni ska träna på i den här bilden...">${image.note || ""}</textarea>
            <button class="book-remove" data-remove-image-id="${image.id}">Ta bort bild</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function openBookDb() {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open("geografi-book-images", 1);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains("images")) {
        db.createObjectStore("images", { keyPath: "id", autoIncrement: true });
      }
    };
  });
}

async function loadBookImages() {
  if (!("indexedDB" in window)) {
    return;
  }

  try {
    const db = await openBookDb();
    const images = await new Promise((resolve, reject) => {
      const transaction = db.transaction("images", "readonly");
      const store = transaction.objectStore("images");
      const request = store.getAll();
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
    });

    appState.bookImages = images.sort((first, second) => second.id - first.id);
    renderBookGallery();
    renderStats();
  } catch (error) {
    console.warn("Could not load book images", error);
  }
}

async function saveBookImages(files) {
  if (!("indexedDB" in window)) {
    alert("Den här webbläsaren verkar inte stödja lokal bildlagring.");
    return;
  }

  try {
    const db = await openBookDb();
    await Promise.all(
      files.map(
        (file) =>
          new Promise((resolve, reject) => {
            const transaction = db.transaction("images", "readwrite");
            const store = transaction.objectStore("images");
            const request = store.add({
              name: file.name,
              type: file.type,
              createdAt: Date.now(),
              note: "",
              blob: file
            });
            request.onerror = () => reject(request.error);
            request.onsuccess = () => resolve(request.result);
          })
      )
    );
    await loadBookImages();
  } catch (error) {
    console.warn("Could not save book images", error);
    alert("Det gick inte att spara bilderna lokalt.");
  }
}

async function updateBookImageNote(id, note) {
  try {
    const image = appState.bookImages.find((item) => item.id === id);
    if (!image) {
      return;
    }
    const db = await openBookDb();
    await new Promise((resolve, reject) => {
      const transaction = db.transaction("images", "readwrite");
      const store = transaction.objectStore("images");
      const request = store.put({ ...image, note });
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
    });
    appState.bookImages = appState.bookImages.map((item) =>
      item.id === id ? { ...item, note } : item
    );
  } catch (error) {
    console.warn("Could not update note", error);
  }
}

async function deleteBookImage(id) {
  try {
    const db = await openBookDb();
    await new Promise((resolve, reject) => {
      const transaction = db.transaction("images", "readwrite");
      const store = transaction.objectStore("images");
      const request = store.delete(id);
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
    });
    appState.bookImages = appState.bookImages.filter((image) => image.id !== id);
    renderBookGallery();
    renderStats();
  } catch (error) {
    console.warn("Could not delete image", error);
  }
}

function init() {
  appState.ttsAudio = document.querySelector("#tts-audio");
  setLessonPair(appState.lessonCompareA, appState.lessonCompareB);
  renderQuickPass();
  renderStats();
  renderProgressBoard();
  renderLessonCoach();
  renderContinentButtons();
  renderContinentDetail();
  renderDrillCategories();
  renderDrillGrid();
  renderListenTracks();
  populateCompareSelects();
  renderComparison();
  renderWritingPanel();
  renderRewardGamePanel();
  startQuizRound();
  startMapQuizRound();
  renderBookGallery();
  renderTtsStatus();
  bindEvents();
  hydrateTtsStatus();
  loadBookImages();
}

window.addEventListener("beforeunload", () => {
  if (appState.ttsWarmupTimer) {
    clearTimeout(appState.ttsWarmupTimer);
  }
  clearGuidedStepTimer();
  stopRewardGameLoop();
  stopSpeaking();
  appState.imageUrls.forEach((url) => URL.revokeObjectURL(url));
});

window.addEventListener("load", init);
