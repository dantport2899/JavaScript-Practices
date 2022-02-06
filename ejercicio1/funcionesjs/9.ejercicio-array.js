'use strict'
var numeros = new Array();
var elemento = "";

for(var i=1; i<=6; i++){

    elemento = parseInt(prompt("Introduce el numero de la posicion "+i,0));

    while(isNaN(elemento)){
        elemento = parseInt(prompt("Introduce el numero de la posicion "+i,0));
    }
    numeros.push(elemento);
}

document.write("<h1>Array sin orden</h1>");
console.log("Array sin orden:")
mostrar(numeros);

numeros.sort(function(a,b){return a-b});

document.write("<h1>Array con orden</h1>");
console.log("Array con orden:")
mostrar(numeros);


numeros.reverse();
document.write("<h1>Array orden inverso</h1>");
console.log("Array orden inverso:")
mostrar(numeros);

document.write("<h3>El array cuenta con "+numeros.length+" elementos</h3>");

var busquedanom = parseInt(prompt("Introduce el numero a buscar",0));
var busqueda = numeros.findIndex(numero => numero == busquedanom);

console.log(busqueda);
if(busqueda && busqueda != -1){
    document.write("<h3>El numero "+busquedanom+" si existe en el arreglo, su posiscion es: "+busqueda+"</h3>");
}else{
    document.write("<h3>El numero "+busquedanom+" no existe en el arreglo</h3>");
}

function mostrar(numeros){
    numeros.forEach(numero => {
        document.write("<li>"+numero+"</li>");
        console.log(numero);
    });
}