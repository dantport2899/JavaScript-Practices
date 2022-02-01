'use strict'
//uso de while

var year = 2022;

while(year <= 2051){
    console.log("Estamos en el año: "+year);
    year++;

    if(year == 2030){
        break;  // detiene la ejecucion del bucle
    }
}

//do while
var years = 20;

do{
    alert("Solo cuando es diferente a 20");
    years++;
}while(years > 25);