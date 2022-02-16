'use strict'
/*
    var formulario = document.querySelector('#form-peliculas');
    
    formulario.addEventListener('submit', function(){
        console.log("entra");
        var titulo = document.querySelector('#addpelicula').value;

        if (titulo.lenght >= 1) {
            localStorage.setItem(titulo, titulo);
        }
    });

*/

var formulario = document.querySelector('#formulario');
 
formulario.addEventListener('submit', function(){
    var titulo = document.querySelector('#addpelicula').value;
 
    if( titulo.length >= 1)
    {
        localStorage.setItem(titulo, titulo);
    }
});

var formborrar = document.querySelector('#borrar');
 
formborrar.addEventListener('submit', function(){
    var titulo = document.querySelector('#borrarpelicula').value;
 
    if( titulo.length >= 1)
    {
        localStorage.removeItem(titulo);
    }
});

var ul = document.querySelector('#list');
var indice
for( indice in localStorage ){
    if(typeof localStorage[indice] == 'string'){
        var li = document.createElement('li');
        li.append(localStorage[indice]);
        ul.append(li);
    }
}