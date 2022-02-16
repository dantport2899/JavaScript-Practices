'use strict'
var div_usuarios = document.querySelector('#usuarios');

fetch('https://reqres.in/api/users')
    .then(data => data.json())
    .then(users => {
        listadousuarios(users.data);
    });

function listadousuarios(usuarios){
    usuarios.map((user, i) => {
        let nombre = document.createElement('h3');

        nombre.innerHTML = i + " - " + user.first_name + " " + user.last_name;

        div_usuarios.appendChild(nombre);

        document.querySelector('.loading').style.display = 'none';
    });
}