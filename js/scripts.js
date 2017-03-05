// plik scripts.js

var a; 
var b; 
var value;

a = prompt('liczba a');
b = prompt('liczba b');
value = (a * a) + (2 * a * b) - (b * b);

console.log('(a * a) + (2 * a * b) - (b * b)');
console.log(value); 
document.getElementById('demo').innerHTML = value; // In addition the console displays the result

if (value > 0) { 
	console.log('wynik dodatni'); 
} else if (value < 0) {  
	console.log('wynik ujemny');
} else if (value == 0) {
	console.log('wynik równy 0'); 
}

