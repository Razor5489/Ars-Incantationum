const YEARS=[
  {
    "name": "Luce e sospensione",
    "goal": "Consolidare Lumos, Verdimilius, Levioso e Wingardium Leviosa: effetti distinti, un solo metodo di controllo."
  },
  {
    "name": "Accesso e recupero",
    "goal": "Studiare apertura, chiusura, richiamo, allontanamento e riparazione su bersagli ordinari."
  },
  {
    "name": "Direzione, velocità e suono",
    "goal": "Governare Descendo, Arresto Momentum e Silencio, collegandoli agli incanti di movimento già conosciuti."
  },
  {
    "name": "Gli elementi e la precisione",
    "goal": "Confrontare Incendio, Glacius, Ventus e Diffindo senza confondere intensità e riuscita."
  },
  {
    "name": "Controllo intermedio",
    "goal": "Affrontare Alohomora di livello 2 e revisioni ragionate delle formule apprese."
  },
  {
    "name": "Controllo avanzato",
    "goal": "Studiare Alohomora di livello 3, precisione, continuità e preparazione non verbale."
  },
  {
    "name": "Il giudizio dell’incantatore",
    "goal": "Risolvere compiti complessi con le formule di Incantesimi, rispettando i confini delle altre materie."
  }
];
const LESSONS=[
  {
    "id": 1,
    "year": 1,
    "week": 1,
    "meeting": 1,
    "title": "Lumos",
    "subtitle": "Illuminare con intenzione",
    "theory": [
      "Lumos produce luce sulla punta della bacchetta. Il compito iniziale consiste nel rendere riconoscibile un oggetto o una porzione di testo, mantenendo l’intensità adatta alla situazione.",
      "Concentrazione, volontà, movimento e predisposizione sono i quattro elementi discussi dal riferimento. La predisposizione non sostituisce l’esercizio. La formula pronunciata con chiarezza accompagna un’intenzione definita e un gesto appreso nella dimostrazione.",
      "Il primo incontro riprende l’incanto già studiato. Si osservano avvio e continuità della luce, senza attribuirle proprietà ulteriori soltanto perché la bacchetta si illumina. Il docente guida la conclusione della prova secondo le modalità apprese in aula."
    ],
    "materials": "Bacchetta, testo da illuminare e area di lavoro predisposta.",
    "steps": [
      "Definisci quale riga o oggetto deve essere visibile.",
      "Esegui Lumos secondo la dimostrazione e mantieni il compito assegnato.",
      "Concludi la prova con il docente e registra la regolarità della luce."
    ],
    "check": "La luce rende riconoscibile il bersaglio e rimane adeguata al compito.",
    "question": "La massima luminosità è sempre il risultato migliore?",
    "answer": "No. La riuscita dipende dall’illuminazione necessaria e dal controllo, non dalla sola intensità.",
    "source": "Libro madre, pp. 7–8; formula già svolta nel primo anno."
  },
  {
    "id": 2,
    "year": 1,
    "week": 1,
    "meeting": 2,
    "title": "Verdimilius",
    "subtitle": "Scintille verdi e direzione",
    "theory": [
      "Verdimilius riprende lo studio delle scintille verdi già affrontato nella scuola. Il colore è un elemento osservabile dell’effetto, ma da solo non dimostra ogni applicazione possibile della formula.",
      "La prova elementare definisce un bersaglio e una direzione. L’allievo deve conservare un’intenzione chiara e distinguere il risultato osservato dalle interpretazioni che non sono state verificate.",
      "Le applicazioni ulteriori descritte dal riferimento non vengono attribuite automaticamente al primo tentativo. La lezione consolida la manifestazione già appresa, senza introdurre varianti non comprese nel programma."
    ],
    "materials": "Area di dimostrazione e bersaglio inanimato predisposto.",
    "steps": [
      "Descrivi colore, direzione e compito dell’effetto.",
      "Riprendi Verdimilius limitandoti alla prova indicata dal docente.",
      "Confronta il risultato con il progetto e segnala soltanto ciò che hai osservato."
    ],
    "check": "Lo studente controlla la direzione senza attribuire proprietà ulteriori a una manifestazione luminosa.",
    "question": "Il colore verde basta a dimostrare una capacità di rivelazione?",
    "answer": "No. Colore e applicazione devono essere distinti; una proprietà ulteriore richiede un riscontro.",
    "source": "Libro madre, p. 22; grafia e collocazione seguono le lezioni della scuola."
  },
  {
    "title": "Levioso",
    "subtitle": "Sospensione e differenza dalla levitazione guidata",
    "theory": [
      "Levioso introduce la sospensione di un bersaglio. Il risultato va osservato prima di confrontarlo con altre formule: vedere un oggetto sollevato non significa averne governato anche una traiettoria.",
      "Wingardium Leviosa verrà ripreso nell’incontro successivo per il movimento guidato. L’accostamento serve a distinguere il mantenimento in sospensione dalla conduzione verso una destinazione scelta.",
      "La pratica usa un solo oggetto leggero e una posizione concordata. Le modalità effettive e i limiti della formula vengono appresi nella dimostrazione; non si inventano tempi, distanze o potenziamenti."
    ],
    "materials": "Oggetto leggero e punto di osservazione predisposto.",
    "steps": [
      "Identifica il bersaglio e la posizione prevista.",
      "Osserva o esegui Levioso sotto guida.",
      "Descrivi ciò che resta sospeso e ciò che non hai ancora dimostrato di poter guidare."
    ],
    "check": "L’allievo distingue sospensione e movimento diretto.",
    "question": "Un oggetto sospeso ha necessariamente seguito un percorso scelto da te?",
    "answer": "No. Sollevamento, sospensione e guida sono aspetti da verificare separatamente.",
    "source": "Catalogo della scuola; confronto teorico con il libro madre, pp. 9–10.",
    "id": 3,
    "year": 1,
    "week": 2,
    "meeting": 3
  },
  {
    "id": 4,
    "year": 1,
    "week": 2,
    "meeting": 4,
    "title": "Wingardium Leviosa",
    "subtitle": "Sollevare, guidare, deporre",
    "theory": [
      "Wingardium Leviosa permette di far levitare un oggetto e guidarlo nello spazio. Il primo bersaglio deve essere semplice e leggero: una traiettoria breve e verificabile è più utile di un sollevamento appariscente ma poco controllato.",
      "La levitazione non coincide con qualunque movimento. Wingardium Leviosa richiede di governare sospensione, direzione e deposizione. Il percorso si prepara prima dell’esecuzione.",
      "La quarta lezione riunisce Lumos, Verdimilius, Levioso e Wingardium Leviosa. Sono effetti diversi che richiedono un’intenzione riconoscibile. La conclusione delle due settimane prepara al secondo anno, conservando le schede del primo per il ripasso."
    ],
    "materials": "Piuma o oggetto leggero, due punti di appoggio e percorso libero.",
    "steps": [
      "Descrivi partenza, altezza concordata e punto di arrivo.",
      "Solleva l’oggetto con Wingardium Leviosa e segui una traiettoria semplice.",
      "Deponilo nel punto previsto; confronta un esito controllato con uno soltanto spettacolare."
    ],
    "check": "Il bersaglio viene sollevato, guidato e deposto senza perdere la corrispondenza con il progetto.",
    "question": "Il bersaglio sale molto in alto ma non arriva dove previsto: il risultato è efficace?",
    "answer": "Non rispetto al compito assegnato. L’altezza non sostituisce direzione e controllo della deposizione.",
    "source": "pp. 9–10; formula già svolta nel primo anno della scuola."
  },
  {
    "id": 5,
    "year": 2,
    "week": 1,
    "meeting": 1,
    "title": "Alohomora e Colloportus",
    "subtitle": "Apertura di base e chiusura",
    "theory": [
      "Alohomora agisce sull’apertura; Colloportus sulla chiusura. Sono formule da studiare sullo stato concreto del bersaglio: una porta accostata, una serratura e una protezione magica non rappresentano la stessa condizione.",
      "Il riferimento descrive limiti all’apertura quando il bersaglio è protetto da magia specifica. Una mancata apertura non dimostra quindi automaticamente una cattiva pronuncia. Prima di ripetere occorre riconoscere quale compito sia stato effettivamente assegnato.",
      "Il laboratorio utilizza un contenitore didattico autorizzato. Il valore della prova sta nell’osservare il passaggio fra gli stati, senza considerare la conoscenza di una formula un permesso di accedere a qualsiasi luogo."
    ],
    "materials": "Contenitore didattico e scheda dello stato iniziale.",
    "steps": [
      "Descrivi il meccanismo o la chiusura preparati dal docente.",
      "Osserva Colloportus e il successivo intervento di Alohomora sullo stesso bersaglio.",
      "Distingui mancata esecuzione e presenza di una condizione che richieda un altro intervento."
    ],
    "check": "Lo studente confronta gli stati del bersaglio e riconosce che l’apertura può incontrare limiti specifici.",
    "question": "Alohomora non apre una chiusura protetta: sai già quale sia la causa?",
    "answer": "No. Bisogna verificare protezione, bersaglio e condizioni dell’esercizio prima di attribuire l’esito alla formula.",
    "source": "Libro madre, pp. 8–9; Alohomora di base nel catalogo della scuola."
  },
  {
    "id": 6,
    "year": 2,
    "week": 1,
    "meeting": 2,
    "title": "Accio",
    "subtitle": "Richiamo e destinazione",
    "theory": [
      "Accio richiama un oggetto identificato verso una destinazione. Il lavoro parte da un bersaglio visibile e da un percorso libero: conoscere il nome della formula non basta a riconoscere ciò che si intende richiamare.",
      "La preparazione precisa oggetto, posizione iniziale e punto di arrivo. Il riferimento consiglia un’immagine mentale chiara; la prova di base mantiene il bersaglio osservabile per poter confrontare il percorso con il progetto.",
      "Depulso sarà affrontato nell’incontro successivo per l’allontanamento. Prima si consolida il richiamo di un singolo oggetto, senza attribuire alla riuscita una capacità illimitata di ricerca."
    ],
    "materials": "Oggetto leggero, zona di raccolta e percorso sgombro.",
    "steps": [
      "Identifica un solo oggetto e il suo punto di partenza.",
      "Richiamalo con Accio verso una zona concordata.",
      "Confronta il punto raggiunto con quello previsto."
    ],
    "check": "Il richiamo corrisponde al bersaglio e alla destinazione scelti.",
    "question": "Ricordare la formula basta a identificare un oggetto sconosciuto?",
    "answer": "No. L’identificazione del bersaglio fa parte della preparazione.",
    "source": "Libro madre, p. 13."
  },
  {
    "title": "Depulso",
    "subtitle": "Allontanare con un limite",
    "theory": [
      "Depulso allontana il bersaglio mediante una spinta magica. È un effetto opposto al richiamo, ma questo non lo rende automaticamente un mezzo per annullare qualunque esecuzione di Accio.",
      "Il punto d’arrivo va definito prima del tentativo. Una spinta più intensa non è una prova migliore se il compito consiste nel collocare l’oggetto entro una zona limitata.",
      "La pratica distingue direzione, percorso ed esito. Non si considerano equivalenti il movimento contrario e la cessazione di un incanto: il confronto deve seguire ciò che è effettivamente osservabile."
    ],
    "materials": "Oggetto leggero e zona di arrivo libera.",
    "steps": [
      "Definisci origine e destinazione del bersaglio.",
      "Esegui Depulso secondo la dimostrazione del docente.",
      "Confronta direzione e distanza ottenute con il progetto."
    ],
    "check": "La spinta rispetta la destinazione concordata.",
    "question": "Un movimento opposto è sempre un controincantesimo?",
    "answer": "No. Muovere in senso contrario non equivale ad annullare l’effetto magico.",
    "source": "Libro madre, pp. 13–14.",
    "id": 7,
    "year": 2,
    "week": 2,
    "meeting": 3
  },
  {
    "id": 8,
    "year": 2,
    "week": 2,
    "meeting": 4,
    "title": "Reparo",
    "subtitle": "Ricostruire senza inventare",
    "theory": [
      "Reparo ricompone un oggetto danneggiato. La preparazione parte dal riconoscimento della sua struttura originaria: i frammenti presenti devono corrispondere a un insieme conoscibile, non a una forma immaginata senza riferimento.",
      "Il manuale distingue la ricomposizione materiale dalla restituzione di ogni proprietà magica. Un manufatto complesso o una bacchetta non possono essere giudicati soltanto dall’aspetto esterno. Una superficie integra non dimostra il recupero delle funzioni nascoste.",
      "L’esercizio conclude il secondo anno su un oggetto ordinario e documentato prima del danno. Reparo non viene presentato come cura per esseri viventi né come soluzione universale: il giudizio finale deve esplicitare ciò che è stato effettivamente verificato."
    ],
    "materials": "Oggetto semplice predisposto in frammenti e disegno della forma originaria.",
    "steps": [
      "Confronta i frammenti con il disegno e individua le parti da ricomporre.",
      "Osserva o esegui Reparo secondo la dimostrazione.",
      "Controlla forma e funzione ordinaria, separandole da proprietà che non hai verificato."
    ],
    "check": "La ricostruzione corrisponde al riferimento e il giudizio non promette il recupero di poteri non osservabili.",
    "question": "Un oggetto incantato torna integro alla vista: hai dimostrato che ogni suo incanto funziona?",
    "answer": "No. La ricomposizione visibile non dimostra il ripristino di tutte le proprietà magiche.",
    "source": "pp. 15–16."
  },
  {
    "title": "Descendo",
    "subtitle": "La direzione verso il basso",
    "theory": [
      "Descendo viene studiato per governare un movimento verso il basso. La direzione generale non basta: l’allievo deve indicare quale bersaglio coinvolgere e dove il suo movimento debba terminare.",
      "Il confronto con Wingardium Leviosa distingue una guida nello spazio da un effetto orientato alla discesa. Il risultato va valutato rispetto al compito, senza dedurre dal nome dettagli non appresi.",
      "La dimostrazione usa un oggetto inanimato e un punto di arrivo predisposto. Non si attribuiscono alla formula danni, altezze o intensità numeriche non documentate dal suo impiego in aula."
    ],
    "materials": "Oggetto didattico e superficie di arrivo predisposta.",
    "steps": [
      "Definisci posizione iniziale e punto finale.",
      "Osserva Descendo sul bersaglio indicato.",
      "Confronta il movimento verso il basso con una deposizione guidata."
    ],
    "check": "Il bersaglio e la direzione corrispondono al progetto.",
    "question": "Dire “verso il basso” descrive già tutto il compito?",
    "answer": "No. Servono anche bersaglio, punto di arrivo e limite dell’effetto.",
    "source": "Catalogo della scuola; confronto con il libro madre, p. 10.",
    "id": 9,
    "year": 3,
    "week": 1,
    "meeting": 1
  },
  {
    "id": 10,
    "year": 3,
    "week": 1,
    "meeting": 2,
    "title": "Arresto Momentum",
    "subtitle": "Osservare un rallentamento",
    "theory": [
      "Arresto Momentum interviene sulla velocità di un bersaglio. Il compito iniziale riguarda un oggetto dal percorso prevedibile e richiede di distinguere il rallentamento osservato dall’arresto soltanto immaginato.",
      "Il movimento si descrive prima del tentativo: direzione, punto di partenza e zona nella quale verificare l’effetto rendono leggibile il confronto. La capacità di seguire il bersaglio conta quanto la formula.",
      "Le applicazioni più complesse verranno riprese negli anni successivi. La prova di oggi non estende automaticamente il controllo a persone, creature o più oggetti in movimento."
    ],
    "materials": "Oggetto inanimato e percorso semplice predisposto.",
    "steps": [
      "Osserva il movimento iniziale senza intervenire.",
      "Segui la dimostrazione di Arresto Momentum sul bersaglio.",
      "Descrivi se e come la velocità è cambiata."
    ],
    "check": "Lo studente distingue rallentamento e arresto effettivo.",
    "question": "Un bersaglio più lento è necessariamente fermo?",
    "answer": "No. Rallentamento e arresto completo sono risultati distinti.",
    "source": "Libro madre, p. 53; collocazione annuale proposta."
  },
  {
    "id": 11,
    "year": 3,
    "week": 2,
    "meeting": 3,
    "title": "Silencio",
    "subtitle": "Il silenziamento e il suo bersaglio",
    "theory": [
      "Silencio riguarda la soppressione temporanea della voce del bersaglio. Si distingue da una semplice diminuzione del volume e non equivale alla scelta dell’incantatore di eseguire una formula senza voce.",
      "La prova deve avere un bersaglio noto e un esito osservabile. Una mancata emissione non dimostra da sola l’assenza di ogni suono nell’ambiente: il controllo resta legato al soggetto sul quale si è intervenuti.",
      "La lezione si svolge come dimostrazione guidata e confronto teorico. Prima di attribuire al risultato un silenziamento riuscito, si ricostruiscono le condizioni iniziali e il compito stabilito dal docente."
    ],
    "materials": "Caso di dimostrazione e scheda delle condizioni iniziali.",
    "steps": [
      "Descrivi il bersaglio e la voce che si intende influenzare.",
      "Osserva Silencio nella dimostrazione guidata.",
      "Distingui silenziamento del bersaglio, quiete dell’ambiente e magia non verbale."
    ],
    "check": "L’allievo distingue effetto sul bersaglio e silenzio generale.",
    "question": "Silenziare un bersaglio significa eliminare tutti i rumori dell’ambiente?",
    "answer": "No. L’effetto studiato deve essere riferito al bersaglio designato.",
    "source": "Libro madre, p. 22."
  },
  {
    "title": "Il percorso di un oggetto",
    "subtitle": "Accio, Depulso, Descendo e Wingardium Leviosa",
    "theory": [
      "Una situazione di movimento può richiedere richiamo, allontanamento, discesa o guida. La scelta deve seguire il risultato necessario e non l’abitudine a usare sempre la stessa formula.",
      "Il caso conclusivo presenta un oggetto fuori posto e una destinazione precisa. Prima di agire si individua il percorso più leggibile e si scartano gli interventi superflui.",
      "La quarta lezione conclude il terzo anno con una sequenza breve. Ogni effetto viene osservato prima di passare al successivo; concatenare formule senza riscontro rende difficile capire dove nasca un errore."
    ],
    "materials": "Oggetto leggero e schema con più posizioni.",
    "steps": [
      "Individua una sola destinazione.",
      "Scegli un incanto di movimento e motiva la scelta.",
      "Verifica il risultato prima di proporre un secondo intervento."
    ],
    "check": "La sequenza è proporzionata al compito e usa soltanto formule già studiate.",
    "question": "Più formule rendono sempre migliore un percorso?",
    "answer": "No. Conta una scelta motivata, controllabile e sufficiente al compito.",
    "source": "Catalogo delle formule della scuola; attività didattica proposta.",
    "id": 12,
    "year": 3,
    "week": 2,
    "meeting": 4
  },
  {
    "id": 13,
    "year": 4,
    "week": 1,
    "meeting": 1,
    "title": "Incendio",
    "subtitle": "La fiamma e il progetto",
    "theory": [
      "Incendio produce fuoco. Il suo studio prende avvio dalla destinazione dell’effetto e dal materiale sul quale la fiamma dovrà agire: l’apparizione non è l’unico criterio della riuscita.",
      "Vanno considerate estensione, continuità e relazione con l’ambiente. La dimostrazione prepara anche la conclusione del compito e l’intervento del docente.",
      "Il laboratorio usa un punto predisposto per osservare una fiamma contenuta. Non si ampliano bersaglio e intensità per esibire potenza: l’obiettivo è conservare il limite concordato."
    ],
    "materials": "Punto di dimostrazione predisposto dal docente; scheda del limite dell’effetto.",
    "steps": [
      "Indica il solo punto nel quale è previsto l’effetto.",
      "Osserva l’incanto selezionato dal docente e descrivi l’estensione della fiamma.",
      "Confronta un effetto circoscritto con uno che supera il progetto."
    ],
    "check": "Il giudizio riguarda direzione, estensione e controllo, senza equiparare grandezza e riuscita.",
    "question": "Una fiamma più grande del previsto è per questo un risultato migliore?",
    "answer": "No. Superare il limite assegnato costituisce una deviazione dal compito.",
    "source": "Libro madre, p. 27; programma di Incantesimi proposto per questa edizione."
  },
  {
    "id": 14,
    "year": 4,
    "week": 1,
    "meeting": 2,
    "title": "Glacius",
    "subtitle": "Freddo e cambiamento di stato",
    "theory": [
      "Glacius riguarda il raffreddamento e il congelamento del bersaglio. Il compito comincia dalla descrizione dello stato iniziale, così che l’allievo possa riconoscere che cosa è effettivamente cambiato.",
      "L’osservazione deve distinguere un cambiamento di stato dall’apparenza della superficie. Il confronto non attribuisce alla formula proprietà ulteriori soltanto perché il risultato sembra freddo.",
      "Si utilizza un piccolo campione predisposto. La conoscenza di Aguamenti, collocato in Trasfigurazione, può offrire un collegamento teorico ma non trasferisce quella formula nel programma di Incantesimi."
    ],
    "materials": "Campione d’acqua, superficie didattica e scheda di confronto.",
    "steps": [
      "Descrivi lo stato iniziale del campione.",
      "Osserva Glacius sul bersaglio predisposto dal docente.",
      "Confronta il campione con il suo stato precedente e indica il cambiamento osservabile."
    ],
    "check": "Lo studente distingue il cambiamento osservato dalle proprietà soltanto supposte.",
    "question": "L’apparenza di una superficie basta a descriverne ogni proprietà?",
    "answer": "No. Il giudizio deve precisare quali condizioni sono state verificate.",
    "source": "Libro madre, p. 26."
  },
  {
    "id": 15,
    "year": 4,
    "week": 2,
    "meeting": 3,
    "title": "Ventus",
    "subtitle": "Direzione e limite del vento",
    "theory": [
      "Ventus produce un effetto di vento governato dalla bacchetta. La prova definisce una direzione e un bersaglio che permettano di osservare il movimento senza coinvolgere l’intero ambiente.",
      "L’intensità va riferita al compito: un indicatore che si muove nella direzione prevista offre un riscontro più chiaro di materiali dispersi senza controllo.",
      "Il laboratorio usa un oggetto inanimato leggero. Prima dell’esecuzione si controlla quali altri elementi potrebbero essere coinvolti; l’esito va confrontato sia con il bersaglio sia con ciò che doveva restare fermo."
    ],
    "materials": "Indicatore leggero e zona di lavoro sgombra.",
    "steps": [
      "Definisci direzione e limite dell’effetto.",
      "Osserva o esegui Ventus sul bersaglio predisposto.",
      "Verifica anche gli oggetti che non dovevano essere coinvolti."
    ],
    "check": "La direzione rispetta il progetto senza coinvolgere bersagli estranei.",
    "question": "Muovere il bersaglio basta se vengono spostati anche oggetti non previsti?",
    "answer": "No. Il controllo include il rispetto dei limiti del progetto.",
    "source": "Libro madre, p. 26."
  },
  {
    "id": 16,
    "year": 4,
    "week": 2,
    "meeting": 4,
    "title": "Diffindo",
    "subtitle": "Il taglio come prova di precisione",
    "theory": [
      "Diffindo separa o taglia il materiale bersagliato. Il compito preparatorio non è la recitazione della formula, ma la definizione di una linea e di un limite oltre il quale l’effetto non deve proseguire.",
      "La precisione comprende il riconoscimento della superficie, il percorso del gesto e l’osservazione dell’esito. Un materiale separato in molti frammenti non dimostra una riuscita migliore se il progetto richiedeva una sola divisione.",
      "Il laboratorio usa esclusivamente un campione inanimato predisposto. La valutazione confronta il bordo ottenuto con il disegno iniziale: le parti rimaste integre contano quanto quelle separate."
    ],
    "materials": "Campione didattico e linea di taglio concordata.",
    "steps": [
      "Traccia sulla scheda la divisione prevista e le zone da conservare.",
      "Osserva o esegui Diffindo sul campione secondo la dimostrazione.",
      "Confronta il risultato con il progetto e individua eventuali deviazioni."
    ],
    "check": "Il taglio segue il compito assegnato e non modifica le parti da conservare.",
    "question": "Il materiale è stato separato, ma lungo una linea diversa: il compito è riuscito?",
    "answer": "Non pienamente. La separazione deve corrispondere anche al percorso previsto.",
    "source": "p. 36."
  },
  {
    "title": "Alohomora · livello 2",
    "subtitle": "Una progressione documentata, non un effetto inventato",
    "theory": [
      "Il catalogo distingue Alohomora di base dal livello 2. Questa lezione tratta il secondo livello come progressione della formula d’apertura, senza dedurre dal nome un successo garantito su qualsiasi chiusura.",
      "Il bersaglio viene scelto dal docente in base alle condizioni effettivamente previste per il livello. L’allievo descrive l’apertura richiesta e confronta il caso con una chiusura già affrontata.",
      "Non si inventano tempi, costi o caratteristiche della serratura. La riuscita riguarda il compito predisposto e non dimostra che l’incantatore possa superare ogni protezione."
    ],
    "materials": "Chiusura didattica indicata per Alohomora di livello 2.",
    "steps": [
      "Ricostruisci il compito già affrontato con la formula di base.",
      "Osserva o esegui il livello 2 sul bersaglio autorizzato.",
      "Indica il risultato e ciò che non puoi estendere ad altre protezioni."
    ],
    "check": "La verifica riguarda la progressione documentata, senza promesse universali.",
    "question": "Il livello 2 garantisce l’apertura di qualsiasi protezione?",
    "answer": "No. Il livello non elimina le condizioni del bersaglio.",
    "source": "Catalogo della scuola, Alohomora (livello 2); teoria d’apertura nel libro madre, pp. 8–9.",
    "id": 17,
    "year": 5,
    "week": 1,
    "meeting": 1
  },
  {
    "title": "Accio e Depulso · revisione",
    "subtitle": "Scegliere il movimento più adatto",
    "theory": [
      "La revisione confronta richiamo e allontanamento sullo stesso oggetto in due prove distinte. Il progetto deve mantenere espliciti origine, percorso e destinazione.",
      "La maggiore preparazione non richiede una maggiore intensità: permette invece di motivare meglio quale delle due formule sia sufficiente al compito.",
      "I tentativi restano separati. Si attende il riscontro del primo prima di predisporre il secondo, così che una deviazione non venga nascosta da un intervento successivo."
    ],
    "materials": "Oggetto e due destinazioni segnate.",
    "steps": [
      "Progetta un richiamo e un allontanamento distinti.",
      "Confronta le prove guidate di Accio e Depulso.",
      "Spiega quale scegliere in un nuovo caso scritto."
    ],
    "check": "La scelta è motivata dal percorso e dalla destinazione.",
    "question": "Una formula più energica è necessariamente più adeguata?",
    "answer": "No. L’adeguatezza dipende dal compito.",
    "source": "Revisione di Accio e Depulso; libro madre, pp. 13–14.",
    "id": 18,
    "year": 5,
    "week": 1,
    "meeting": 2
  },
  {
    "title": "Diffindo e Reparo · revisione",
    "subtitle": "Separare e ricomporre non sono la stessa operazione",
    "theory": [
      "Diffindo e Reparo consentono di confrontare due compiti sul materiale: una separazione prevista e una ricomposizione rispetto a uno stato conosciuto.",
      "Il progetto iniziale deve documentare la forma dell’oggetto. Una ricomposizione soltanto apparente non dimostra il ritorno di ogni funzione, soprattutto quando il supporto è complesso.",
      "La classe lavora su un campione ordinario predisposto. Le due prove vengono confrontate senza presentare Reparo come rimedio universale a qualsiasi taglio o danno."
    ],
    "materials": "Campione ordinario e disegno della struttura iniziale.",
    "steps": [
      "Definisci una separazione e la forma da recuperare.",
      "Osserva le due operazioni nelle condizioni stabilite dal docente.",
      "Confronta forma, parti conservate e funzione ordinaria."
    ],
    "check": "Il giudizio distingue taglio, ricostruzione e proprietà non verificate.",
    "question": "Reparo è automaticamente la soluzione a ogni danno?",
    "answer": "No. Il tipo di oggetto e la natura del danno restano determinanti.",
    "source": "Libro madre, pp. 15–16 e 36.",
    "id": 19,
    "year": 5,
    "week": 2,
    "meeting": 3
  },
  {
    "title": "Lavorare nello spazio",
    "subtitle": "Levioso, Wingardium Leviosa e Descendo",
    "theory": [
      "Le tre formule vengono confrontate per distinguere sospensione, guida e discesa. L’allievo deve descrivere la necessità prima di scegliere il nome dell’incanto.",
      "Un percorso efficace non richiede necessariamente tutte e tre le formule. Lo studio riguarda anche gli interventi che si possono evitare perché il compito è già risolto.",
      "La quarta lezione del quinto anno propone un caso nuovo su un oggetto noto. La soluzione viene motivata e verificata, senza attribuire capacità automatiche a bersagli più complessi."
    ],
    "materials": "Schema di un percorso e oggetto semplice.",
    "steps": [
      "Definisci l’unico problema da risolvere.",
      "Scegli sospensione, guida o discesa motivando la scelta.",
      "Descrivi un controllo che permetta al docente di giudicare il risultato."
    ],
    "check": "La formula scelta corrisponde al problema di movimento.",
    "question": "Devi usare tutte le formule conosciute per dimostrare competenza?",
    "answer": "No. La competenza comprende evitare gli interventi superflui.",
    "source": "Catalogo delle formule della scuola; attività didattica proposta.",
    "id": 20,
    "year": 5,
    "week": 2,
    "meeting": 4
  },
  {
    "title": "Alohomora · livello 3",
    "subtitle": "Confrontare i tre livelli di apertura",
    "theory": [
      "Il livello 3 è la terza voce di Alohomora presente nel catalogo. Il suo studio riprende la distinzione fra formula, condizioni della chiusura e risultato osservabile.",
      "L’allievo ricostruisce i casi già affrontati prima di passare al bersaglio avanzato indicato dal docente. La progressione non autorizza a definire ogni protezione equivalente a una serratura ordinaria.",
      "La lezione conserva le condizioni effettivamente insegnate per il livello 3 e non aggiunge caratteristiche mancanti. Anche un risultato positivo va riferito al bersaglio sul quale è stato verificato."
    ],
    "materials": "Chiusura didattica assegnata al livello 3.",
    "steps": [
      "Confronta base e livello 2 attraverso le schede precedenti.",
      "Osserva la dimostrazione o prova autorizzata del livello 3.",
      "Spiega quali condizioni del risultato possono essere generalizzate e quali no."
    ],
    "check": "Lo studente distingue i livelli senza estenderli a ogni protezione.",
    "question": "Il terzo livello elimina la necessità di riconoscere il bersaglio?",
    "answer": "No. L’identificazione della chiusura resta parte del compito.",
    "source": "Catalogo della scuola, Alohomora (livello 3); libro madre, pp. 8–9.",
    "id": 21,
    "year": 6,
    "week": 1,
    "meeting": 1
  },
  {
    "title": "Silencio · revisione avanzata",
    "subtitle": "Isolare il bersaglio nell’osservazione",
    "theory": [
      "La revisione di Silencio precisa la relazione fra bersaglio e suoni dell’ambiente. Il risultato non deve essere attribuito a soggetti che non sono stati coinvolti.",
      "La maggiore preparazione permette una descrizione più accurata del prima e del dopo. Il silenzio momentaneo va distinto dal mancato tentativo di emettere un suono.",
      "Si lavora su un caso di dimostrazione autorizzato. Il giudizio deve dichiarare se l’osservazione è sufficiente o se occorre un ulteriore riscontro del docente."
    ],
    "materials": "Caso sonoro predisposto e scheda delle condizioni.",
    "steps": [
      "Documenta le condizioni iniziali.",
      "Osserva il bersaglio designato e distinguilo dall’ambiente.",
      "Segnala ciò che è dimostrato e ciò che resta incerto."
    ],
    "check": "Il giudizio delimita bersaglio e portata dell’osservazione.",
    "question": "Un ambiente quieto dimostra che ogni soggetto sia silenziato?",
    "answer": "No. La quiete generale non prova l’effetto su ogni bersaglio.",
    "source": "Revisione di Silencio; libro madre, p. 22.",
    "id": 22,
    "year": 6,
    "week": 1,
    "meeting": 2
  },
  {
    "title": "Gli elementi · revisione",
    "subtitle": "Incendio, Glacius e Ventus",
    "theory": [
      "Il confronto riguarda tre effetti distinti: fiamma, freddo e vento. La scelta nasce dal compito e non dall’idea che gli elementi possano sempre annullarsi fra loro.",
      "Il progetto deve specificare bersaglio e limite di ciascuna prova. Non si concatenano effetti sulla base della sola fantasia, né si inventano bonus risultanti dalla loro combinazione.",
      "La classe analizza casi separati e una dimostrazione selezionata dal docente. Il riscontro più importante è la coerenza fra l’intervento scelto e ciò che doveva essere ottenuto."
    ],
    "materials": "Tre casi scritti e un bersaglio di dimostrazione.",
    "steps": [
      "Identifica quale effetto richiede ogni caso.",
      "Scegli una formula fra quelle studiate.",
      "Descrivi i limiti e scarta combinazioni prive di riscontro."
    ],
    "check": "L’allievo non attribuisce proprietà nuove alla semplice successione di incanti.",
    "question": "Combinare due elementi garantisce un effetto migliore?",
    "answer": "No. Ogni combinazione deve essere conosciuta e verificata.",
    "source": "Revisione degli elementi; libro madre, pp. 26–27.",
    "id": 23,
    "year": 6,
    "week": 2,
    "meeting": 3
  },
  {
    "id": 24,
    "year": 6,
    "week": 2,
    "meeting": 4,
    "title": "La magia non verbale",
    "subtitle": "Studio teorico su formule già conosciute",
    "theory": [
      "La magia non verbale esegue un incanto senza pronunciarne ad alta voce la formula. Non consiste nell’assenza di intenzione, né nel muovere la bacchetta sperando che l’effetto si produca da solo.",
      "Il riferimento propone di partire da incanti semplici già conosciuti. La nuova difficoltà riguarda la disciplina mentale e la continuità del progetto: saper eseguire una formula verbalmente non dimostra subito la stessa padronanza senza voce.",
      "La lezione usa Lumos come riferimento teorico, soltanto secondo la preparazione riconosciuta dal docente. Non introduce nuove formule: distingue il modo di esecuzione dalla padronanza effettivamente verificata."
    ],
    "materials": "Incanto semplice già padroneggiato e scheda di confronto fra due esecuzioni.",
    "steps": [
      "Ricostruisci intenzione e gesto di Lumos senza eseguire il tentativo.",
      "Confronta la dimostrazione verbale con quella non verbale.",
      "Indica quali elementi di controllo devono restare presenti anche senza voce."
    ],
    "check": "Lo studente distingue silenzio, progetto mentale e riuscita osservabile.",
    "question": "Non pronunciare parole rende un incantesimo automaticamente più potente?",
    "answer": "No. La magia non verbale introduce una difficoltà ulteriore e non garantisce un potenziamento.",
    "source": "pp. 40–41."
  },
  {
    "title": "Arresto Momentum · revisione avanzata",
    "subtitle": "Leggere il movimento prima di intervenire",
    "theory": [
      "La revisione introduce un caso più articolato di movimento, mantenendo un solo bersaglio inanimato. L’obiettivo è descrivere con prontezza il cambiamento di velocità.",
      "La scelta del momento deve essere motivata rispetto al percorso. La maggiore complessità non consiste nell’attribuire alla formula poteri nuovi, ma nel controllare meglio le condizioni della prova.",
      "Il caso si conclude confrontando il rallentamento osservato con il risultato previsto. Solo il docente stabilisce se la preparazione consenta ulteriori applicazioni."
    ],
    "materials": "Oggetto inanimato e percorso di dimostrazione.",
    "steps": [
      "Descrivi il percorso prima dell’intervento.",
      "Individua il momento nel quale verificare il rallentamento.",
      "Confronta previsione ed esito senza estenderlo ad altri bersagli."
    ],
    "check": "La previsione del movimento è coerente e verificabile.",
    "question": "Un tentativo riuscito su un oggetto dimostra padronanza su ogni bersaglio?",
    "answer": "No. Bersagli e condizioni differenti richiedono verifiche proprie.",
    "source": "Libro madre, p. 53.",
    "id": 25,
    "year": 7,
    "week": 1,
    "meeting": 1
  },
  {
    "title": "Wingardium Leviosa · revisione avanzata",
    "subtitle": "Un percorso preciso, senza scorciatoie",
    "theory": [
      "La guida avanzata riprende Wingardium Leviosa su un percorso più articolato predisposto dal docente. La difficoltà cresce nella precisione richiesta, non in un aumento arbitrario dei poteri della formula.",
      "Il progetto conserva punti di passaggio, appoggi e destinazione. L’allievo deve scegliere quando correggere la traiettoria e quando interrompere una prova che non rispetta il compito.",
      "Non si estende la riuscita a persone o creature. Il confronto resta legato all’oggetto e alle condizioni realmente affrontate durante l’esercitazione."
    ],
    "materials": "Oggetto e percorso didattico con punti di passaggio.",
    "steps": [
      "Descrivi partenza, passaggi e arrivo.",
      "Segui una prova guidata di levitazione.",
      "Valuta la precisione e individua una correzione motivata."
    ],
    "check": "Il percorso è rispettato e le correzioni mantengono il controllo.",
    "question": "Un oggetto più pesante dimostra da solo maggiore precisione?",
    "answer": "No. Precisione e peso non sono lo stesso criterio.",
    "source": "Libro madre, pp. 9–10; approfondimento didattico.",
    "id": 26,
    "year": 7,
    "week": 1,
    "meeting": 2
  },
  {
    "title": "Progettare una sequenza",
    "subtitle": "Le formule della materia e i suoi confini",
    "theory": [
      "Un compito complesso può richiedere più interventi, ma ogni passaggio deve essere motivato. La sequenza non diventa un nuovo incantesimo soltanto perché le formule sono eseguite una dopo l’altra.",
      "Il progetto utilizza esclusivamente gli incanti di questa materia. Quando il caso richiede guarigione, difesa specialistica o trasformazione dei parametri della materia, si riconosce il confine e si coinvolge il docente competente.",
      "La prova è progettuale e non promette incantamenti permanenti o abilità speciali. La preparazione si misura anche nella capacità di dichiarare ciò che non può essere risolto con le formule scelte."
    ],
    "materials": "Caso scritto e tavola delle assegnazioni per materia.",
    "steps": [
      "Individua il compito e l’ordine degli interventi.",
      "Scegli soltanto formule del programma di Incantesimi.",
      "Segnala il punto nel quale servirebbe un’altra competenza."
    ],
    "check": "Il progetto distingue sequenza, formula e competenza delle altre materie.",
    "question": "Conoscere molti incanti elimina i confini fra le materie?",
    "answer": "No. Ogni intervento deve rispettare competenze e assegnazioni.",
    "source": "Catalogo delle formule della scuola; attività didattica proposta.",
    "id": 27,
    "year": 7,
    "week": 2,
    "meeting": 3
  },
  {
    "id": 28,
    "year": 7,
    "week": 2,
    "meeting": 4,
    "title": "Il giudizio dell’incantatore",
    "subtitle": "Una scelta motivata, dal principio alla conclusione",
    "theory": [
      "La padronanza non consiste nel scegliere sempre la formula più complessa. Un intervento adeguato nasce dalla lettura della situazione, da un obiettivo limitato e da una previsione del modo in cui si controllerà l’esito.",
      "Il caso conclusivo presenta un ambiente con scarsa luce, un oggetto fuori posto e un compito di recupero. Lumos, un incanto di movimento e un eventuale ripristino devono essere scelti in ordine, distinguendo ciò che si sa da ciò che richiede l’intervento del docente.",
      "L’ultima lezione raccoglie sette annualità e ventotto incontri. È un ripasso ragionato, non un esame finale. Le schede restano disponibili per recuperare le lezioni e rivedere un metodo che accompagna ogni nuova formula."
    ],
    "materials": "Caso scritto predisposto dal docente e schede degli incanti studiati.",
    "steps": [
      "Individua il problema senza lanciare formule e scegli un solo obiettivo iniziale.",
      "Ordina gli interventi necessari e motiva perché gli altri sarebbero superflui.",
      "Descrivi il controllo finale e segnala esplicitamente ciò che non sei in grado di risolvere."
    ],
    "check": "La soluzione è coerente, proporzionata e distingue conoscenza, esecuzione ed esito verificato.",
    "question": "La soluzione migliore è sempre quella che impiega più incantesimi?",
    "answer": "No. È quella che raggiunge il compito con interventi motivati, controllabili e commisurati alla preparazione.",
    "source": "Sintesi didattica originale del percorso; fondamenti pp. 4–7 e 52."
  }
];
