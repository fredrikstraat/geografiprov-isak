# Geografiträning

En fokuserad studieapp i ett enda upplägg:

- `En världsdel`
- `Jämför två världsdelar`
- `Övningsprov`
- `Slutprov`

Appen använder förgenererade ljudfiler i [audio](/Users/fredrikstraat/Development/Geografiprov/audio) och OpenAI bara för:

- korta kontrollfrågor med skrivsvar
- återkoppling på längre svar
- coachning i övningsprov

## Starta lokalt

1. Kopiera [.env.example](/Users/fredrikstraat/Development/Geografiprov/.env.example) till `.env`
2. Lägg in `OPENAI_API_KEY`
3. Starta:

```bash
npm start
```

Öppna sedan [index.html](/Users/fredrikstraat/Development/Geografiprov/index.html) via servern på `http://localhost:4173`.

## Struktur

- [index.html](/Users/fredrikstraat/Development/Geografiprov/index.html): huvudappen
- [app.js](/Users/fredrikstraat/Development/Geografiprov/app.js): all frontendlogik för huvudappen
- [styles.css](/Users/fredrikstraat/Development/Geografiprov/styles.css): all styling
- [server.mjs](/Users/fredrikstraat/Development/Geografiprov/server.mjs): statisk server + OpenAI-endpoints för bedömning och coachning
- [audio/manifest.json](/Users/fredrikstraat/Development/Geografiprov/audio/manifest.json): koppling mellan lektioner och ljudsegment

## OpenAI

Appen använder `OPENAI_API_KEY` på serversidan för:

- `/api/check-short-answer`
- `/api/grade-answer`
- `/api/coach-answer`

Om nyckeln saknas fungerar fortfarande appens statiska innehåll och ljudfiler, men inte skrivbedömning eller coachning.

## Railway

Projektet är nu renodlat för den nya huvudappen och passar bra att deploya som en vanlig Node-webbapp på Railway:

1. Skapa ett nytt projekt i Railway
2. Koppla GitHub-repot
3. Sätt `OPENAI_API_KEY` i miljövariabler
4. Start command: `npm start`

## Kontroll

Kör:

```bash
npm run check
```

Det verifierar att [app.js](/Users/fredrikstraat/Development/Geografiprov/app.js) och [server.mjs](/Users/fredrikstraat/Development/Geografiprov/server.mjs) är syntaktiskt korrekta.
