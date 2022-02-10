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
var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");

var valor;
for(valor in todoslosdiv){
    if(typeof todoslosdiv[valor].textContent == 'string'){
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todoslosdiv[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
    }
    
}

seccion.append(hr);

//conseguir elementos por su clase

var divsrojos = document.getElementsByClassName('rojo');
var divsamarillos = document.getElementsByClassName('amarillo');

divsamarillos[0].style.background = 'yellow';

for(var div in divsrojos){
    if(divsrojos[div].className == 'rojo'){
        divsrojos[div].style.background = "red";
    }
}

//query selector

var id = document.querySelector("#encabezado");
console.log(id);

var claserojo = document.querySelector(".rojo");
console.log(claserojo);

var todosdiv = document.querySelector("div");
console.log(todosdiv);
