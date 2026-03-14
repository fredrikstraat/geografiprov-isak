const continents = [
  {
    id: "europa",
    name: "Europa",
    intro:
      "Europa är en relativt liten världsdel men har många länder, täta transporter och flera olika klimat.",
    memoryHook:
      "Tänk på Europa som en världsdel med många kuster, mycket handel och stor befolkning på liten yta.",
    countries: ["Sverige", "Tyskland", "Frankrike", "Spanien", "Italien"],
    keyPlaces: ["Alperna", "Donau", "Nordsjon", "Medelhavet"],
    cLevel:
      "För C är det bra att kunna koppla Europas klimat och läge till varför många människor bor i städer och arbetar med industri, service och handel.",
    audio:
      "Europa ligger mest på norra halvklotet och har många kuster, floder och stora städer. Klimatet är ofta tempererat, men det finns också kalla och torrare områden. Eftersom världsdelens floder, hamnar och odlingsmarker gör transporter och handel enkla bor många människor tätt. Europa har skog, odlingsmark, vattenkraft och mineraler. Det gör att industrin, servicen och jordbruket har blivit viktiga delar av försörjningen.",
    dimensions: {
      location: {
        summary:
          "Ligger i den västra delen av Eurasien med många kuster, hav och floder.",
        tags: ["norra halvklotet", "många kuster", "många grannländer"],
        reason:
          "Kuster, floder och korta avstånd mellan länder har underlättat transporter, handel och kontakt mellan människor."
      },
      climate: {
        summary:
          "Mest tempererat klimat, men medelhavsklimat i södra delar och kallare klimat i norr och i bergsområden.",
        tags: ["tempererat", "medelhav", "kallare i norr"],
        reason:
          "Breddläget, havens närhet och bergskedjor påverkar hur varmt, kallt och nederbördsrikt klimatet blir."
      },
      vegetation: {
        summary:
          "Lövskog och barrskog är vanliga, men också stäpp och buskvegetation runt Medelhavet.",
        tags: ["lövskog", "barrskog", "stäpp"],
        reason:
          "Vegetationen följer klimatet. Mildare och fuktigare områden ger skog medan torrare områden ger gräsmarker eller busklandskap."
      },
      population: {
        summary:
          "Tätbefolkad världsdel med många stora städer och mycket bebyggelse.",
        tags: ["tätbefolkad", "stor andel städer"],
        reason:
          "Goda transporter, arbetsplatser, odlingsmark och lång historia av handel gör att många människor bor tätt."
      },
      livelihoods: {
        summary:
          "Många arbetar inom industri, service, handel och teknik. Jordbruk är viktigt i vissa områden.",
        tags: ["industri", "service", "handel", "jordbruk"],
        reason:
          "Utbildning, teknik, energi, transporter och nära marknader har gjort att fler arbetar i städer och i olika tjänsteyrken."
      },
      resources: {
        summary:
          "Skog, vattenkraft, fisk, odlingsmark och mineraler som järnmalm är viktiga naturresurser.",
        tags: ["skog", "vattenkraft", "odlingsmark", "mineraler"],
        reason:
          "Naturresurser tillsammans med teknik och transportvägar gör att människor kan producera mat, energi och varor."
      }
    }
  },
  {
    id: "afrika",
    name: "Afrika",
    intro:
      "Afrika är stor och sträcker sig över både norra och södra halvklotet. Därför finns både regnskog, savann och stora ökenområden.",
    memoryHook:
      "Tänk på Afrika som en världsdel med mycket variation: hetta, regn, torra områden och snabb befolkningstillväxt.",
    countries: ["Egypten", "Kenya", "Nigeria", "Sydafrika", "Etiopien"],
    keyPlaces: ["Nilen", "Sahara", "Atlasbergen", "Kongo"],
    cLevel:
      "För C är det viktigt att kunna förklara hur klimatet påverkar vegetation, jordbruk, vattenbrist och var människor kan bo och arbeta.",
    audio:
      "Afrika ligger på både norra och södra halvklotet och genomkorsas av ekvatorn. Därför finns flera klimat, till exempel tropiskt klimat runt ekvatorn och mycket torra områden i Sahara. I Afrika finns regnskog, savann och öken. Befolkningen växer snabbt och många bor i stora städer, men jordbruk är fortfarande viktigt. Naturresurser som olja, guld, koppar och kobolt finns i flera länder, samtidigt som tillgången till vatten kan vara avgörande för hur människor lever.",
    dimensions: {
      location: {
        summary:
          "Ligger på både norra och södra halvklotet och är omgiven av Atlanten, Indiska oceanen och Medelhavet.",
        tags: ["båda halvkloten", "ekvatorn", "stora avstånd"],
        reason:
          "När ekvatorn och vändsklarna går genom Afrika blir temperaturen och nederbörden mycket olika i olika delar."
      },
      climate: {
        summary:
          "Har tropiskt klimat vid ekvatorn, savannklimat på flera håll och mycket torra ökenklimat i norr och delar av södra Afrika.",
        tags: ["tropiskt", "savann", "öken"],
        reason:
          "Läget runt ekvatorn ger varmt klimat medan torra vindar och högtrycksområden skapar stora ökenområden."
      },
      vegetation: {
        summary:
          "Regnskog kring ekvatorn, savann med gräs och enstaka träd, samt sparsam vegetation i öknen.",
        tags: ["regnskog", "savann", "sparsam vegetation"],
        reason:
          "Mycket regn ger tät skog, men mindre nederbörd gör att gräsmarker eller öken dominerar."
      },
      population: {
        summary:
          "Befolkningen är stor och växer snabbt. Många bor i städer, men landsbygden är fortfarande viktig.",
        tags: ["snabb tillväxt", "många städer", "landsbygd viktig"],
        reason:
          "Tillgång till arbete, utbildning och service gör att fler flyttar till städer, men jordbruket gör också landsbygden viktig."
      },
      livelihoods: {
        summary:
          "Jordbruk, gruvnäring, handel, turism och olika tjänster är vanliga sätt att försörja sig.",
        tags: ["jordbruk", "gruvor", "turism", "handel"],
        reason:
          "Klimat, mark, vatten och naturresurser styr vilka jobb som är möjliga på olika platser."
      },
      resources: {
        summary:
          "Naturresurser som olja, guld, diamanter, koppar, kobolt och odlingsmark är viktiga.",
        tags: ["olja", "metaller", "odlingsmark", "solenergi"],
        reason:
          "Naturresurser kan ge inkomster och arbeten, men hur de används påverkar också miljö, mark och människors livsmiljö."
      }
    }
  },
  {
    id: "asien",
    name: "Asien",
    intro:
      "Asien är världens största världsdel med både höga berg, stora floder, stora öknar och tätbefolkade storstäder.",
    memoryHook:
      "Tänk på Asien som den största och mest varierade världsdelen, från tundra i norr till tropiker i sydost.",
    countries: ["Kina", "Japan", "Indien", "Thailand", "Saudiarabien"],
    keyPlaces: ["Himalaya", "Ganges", "Yangtze", "Mellanöstern"],
    cLevel:
      "För C är det smart att kunna visa hur storleken på Asien gör att klimat, naturresurser och levnadssätt blir mycket olika i olika regioner.",
    audio:
      "Asien är störst av alla världsdelar och sträcker sig från kalla områden i norr till tropiska områden i sydost. Där finns Himalaya, stora floder som Ganges och Yangtze samt öknar som Arabiska öknen och Gobi. Många av världens mest tätbefolkade områden finns i Asien. I vissa delar är risodling viktigt, i andra dominerar industri, teknik eller utvinning av olja och gas. Det visar hur läge, klimat och naturresurser påverkar människors livsmiljöer.",
    dimensions: {
      location: {
        summary:
          "Sträcker sig över mycket stora områden från Europa till Stilla havet och från Norra ishavet till tropikerna.",
        tags: ["mycket stor yta", "norra halvklotet", "flera regioner"],
        reason:
          "När en världsdel är så stor blir natur, klimat och befolkning mycket olika mellan norr, söder, kust och inland."
      },
      climate: {
        summary:
          "Har allt från polart och tempererat klimat till monsun, subtropiskt och tropiskt klimat.",
        tags: ["tempererat", "tropiskt", "monsun", "polart"],
        reason:
          "Stor bredd i nord-sydlig riktning, höga berg och avstånd till hav skapar stora klimatkontraster."
      },
      vegetation: {
        summary:
          "Taiga i norr, stäpp och öken i inlandet samt regnskog och odlingslandskap i varmare delar.",
        tags: ["taiga", "stäpp", "öken", "regnskog"],
        reason:
          "Temperatur, nederbörd och monsunsystem styr vilka växter som kan leva och odlas."
      },
      population: {
        summary:
          "Världens största befolkning finns här, med många megastäder och tätbefolkade floddalar och kustområden.",
        tags: ["mycket stor befolkning", "megastäder", "tätbefolkade dalar"],
        reason:
          "Floder, kustnära läge, odlingsbar mark och jobb i städer gör att många människor samlas på vissa platser."
      },
      livelihoods: {
        summary:
          "Jordbruk, industri, handel, teknik och energiutvinning är vanliga inkomstkällor.",
        tags: ["jordbruk", "industri", "teknik", "energi"],
        reason:
          "Olika naturresurser och olika utveckling i olika regioner gör att jobben ser mycket olika ut."
      },
      resources: {
        summary:
          "Har bland annat olja, gas, kol, metaller, skog, fisk och mycket odlingsmark i vissa områden.",
        tags: ["olja", "gas", "kol", "skog", "odlingsmark"],
        reason:
          "Naturresurserna är ojämnt fördelade och påverkar både ekonomin och människors levnadsvillkor."
      }
    }
  },
  {
    id: "nordamerika",
    name: "Nordamerika",
    intro:
      "Nordamerika har stora skillnader mellan kalla områden i norr, tätbefolkade områden i södra Kanada och USA samt varmare delar längre söderut.",
    memoryHook:
      "Tänk på Nordamerika som en världsdel med stora naturresurser, lång transport och många olika klimatzoner.",
    countries: ["Kanada", "USA", "Mexiko"],
    keyPlaces: ["Klippiga bergen", "Mississippi", "Grönska områden", "Centralamerika"],
    cLevel:
      "För C är det bra att se sambandet mellan naturresurser, transportvägar, stadsutveckling och varför befolkningen är tät i vissa bälten men gles i andra.",
    audio:
      "Nordamerika sträcker sig från arktiska områden i norr till varmare klimat i söder. Därför finns tundra, barrskog, gräsmarker, berg, öknar och subtropiska områden. Många människor bor i storstadsbältet i USA och i södra Kanada. Jordbruk, industri, teknik och handel är viktiga näringar. Nordamerika har också mycket skog, olja, gas, mineraler och sötvatten, vilket har gjort naturresurserna viktiga för ekonomin.",
    dimensions: {
      location: {
        summary:
          "Ligger på västra halvklotet mellan Stilla havet, Atlanten och Norra ishavet.",
        tags: ["västra halvklotet", "stora kuster", "arktiska delar"],
        reason:
          "Det stora nord-sydliga läget skapar skillnader mellan kalla, tempererade och varma områden."
      },
      climate: {
        summary:
          "Har polart klimat i norr, tempererat klimat i stora delar och torra eller subtropiska områden längre söderut.",
        tags: ["polart", "tempererat", "subtropiskt", "torrt"],
        reason:
          "Breddgrad, hav, vindar och bergskedjor påverkar nederbörd och temperatur."
      },
      vegetation: {
        summary:
          "Tundra och barrskog i norr, gräsmarker i inlandet samt skog, öken och busklandskap i varmare delar.",
        tags: ["tundra", "barrskog", "gräsmark", "öken"],
        reason:
          "Vegetationen följer klimatet och hur mycket regn som kommer till olika delar av världsdelen."
      },
      population: {
        summary:
          "Många bor i stora städer och i sydligare delar, medan norr och vissa inland är glesbefolkade.",
        tags: ["stor andel städer", "gles i norr", "tät i söder"],
        reason:
          "Mildare klimat, arbete, handel och goda transporter gör att fler bor tätt i sydligare områden."
      },
      livelihoods: {
        summary:
          "Industri, handel, teknik, jordbruk, turism och energiutvinning är vanliga.",
        tags: ["industri", "teknik", "jordbruk", "energi"],
        reason:
          "Hög teknisk utveckling och stora naturresurser skapar många olika jobb."
      },
      resources: {
        summary:
          "Har olja, gas, skog, fisk, sötvatten, metaller och stora odlingsområden.",
        tags: ["olja", "gas", "skog", "sötvatten", "odlingsmark"],
        reason:
          "Tillgången till resurser har gjort energi, jordbruk och industri viktiga för ekonomin."
      }
    }
  },
  {
    id: "sydamerika",
    name: "Sydamerika",
    intro:
      "Sydamerika är känt för Anderna, Amazonas och stora skillnader mellan regnskog, gräsmarker, berg och torrare områden.",
    memoryHook:
      "Tänk på Sydamerika som en världsdel där naturen är starkt närvarande och påverkar både boende, transporter och jobb.",
    countries: ["Brasilien", "Argentina", "Chile", "Peru"],
    keyPlaces: ["Anderna", "Amazonas", "Atacama", "Pampas"],
    cLevel:
      "För C är det viktigt att förklara hur regnskog, höga berg och stora naturresurser påverkar människors liv och försörjning.",
    audio:
      "Sydamerika ligger mest på södra halvklotet och har både tropiska och tempererade områden. Här finns Anderna längst i väster, Amazonas regnskog och torra områden som Atacamaöknen. Många människor bor längs kusterna eller i högländer och storstäder. Jordbruk, gruvnäring, vattenkraft, handel och turism är viktiga. Naturresurser som skog, koppar, litium och odlingsmark spelar stor roll, samtidigt som markanvändning kan påverka miljö och livsmiljöer.",
    dimensions: {
      location: {
        summary:
          "Ligger på västra halvklotet och sträcker sig från ekvatorn till kalla delar i söder.",
        tags: ["västra halvklotet", "mest södra halvklotet", "lång och smal"],
        reason:
          "Det långa nord-sydliga läget gör att klimatet skiftar mycket mellan norr, centrala delar och söder."
      },
      climate: {
        summary:
          "Tropiskt klimat i norr, torra områden i väster och mer tempererat klimat längre söderut.",
        tags: ["tropiskt", "tempererat", "torrt"],
        reason:
          "Ekvatorn, havsströmmar, berg och breddgrad styr temperatur och nederbörd."
      },
      vegetation: {
        summary:
          "Regnskog i Amazonas, gräsmarker som pampas och gles vegetation i torra eller kalla områden.",
        tags: ["regnskog", "gräsmark", "gles vegetation"],
        reason:
          "Stora skillnader i nederbörd och temperatur gör att olika vegetationstyper dominerar på olika platser."
      },
      population: {
        summary:
          "Många bor i stora städer och längs kusterna, medan vissa delar av inlandet är glest befolkade.",
        tags: ["kustnära städer", "gles i inlandet", "storstad"],
        reason:
          "Kuster, arbete och transporter lockar fler människor, medan tät regnskog och berg kan göra det svårare att bo tätt."
      },
      livelihoods: {
        summary:
          "Jordbruk, gruvor, turism, handel och vattenkraft är viktiga delar av försörjningen.",
        tags: ["jordbruk", "gruvor", "vattenkraft", "turism"],
        reason:
          "Naturresurser och landskap skapar olika möjligheter för jobb och export."
      },
      resources: {
        summary:
          "Har skog, sötvatten, koppar, litium, odlingsmark och stora möjligheter till vattenkraft.",
        tags: ["skog", "sötvatten", "koppar", "litium", "vattenkraft"],
        reason:
          "Naturresurserna är viktiga för ekonomin men hur de används påverkar också naturen och människors livsmiljö."
      }
    }
  },
  {
    id: "oceanien",
    name: "Oceanien",
    intro:
      "Oceanien består av Australien, Nya Zeeland och många öar i Stilla havet. Därför finns både torra och tropiska miljöer.",
    memoryHook:
      "Tänk på Oceanien som en utspridd världsdel där havet är lika viktigt som landet.",
    countries: ["Australien", "Nya Zeeland"],
    keyPlaces: ["Stilla havet", "Stora Barriarrevet", "Outback", "Melanesien"],
    cLevel:
      "För C är det bra att kunna se hur det utspridda läget i havet påverkar transport, klimat och försörjning.",
    audio:
      "Oceanien ligger i och runt Stilla havet och består av både stora landområden som Australien och många mindre öar. I Australien finns mycket torra områden, medan flera öar har tropiskt klimat. Befolkningen är liten jämfört med andra världsdelar och bor ofta vid kusterna. Gruvnäring, jordbruk, turism, fiske och handel är viktiga. Naturresurser som järnmalm, kol, gas, fisk och odlingsmark är betydelsefulla i olika delar av Oceanien.",
    dimensions: {
      location: {
        summary:
          "Ligger i och runt Stilla havet och består av både fastland och många öar.",
        tags: ["stilla havet", "utspridda öar", "södra halvklotet"],
        reason:
          "Det utspridda läget gör havet och avstånd viktiga för transporter, handel och vardag."
      },
      climate: {
        summary:
          "Torra och heta områden i Australien, men tropiskt eller tempererat klimat på andra platser.",
        tags: ["tropiskt", "tempererat", "torrt"],
        reason:
          "Storlek, breddgrad och havets närhet gör att klimatet blir olika på fastlandet och på öarna."
      },
      vegetation: {
        summary:
          "Buskmark och gräsmarker i torrare delar, men också skog och tropisk vegetation på fuktigare platser.",
        tags: ["buskmark", "gräsmark", "skog", "tropisk vegetation"],
        reason:
          "Vegetationen följer hur varmt och regnigt det är i olika delar av världsdelen."
      },
      population: {
        summary:
          "Relativt liten befolkning som ofta bor kustnära, medan stora delar av inlandet är glest befolkade.",
        tags: ["liten befolkning", "kustnära städer", "gles i inlandet"],
        reason:
          "Torrare inland, långa avstånd och tillgång till jobb och service gör att fler bor vid kusten."
      },
      livelihoods: {
        summary:
          "Gruvnäring, jordbruk, turism, fiske och olika tjänster är viktiga.",
        tags: ["gruvor", "jordbruk", "turism", "fiske"],
        reason:
          "Naturresurser, havet och klimatet påverkar vilka jobb som är vanliga."
      },
      resources: {
        summary:
          "Har bland annat kol, järnmalm, gas, fisk och odlingsmark i vissa områden.",
        tags: ["kol", "järnmalm", "gas", "fisk", "odlingsmark"],
        reason:
          "Naturresurserna är viktiga för export och försörjning, men kräver också att naturen används på ett hållbart sätt."
      }
    }
  },
  {
    id: "antarktis",
    name: "Antarktis",
    intro:
      "Antarktis är den kallaste världsdelen och är nästan helt täckt av is.",
    memoryHook:
      "Tänk på Antarktis som is, kyla, forskning och ingen permanent befolkning.",
    countries: [],
    keyPlaces: ["Södra ishavet", "Sydpolen", "Inlandsis"],
    cLevel:
      "För C räcker det ofta att kunna förklara hur det extrema klimatet gör att få människor kan bo där och att världsdelen mest används för forskning.",
    audio:
      "Antarktis ligger runt sydpolen och är den kallaste världsdelen. Nästan hela ytan är täckt av is och klimatet är polart med mycket kalla vintrar och starka vindar. Det finns ingen permanent befolkning, men forskare arbetar där periodvis. Antarktis är viktig som en stor lagring av sötvatten i isform och som ett område som hjälper forskare att förstå klimatförändringar.",
    dimensions: {
      location: {
        summary: "Ligger runt sydpolen och omges av Södra ishavet.",
        tags: ["sydpolen", "södra halvklotet", "isolering"],
        reason:
          "Det extrema sydliga läget gör att solen värmer lite under stora delar av året."
      },
      climate: {
        summary: "Polart klimat med mycket kyla, is, snö och starka vindar.",
        tags: ["polart", "is", "mycket kallt"],
        reason:
          "Läget vid sydpolen och den stora isytan gör att lite värme tas upp."
      },
      vegetation: {
        summary: "Mycket lite vegetation på land eftersom klimatet är så kallt och torrt.",
        tags: ["mycket lite vegetation"],
        reason:
          "Extrem kyla och is gör det svårt för de flesta växter att överleva."
      },
      population: {
        summary: "Ingen permanent befolkning, bara forskare under perioder.",
        tags: ["ingen permanent befolkning", "forskning"],
        reason:
          "Klimatet gör vardagsliv och jordbruk mycket svårt, så människor vistas mest där för forskning."
      },
      livelihoods: {
        summary: "Forskning är den viktigaste verksamheten.",
        tags: ["forskning"],
        reason:
          "Antarktis används framför allt för att studera klimat, is, djurliv och miljöförändringar."
      },
      resources: {
        summary:
          "Den största naturresursen är sötvatten som är bundet i is. Området är också viktigt för forskning.",
        tags: ["sötvatten i is", "forskning"],
        reason:
          "Antarktis visar hur klimatet påverkar jordens system och är därför viktig globalt."
      }
    }
  }
];

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

