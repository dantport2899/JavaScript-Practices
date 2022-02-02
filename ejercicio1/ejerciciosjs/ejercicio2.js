'use strict'
var suma=0;
var total=1;
var numero=0;

do{
    numero = parseInt(prompt("Ingresa el numero en la posicion: "+total));

    while(isNaN(numero)){
    numero = parseInt(prompt("Ingresa el numero en la posicion: "+total));
    }
    
    total++;
    suma = suma + numero;
    console.log(numero);

}while(numero>=0);

var media = suma/total;
alert("La suma total de los "+total+" numeros es: "+suma+" y el promedio es: "+media);