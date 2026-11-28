"""Build the illustrated A4 leaves and reader data from the editable lessons."""
import json, re, math, subprocess
from pathlib import Path
from xml.sax.saxutils import escape
from reportlab.pdfbase.pdfmetrics import stringWidth

ROOT=Path(__file__).parent
DATA=json.loads(subprocess.check_output(['node','-e',"const fs=require('fs'),vm=require('vm');let c={};vm.createContext(c);vm.runInContext(fs.readFileSync('content.js','utf8')+'\\n'+fs.readFileSync('server-lessons.js','utf8')+'\\nthis.out={years:YEARS,lessons:LESSONS}',c);process.stdout.write(JSON.stringify(c.out));"],cwd=ROOT))
OUT=ROOT/'pages';OUT.mkdir(exist_ok=True)
ROMAN=['I','II','III','IV','V','VI','VII'];PAGES=[];CHAPTERS=[];SECTIONS=[]
NOTES=json.loads((ROOT/'spell-notes.json').read_text())
SHEET_POSITIONS={};INDEX_ROWS=[];ANNUAL_ROWS=[];LESSON_POSITIONS={}
BOOK_TITLE='ARS INCANTATIONUM'
INK='#283b32';GOLD='#ac9258';MUTED='#8e8a76';PAPER='#f8f4e8';GREEN='#153f33'

def text(x,y,s,size=12,fill=INK,weight='',anchor='',italic=False):
    return f'<text x="{x}" y="{y}" font-family="Georgia, Times New Roman, serif" font-size="{size}" fill="{fill}"'+(f' font-weight="{weight}"' if weight else '')+(f' text-anchor="{anchor}"' if anchor else '')+(' font-style="italic"' if italic else '')+'>'+escape(str(s))+'</text>'

def lines(s,size=12,width=479,bold=False):
    words=s.split();result=[];current=''
    for w in words:
        t=(current+' '+w).strip()
        # Slightly conservative for Georgia on browsers without the same font.
        if stringWidth(t,'Times-Bold' if bold else 'Times-Roman',size)*1.08>width and current:
            result.append(current);current=w
        else:current=t
    if current:result.append(current)
    return result

class Leaf:
    def __init__(self,section,title,subtitle='',kind='theory'):
        self.section=section;self.title=title;self.subtitle=subtitle;self.kind=kind;self.parts=[];self.plain=[section,title];self.y=109
        self.parts.append('<rect width="595" height="842" fill="'+PAPER+'"/><rect width="595" height="842" fill="url(#paper)" opacity=".17"/>')
        self.parts += [text(52,38,'ARS INCANTATIONUM',7,MUTED),text(543,38,section.upper(),7,MUTED,anchor='end'),'<path d="M52 48H543" stroke="'+GOLD+'" stroke-width=".7"/>']
        for line in lines(title,26,480,True):self.parts.append(text(52,self.y,line,26,GREEN,'bold'));self.y+=31
        self.y+=1
        if subtitle:self.paragraph(subtitle,11,MUTED,True,16);self.y+=8
    def paragraph(self,s,size=12,fill=INK,italic=False,leading=18):
        self.plain.append(s)
        for line in lines(s,size):
            self.parts.append(text(52,self.y,line,size,fill,italic=italic));self.y+=leading
        self.y+=12
    def heading(self,s):
        self.plain.append(s);self.y+=7
        for line in lines(s,15,480,True):self.parts.append(text(52,self.y,line,15,GREEN,'bold'));self.y+=20
        self.y+=4
    def box(self,label,s):
        ls=lines(s,11,449);height=39+len(ls)*16
        self.parts.append(f'<rect x="52" y="{self.y-12}" width="491" height="{height}" fill="#eee9d8"/><path d="M52 {self.y-12}v{height}" stroke="{GOLD}" stroke-width="1.5"/>')
        self.parts.append(text(66,self.y+3,label.upper(),8,GREEN,'bold'));self.y+=24
        for line in ls:self.parts.append(text(66,self.y,line,11));self.y+=16
        self.y+=22;self.plain.extend([label,s])
    def row(self,left,right):
        self.parts.append('<!--ROW:'+str(len(self.plain))+'-->')
        for line in lines(left,11,417):self.parts.append(text(60,self.y,line,11));self.y+=16
        self.parts.append(text(536,self.y-16,right,10,MUTED,anchor='end'))
        self.parts.append(f'<path d="M60 {self.y-8}H536" stroke="#c3b89b" stroke-dasharray="1 3" stroke-width=".4"/>');self.y+=12
        self.plain.append(left+' '+str(right))
    def finish(self,folio):
        if self.y>758:raise ValueError(f'Overflow {self.title}: {self.y}')
        return svg(''.join(self.parts)+f'<path d="M52 789H543" stroke="#c3b89b" stroke-width=".45"/>'+text(52,804,'MANUALE DIDATTICO DI INCANTESIMI',6.5,MUTED)+text(543,804,folio,8,MUTED,anchor='end'))