const writingPrompts = [
  {
    id: "prompt-europa-afrika",
    title: "Jämför Europa och Afrika",
    description:
      "Skriv ett svar där du jämför Europa och Afrika utifrån klimat, befolkning, naturresurser och försörjning.",
    supportPoints: [
      "Berätta minst två tydliga likheter eller skillnader.",
      "Förklara varför det ser ut så.",
      "Ge exempel från båda världsdelarna.",
      "Använd ord som klimat, naturresurser, befolkning och försörjning."
    ],
    compareA: "europa",
    compareB: "afrika",
    target: "C"
  },
  {
    id: "prompt-asien-amerika",
    title: "Jämför Asien och Nordamerika",
    description:
      "Förklara hur läge, klimat och naturresurser påverkar hur människor bor och arbetar i Asien och Nordamerika.",
    supportPoints: [
      "Ta upp läge eller storlek som förklaring.",
      "Koppla klimat till vegetation eller befolkning.",
      "Ge exempel på jobb eller näringar i båda.",
      "Skriv i hela meningar med tydliga samband."
    ],
    compareA: "asien",
    compareB: "nordamerika",
    target: "C"
  },
  {
    id: "prompt-varfor-folk-bor",
    title: "Varför bor människor nära floder och kuster?",
    description:
      "Skriv ett förklarande svar om varför människor ofta bor nära floder och kuster i världen.",
    supportPoints: [
      "Ta upp vatten, transporter eller handel.",
      "Förklara varför det blir viktigt för människor.",
      "Ge minst ett konkret exempel.",
      "Använd geografiska begrepp i svaret."
    ],
    target: "C"
  },
  {
    id: "prompt-naturresurser",
    title: "Hur påverkar naturresurser människors liv?",
    description:
      "Beskriv hur naturresurser som vatten, odlingsmark, skog eller mineraler kan påverka jobb, boende och landskap.",
    supportPoints: [
      "Nämn flera naturresurser.",
      "Förklara hur de används.",
      "Beskriv någon konsekvens för människor eller miljö.",
      "Skriv som ett utvecklat resonemang, inte bara en lista."
    ],
    target: "C"
  }
];

