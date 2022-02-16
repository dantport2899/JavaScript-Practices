'use strict'

    var formulario = document.querySelector('#formulario');
    console.log("entra");
    
    formulario.addEventListener('submit', function(){
        console.log("entra");
        var titulo = document.querySelector('#addpelicula').value;

        if (titulo.lenght >= 1) {
            localStorage.setItem(titulo, titulo);
        }
    });