def svg(body):
    return '<svg xmlns="http://www.w3.org/2000/svg" width="595" height="842" viewBox="0 0 595 842"><defs><filter id="grain"><feTurbulence type="fractalNoise" baseFrequency=".7" numOctaves="3" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter><pattern id="paper" width="595" height="842" patternUnits="userSpaceOnUse"><rect width="595" height="842" filter="url(#grain)" opacity=".17"/></pattern><linearGradient id="leather"><stop stop-color="#06271b"/><stop offset=".12" stop-color="#17583a"/><stop offset=".6" stop-color="#0c402a"/><stop offset="1" stop-color="#042015"/></linearGradient></defs>'+body+'</svg>'

def add(leaf,chapter=None):
    idx=len(PAGES);folio=f'{idx+1:02}'
    if chapter:CHAPTERS.append({'title':chapter,'page':idx+1})
    artwork=leaf.finish(folio);name=f'page-{idx+1:02}.svg';(OUT/name).write_text(artwork)
    PAGES.append({'image':'pages/'+name,'text':'ARS INCANTATIONUM\n'+'\n'.join(leaf.plain),'title':leaf.title,'folio':folio,'kind':leaf.kind})
    return idx

def spell_sheet(item,section):
    p=Leaf(section,item['name'],'La formula · Effetto e nozioni per la lezione',kind='spell')
    p.paragraph(item['mode'],9,MUTED,True,13)
    for label,key in [('Che cosa fa','effect'),('Nozioni da spiegare','notions'),('Esempio da discutere in aula','example')]:
        p.heading(label);p.paragraph(item[key],12,leading=18)
    p.heading('Domanda alla classe');p.paragraph(item['question'],11.5,leading=17)
    p.box('Risposta ragionata',item['answer'])
    SHEET_POSITIONS[item['name']]=len(PAGES)+1
    add(p,item['name']+' · Effetto e nozioni')

