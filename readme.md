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





- 