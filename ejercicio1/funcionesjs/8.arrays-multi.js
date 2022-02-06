'use strict'

var categorias = ['Accion','Terror','Comedia'];
var peliculas = ["La verdad duele", "La vida es bella", "Gran torino"];

peliculas.sort(); //ordena por orden alfabetico
peliculas.reverse(); // pone el array en orden inverso

var cine = [categorias, peliculas];

var elemento = "";

/* agregar elementos a un arreglo
do{
    elemento = prompt("Introduce tu pelicula");
    peliculas.push(elemento);
}while(elemento != "ACABAR");

peliculas.pop(); //elimina el ultimo elemento del array
*/
var indice = peliculas.indexOf('Gran torino'); //te indica el inidce del elemento señalado

if(indice > -1){
    peliculas.splice(indice,1); //BORRA EL UTLIMO ELEMENTO DESPUES DEL INDICE
}

var stringpeliculas = peliculas.join(); //JUNTA LOS ELEMENTOS ES UN STRING SEPARADO POR COMAS

var cadena = "texto,texto2,texto3";
var cadena_array = cadena.split(","); //junta la cadena en un array indicando la coma como su separador


console.log(cine);
console.log(stringpeliculas);