'use strict'

var numero1 = parseInt(prompt("Ingresa el numero menor",0));
var numero2 = parseInt(prompt("Ingresa el numero mayor",0));

while( numero1 > numero2 || isNaN(numero1) || isNaN(numero2)){
    alert("¡OH NO! algon no lo hiciste bien");
    numero1 = parseInt(prompt("Ingresa el numero menor",0));
    numero2 = parseInt(prompt("Ingresa el numero mayor",0));
}

document.write("<h2>Los numeros impares entre "+numero1+" y "+numero2+" son:</h2>");

for(var i=(numero1+1); i<numero2; i++){
    if(i%2!=0){
        document.write(i+"<br>");
    }
}