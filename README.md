# Geografiprov med Isak

En statisk studieapp som kan öppnas direkt i webbläsaren. Den är byggd för korta, varierade pass med fokus på:

- ordnade lektioner på cirka 15 minuter
- progress mot provdatumet
- läsning i små bitar
- förgenererad AI-uppläsning som ljudfiler i projektet
- quiz med direkt feedback
- jämförelse av världsdelar mot C-nivå
- skrivsvar med OpenAI-baserad återkoppling
- lokalt sparade bokbilder

## Starta

För full funktion, särskilt uppläsning, quizstopp mitt i föreläsningen och bedömning av skrivsvar, starta den lokala servern:

1. Kopiera [.env.example](/Users/fredrikstraat/Development/Geografiprov/.env.example) till `.env`
2. Lägg in er `OPENAI_API_KEY`
3. Starta appen:

```bash
npm start
```

Besök sedan `http://localhost:4173`.

Om ni bara vill titta på HTML-filerna går det fortfarande att öppna [index.html](/Users/fredrikstraat/Development/Geografiprov/index.html) direkt i en webbläsare, men då används inte de förgenererade ljudfilerna eller OpenAI-bedömningen.

## Deploy på webben

Jag har förberett appen för Render med [render.yaml](/Users/fredrikstraat/Development/Geografiprov/render.yaml), [.node-version](/Users/fredrikstraat/Development/Geografiprov/.node-version) och en enkel hälsocheck i [server.mjs](/Users/fredrikstraat/Development/Geografiprov/server.mjs).

Gör så här:

1. Skapa ett nytt GitHub-repo och lägg upp hela projektmappen där.
2. Gå till Render och skapa en ny `Blueprint` eller `Web Service` från repot.
3. Om Render hittar [render.yaml](/Users/fredrikstraat/Development/Geografiprov/render.yaml) används rätt startkommando och `HOST=0.0.0.0` automatiskt.
4. Lägg in `OPENAI_API_KEY` i Render när du blir ombedd, eller i service-inställningarna efteråt.
5. När deployen är klar får appen en publik adress som Isak kan öppna från sin egen dator.

Det som är bra med den här lösningen är att OpenAI-nyckeln stannar på serversidan, så den skickas inte ut till webbläsaren.

Observera att Render på gratisnivå är bra för hobbyprojekt och test, men tjänsten kan gå i vila efter en stund utan trafik. Första sidladdningen efter vila kan därför bli långsammare.

## OpenAI-funktioner

Servern i [server.mjs](/Users/fredrikstraat/Development/Geografiprov/server.mjs) gör två saker:

- serverar webbappen lokalt
- skickar skrivbedömning till OpenAI från serversidan så att API-nyckeln inte hamnar i frontend

Standardinställningar i `.env`:

- `OPENAI_TTS_MODEL=gpt-4o-mini-tts`
- `OPENAI_TTS_VOICE=alloy`
- `OPENAI_TTS_SPEED=0.96`
- `OPENAI_GRADER_MODEL=gpt-4.1-mini`

Om `OPENAI_API_KEY` saknas fungerar fortfarande de förgenererade föreläsningsljuden, men skrivbedömningen fungerar inte.

I appens flik `Lyssna` används nu förgenererade ljudfiler i mappen [audio](/Users/fredrikstraat/Development/Geografiprov/audio). De byggs med:

```bash
npm run build:audio
```

Bygget skapar ljudspår för alla sju världsdelar och alla valbara jämförelsepar, plus ett manifest med quizfrågor som dyker upp mitt i uppläsningen.

I fliken `Skriv` finns skrivuppgifter på ungefär C-nivå. Där bedömer OpenAI svaret mot lärarens instruktion om `Vad?`, `Varför?` och `Exempel?`, och ger:

- ungefärlig nivå
- styrkor
- sådant som saknas
- ett förbättrat modell-svar på enkel svenska

Bedömningen är tänkt som studiestöd, inte som ett officiellt betyg.

## Lektioner och plan

Fliken `Lektioner` innehåller ett ordnat upplägg fram till provet med cirka 15 minuter per lektion. Varje lektion väver ihop flera sätt att lära:

- kort läsning
- lyssning
- kortträning eller quiz
- jämförelse
- skrivuppgift

Överst i appen finns också en progressdel som visar:

- hur många minuter Isak har studerat i appen
- hur långt han borde ha kommit enligt planen
- hur många dagar det är kvar till provdatumet

Appen räknar nu med provdatum `2026-03-20`, alltså fredag 20 mars 2026.

Lärarens extra träningslänkar finns också inlagda i appen:

- [GeoGuessr / Seterra 3154](https://www.geoguessr.com/sv/vgp/3154)
- [GeoGuessr / Seterra 3232](https://www.geoguessr.com/sv/vgp/3232)

## Anpassa innehållet

Det mesta innehållet ligger i [app.js](/Users/fredrikstraat/Development/Geografiprov/app.js).

- `continents` innehåller sammanfattningar och jämförelseunderlag.
- `drillCollections` innehåller kort för hav, floder, berg, regioner och länder.
- `countryQuizItems` och `reasoningQuestions` styr quizet.

Om ni fotar de exakta sidorna ur boken kan ni antingen:

1. ladda upp dem i appens flik `Bokbilder`
2. eller komplettera `drillCollections.lander` med exakt de länder och huvudstäder som läraren valt

## Tips för veckan

- Kör lektionerna i ordning, en i taget.
- Om fokuset svajar, använd timern på 12 eller 15 minuter och ta en kort paus efteråt.
- Låt Isak först prata högt, sedan skriva ett kort svar i `Skriv`.
- Använd `Bokbilder` om ni vill lägga in exakt de sidor eller kartor som läraren tränar på.
