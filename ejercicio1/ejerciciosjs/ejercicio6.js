'use strict'

var numero = parseInt(prompt("Ingresa un numero",0));

while(isNaN(numero)){
    numero = parseInt(prompt("Ingresa un numero",0));
}

if(numero%2==0){
    document.write("<br>El numero "+numero+" es par");
}else{
    document.write("<br>El numero "+numero+" es inpar");
}