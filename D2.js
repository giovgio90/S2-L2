/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const numero1 = 10;
const numero2 = 5;
const numeroPiuGrande = numero1 > numero2 ? numero1 : numero2;

console.log(numeroPiuGrande + " è il numero più grande");

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

const numero = 5;

if (numero !== 4) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

const numero3 = 20;
const risultato = numero3 % 5 === 0 ? "divisibile per 5" : "non è divisibile per 5";

console.log(risultato);

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

const numero4 = 5;
const numero5 = 3;

const condizioneVerificata = numero4 - numero5 === 8 || numero5 - numero4 === 8 || numero4 + numero5 === 8;

console.log(condizioneVerificata ? "Condizione verificata" : "Condizione non verificata");

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

const totalShoppingCart = 60;
const shippingCost = 10;
const checkoutAmount = 0;

if (totalShoppingCart < 50) {
  shippingCost = 0;
}

checkoutAmount = totalShoppingCart + shippingCost;
console.log("Ammontare totale da addebitare all'utente per il checkout: " + checkoutAmount);

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

const numero11 = 20;
const numero12 = 10;
const numero13 = 15;

if (numero11 >= numero12 && numero11 >= numero13) {
  if (numero12 >= numero13) {
    console.log(numero11, numero12, numero13);
  } else {
    console.log("Dal più grande al più piccolo:", +numero11, numero13, numero12);
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

const valore = 569;

if (typeof valore === "number") {
  console.log("Il valore è un numero");
} else {
  console.log("Il valore non è un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

const number = 7;

const result = number % 2 === 0 ? "Il numero è pari" : "Il numero è dispari";
console.log(result);

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

const val = 7;

if (val < 5) {
  console.log("Meno di 5");
} else if (val <= 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
