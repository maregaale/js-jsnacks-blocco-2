// creo un array vuoto e una variabile pari a 0 per il conteggio
var numeri = [] ;
var count = 0;

// chiedo per 5 volte all'utente un numero con ciclo for
for (var i = 0; i <= 4; i++) {
  numeri[i] = parseInt(prompt("inserisci un numero"));
  count = count + numeri[i];
}

// stampo la somma
console.log(count);


// con ciclo while
var j = 0;
var conteggio = 0;

while ( j <= 4) {
  numeri[j] = parseInt(prompt("inserisci un numero"));
  conteggio = conteggio + numeri[j];
  j++;
}

console.log(conteggio);
