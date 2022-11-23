var palavras = [];
palavras[0] = prompt("1º Palavra?");
palavras[1] = prompt("2º Palavra?");
palavras[2] = prompt("3º Palavra?");

var random;
var aleatorias = [];
for(var i=1; i <= 3; i++){
	random = Math.floor(Math.random() * 3);
	aleatorias.push(palavras[random]);
}
console.log("Olha o/a "+aleatorias.pop()+" "+aleatorias.pop()+" e diga "+aleatorias.pop());
