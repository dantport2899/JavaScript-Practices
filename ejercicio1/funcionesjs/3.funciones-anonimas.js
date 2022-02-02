'use strict'

//Funciones anonimas

var pelicula = function(nombre){
    return "La pelicula es: "+nombre;
}

function sumame(numero1,numero2, sumaymuestra, sumapordos){
    var sumar = numero1 + numero2;
    sumaymuestra(sumar);
    sumapordos(sumar);

    return sumar;
}

//funcion de callback
sumame(5,7, function(dato){
    console.log("La suma es: ",dato);
},
function(dato){
    console.log("La suma es:", (dato*2));
});

//funcion flecha
sumame(4,8, dato=>{
    console.log("La suma es: ",dato);
},
dato=>{
    console.log("La suma es:", (dato*2));
});