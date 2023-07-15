/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let a = 5;
let b = 10;

if (a > b) {
  console.log("ESERCIZIO 1:", "Il numero più grande è: ", a);
} else {
  console.log("ESERCIZIO 1:", "Il numero più grande è: ", b);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
const num1 = 5;

if (num1 !== 10) {
  console.log("ESERCIZIO 2:", "not-equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

const numb = 30;

if (numb % 5 === 0) {
  console.log("ESERCIZIO 3:", "divisibile per 5");
} else {
  console.log("ESERCIZIO 3:", "non divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let x = 5;
let y = 3;

const verified = x === 8 || x + y === 8;
console.log("ESERCIZIO 4:", "verificato");

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 50;

let shippingCost = 10;

if (totalShoppingCart > 50) {
  console.log("ESERCIZIO 5:", "Spedizione gratuita. Il totale è: ", totalShoppingCart);
} else {
  console.log("ESERCIZIO 5:", "Costo di spedizione incluso. Il totale è: ", totalShoppingCart + shippingCost);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let totalShoppingCart2 = 60;
totalShoppingCart2 = totalShoppingCart2 * 0.8;
let shippingCost2 = 10;

if (totalShoppingCart2 > 50) {
  console.log("ESERCIZIO 6:", "Spedizione gratuita. Il totale è: ", totalShoppingCart2);
} else {
  console.log("ESERCIZIO 6:", "Costo di spedizione incluso. Il totale è: ", totalShoppingCart2 + shippingCost2);
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

const numero1 = 3;
const numero2 = 6;
const numero3 = 7;

if (numero1 > numero3 && numero3 < numero2) {
  console.log("ESERCIZIO 7:", "PRIMA CONDIZIONE: ", numero2, numero1, numero3);
} else if (numero3 < numero1 || numero1 > numero2) {
  console.log("ESERCIZIO 7:", "SECONDA CONDIZIONE: ", numero3, numero1, numero2);
} else if (numero2 > numero3 || numero1 < numero2) {
  console.log("ESERCIZIO 7:", "TERZA CONDIZIONE: ", numero3, numero2, numero1);
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

const valor1 = "Giovanni";

if (typeof valor1 === "number") {
  console.log("ESERCIZIO 8:", valor1, "è un numero");
} else {
  console.log("ESERCIZIO 8:", valor1, ": non è un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

const e = 45;

if (e % 2 === 0) {
  console.log("ESERCIZIO 9:", e, "numero pari");
} else {
  console.log("ESERCIZIO 9:", e, "numero dispari");
}

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

let val = 7;
if (val < 5) {
  console.log("ESERCIZIO 10:", "Meno di 5");
} else if (val < 10) {
  console.log("ESERCIZIO 10:", "Meno di 10");
} else {
  console.log("ESERCIZIO 10:", "Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "Giovanni",
  lastName: "Giordano",
  skills: ["javascript", "html", "css"],
};

me.city = "Toronto";
console.log("ESERCIZIO 11 :", me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log("ESERCIZIO 12: ", me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop();
console.log("ESERCIZIO 13: ", me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const array = [];

array.push(1);
array.push(2);
array.push(3);
array.push(4);
array.push(5);
array.push(6);
array.push(7);
array.push(8);
array.push(9);
array.push(10);
console.log("ESERCIZIO 14: ", array);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

array.pop();
array.push(100);
console.log("ESERCIZIO 15: ", array);
