'use strict'

//funciones
function consola(num1,num2){
    console.log("Suma: "+(num1+num2));
    console.log("Resta: "+(num1-num2));
    console.log("Multiplicacion: "+(num1*num2));
    console.log("Division: "+(num1/num2));
}

function pantalla(num1,num2){
    document.write("<br>Suma: "+(num1+num2));
    document.write("<br>Resta: "+(num1-num2));
    document.write("<br>Multiplicacion: "+(num1*num2));
    document.write("<br>Division: "+(num1/num2));
}

function calculadora(num1,num2, mostrar=false){
    //conjunto de instrucciones a ejecutar
    if(mostrar==false){
        consola(num1,num2);
    }else{
        pantalla(num1,num2);
    }
    //return "Hola esta es la calculadora"; regresa el resultado obtenido;
}

//invocar la funcion
calculadora(20,25, false);
calculadora(52,75, true);

/*
var resultado = calculadora(20,60);
console.log(resultado);
*/

/*
for(var i=1; i<=10; i++){
    console.log("**************"+i);
    calculadora(i,8);
}
*/