const lessons = [
  {
    id: "lesson-1",
    order: 1,
    title: "Världskartan och hav",
    theme: "Kom igång med världsdelar, världshav och kartan.",
    summary:
      "Första lektionen bygger trygghet. Isak tränar världsdelar, världshav och att hitta rätt på kartan innan jämförelserna blir svårare.",
    steps: [
      {
        minutes: 3,
        mode: "Läs",
        description: "Läs om Europa som exempel på hur läge, hav och floder hänger ihop.",
        action: { type: "learn", continentId: "europa" }
      },
      {
        minutes: 3,
        mode: "Lyssna",
        description: "Lyssna på Europa-spåret och peka ut världsdel och hav på karta.",
        action: { type: "listen", trackId: "track-europa" }
      },
      {
        minutes: 4,
        mode: "Kortträning",
        description: "Träna på världsdelar, världshav och några viktiga länder med korten.",
        action: { type: "drill", category: "hav" }
      },
      {
        minutes: 3,
        mode: "Quiz",
        description: "Gör en snabb quizrunda för att se vad som redan sitter.",
        action: { type: "quiz" }
      },
      {
        minutes: 2,
        mode: "Skriv",
        description: "Skriv 3 meningar om varför karta, hav och läge är viktiga i geografi.",
        action: { type: "writing", promptId: "prompt-varfor-folk-bor" }
      }
    ]
  },
  {
    id: "lesson-2",
    order: 2,
    title: "Europa och Afrika",
    theme: "Första stora jämförelsen mot lärarens instruktion.",
    summary:
      "Den här lektionen tränar just modellen Vad, Varför och Exempel. Europa och Afrika ger tydliga skillnader i klimat och befolkning.",
    steps: [
      {
        minutes: 3,
        mode: "Läs",
        description: "Läs först Afrika och repetera sedan Europa snabbt.",
        action: { type: "learn", continentId: "afrika" }
      },
      {
        minutes: 3,
        mode: "Lyssna",
        description: "Lyssna på Afrika-spåret för att höra sambanden lugnt och tydligt.",
        action: { type: "listen", trackId: "track-afrika" }
      },
      {
        minutes: 3,
        mode: "Jämför",
        description: "Jämför Europa och Afrika utifrån klimat, befolkning och naturresurser.",
        action: { type: "compare", compareA: "europa", compareB: "afrika" }
      },
      {
        minutes: 3,
        mode: "Quiz",
        description: "Gör quiz med fokus på resonemang och huvudstäder.",
        action: { type: "quiz" }
      },
      {
        minutes: 3,
        mode: "Skriv",
        description: "Skriv ett kort jämförelsesvar och låt OpenAI ge återkoppling.",
        action: { type: "writing", promptId: "prompt-europa-afrika" }
      }
    ]
  },
  {
    id: "lesson-3",
    order: 3,
    title: "Asien och stora mönster",
    theme: "Storlek, variation och varför människor bor där de bor.",
    summary:
      "Nu tränar Isak på att tänka större. Asien är bra för att förstå hur storlek, klimat och naturresurser skapar skillnader inom en världsdel.",
    steps: [
      {
        minutes: 4,
        mode: "Läs",
        description: "Läs om Asien och markera ord om klimat, befolkning och naturresurser.",
        action: { type: "learn", continentId: "asien" }
      },
      {
        minutes: 3,
        mode: "Lyssna",
        description: "Lyssna på Asien-spåret och försök säga ett samband efteråt.",
        action: { type: "listen", trackId: "track-asien" }
      },
      {
        minutes: 3,
        mode: "Kortträning",
        description: "Träna floder, bergskedjor och regioner i Asien.",
        action: { type: "drill", category: "floder" }
      },
      {
        minutes: 2,
        mode: "Quiz",
        description: "Ta en kort quizrunda och se om Himalaya, Ganges och Asien sitter.",
        action: { type: "quiz" }
      },
      {
        minutes: 3,
        mode: "Skriv",
        description: "Skriv varför stora världsdelar kan ha olika klimat och vegetation.",
        action: { type: "writing", promptId: "prompt-naturresurser" }
      }
    ]
  },
  {
    id: "lesson-4",
    order: 4,
    title: "Nordamerika och Sydamerika",
    theme: "Berg, floder, kuster och var människor bor.",
    summary:
      "Här vävs namngeografi och resonemang ihop. Amerika-delarna är bra för att koppla natur till städer, handel och försörjning.",
    steps: [
      {
        minutes: 3,
        mode: "Läs",
        description: "Läs om Nordamerika med fokus på befolkning och naturresurser.",
        action: { type: "learn", continentId: "nordamerika" }
      },
      {
        minutes: 3,
        mode: "Läs",
        description: "Läs om Sydamerika och lägg märke till Anderna och Amazonas.",
        action: { type: "learn", continentId: "sydamerika" }
      },
      {
        minutes: 3,
        mode: "Jämför",
        description: "Jämför Nordamerika och Sydamerika på samma sätt som i instruktionen.",
        action: { type: "compare", compareA: "nordamerika", compareB: "sydamerika" }
      },
      {
        minutes: 3,
        mode: "Quiz",
        description: "Quiz på floder, bergskedjor, länder och huvudstäder.",
        action: { type: "quiz" }
      },
      {
        minutes: 3,
        mode: "Skriv",
        description: "Förklara varför människor ofta bor vid kuster och floder i Amerika.",
        action: { type: "writing", promptId: "prompt-varfor-folk-bor" }
      }
    ]
  },
  {
    id: "lesson-5",
    order: 5,
    title: "Namngeografi i provtempo",
    theme: "Länder, huvudstäder, berg, floder och regioner.",
    summary:
      "Nu skruvas tempot upp. Den här lektionen tränar snabbare igenkänning och säkrare minne inför själva provsituationen.",
    steps: [
      {
        minutes: 3,
        mode: "Kortträning",
        description: "Kör kort på länder och huvudstäder.",
        action: { type: "drill", category: "lander" }
      },
      {
        minutes: 3,
        mode: "Kortträning",
        description: "Kör bergskedjor och regioner.",
        action: { type: "drill", category: "berg" }
      },
      {
        minutes: 4,
        mode: "Quiz",
        description: "Gör en hel quizrunda med blandade frågor.",
        action: { type: "quiz" }
      },
      {
        minutes: 2,
        mode: "Lyssna",
        description: "Lyssna på jämförelsestödet som repetition.",
        action: { type: "listen", trackId: "track-compare" }
      },
      {
        minutes: 3,
        mode: "Skriv",
        description: "Skriv ett kort svar om hur naturresurser påverkar människors liv.",
        action: { type: "writing", promptId: "prompt-naturresurser" }
      }
    ]
  },
  {
    id: "lesson-6",
    order: 6,
    title: "C-nivå i jämförelser",
    theme: "Utvecklade resonemang med tydliga exempel.",
    summary:
      "Nu tränar Isak specifikt på att lyfta svaren från fakta till förklarande resonemang, vilket är det som krävs för C.",
    steps: [
      {
        minutes: 3,
        mode: "Jämför",
        description: "Jämför Asien och Nordamerika med fokus på Varför-delen.",
        action: { type: "compare", compareA: "asien", compareB: "nordamerika" }
      },
      {
        minutes: 3,
        mode: "Lyssna",
        description: "Lyssna på jämförelsestödet och pausa efter varje steg.",
        action: { type: "listen", trackId: "track-compare" }
      },
      {
        minutes: 3,
        mode: "Quiz",
        description: "Gör quiz och läs förklaringen noggrant efter varje svar.",
        action: { type: "quiz" }
      },
      {
        minutes: 6,
        mode: "Skriv",
        description: "Skriv ett utvecklat jämförelsesvar och få bedömning av OpenAI.",
        action: { type: "writing", promptId: "prompt-asien-amerika" }
      }
    ]
  },
  {
    id: "lesson-7",
    order: 7,
    title: "Genrep före provet",
    theme: "Repetition i rätt ordning före provdagen.",
    summary:
      "Sista lektionen fungerar som ett genrep: snabb repetition, quiz, jämförelse och ett sista skrivsvar innan provet.",
    steps: [
      {
        minutes: 3,
        mode: "Läs",
        description: "Läs igenom den världsdel du känner dig mest osäker på.",
        action: { type: "learn", continentId: "afrika" }
      },
      {
        minutes: 3,
        mode: "Kortträning",
        description: "Kör kort på den kategori du tycker är svårast.",
        action: { type: "drill", category: "regioner" }
      },
      {
        minutes: 4,
        mode: "Quiz",
        description: "Gör en sista quizrunda i provtempo.",
        action: { type: "quiz" }
      },
      {
        minutes: 2,
        mode: "Jämför",
        description: "Säg högt: Vad, Varför, Exempel.",
        action: { type: "compare", compareA: "europa", compareB: "afrika" }
      },
      {
        minutes: 3,
        mode: "Skriv",
        description: "Skriv ett sista svar och kontrollera att du använder exempel.",
        action: { type: "writing", promptId: "prompt-europa-afrika" }
      }
    ]
  }
];

