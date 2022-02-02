'use strict'

var numero1 = parseInt(prompt("Ingresa el numero menor"));
var numero2 = parseInt(prompt("Ingresa el numero mayor"));

while( numero1 > numero2 || isNaN(numero1) || isNaN(numero2)){
    alert("¡OH NO! algon no lo hiciste bien");
    numero1 = parseInt(prompt("Ingresa el numero menor"));
    numero2 = parseInt(prompt("Ingresa el numero mayor"));
}

document.write("<h2>Los numeros entre "+numero1+" y "+numero2+" son:</h2>");
for(var i=(numero1+1); i<numero2; i++){
    document.write(i+"<br>");
}