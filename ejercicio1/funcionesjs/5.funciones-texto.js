'use strict'

//Transformacion de textos

var numero = 444;
var texto1 = "Bienvanido al curso de JavaScript de Dante Portales";
var texto2 = "esta bueno";

var dato = numero.toString();
    dato = texto1.toUpperCase(); //converitr a mayusculas
    dato = texto2.toLowerCase(); // convertir a minusculas

console.log(dato);


//Calcular longitud

var nombre = "Dante Portales";

console.log(nombre.length);


// concatenar - unir textos
//var textoTotal = texto1 + texto2;

var textoTotal = texto1.concat(""+texto2);

console.log(textoTotal);

//Metodos de Busqueda 
var Busqueda = texto1.indexOf("curso");
var Busqueda = texto1.match(/curso/g);  //genera arrelgo
var Busqueda = texto1.startsWith("curso"); //regresa true or false si la palabra existe al principio del string
var Busqueda = texto1.includes("curso"); //regresa true or false si el caracter existe en la cadena


//funciones de remplazo
var Busqueda = texto1.replace("curso","video"); //remplaza la palabra indicada por la de la derecha
var Busqueda = texto1.slice("14"); // corta el string y empieza a partir de el numero de caracter indicado
var Busqueda = texto1.split(" "); // mete toda la cadena dentro de un array separadas las palabras con el separador indicado
var Busqueda = texto1.trim(); //recorta los espacion que el string tiene por delante o por detras

console.log(Busqueda);