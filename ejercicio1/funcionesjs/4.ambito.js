'use strict'

var texto = "Hola mundo soy una variable global";
var numero = 12;

function holamundo(texto){
    var hola = "Hellow World";
    console.log(texto);
    console.log(numero);
}

holamundo(texto);