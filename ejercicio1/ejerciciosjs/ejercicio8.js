'use strict'
//calculadora

var numero1 = parseInt(prompt("Ingresa el primer numero",0));
var numero2 = parseInt(prompt("Ingresa el segundo numero",0));

while(isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt("Ingresa el primer numero",0));
    numero2 = parseInt(prompt("Ingresa el segundo numero",0));
}

document.write("<br>El resultado de sumar "+numero1+" y "+numero2+" es: "+(numero1+numero2));
document.write("<br>El resultado de restar "+numero1+" y "+numero2+" es: "+(numero1-numero2));
document.write("<br>El resultado de multiplicar "+numero1+" y "+numero2+" es: "+(numero1*numero2));
document.write("<br>El resultado de dividir "+numero1+" y "+numero2+" es: "+(numero1/numero2));
