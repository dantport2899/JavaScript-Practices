'use strict'

//DOM - Document Object model

function cambiacolor(color){
    caja.style.background = color;
}

//conseguir elementos con un id concreto
var caja = document.getElementById("micaja");   //tomar el contenido del div

//queryselector
var caja = document.querySelector("#micaja");

caja.innerHTML = "¡Texto nuevo en la caja desde JS!";
caja.style.background = "red";
caja.style.color = "white";
caja.style.padding = "20px";
caja.style.margin = "auto";
caja.style.textAlign = "center";

caja.className = "hola"; //agragar una clase al elemento


//conseguir elementos por su  etiqueta
var todoslosdiv = document.getElementsByTagName('div');


//todoslosdiv.forEach((valor,indice) => {
var valor;
for(valor in todoslosdiv){
    var parrafo = document.createElement("p");
    var texto = document.createTextNode(todoslosdiv[valor].textContent);
    parrafo.appendChild(texto);
    document.querySelector("#miseccion").appendChild(parrafo);
}

//conseguir elementos por su clase
