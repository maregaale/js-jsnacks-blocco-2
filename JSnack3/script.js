// array nomi
var nomi = ["Ale", "Marco", "Luca", "Giovanni", "Mario"];
var cognomi = ["Marega", "Besozzi", "Kravos", "Malu", "Locovaz"];

var listaFalsa = [];


for (var i = 0; i <= 2; i++) {
  var j = Math.floor(Math.random()*4);
  var d = Math.floor(Math.random()*4);
  listaFalsa[i] = nomi[j] + cognomi[d];
}

console.log(listaFalsa);
