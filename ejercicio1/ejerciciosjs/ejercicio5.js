'use strict'

var numero1 = parseInt(prompt("Ingresa el numero",0));

while(isNaN(numero1)){
    alert("¡OH NO! algon no lo hiciste bien");
    numero1 = parseInt(prompt("Ingresa el numero",0));
}

document.write("<h2>Estos son los divisores del numero: "+numero1);

for(var i=0; i<numero1; i++){
    if(numero1%i==0){
        document.write("<br>"+i);
    }
}