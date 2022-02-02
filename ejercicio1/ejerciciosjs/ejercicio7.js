'use strict'

var numero = parseInt(prompt("Ingresa un numero",0));

while(isNaN(numero)){
    numero = parseInt(prompt("Ingresa un numero",0));
}

for(var i=1; i<=10; i++){
    document.write("<br>"+numero+" X "+i+" = "+(i*numero));
}