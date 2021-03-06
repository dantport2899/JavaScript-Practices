'use strict'

window.addEventListener('load',function(){
    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector('#mostrar');
    box_dashed.style.display = 'none';

    formulario.addEventListener('submit', function(){
        console.log("Evento submit capturado");

        var nombre = document.querySelector("#nombre").value;
        var apellido = document.querySelector("#apellidos").value;
        var edad = document.querySelector("#edad").value;

        if (nombre.trim() == null || nombre.trim().lenght == 0) {
            alert('El nombre no es valido');
            return false;
        }
        if (apellido.trim() == null || apellido.trim().lenght == 0) {
            alert('El apellido no es valido');
            return false;
        } 
        if (edad.trim() == null || edad <= 0 || isNaN(edad)) {
            alert('La edad no es valida');
            return false;
        }        

        box_dashed.style.display = 'block';

        /*
        var datos = [nombre,apellido,edad];

        datos.forEach(dato => {
            var parrafo = document.createElement('p');
            parrafo.append(dato);
            box_dashed.append(parrafo);
        });
        */

        var p_nombre = document.querySelector('#p_nombre span');
        var p_apellido = document.querySelector('#p_apellido span');
        var p_edad = document.querySelector('#p_edad span');

        p_nombre.innerHTML = nombre;
        p_apellido.innerHTML = apellido;
        p_edad.innerHTML = edad;
    });
});