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

//otra dorma de recorrer un arreglo
for(let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje]+"</li>");
}

*/

lenguajes.forEach((lenguaje,indice) => {
    document.write("<li>"+indice+" - "+lenguaje+"</li>");
});    


//busquedas
var precios = [10,20,30,40,50];
var busqueda3 = precios.some(precio=> precio >= 20); //encontrar si existe un elementso mayor o igual a 20

console.log(busqueda3)

var busqueda2 = lenguajes.find(lenguaje=> lenguaje == "PHP"); //encontrar el elemento
var busqueda = lenguajes.findIndex(lenguaje=> lenguaje == "PHP");  //encontrar el indice


console.log(busqueda, busqueda2);