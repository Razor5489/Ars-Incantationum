const YEARS=[
  {
    "name": "Luce, intenzione e levitazione",
    "goal": "Consolidare Lumos, Verdimilius, Levioso e Wingardium Leviosa, distinguendo luce, sospensione e guida del bersaglio."
  },
  {
    "name": "Richiamo, sospensione e accesso",
    "goal": "Prima settimana: Accio, Alohomora e Colloportus. Seconda settimana: Depulso e Puncheck, distinguendo richiamo, spinta e colpo magico."
  },
  {
    "name": "Oggetti, movimento e riparazione",
    "goal": "Studiare Descendo, Reparo e Ventus su oggetti comuni, quindi confrontare le scelte nel ripasso."
  },
  {
    "name": "Materiali e controllo degli elementi",
    "goal": "Studiare Incendio e Diffindo, riprendere la riparazione e preparare il giudizio sugli effetti elementali."
  },
  {
    "name": "Accesso e controllo avanzato",
    "goal": "Approfondire Alohomora, introdurre Arresto Momentum e Glacius, poi studiare Silencio."
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
    "source": "Nathaniel Ashcombe · Appunti per il corso di Incantesimi"
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
    "source": "Nathaniel Ashcombe · Appunti per il corso di Incantesimi"
  },
  {
    "title": "Levioso",
    "subtitle": "Sospendere e riconoscere il bersaglio",
    "theory": [
      "Levioso solleva e mantiene sospeso il bersaglio. La sospensione lo separa dal suo appoggio, senza implicare una guida libera lungo un percorso. L’allievo identifica l’oggetto e descrive la condizione che intende ottenere prima di pronunciare la formula.",
      "Sollevamento, sospensione e spostamento sono momenti diversi. Osservare l’altezza non basta: conta anche riconoscere se il bersaglio rimane nella posizione prevista. Il confronto con Wingardium Leviosa, affrontato nella lezione successiva, chiarirà la differenza fra sospensione e conduzione.",
      "Il docente predispone un oggetto leggero e uno spazio sgombro. La classe confronta posizione iniziale e posizione sospesa, annotando soltanto ciò che osserva. Un risultato più alto o vistoso non sostituisce la corrispondenza con il compito assegnato."
    ],
    "materials": "Oggetto leggero, appoggio stabile e spazio sgombro.",
    "steps": [
      "Identificare il bersaglio e descriverne la posizione iniziale.",
      "Osservare o eseguire Levioso secondo la dimostrazione del docente.",
      "Confrontare la sospensione ottenuta con il risultato previsto."
    ],
    "check": "Distinguere sollevamento, sospensione e guida nello spazio.",
    "question": "Un oggetto sospeso è necessariamente guidato verso una destinazione?",
    "answer": "No. La sospensione descrive una condizione; la conduzione richiede il controllo di una traiettoria.",
    "source": "Nathaniel Ashcombe · Appunti per il corso di Incantesimi",
    "id": 3,
    "year": 1,
    "meeting": 3,
    "week": 2
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
    "source": "Nathaniel Ashcombe · Appunti per il corso di Incantesimi"
  },
  {
    "title": "Accio",
    "subtitle": "Il richiamo e il percorso del bersaglio",
    "theory": [
      "Accio richiama verso l’incantatore un oggetto identificato. Il bersaglio deve essere riconoscibile: un’intenzione vaga non distingue necessariamente l’oggetto scelto da altri simili. Il richiamo viene preparato indicando che cosa debba arrivare e dove.",
      "Richiamare non equivale a sospendere. Levioso, studiato nel primo anno, riguarda la condizione del bersaglio sollevato; Accio riguarda invece il suo movimento verso l’incantatore. Anche Wingardium Leviosa conserva un compito diverso, legato alla guida dell’oggetto nello spazio.",
      "La dimostrazione usa oggetti leggeri e distinguibili. Prima della prova si considera il percorso e si rimuovono gli ingombri predisposti per il confronto. La riuscita va valutata attraverso l’identificazione dell’oggetto, il movimento osservato e la corrispondenza con la destinazione prevista."
    ],
    "materials": "Due oggetti leggeri distinguibili e percorso libero.",
    "steps": [
      "Indicare l’oggetto da richiamare e motivarne l’identificazione.",
      "Osservare o eseguire Accio nella dimostrazione guidata.",
      "Confrontare il percorso ottenuto con la sospensione già studiata con Levioso."
    ],
    "check": "Richiamare il bersaglio riconosciuto e distinguerne il movimento dalla sospensione.",
    "question": "Un oggetto richiamato con Accio è stato soltanto mantenuto sospeso?",
    "answer": "No. Accio lo richiama verso l’incantatore; la sospensione di Levioso è un effetto distinto.",
    "source": "Nathaniel Ashcombe · Appunti per il corso di Incantesimi",
    "id": 5,
    "year": 2,
    "meeting": 1,
    "week": 1
  },
  {
    "id": 6,
    "year": 2,
    "week": 1,
    "meeting": 2,
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
    "source": "Nathaniel Ashcombe · Appunti per il corso di Incantesimi"
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
    "source": "Nathaniel Ashcombe · Appunti per il corso di Incantesimi",
    "id": 7,
    "year": 2,
    "week": 2,
    "meeting": 3
  },
  {
    "title": "Puncheck",
    "subtitle": "Il pugno magico · Impulso e precisione",
    "theory": [
      "Puncheck simula un pugno mediante la magia. L’incantesimo produce un colpo sul bersaglio senza che la mano dell’incantatore debba raggiungerlo. La somiglianza con un pugno descrive la natura dell’effetto, non un cambiamento della forma o delle dimensioni della mano.",
      "Il punto essenziale è distinguere il colpo dal trasporto. Accio richiama, Depulso respinge, Puncheck imprime un impatto simile a quello di un pugno. Non si deve presumere che il bersaglio venga guidato lungo una traiettoria o spostato sempre nello stesso modo.",
      "L’esercizio si svolge su un bersaglio inanimato predisposto dal docente. Prima di eseguire la formula, l’allievo identifica il punto da colpire e controlla lo spazio vicino. Precisione e misura valgono più della ricerca di un impatto vistoso: una buona esecuzione corrisponde al compito assegnato."
    ],
    "materials": "Bersaglio inanimato imbottito, sostegno stabile e spazio sgombro.",
    "steps": [
      "Identificare il punto d’impatto e descrivere l’effetto atteso.",
      "Osservare o eseguire Puncheck secondo la dimostrazione del docente.",
      "Confrontare il colpo con il richiamo di Accio e la spinta di Depulso."
    ],
    "check": "Riconoscere Puncheck come colpo magico e distinguerlo dalle formule di movimento.",
    "question": "Puncheck fa crescere un pugno reale dalla bacchetta?",
    "answer": "No. Simula un pugno attraverso un colpo magico; non trasfigura la mano dell’incantatore.",
    "source": "Nathaniel Ashcombe · Appunti per il corso di Incantesimi",
    "id": 8,
    "year": 2,
    "meeting": 4,
    "week": 2
  },
  {
    "title": "Descendo",
    "subtitle": "La direzione verso il basso",
    "theory": [
      "Descendo viene studiato per governare un movimento verso il basso. La direzione generale non basta: l’allievo deve indicare quale bersaglio coinvolgere e dove il suo movimento debba terminare.",
      "Il confronto con Wingardium Leviosa distingue una guida nello spazio da un effetto orientato alla discesa. Il risultato va valutato rispetto al compito, senza dedurre dal nome dettagli non appresi.",
      "La dimostrazione usa un oggetto inanimato e un punto di arrivo predisposto. Gli studenti osservano discesa, appoggio e stabilità finale; la lezione non comprende l’uso della formula per schiantare persone al suolo."
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
    "source": "Nathaniel Ashcombe · Appunti per il corso di Incantesimi",
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
    "title": "Reparo",
    "subtitle": "Ripristinare e riconoscere i limiti della riparazione",
    "theory": [
      "Reparo ricompone un oggetto danneggiato. La preparazione parte dal riconoscimento della sua struttura originaria: i frammenti presenti devono corrispondere a un insieme conoscibile, non a una forma immaginata senza riferimento.",
      "Il manuale distingue la ricomposizione materiale dalla restituzione di ogni proprietà magica. Un manufatto complesso o una bacchetta non possono essere giudicati soltanto dall’aspetto esterno. Una superficie integra non dimostra il recupero delle funzioni nascoste.",
      "L’esercizio del terzo anno usa un oggetto ordinario e documentato prima del danno. Reparo non viene presentato come cura per esseri viventi né come soluzione universale: il giudizio finale deve esplicitare ciò che è stato effettivamente verificato."
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
    "source": "Nathaniel Ashcombe · Appunti per il corso di Incantesimi"
  },
  {
    "id": 11,
    "year": 3,
    "week": 2,
    "meeting": 3,
    "title": "Ventus",
    "subtitle": "Direzione e limite del vento",
    "theory": [
      "Ventus produce un effetto di vento governato dalla bacchetta. La prova definisce una direzione e un bersaglio che permettano di osservare il movimento senza coinvolgere l’intero ambiente.",
      "L’intensità va riferita al compito: un indicatore che si muove nella direzione prevista offre un riscontro più chiaro di materiali dispersi senza controllo.",
      "La pratica usa indicatori leggeri e una corrente contenuta. L’allievo descrive anche gli oggetti vicini e non impiega la dimostrazione per provocare cadute o impedire il movimento dei compagni."
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
    "source": "Nathaniel Ashcombe · Appunti per il corso di Incantesimi"
  },
  {
    "title": "Movimento e riparazione · Ripasso",
    "subtitle": "Descendo, Reparo e Ventus",
    "theory": [
      "Il terzo anno collega discesa, corrente e ricomposizione: tre compiti distinti, da scegliere in rapporto a un oggetto concreto.",
      "Una corrente può coinvolgere più materiali lungo il percorso; una discesa riguarda l’appoggio finale; una riparazione richiede di conoscere la struttura originaria. Queste differenze aiutano a evitare una sequenza di formule non necessarie.",
      "Il caso su tavola usa soltanto oggetti comuni. Un percorso ostruito non giustifica l’aggiunta di formule sconosciute o di un’intensità maggiore del necessario."
    ],
    "materials": "Tavole del bersaglio, oggetti comuni predisposti e schede di osservazione.",
    "steps": [
      "Descrivere il bersaglio e il risultato richiesto prima di scegliere la formula.",
      "Confrontare le schede e la dimostrazione predisposta dal docente, rispettando i limiti della lezione.",
      "Annotare il risultato e motivare quando interrompere l’esercizio."
    ],
    "check": "Distinguere effetto, bersaglio e condizioni dell’esercizio; rispettare il limite fra studio e pratica.",
    "question": "Che cosa deve essere definito prima dell’esercizio?",
    "answer": "Bersaglio, risultato necessario e modo di verificare ciò che è accaduto.",
    "source": "Nathaniel Ashcombe · Appunti per il corso di Incantesimi",
    "id": 12,
    "year": 3,
    "meeting": 4,
    "week": 2
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
    "source": "Nathaniel Ashcombe · Appunti per il corso di Incantesimi"
  },
  {
    "id": 14,
    "year": 4,
    "week": 1,
    "meeting": 2,
    "title": "Diffindo",
    "subtitle": "Il taglio come prova di precisione",
    "theory": [
      "Diffindo separa o taglia il materiale bersagliato. Il compito preparatorio non è la recitazione della formula, ma la definizione di una linea e di un limite oltre il quale l’effetto non deve proseguire.",
      "La precisione comprende il riconoscimento della superficie, il percorso del gesto e l’osservazione dell’esito. Un materiale separato in molti frammenti non dimostra una riuscita migliore se il progetto richiedeva una sola divisione.",
      "Il campione è inanimato e predisposto dal docente. La linea scelta deve conservare le parti non interessate e tenere conto di ciò che sostiene il materiale. La precisione vale più dell’estensione del taglio."
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
    "source": "Nathaniel Ashcombe · Appunti per il corso di Incantesimi"
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
      "Confrontare il risultato con lo stato iniziale e indicare perché Reparo non è un rimedio universale."
    ],
    "check": "Il giudizio distingue taglio, ricostruzione e proprietà non verificate.",
    "question": "Reparo è automaticamente la soluzione a ogni danno?",
    "answer": "No. Il tipo di oggetto e la natura del danno restano determinanti.",
    "source": "Nathaniel Ashcombe · Appunti per il corso di Incantesimi",
    "id": 15,
    "year": 4,
    "week": 2,
    "meeting": 3
  },
  {
    "title": "Preparare un incanto elementale",
    "subtitle": "Materiali, ambiente e controllo",
    "theory": [
      "Il fuoco modifica il bersaglio e l’ambiente. Prima di una dimostrazione occorre conoscere ciò che può bruciare, dove si trovano gli osservatori e come interrompere la prova.",
      "Il materiale, la vicinanza di altri oggetti e la possibilità di interrompere l’effetto fanno parte della preparazione. La visibilità di una fiamma non misura da sola il controllo dell’incantatore.",
      "Si confrontano casi descritti e materiali predisposti dal docente. Il confronto teorico con il freddo prepara Glacius, che sarà esercitato nel quinto anno, senza anticiparne la pratica."
    ],
    "materials": "Tavole del bersaglio, oggetti comuni predisposti e schede di osservazione.",
    "steps": [
      "Descrivere il bersaglio e il risultato richiesto prima di scegliere la formula.",
      "Confrontare le schede e la dimostrazione predisposta dal docente, rispettando i limiti della lezione.",
      "Annotare il risultato e motivare quando interrompere l’esercizio."
    ],
    "check": "Distinguere effetto, bersaglio e condizioni dell’esercizio; rispettare il limite fra studio e pratica.",
    "question": "Che cosa deve essere definito prima dell’esercizio?",
    "answer": "Bersaglio, risultato necessario e modo di verificare ciò che è accaduto.",
    "source": "Nathaniel Ashcombe · Appunti per il corso di Incantesimi",
    "id": 16,
    "year": 4,
    "meeting": 4,
    "week": 2
  },
  {
    "title": "Alohomora · livello 2",
    "subtitle": "Lo sblocco delle chiusure più complesse",
    "theory": [
      "Il secondo grado di Alohomora approfondisce lo studio delle serrature. Questa lezione tratta il secondo livello come progressione della formula d’apertura, senza dedurre dal nome un successo garantito su qualsiasi chiusura.",
      "Il bersaglio viene scelto dal docente in base alle condizioni effettivamente previste per il livello. L’allievo descrive l’apertura richiesta e confronta il caso con una chiusura già affrontata.",
      "Non si inventano tempi, costi o caratteristiche della serratura. La riuscita riguarda il compito predisposto e non dimostra che l’incantatore possa superare ogni protezione."
    ],
    "materials": "Chiusura didattica indicata per Alohomora di livello 2.",
    "steps": [
      "Ricostruisci il compito già affrontato con la formula di base.",
      "Osserva o esegui il livello 2 sul bersaglio autorizzato.",
      "Indica il risultato e ciò che non puoi estendere ad altre protezioni."
    ],
    "check": "La verifica riguarda l’apertura della chiusura assegnata e il riconoscimento delle protezioni presenti.",
    "question": "Il livello 2 garantisce l’apertura di qualsiasi protezione?",
    "answer": "No. Il livello non elimina le condizioni del bersaglio.",
    "source": "Nathaniel Ashcombe · Appunti per il corso di Incantesimi",
    "id": 17,
    "year": 5,
    "week": 1,
    "meeting": 1
  },
  {
    "id": 18,
    "year": 5,
    "week": 1,
    "meeting": 2,
    "title": "Arresto Momentum",
    "subtitle": "Osservare un rallentamento",
    "theory": [
      "Arresto Momentum interviene sulla velocità di un bersaglio. Il compito iniziale riguarda un oggetto dal percorso prevedibile e richiede di distinguere il rallentamento osservato dall’arresto soltanto immaginato.",
      "Il movimento si descrive prima del tentativo: direzione, punto di partenza e zona nella quale verificare l’effetto rendono leggibile il confronto. La capacità di seguire il bersaglio conta quanto la formula.",
      "Nel quinto anno la dimostrazione comincia con un oggetto in movimento su un percorso predisposto. L’effetto non arresta il tempo. La lezione distingue una prova su oggetti da un’applicazione su persone, che richiede valutazione e supervisione del docente."
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
    "source": "Nathaniel Ashcombe · Appunti per il corso di Incantesimi"
  },
  {
    "id": 19,
    "year": 5,
    "week": 2,
    "meeting": 3,
    "title": "Glacius",
    "subtitle": "Freddo e cambiamento di stato",
    "theory": [
      "Glacius riguarda il raffreddamento e il congelamento del bersaglio. Il compito comincia dalla descrizione dello stato iniziale, così che l’allievo possa riconoscere che cosa è effettivamente cambiato.",
      "L’osservazione deve distinguere un cambiamento di stato dall’apparenza della superficie. Il confronto non attribuisce alla formula proprietà ulteriori soltanto perché il risultato sembra freddo.",
      "La pratica del quinto anno riguarda campioni inanimati predisposti. Il loro raffreddamento non autorizza esperimenti di congelamento sui compagni. L’allievo osserva superficie, stato e mobilità senza attribuire al gelo capacità curative."
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
    "source": "Nathaniel Ashcombe · Appunti per il corso di Incantesimi"
  },
  {
    "id": 20,
    "year": 5,
    "week": 2,
    "meeting": 4,
    "title": "Silencio",
    "subtitle": "Il suono e il limite del bersaglio",
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
    "source": "Nathaniel Ashcombe · Appunti per il corso di Incantesimi"
  },
  {
    "title": "Alohomora · livello 3",
    "subtitle": "Confrontare i tre livelli di apertura",
    "theory": [
      "Il terzo grado di Alohomora affronta chiusure più impegnative. Il suo studio riprende la distinzione fra formula, condizioni della chiusura e risultato osservabile.",
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
    "source": "Nathaniel Ashcombe · Appunti per il corso di Incantesimi",
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
    "source": "Nathaniel Ashcombe · Appunti per il corso di Incantesimi",
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
      "La revisione confronta Incendio, Ventus e Glacius già studiati, senza aggiungere bersagli o intensità non affrontati nelle lezioni precedenti. Le prove restano separate, ciascuna con un risultato verificabile."
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
    "source": "Nathaniel Ashcombe · Appunti per il corso di Incantesimi",
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
      "L’esecuzione non verbale si studia progressivamente su singole formule già padroneggiate. Riuscire in una prova non significa saper eseguire senza voce ogni incantesimo del proprio repertorio."
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
    "source": "Nathaniel Ashcombe · Appunti per il corso di Incantesimi"
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
    "source": "Nathaniel Ashcombe · Appunti per il corso di Incantesimi",
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
    "source": "Nathaniel Ashcombe · Appunti per il corso di Incantesimi",
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
    "source": "Nathaniel Ashcombe · Appunti per il corso di Incantesimi",
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
    "source": "Nathaniel Ashcombe · Appunti per il corso di Incantesimi"
  }
];
