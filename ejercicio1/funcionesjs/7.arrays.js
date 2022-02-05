'use strict'

//Arrays o arreglos

var nombre = "Dante Portales";
var nombres = ["Dante Portales","Edgar Portales", "Alex Portales", true];

var lenguajes = new Array("PHP","JAVASCRIPT","GO","C#");

/*
console.log(nombres, lenguajes);

var elemento = parseInt(prompt("¿Que elemento del array quieres?",0));

if(elemento >= nombres.length){
    alert("Introduce el numero correcto menor que: "+nombres.length);
}else{
    alert("El ususario seleccionado es: "+nombres[elemento]);
}
*/

document.write("<h1> Lenguajes de programacion del 2018: </h1>");

/*
for(var i=0; i<lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"</li>");
}

*/

lenguajes.forEach((lenguaje,indice) => {
    document.write("<li>"+indice+" - "+lenguaje+"</li>");
});    