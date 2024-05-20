--ESERCIZIO--

L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

Consigli del giorno:
- Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio: Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti. Le validazioni e i controlli possiamo farli anche in un secondo momento.


- Creo la mia pagina Html.
- Creare una variabile per prendere la section#grid.
- Creare un ciclo for per 100 quante sono le caselle
    - Creo un elemento ( article )
    - Gli aggiungo una classe 'square'
    - Ci appendo l'indice + 1 
    - Appendo al main l'elemento article

    - Dico all'elemento article che deve essere in ascolto click
        - Quando clickato aggiungi classe 'active'
        - Emetti un messaggio in console dell' elemento [ indice + 1 ]


- Creo una variabile che mi vada a prendere il bottone del tasto play. 
    - Aggiungo al bottone che deve essere in ascolto
        - Quando cliccano bisogna sovrascrivere la partita



Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

- Creare una funzione per far generare numeri randomici da 1 a dipende dal livello di difficoltà.

- Creare un array vuoto che verrà riempito da numeri occupati dalle bombe. Non ci possono essere numeri doppiponi.

- Creare una funzione Game Over che quando viene premuto un numero presente nell'arrey bombe, aggiunge classe bomb ai numeri con le bombe e ovviamente che diventano rosse e che vengano visualizzate. E rimuovo levent listener.

- Comunicare all'utente quante volte attiva la classe active.