const appState = {
  activeTab: "quickpass",
  selectedLessonId: lessons[0].id,
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
  compareA: "europa",
  compareB: "afrika",
  comparisonVersion: 0,
  comparisonNotes: loadSavedJson("geografi-comparison-notes", {}),
  selectedWritingPromptId: writingPrompts[0].id,
  writingDrafts: loadSavedJson("geografi-writing-drafts", {}),
  gradingResult: null,
  gradingLoading: false,
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
  ttsAudio: null,
  ttsAudioUrl: null,
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
  return lessons.find((lesson) => lesson.id === lessonId);
}

function writingPromptById(promptId) {
  return writingPrompts.find((prompt) => prompt.id === promptId);
}

function getStudiedMinutes() {
  return appState.completedLessons.size * lessonDurationMinutes;
}

function getNextLesson() {
  return lessons.find((lesson) => !appState.completedLessons.has(lesson.id)) || lessons[lessons.length - 1];
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
    writing: "Jag är klar med skrivandet"
  };

  return labels[step?.action?.type] || "Jag är klar";
}

function guidedSupportText(step) {
  const messages = {
    learn: "Isak, läs i lugn takt. När du känner att du är klar kan du gå vidare direkt.",
    listen: "Isak, lyssna lugnt. När du känner att du är klar kan du gå vidare direkt.",
    drill: "Isak, skriv ett svar på varje kort och vänd sedan för att rätta. Gå vidare när du känner att du tränat klart.",
    quiz: "Isak, gör frågorna i lugn takt. När du känner dig färdig med quizet kan du gå vidare direkt.",
    compare: "Isak, fokusera på att jämföra lugnt och tydligt. När du känner dig färdig kan du gå vidare direkt.",
    writing: "Isak, skriv så långt du orkar och tänk fakta, varför och exempel. När du känner dig klar kan du gå vidare direkt."
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
    writing: "Öppna skrivdelen"
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
    "focus-step-writing"
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
  const lesson = guidedLesson() || getNextLesson();
  const step = guidedLesson() ? guidedStep() : lesson.steps[0];
  const lessonIsActive = Boolean(appState.guidedLessonId);
  const lessonIsComplete = lessonIsActive && guidedLessonIsComplete();
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
    ? `<button class="primary" id="start-guided-lesson">Starta nästa lektion</button>`
    : appState.guidedStepDone
      ? `<button class="primary" id="next-guided-step">Jag är klar, gå vidare</button>`
      : lessonIsActive
        ? `<button class="primary" id="complete-guided-step">${finishEarlyLabel}</button>`
        : `<button class="primary" id="start-guided-lesson">Starta nästa lektion</button>`;

  container.innerHTML = `
    <article class="guided-card ${appState.guidedStepRunning ? "is-running" : ""} ${lessonIsComplete ? "is-complete" : ""}">
      <div class="guided-header">
        <div>
          <p class="panel-label">Lektionscoach</p>
          <p class="microcopy guided-welcome">
            Hej Isak. Fokus nu: ${lessonIsActive ? step.mode.toLowerCase() : "nästa lektion"}.
          </p>
          <h2>${lessonIsActive ? `Nu jobbar du med ${lesson.title}` : `Nästa lektion för dig, Isak: ${lesson.title}`}</h2>
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
                ? "Du har tjänat ihop ännu en klar lektion. Det här är exakt så man bygger självförtroende inför provet."
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
                ? "Ta en kort paus, Isak."
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
  const lesson = guidedLesson() || getNextLesson();
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
          <span>${isActive ? "Pågår nu" : isComplete ? "Klar" : "Nästa steg"}</span>
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
          ${isActive ? "Isak följer nu ett låst fokusflöde steg för steg." : "Det här är nästa lektion i ordningen. Starta bara här, så sköter appen resten."}
        </p>
        <button class="primary" data-lesson-start="${lesson.id}">
          ${isActive ? "Fortsätt lektionen" : "Starta lektionen"}
        </button>
      </div>
    </article>
  `;
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

function buildContinentStudyContent(continent) {
  const countriesMarkup = continent.countries.length
    ? continent.countries.map((item) => `<li>${item}</li>`).join("")
    : "<li>Inga vanliga länder att träna här, fokusera på klimat och läge.</li>";
  const countriesSpeech = continent.countries.length
    ? continent.countries.join(", ")
    : "inga vanliga länder att träna här, så fokus ligger på klimat och läge";

  return {
    html: `
    <div>
      <p class="panel-label">Världsdel i fokus</p>
      <h2>${continent.name}</h2>
      <p>${continent.intro}</p>
    </div>
    <div class="insight-strip">
      <strong>Vad du ska kunna för att nå C:</strong>
      <p>${continent.cLevel}</p>
    </div>
    <div>
      <h3>Koppla natur till människor</h3>
      <ul class="fact-list">
        <li><strong>Läge:</strong> ${continent.dimensions.location.summary}</li>
        <li><strong>Klimat:</strong> ${continent.dimensions.climate.summary}</li>
        <li><strong>Vegetation:</strong> ${continent.dimensions.vegetation.summary}</li>
        <li><strong>Befolkning:</strong> ${continent.dimensions.population.summary}</li>
        <li><strong>Försörjning:</strong> ${continent.dimensions.livelihoods.summary}</li>
        <li><strong>Naturresurser:</strong> ${continent.dimensions.resources.summary}</li>
      </ul>
    </div>
    <div class="learn-layout">
      <section class="study-card">
        <h3>Exempel att namnge</h3>
        <ul class="mini-list">
          ${continent.keyPlaces.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </section>
      <section class="study-card">
        <h3>Exempel på länder</h3>
        <ul class="mini-list">
          ${countriesMarkup}
        </ul>
      </section>
    </div>
    <div class="insight-strip">
      <strong>Minnesknep:</strong>
      <p>${continent.memoryHook}</p>
    </div>
  `,
    speechText: [
      `${continent.name}. ${continent.intro}`,
      `För att nå C behöver du kunna det här: ${continent.cLevel}`,
      `Läge: ${continent.dimensions.location.summary}`,
      `Klimat: ${continent.dimensions.climate.summary}`,
      `Vegetation: ${continent.dimensions.vegetation.summary}`,
      `Befolkning: ${continent.dimensions.population.summary}`,
      `Försörjning: ${continent.dimensions.livelihoods.summary}`,
      `Naturresurser: ${continent.dimensions.resources.summary}`,
      `Exempel att namnge: ${continent.keyPlaces.join(", ")}.`,
      `Exempel på länder: ${countriesSpeech}.`,
      `Minnesknep: ${continent.memoryHook}`
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
    description: "Samma fakta som i Läs-delen, men för lyssning.",
    kind: "continent",
    continentId: continent.id
  }));

  const compareTrack = {
    id: "track-compare",
    title: "Jämförelsestöd",
    description: "Lyssna på en modell för att beskriva likheter, skillnader och orsaker.",
    kind: "compare",
    text:
      "När du jämför två världsdelar ska du inte bara rada upp fakta. Börja med att säga vad som är lika eller olika. Fortsätt sedan med varför det ser ut så. Avsluta med tydliga exempel. Ett bra C-svar kopplar ihop läge, klimat, vegetation, befolkning, naturresurser och försörjning."
  };

  return [...continentTracks, compareTrack];
}

const listenTracks = buildListenTracks();

function getListenTrackPresentation(track) {
  if (track.kind === "continent") {
    const continent = continentById(track.continentId);
    const content = buildContinentStudyContent(continent);
    return {
      title: continent.name,
      description: "Samma fakta som i Läs-delen, men som du också kan få uppläst.",
      html: content.html,
      speechText: content.speechText
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
  buttons.innerHTML = listenTracks
    .map(
      (track) => `
        <button class="${track.id === appState.listenTrackId ? "active" : ""}" data-listen-id="${track.id}">
          <strong>${track.title}</strong>
          <span class="microcopy">${track.description}</span>
        </button>
      `
    )
    .join("");

  const currentTrack = listenTracks.find((track) => track.id === appState.listenTrackId);
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
  const dimensionOrder = [
    ["location", "Läge"],
    ["climate", "Klimat"],
    ["vegetation", "Vegetation"],
    ["population", "Befolkning"],
    ["livelihoods", "Försörjning"],
    ["resources", "Naturresurser"]
  ];

  return dimensionOrder.map(([key, label]) => {
    const firstDimension = first.dimensions[key];
    const secondDimension = second.dimensions[key];
    const shared = intersectTags(firstDimension.tags, secondDimension.tags);
    const firstOnly = uniqueTags(firstDimension.tags, secondDimension.tags);
    const secondOnly = uniqueTags(secondDimension.tags, firstDimension.tags);

    const similarity = shared.length
      ? `Likhet: Båda har ${humanJoin(shared)}.`
      : `Likhet: Båda kan fortfarande kopplas till naturresurser, klimat och hur människor lever, men på olika sätt.`;

    const difference = `Skillnad: ${first.name} har ${humanJoin(firstOnly) || firstDimension.summary.toLowerCase()} medan ${second.name} har ${humanJoin(secondOnly) || secondDimension.summary.toLowerCase()}.`;

    const why = `Varför: ${first.name} - ${firstDimension.reason} ${second.name} - ${secondDimension.reason}`;

    return {
      label,
      first: firstDimension.summary,
      second: secondDimension.summary,
      similarity,
      difference,
      why
    };
  });
}

function buildSampleAnswer() {
  const first = continentById(appState.compareA);
  const second = continentById(appState.compareB);
  const rows = buildComparisonRows();
  const climate = rows.find((row) => row.label === "Klimat");
  const population = rows.find((row) => row.label === "Befolkning");
  const resources = rows.find((row) => row.label === "Naturresurser");

  const variants = [
    `${first.name} och ${second.name} skiljer sig åt i både läge och klimat. ${first.name} ${first.dimensions.location.summary.toLowerCase()} medan ${second.name} ${second.dimensions.location.summary.toLowerCase()}. Det gör att klimatet blir olika, eftersom ${first.dimensions.climate.reason.toLowerCase()} I ${second.name} påverkas klimatet i stället av att ${second.dimensions.climate.reason.toLowerCase()} Ett tydligt exempel är att ${climate.difference.toLowerCase()} Därför ser också vegetation och jobb olika ut.`,
    `När man jämför ${first.name} och ${second.name} ser man både likheter och skillnader. En likhet är att ${resources.similarity.replace("Likhet: ", "").toLowerCase()} Men ${population.difference.toLowerCase()} Det beror bland annat på klimat, naturresurser och transportmöjligheter. Till exempel kan människor i ${first.name} ofta arbeta med ${humanJoin(first.dimensions.livelihoods.tags).toLowerCase()}, medan ${second.name} ofta kopplas till ${humanJoin(second.dimensions.livelihoods.tags).toLowerCase()}.`,
    `${first.name} och ${second.name} är olika på flera sätt, men båda visar hur naturen påverkar människors liv. ${climate.difference} ${resources.difference} Det är viktigt eftersom naturresurser och klimat styr var människor kan bo och vad de kan arbeta med. Ett exempel är att ${first.name} ofta kopplas till ${humanJoin(first.dimensions.resources.tags).toLowerCase()}, medan ${second.name} snarare har ${humanJoin(second.dimensions.resources.tags).toLowerCase()}.`
  ];

  return variants[appState.comparisonVersion % variants.length];
}

function renderComparison() {
  const grid = document.querySelector("#comparison-grid");
  const rows = buildComparisonRows();

  grid.innerHTML = rows
    .map(
      (row) => `
        <article class="comparison-card">
          <h3>${row.label}</h3>
          <p><strong>${continentById(appState.compareA).name}:</strong> ${row.first}</p>
          <p><strong>${continentById(appState.compareB).name}:</strong> ${row.second}</p>
          <ul class="comparison-points">
            <li>${row.similarity}</li>
            <li>${row.difference}</li>
            <li>${row.why}</li>
          </ul>
        </article>
      `
    )
    .join("");

  const key = comparisonStorageKey();
  document.querySelector("#comparison-notes").value = appState.comparisonNotes[key] || "";
  document.querySelector("#sample-answer-text").textContent = buildSampleAnswer();
}

function comparisonStorageKey() {
  return [appState.compareA, appState.compareB].sort().join("--");
}

function populateCompareSelects() {
  const options = continents
    .map((continent) => `<option value="${continent.id}">${continent.name}</option>`)
    .join("");

  document.querySelector("#compare-a").innerHTML = options;
  document.querySelector("#compare-b").innerHTML = options;
  document.querySelector("#compare-a").value = appState.compareA;
  document.querySelector("#compare-b").value = appState.compareB;
}

function updateComparisonSelection(source, nextValue) {
  if (source === "a") {
    appState.compareA = nextValue;
    if (appState.compareA === appState.compareB) {
      appState.compareB = continents.find((continent) => continent.id !== nextValue).id;
      document.querySelector("#compare-b").value = appState.compareB;
    }
  } else {
    appState.compareB = nextValue;
    if (appState.compareA === appState.compareB) {
      appState.compareA = continents.find((continent) => continent.id !== nextValue).id;
      document.querySelector("#compare-a").value = appState.compareA;
    }
  }
  renderComparison();
}

function renderWritingPrompts() {
  const select = document.querySelector("#writing-prompt-select");
  select.innerHTML = writingPrompts
    .map(
      (prompt) => `
        <option value="${prompt.id}" ${prompt.id === appState.selectedWritingPromptId ? "selected" : ""}>
          ${prompt.title}
        </option>
      `
    )
    .join("");
}

function renderWritingPanel() {
  const prompt = writingPromptById(appState.selectedWritingPromptId);
  const savedDraft = appState.writingDrafts[prompt.id] || "";

  renderWritingPrompts();
  document.querySelector("#writing-title").textContent = prompt.title;
  document.querySelector("#writing-description").textContent = prompt.description;
  document.querySelector("#writing-support-points").innerHTML = prompt.supportPoints
    .map((point) => `<li>${point}</li>`)
    .join("");
  document.querySelector("#writing-answer").value = savedDraft;
  document.querySelector("#writing-prompt-select").value = prompt.id;
  renderGradingResult();
}

function renderGradingResult() {
  const container = document.querySelector("#grading-result");

  if (appState.gradingLoading) {
    container.innerHTML = `
      <p class="panel-label">Återkoppling</p>
      <p>OpenAI läser svaret och jämför det med uppgiften från läraren...</p>
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
    appState.compareA = step.action.compareA;
    appState.compareB = step.action.compareB;
    populateCompareSelects();
    renderComparison();
    setActiveTab("compare");
  } else if (step.action.type === "writing") {
    appState.selectedWritingPromptId = step.action.promptId;
    appState.gradingResult = null;
    renderWritingPanel();
    setActiveTab("writing");
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

  const response = await fetch("/api/tts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "audio/wav"
    },
    body: JSON.stringify({
      text,
      voice: chosenVoice,
      instructions: buildSpeechInstructions(options.kind)
    })
  });

  if (!response.ok) {
    const errorPayload = await response.json().catch(() => ({}));
    throw new Error(errorPayload.error || "OpenAI TTS request failed");
  }

  audioBlob = await response.blob();
  appState.ttsCache.set(cacheKey, audioBlob);
  return { audioBlob, chosenVoice };
}

function getWarmupText() {
  const currentTrack = listenTracks.find((track) => track.id === appState.listenTrackId) || listenTracks[0];
  return currentTrack ? getListenTrackPresentation(currentTrack).speechText : "";
}

function scheduleTtsWarmup() {
  if (!appState.ttsAvailable) {
    return;
  }

  if (appState.ttsWarmupTimer) {
    clearTimeout(appState.ttsWarmupTimer);
  }

  appState.ttsWarmupTimer = window.setTimeout(async () => {
    const warmupText = getWarmupText();
    if (!warmupText) {
      return;
    }

    try {
      await fetchTtsBlob(warmupText, { kind: "lesson" });
    } catch (error) {
      console.warn("Could not warm TTS cache", error);
    }
  }, 300);
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
    setTtsStatus(
      "Kunde inte nå den lokala TTS-servern. Appen använder webbläsarröst just nu.",
      "warning"
    );
  }
}

function stopSpeaking(options = {}) {
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
  setTtsStatus("Skapar OpenAI-röst...", "muted");

  try {
    const { audioBlob } = await fetchTtsBlob(text, { ...options, voice: chosenVoice });

    stopSpeaking({ keepStatus: true });

    const audioElement = appState.ttsAudio || document.querySelector("#tts-audio");
    appState.ttsAudio = audioElement;
    appState.ttsAudioUrl = URL.createObjectURL(audioBlob);
    audioElement.src = appState.ttsAudioUrl;
    const duration = await waitForAudioMetadata(audioElement);
    syncGuidedListenDuration(duration);

    audioElement.onended = () => {
      setTtsStatus("OpenAI-röst redo.", "ready");
    };

    audioElement.onerror = () => {
      setTtsStatus("Ljudspelaren kunde inte spela upp OpenAI-rösten.", "error");
    };

    await audioElement.play();
    setTtsStatus("OpenAI-röst spelar upp.", "ready");
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
      await speakWithOpenAi(text, options);
      return;
    } catch (error) {
      console.warn("OpenAI TTS failed, falling back to browser voice", error);
      setTtsStatus(
        "OpenAI-uppläsning misslyckades. Appen faller tillbaka till webbläsarröst.",
        "warning"
      );
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
    const nextLesson = getNextLesson();
    startGuidedLesson(nextLesson.id);
  });
  document.querySelector("#restart-quiz").addEventListener("click", startQuizRound);
  document.querySelector("#restart-mapquiz").addEventListener("click", startMapQuizRound);

  document.querySelector("#lesson-coach").addEventListener("click", (event) => {
    const startButton = event.target.closest("#start-guided-lesson");
    if (startButton) {
      startGuidedLesson(getNextLesson().id);
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
    const rows = buildComparisonRows();
    const text = rows
      .map(
        (row) =>
          `${row.label}. ${continentById(appState.compareA).name}: ${row.first}. ${continentById(appState.compareB).name}: ${row.second}. ${row.similarity} ${row.difference}`
      )
      .join(" ");
    await speakText(text, { kind: "comparison" });
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

  document.querySelector("#writing-prompt-select").addEventListener("change", (event) => {
    appState.selectedWritingPromptId = event.target.value;
    appState.gradingResult = null;
    renderWritingPanel();
  });

  document.querySelector("#writing-answer").addEventListener("input", (event) => {
    appState.writingDrafts[appState.selectedWritingPromptId] = event.target.value;
    saveJson("geografi-writing-drafts", appState.writingDrafts);
  });

  document.querySelector("#grade-writing-answer").addEventListener("click", gradeWritingAnswer);
  document.querySelector("#clear-writing-answer").addEventListener("click", () => {
    appState.writingDrafts[appState.selectedWritingPromptId] = "";
    saveJson("geografi-writing-drafts", appState.writingDrafts);
    document.querySelector("#writing-answer").value = "";
    appState.gradingResult = null;
    renderGradingResult();
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
  stopSpeaking();
  appState.imageUrls.forEach((url) => URL.revokeObjectURL(url));
});

window.addEventListener("load", init);
