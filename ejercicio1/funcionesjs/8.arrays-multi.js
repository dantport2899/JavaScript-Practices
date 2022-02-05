'use strict'

var categorias = ['Accion','Terror','Comedia'];
var peliculas = ["La verdad duele", "La vida es bella", "Gran torino"];

var cine = [categorias, peliculas];

var elemento = "";

do{
    elemento = prompt("Introduce tu pelicula");
    peliculas.push(elemento);
}while(elemento != "ACABAR");

peliculas.pop(); //elimina el ultimo elemento del array

var indice = peliculas.indexOf('Gran torino'); //te indica el inidce del elemento señalado
console.log(cine);