def cover(back=False):
    body='<rect width="595" height="842" fill="url(#leather)"/><rect width="595" height="842" fill="url(#paper)" opacity=".22"/>'
    for inset in [21,28,35]:body+=f'<rect x="{inset}" y="{inset}" width="{595-2*inset}" height="{842-2*inset}" fill="none" stroke="#aa9256" stroke-width="{.8 if inset==21 else .4}"/>'
    for x in [35,560]:
        for y in [35,807]:body+=f'<circle cx="{x}" cy="{y}" r="2.5" fill="none" stroke="{GOLD}" stroke-width=".6"/>'
    body+=text(297.5,84,'HOGWARTS · INCANTESIMI',9,GOLD,anchor='middle')
    body+=text(297.5,175,'ARS',36,'#eee4c9','bold','middle')+text(297.5,219,'INCANTATIONUM',31,'#eee4c9','bold','middle')
    body+=text(297.5,255,'Tractatus de Arte Incantatoria',15,'#d9cda8',anchor='middle',italic=True)+'<path d="M205 282H390" stroke="'+GOLD+'" stroke-width=".6"/>'
    body+='<g fill="none" stroke="'+GOLD+'" stroke-width=".8"><circle cx="297.5" cy="422" r="90"/><circle cx="297.5" cy="422" r="82"/><path d="M237 443v-47q30-9 60 6 30-15 60-6v47q-30-9-60 6-30-15-60-6zM297 402v47M245 409q22-4 42 3M245 421q22-4 42 3M309 412q22-8 40-3M309 424q22-8 40-3M253 482l89-126"/><path d="m343 347 4-17 5 13 14 5-15 3-5 14z"/></g>'
    if back:
        body+=text(297.5,605,'La volontà guida. Il metodo governa.',16,'#e1d6b9',anchor='middle',italic=True)+text(297.5,669,'NATHANIEL ASHCOMBE',14,'#e1d6b9',anchor='middle')
    else:
        body+=text(297.5,616,'AD USUM SCHOLASTICUM HOGVARTENSE',9,GOLD,anchor='middle')+text(297.5,683,'Professor Nathaniel Ashcombe',17,'#e1d6b9',anchor='middle')+text(297.5,753,'OSSERVAZIONE · PRECISIONE · CONTROLLO',9,GOLD,anchor='middle')
    body+=text(297.5,790,'MDCCCXC',11,GOLD,anchor='middle')
    name='page-'+f'{len(PAGES)+1:02}'+'.svg';(OUT/name).write_text(svg(body));PAGES.append({'image':'pages/'+name,'text':'ARS INCANTATIONUM\n'+('Quarta di copertina' if back else 'Tractatus de Arte Incantatoria')+'\nNathaniel Ashcombe\nHogwarts · 1890','title':'Quarta di copertina' if back else 'Copertina','folio':'Quarta di copertina' if back else 'Copertina','kind':'cover'})

cover();CHAPTERS.append({'title':'Copertina','page':1})
p=Leaf('Praefatio','La volontà e il metodo','Prefazione di Nathaniel Ashcombe')
p.paragraph('Un incantesimo comincia prima della formula. Il buon incantatore riconosce il bersaglio, definisce un risultato e prepara il controllo con cui potrà giudicarlo. La volontà dà direzione alla magia; il metodo rende leggibile il suo esito.')
p.paragraph('Questo volume accompagna sette annualità. Ogni anno si svolge in due settimane, con due lezioni per settimana: quattro incontri prima di procedere all’anno successivo.')
p.heading('Il metodo comune')
p.paragraph('Le pagine teoriche introducono principi e formule. La scheda successiva organizza preparazione, attività e controllo. Ogni incontro ha un obiettivo riconoscibile e termina con una domanda ragionata.')
p.box('La sequenza di lavoro','Osservare. Visualizzare. Eseguire con controllo. Confrontare. Correggere.')
p.paragraph('Questa edizione distingue le formule di Incantesimi da quelle delle altre discipline. Ogni materia segue il proprio percorso; l’esecuzione pratica richiede sempre la preparazione e il giudizio del docente.',10,MUTED)
p.paragraph('La teoria non conferisce automaticamente abilità speciali. Gli argomenti avanzati si affrontano secondo la preparazione degli allievi e le indicazioni della scuola.')
p.paragraph('Nathaniel Ashcombe',13,GREEN,True)
add(p,'Praefatio')

