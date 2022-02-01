'use strict'

var numero1 = parseInt(prompt("Ingresa el numero uno", 0));
var numero2 = parseInt(prompt("Ingresa el numero dos", 0));

while(numero1 <=0 || numero2 <=0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt("Ingresa el numero uno", 0));
    numero2 = parseInt(prompt("Ingresa el numero dos", 0));
}

if(numero1==numero2){
    console.log("Los numeros son iguales");
}else{
    if(numero1>numero2){
        console.log("El numero: " + numero1 + " es el mayor");
        console.log("El numero: " + numero2 + " es el menor");
    }else{
        console.log("El numero: " + numero2 + " es el mayor");
        console.log("El numero: " + numero1 + " es el menor");
    }
}
