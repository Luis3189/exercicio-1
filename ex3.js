var a = parseInt(prompt("A?"));
var b = parseInt(prompt("B?"));
var c = parseInt(prompt("C?"));

console.log("Números: "+ a +" | "+ b + " | " + c);

if(a == b || a == c || b == c){
	console.log("IGUAIS");
}else{

	var maior = 0;
	var meio = 0;
	var menor = 0;
	if(a > b && a > c){
		maior = a;
		if(b < c){
			menor = b;
			meio = c; 
		}else{
			menor = c;
			meio = b; 
		}

	}else if(b > a && b > c){
		maior = b;
		if(a < c){
			menor = a;
			meio = c;
		}else{
			menor = c;
			meio = a;
		}

	}else{
		maior = c;1
		if(b < a){
			menor = b;
			meio = a; 
		}else{
			menor = a;
			meio = b; 
		}
	}

	console.log(menor + " É o menor.");
	console.log(meio + " É o do meio.");
	console.log(maior + " É o maior.");

}

