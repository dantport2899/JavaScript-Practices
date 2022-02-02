'use strict'

//parametros REST Y SPREAD

function listadofrutas(fruta1,fruta2,...resto_frutas){ //se guarda el resto de elementos no especificados en la funcion
    console.log("Fruta 1: ",fruta1);
    console.log("Fruta 2: ",fruta2);
    console.log(resto_frutas);
}

listadofrutas("Naranja","Manzana","Sandia","Pera","Melon","Coco");

var frutas = ["Naranja", "Manzana"];
listadofrutas(...frutas,"Sandia","Pera","Melon","Coco"); //incluyo los elementos de un array sin especificar los parametros de manera individual