p=Leaf('Tabula Materiarum','Indice del volume','Sette anni, un solo metodo.')
add(p,'Indice del volume');SECTIONS.append(['Indice',2])
p=Leaf('Cursus Septem Annorum','Due settimane per anno','Il ritmo didattico del volume')
p.heading('Settimana I');p.paragraph('Lezione 1: principi e osservazione. Lezione 2: sviluppo e confronto. Ogni incontro presenta una pratica centrale o un caso da interpretare.')
p.heading('Settimana II');p.paragraph('Lezione 3: applicazione guidata. Lezione 4: sintesi e ripasso. Concluso il quarto incontro, si prosegue con la prima lezione dell’anno successivo.')
p.box('Quindici minuti','2 minuti per obiettivo e preparazione; 3 per la lettura guidata; 7 per attività o dimostrazione; 3 per confronto e ripasso.')
p.heading('Conoscenza e applicazione');p.paragraph('Il programma accompagna lo studio delle formule attraverso osservazione e pratica guidata. Ogni esercizio richiede uno scopo definito e un controllo del risultato.')
p.paragraph('Recuperi e verifiche seguono le disposizioni della scuola. Teoria e scheda operativa permettono di preparare il confronto con il docente.',11)
add(p,'Il percorso delle due settimane')
p=Leaf('Fondamenti','Quattro elementi del controllo','Preparare prima di eseguire')
for h,t in [('Concentrazione','Rivolgere l’attenzione al bersaglio e al risultato, riconoscendo ciò che può distrarre.'),('Volontà','Definire quale effetto si intende produrre, senza sostituire il progetto con una richiesta vaga di maggiore potenza.'),('Movimento e formula','Coordinare il gesto appreso con la formula pronunciata chiaramente. Una variazione non conosciuta non è un miglioramento dimostrato.'),('Predisposizione ed esercizio','L’affinità con una pratica può facilitare l’apprendimento; non sostituisce preparazione, costanza e riscontro del docente.')]:p.heading(h);p.paragraph(t)
p.box('Magia involontaria','Un fenomeno spontaneo non equivale a un’esecuzione intenzionale. Il corso sviluppa controllo, non la ricerca di manifestazioni incontrollate.')
add(p,'Fondamenti · Il controllo');SECTIONS.append(['Fondamenti',4])

