# Padel Eckernförde – Webseite (Entwurf 2 „Court & Bucht“)

Gestaltungsentscheidungen und Recherche: siehe `DESIGN.md`.

Statische Webseite mit reinem HTML, CSS und minimalem JavaScript, ohne Build-Tools.
Zum Ansehen einfach `index.html` im Browser öffnen.

## Struktur

```
index.html        Startseite (Hero, Teaser, Buchungsschritte, Kundenstimmen, CTA)
padel.html        Was ist Padel? (Erklärung, Regeln)
platz.html        Der Platz (Anlage, Ausstattung, Galerie)
preise.html       Preise & Öffnungszeiten
buchen.html       Buchung (3 Schritte + Platzhalter für Buchungssystem)
angebote.html     Einsteiger, Gruppen/Firmen, Geburtstage, Turniere
faq.html          Häufige Fragen
kontakt.html      Anfahrt & Kontakt
impressum.html    Platzhalter – rechtlich prüfen!
datenschutz.html  Platzhalter – rechtlich prüfen!
css/style.css     Alle Styles; Farben & Schriften als CSS-Variablen in :root
js/main.js        Mobile Navigation, Schnellwahl → Buchungsseite, Jahr im Footer
assets/img/       Bilder (aktuell nur favicon.svg)
```

Header und Footer sind in jeder HTML-Datei identisch enthalten. Bei Änderungen
(z. B. Menüpunkte) bitte in allen Seiten anpassen.

## Platzhalter finden

Alle offenen Inhalte sind mit `[PLATZHALTER: …]` markiert, Beispieltexte mit
dem Kästchen `MUSTERTEXT`. Suchen z. B. mit:

```
grep -rn "PLATZHALTER" *.html
```
