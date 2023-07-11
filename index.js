// Il tuo compito è creare un sito e-commerce per Smartphones. 
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto. 
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto 
// (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)

//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro

function newTitle() {
const titolo = document.querySelector('h1')
titolo.innerHTML = 'The phones shop'
}

/*
const titolo = document.querySelector('h1')
titolo.innerHTML = 'The phones shop'
*/

// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina

function newBackground() {
const sfondo = document.querySelector('body')
sfondo.style.backgroundColor = 'purple'
}

// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel footer in un altro, fittizio

function newAddress() {
const indirizzo = document.getElementById('indirizzo')
indirizzo.innerHTML = 'Ilirska Ulica 20, 1000 Ljubljana (SLO)'
}

// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella

function newLink() {
const newClass = document.querySelectorAll('a')
  for(i = 0; i < newClass.length; i++){
  newClass[i].classList.add('linkAmazon')
  }
}

// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare 
//la visibilità/invisibilità dell'immagine

function imgHidden() {
    const imgClass = document.querySelectorAll('img')
      for(i = 0; i < imgClass.length; i++){
        imgClass[i].classList.add('hidden')
      }
    }

// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata

const getRandomColor = function () {
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    return 'rgb(' + red + ', ' + green + ', ' + blue + ')'
  }

function setRandomColor() {
    const randomColor = getRandomColor()
    const prezzi = document.getElementsByClassName('prezzo')
    for(i = 0; i < prezzi.length; i++){
        let prezzoSingolo = prezzi[i]
        prezzoSingolo.style.color = randomColor
    }
}