for yi,y in enumerate(DATA['years']):
    year=yi+1;annual=[l for l in DATA['lessons'] if l['year']==year];idx=len(PAGES)
    p=Leaf('Anno '+ROMAN[yi],y['name'],'Annus '+['Primus','Secundus','Tertius','Quartus','Quintus','Sextus','Septimus'][yi],kind='divider')
    p.y+=36;p.parts.append(text(297.5,p.y,ROMAN[yi],100,GREEN,anchor='middle'));p.y+=60
    p.paragraph(y['goal'],16,GREEN,True,24)
    p.box('Il ciclo dell’annualità','Due settimane. Due lezioni ogni settimana. Quattro incontri. Le schede delle formule sono letture della stessa lezione, non incontri aggiuntivi.')
    if year==1:p.paragraph('Lumos, Verdimilius, Levioso e Wingardium Leviosa.',13,GREEN)
    add(p,'Anno '+ROMAN[yi]+' · '+y['name']);SECTIONS.append([ROMAN[yi],idx])
    p=Leaf('Anno '+ROMAN[yi],'Il programma dell’anno','Due settimane · Quattro lezioni')
    for li,l in enumerate(annual):
        if li%2==0:p.heading('Settimana '+ROMAN[li//2])
        p.row(f"Lezione {l['meeting']} · {l['title']}",f'{idx+3+li*2:02}')
        p.paragraph(l['subtitle'],10,MUTED,True,15)
    p.box('Traguardo',y['goal']);p.paragraph('Leggere la teoria, preparare il compito e confrontare il risultato. La quarta lezione chiude il ciclo e raccoglie il ripasso dell’annualità.',11)
    ANNUAL_ROWS.append((len(PAGES),year))
    add(p)
    for l in annual:
        LESSON_POSITIONS[(year,l['meeting'])]=len(PAGES)+1
        p=Leaf(f"Anno {ROMAN[yi]} · Settimana {ROMAN[l['week']-1]}",l['title'],l['subtitle'])
        p.parts.insert(3,text(52,72,f"LECTIO {l['meeting']} · TEORIA",8,GOLD))
        for paragraph in l['theory']:p.paragraph(paragraph)
        p.box('Obiettivo',l['check']);p.paragraph('Riferimento: '+l['source'],8.5,MUTED,False,12)
        add(p,f"{ROMAN[yi]}.{l['meeting']} · {l['title']}")
        for note in NOTES:
            if note['lesson']==(year-1)*4+l['meeting']-1:
                spell_sheet(note,f"Anno {ROMAN[yi]} · Lectio {l['meeting']}")
        p=Leaf(f"Anno {ROMAN[yi]} · Lectio {l['meeting']}",'L’esercizio e il giudizio',l['title']+' · Scheda operativa')
        p.box('Preparazione',l['materials'])
        for i,s in enumerate(l['steps']):p.paragraph(f'{i+1}. '+s,11.5,leading=17)
        p.box('Controllo',l['check']);p.heading('Domanda di ripasso');p.paragraph(l['question'],11.5,leading=17)
        p.heading('Ragionamento');p.paragraph(l['answer'],11,leading=16)
        if l['meeting']==4:p.paragraph('Fine del ciclo di due settimane. '+('Si prosegue con il '+ROMAN[year]+' anno.' if year<7 else 'Il percorso dei sette anni è concluso.'),9,GOLD)
        add(p)
        PAGES[-1]['title']=l['title']+' · Esercizio e ripasso'

p=Leaf('Lexicon','Il lessico dell’incantatore','Parole da usare con precisione')
for h,t in [('Bersaglio','Soggetto identificato sul quale si intende intervenire.'),('Formula e gesto','Elementi appresi dell’esecuzione, da distinguere dal risultato osservato.'),('Controincantesimo','Intervento sull’effetto di un incanto. Non coincide con ogni effetto apparentemente opposto.'),('Incantamento','Progetto magico apposto a un oggetto, da verificare per compito e mantenimento.'),('Magia non verbale','Esecuzione senza formula pronunciata; richiede comunque intenzione e disciplina.'),('Riuscita e potenza','Un effetto più grande non è automaticamente più adatto. Conta la corrispondenza con il compito assegnato.')]:p.heading(h);p.paragraph(t,11.5,leading=17)
add(p,'Lessico essenziale');SECTIONS.append(['Lessico',75])
catalog=json.loads((ROOT/'catalog.json').read_text())
p=Leaf('Tavola I · Incantesimi','Le formule per anno','Prima introduzione · Ordinamento della presente edizione')
p.paragraph('Le revisioni approfondiscono formule già introdotte. I programmi annuali indicano le settimane e gli incontri dedicati a ogni argomento.',10,MUTED)
for item in catalog:
    if item['subject']=='Incantesimi':p.row(item['name'],ROMAN[item['year']-1])
add(p,'Incantesimi · Tavola per anno');SECTIONS.append(['Materie',76])
p=Leaf('Tavola II · D.C.A.O.','Difesa contro le Arti Oscure','Formule tenute fuori dal programma di Incantesimi')
p.paragraph('La tavola riporta la prima introduzione nel programma D.C.A.O. aggiornato. I rimandi alle formule condivise sono confronti teorici, non lezioni aggiuntive di Incantesimi.',10,MUTED)
for item in catalog:
    if item['subject']=='DCAO':p.row(item['name'],ROMAN[item['year']-1])
p.paragraph('La presenza in questa tavola non costituisce insegnamento operativo della formula. Le lezioni appartengono alla materia indicata.',10,MUTED)
add(p,'DCAO · Tavola per anno')
p=Leaf('Tavola III · Altre discipline','Materie e confini','La competenza precede l’esecuzione')
p.heading('Trasfigurazione')
for item in catalog:
    if item['subject']=='Trasfigurazione':p.row(item['name'],ROMAN[item['year']-1])
p.heading('Medimagia')
for item in catalog:
    if item['subject']=='Medimagia':p.row(item['name'],ROMAN[item['year']-1])
p.heading('Formula da assegnare')
p.paragraph('Blink non appartiene alle esercitazioni pratiche di questo corso. Il nome di una formula, da solo, non autorizza a sperimentarla.',11)
p.heading('Il percorso dello studente')
p.paragraph('Aguamenti viene affrontato nel primo anno di Trasfigurazione. Le tavole aiutano a riconoscere i collegamenti tra le discipline, rispettando gli insegnamenti dei diversi professori.',10)
p.paragraph('Nathaniel Ashcombe · Hogwarts · MDCCCXC',9,MUTED,False,13)
add(p,'Altre materie e assegnazioni')
supplements=[n for n in NOTES if n['lesson'] is None]
if supplements:
    SECTIONS.append(['Formule',len(PAGES)])
    for note in supplements:spell_sheet(note,'Repertorio · '+note['mode'].split(' · ')[0])
p=Leaf('Didattica','Dal testo alla lezione','Una formula, un effetto riconoscibile')
p.heading('1 · Spiegare il risultato');p.paragraph('Leggere la sezione «Che cosa fa» e far identificare bersaglio ed effetto. Prima della formula, la classe deve saper dire quale cambiamento ci si aspetta.')
p.heading('2 · Collegare una nozione');p.paragraph('Scegliere il confronto centrale della scheda: sospensione e guida, forma e consistenza, luce e produzione del vento. Usare un esempio concreto per rendere visibile la differenza.')
p.heading('3 · Osservare o discutere');p.paragraph('Svolgere l’attività prevista dalla lezione. Le voci delle altre materie e quelle di solo approfondimento restano confronti teorici, affidati al docente competente.')
p.heading('4 · Chiedere una spiegazione');p.paragraph('Porre la domanda della scheda e chiedere una motivazione. La risposta ragionata aiuta a correggere un equivoco, senza sostituire la descrizione dello studente con la sola formula memorizzata.')
p.box('Lo stesso calendario','Queste pagine sono materiali delle ventotto lezioni già previste: due incontri a settimana per due settimane in ciascuno dei sette anni.')
add(p,'Dal testo alla lezione')
p=Leaf('Finis','La volontà guida.','Il metodo governa.')
p.y=370;p.paragraph('Sette annualità. Quattordici settimane. Ventotto lezioni per collegare conoscenza, intenzione e giudizio.',19,GREEN,True,29)
p.y+=55;p.paragraph('Nathaniel Ashcombe',15,GREEN);p.paragraph('Hogwarts · MDCCCXC',10,GOLD)
add(p,'Finis')
idx=len(PAGES);name=f'page-{idx+1:02}.svg';body='<rect width="595" height="842" fill="#0d3027"/>'
for i in range(38):
    yy=i*24;body+=f'<path d="M-40 {yy} Q130 {yy-80} 298 {yy+9}T650 {yy-5}" fill="none" stroke="{["#9a8659","#6c855d","#38584a"][i%3]}" stroke-width="{1+i%4}" opacity=".5"/>'
(OUT/name).write_text(svg(body));PAGES.append({'image':'pages/'+name,'text':'Controguardia posteriore marmorizzata.','title':'Controguardia posteriore','folio':'Controguardia','kind':'endpaper'})
cover(True)
assert len(DATA['lessons'])==28
assert len(SHEET_POSITIONS)==len(NOTES)
# Resolve printed tables after every inserted sheet has its final folio.
chapter_pages={c['title']:c['page'] for c in CHAPTERS}
original_sections={'Indice':'Indice del volume','Fondamenti':next(c['title'] for c in CHAPTERS if c['title'].startswith('Fondamenti ·')),'Lessico':'Lessico essenziale'}
for section in SECTIONS:
    label=section[0]
    if label in ROMAN:section[1]=chapter_pages['Anno '+label+' · '+DATA['years'][ROMAN.index(label)]['name']]-1
    elif label in original_sections:section[1]=chapter_pages[original_sections[label]]-1
    elif label=='Materie':section[1]=chapter_pages['Incantesimi · Tavola per anno']-1
    elif label=='Appendice':section[1]=chapter_pages['Lezioni della scuola']-1

def replace_leaf(index,leaf):
    old=PAGES[index];folio=f'{index+1:02}'
    (OUT/f'page-{index+1:02}.svg').write_text(leaf.finish(folio))
    old['text']=BOOK_TITLE+'\n'+'\n'.join(leaf.plain)
    old['title']=leaf.title

for index,year in ANNUAL_ROWS:
    y=DATA['years'][year-1];annual=[l for l in DATA['lessons'] if l['year']==year]
    p=Leaf('Anno '+ROMAN[year-1],'Il programma dell’anno','Due settimane · Quattro lezioni')
    for li,l in enumerate(annual):
        if li%2==0:p.heading('Settimana '+ROMAN[li//2])
        p.row(f"Lezione {l['meeting']} · {l['title']}",str(LESSON_POSITIONS[(year,l['meeting'])]))
        p.paragraph(l['subtitle'],10,MUTED,True,15)
    p.box('Traguardo',y['goal'])
    p.paragraph('Ogni incontro comprende teoria, spiegazione delle formule ed esercizio. Le schede aggiunte appartengono alla stessa lezione. Dopo il quarto incontro si passa all’anno successivo.',11)
    replace_leaf(index,p)

p=Leaf('Tabula Materiarum','Indice del volume','Sette anni · Ventotto lezioni')
for title in ['Praefatio','Il percorso delle due settimane',original_sections['Fondamenti']]+['Anno '+ROMAN[i]+' · '+y['name'] for i,y in enumerate(DATA['years'])]+['Lessico essenziale']:
    p.row('Prefazione' if title=='Praefatio' else title,str(chapter_pages[title]))
supplement_start=next((c['page'] for c in CHAPTERS if c['title'].endswith(' · Effetto e nozioni') and c['page']>chapter_pages['Lessico essenziale']),None)
if supplement_start:p.row('Repertorio delle formule · Schede distinte',str(supplement_start))
p.row('Finis',str(chapter_pages['Finis']))
p.paragraph('Le schede delle formule si trovano nelle rispettive lezioni. Il repertorio raccoglie le voci complementari. L’indice ricercabile permette di trovare ogni incantesimo per nome.',10,MUTED)
replace_leaf(2,p)
for item in PAGES:item['image']+='?v=20261128-disarmo6'
for cover_index in (0,len(PAGES)-1):PAGES[cover_index]['image']=PAGES[cover_index]['image'].split('?')[0]+'?v=20261128-disarmo6'
(ROOT/'book-data.json').write_text(json.dumps({'pages':PAGES,'chapters':CHAPTERS,'sections':SECTIONS},ensure_ascii=False,indent=2))
index=ROOT/'index.html'
if index.exists() and 'id="book-data"' in index.read_text():
    packed=json.dumps({'pages':PAGES,'chapters':CHAPTERS,'sections':SECTIONS},ensure_ascii=False).replace('</','<\\/')
    index.write_text(re.sub(r'(<script id="book-data" type="application/json">).*?(</script>)',lambda m:m[1]+packed+m[2],index.read_text(),flags=re.S))
print(f'{len(PAGES)} pagine A4, {len(DATA["lessons"])} lezioni. Nessun testo supera il margine inferiore.')

# Il numero massimo segue il volume effettivamente generato.
index.write_text(re.sub(r'max="[0-9]+"',f'max="{len(PAGES)}"',index.read_text()))
