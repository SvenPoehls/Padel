# Gestaltung – Entwurf 2 „Court & Bucht“

Ziel: Die Seite soll nicht wie eine Standard-Vorlage oder KI-Ausgabe aussehen.
Jede Entscheidung leitet sich aus dem Thema ab (Padel-Court, Eckernförder Bucht)
statt aus Voreinstellungen. Diese Datei ist der gemeinsame Rahmen für alle Seiten –
neue Seiten bitte daraus bauen, nicht pro Seite neu erfinden.

## Recherche: typische „KI-Look“-Merkmale und was wir stattdessen tun

| Merkmal (typisch generiert) | Hier stattdessen |
|---|---|
| Inter/Systemschrift für alles | **Big Shoulders Display** (kondensiert, sportlich, sehr große Überschriften) + **Atkinson Hyperlegible Next** (vom Braille Institute für Lesbarkeit entwickelt) |
| Lila/Indigo-Verläufe, gleichmäßig verteilte Farben | Farben aus dem Court: Court-Blau, Navy, Ball-Gelb. 60/30/10-Verteilung, keine Verlaufsschrift |
| „Fast-Schwarz + Neon-Akzent“ | Hauptfläche ist hell (Ostsee-Weiß), Blau ist Belag, Gelb nur für Ball & Buchen |
| Zentrierter Hero mit Badge und Stockbild | Linksbündige Riesenüberschrift + perspektivischer Court mit fallendem Ball + Schnellwahl „Wann wollt ihr spielen?“ |
| Drei Icon-Karten in einer Reihe | Court-Grafik mit Markierungen A–D; „Wer hier spielt“ als große Textzeilen |
| Icons in getönten, runden Kästchen | Keine Icon-Kästchen. Einzige Symbolik: Ball, Linien, Netz |
| Großbuchstaben-Überzeilen über jedem Abschnitt | Gestrichen. Überschriften sprechen für sich |
| Überall gleicher Radius + weicher Schatten | Radius nach Rolle: Glaswand-Ecken 28px, Tickets 10px, Buttons rund. Kaum Schatten |
| Gleiche Einblend-Animation auf jedem Abschnitt | Eine einzige Bewegung: Ball fällt beim Laden auf den Court. Respektiert „reduzierte Bewegung“ |
| Nummerierte Schritte ohne echte Reihenfolge | Nummern nur dort, wo es eine echte Abfolge gibt (Buchen, erste Stunde in Minuten) |
| Drei Preisstufen mit „Beliebt“-Rahmen | Preise als Platz-Tickets mit Abriss; Extras als Kiosk-Preisliste mit Punktlinien |
| Generische Texte („Mehr erfahren“, „Jetzt starten“) | Konkrete Labels: „Platz buchen“, „Wie geht Padel?“, „Gruppe anfragen“, „Erst mal anrufen“ |
| Erfundene Bewertungen/Zahlen | Gästebuch-Zettel mit Platzhaltern, keine erfundenen Zitate |
| Vierspaltiger Standard-Footer | Riesiger Satz „Bis gleich auf dem Platz.“ + drei schlichte Spalten |
| Alle Abschnitte gleich breit/gleich hoch | „Laute“ und „leise“ Abschnitte, Sticky-Spalten, asymmetrische Galerie |
| Glas-/Blur-Effekte | Keine. Flächen sind massiv, Court-Flächen haben leichte Körnung |

## Tokens (in `css/style.css`, `:root`)

- Farben: `--ink #0a1f3c`, `--court #1f4e9a`, `--ball #d3f23a` (nur Buchen/Ball), `--buoy #ff5b3a` (Tonnenrot: Fokus, aktive Seite), `--paper #f3f6fa`
- Schriften: `--font-display`, `--font-text`
- Radien: `--r-wall`, `--r-ticket`, `--r-pill`

## Lokale Motive

Gezeitentafel (Öffnungszeiten), Tonnenrot (Signalfarbe), Hafenkiosk-Preisliste,
Bucht-Wellenmuster im Bildplatzhalter. Bei echten Fotos: Court und Bucht zeigen,
keine Stockfotos lachender Menschen.

## Quellen der Recherche

- avoid-ai-design – Katalog von KI-Design-Merkmalen: https://github.com/funboy322/avoid-ai-design
- DEV Community, „How to fix the 'AI-generated' look“: https://dev.to/alanwest/how-to-fix-the-ai-generated-look-in-your-frontend-1ahh
- Anthropic frontend-design Skill (Typografie, Farbe): https://skills.sh/anthropics/claude-code/frontend-design
- Fireart, Web Design Trends 2026 (Körnung, Typografie): https://fireart.studio/blog/the-best-web-design-trends/
- Costa, Padel Time Club (Ball-/Linienmotive): https://costa.co.il/work/padel-time-club-en/

## Hinweise

- Google Fonts vor dem Livegang lokal hosten (DSGVO).
- Header/Footer stehen in jeder HTML-Datei – Änderungen überall nachziehen.
