# Ars Incantationum

Libro scolastico di Nathaniel Ashcombe, autore fittizio, per Hogwarts nel 1890.

[Apri il libro](https://razor5489.github.io/Ars-Incantationum/)

124 pagine, sette anni, 28 incontri. Due lezioni a settimana per due settimane per ogni annualità. L’ordinamento concordato del 22 novembre 2026 prevale sulle precedenti collocazioni delle formule modificate. Più schede di formula possono appartenere a un solo incontro.

| Anno | Settimana I · Due incontri | Settimana II · Due incontri |
|---|---|---|
| 1 | Lumos; Verdimilius | Levioso; Wingardium Leviosa |
| 2 | Accio; Alohomora e Colloportus | Depulso; Puncheck |
| 3 | Descendo; Arresto Momentum | Ventus; Movimento e controllo · Ripasso |
| 4 | Incendio; Glacius | Reparo; Diffindo |
| 5 | Alohomora · livello 2; Accio e Depulso · revisione | Diffindo e Reparo · revisione; Silencio |
| 6 | Alohomora · livello 3; Silencio · revisione avanzata | Gli elementi · revisione; La magia non verbale |
| 7 | Arresto Momentum · revisione avanzata; Wingardium Leviosa · revisione avanzata | Progettare una sequenza; Il giudizio dell’incantatore |

## Collocazioni e limiti

Incantesimi: al primo anno Levioso; al secondo anno Accio, Alohomora e Colloportus nella prima settimana; Depulso e Puncheck nella seconda. Al terzo anno Descendo, Arresto Momentum e Ventus, seguiti da ripasso.

D.C.A.O.: Tarantallegra e Vermilius nella seconda settimana del secondo anno; Fireball e Confundo al terzo; Confringo al quarto. La ripresa di Confringo al sesto è un approfondimento, non una nuova introduzione. Verdimilius resta distinto da Vermilius e conserva il primo anno di Incantesimi.

Puncheck simula un pugno magico, secondo la descrizione fornita dall’utente. I volumi pubblicati mantengono una voce interamente in roleplay; i dettagli tecnici e i riferimenti esterni restano in questa documentazione. Diffindo, Incendio e Incarcerous nel programma DCAO della fonte sono applicazioni difensive di formule condivise con altre materie. Gli anni non ridefiniti mantengono il percorso precedente e i richiami vengono coordinati.

## Fonti e generazione

Base teorica: Manuale Ufficiale di Incantesimi di bewitchedgdr e repertorio fornito dalla scuola. Modificare `content.js`, `spell-notes.json` e `catalog.json`, quindi eseguire `python build-book.py` con Python/ReportLab e Node.

Il generatore sincronizza pagine SVG, indice, numerazione e dati incorporati. Lettore con ricerca, segnalibri e modalità a una o due pagine. Pubblicazione GitHub Pages da main, radice. Esclusioni richieste rispettate.
