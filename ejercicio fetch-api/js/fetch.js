'use strict'
var div_usuarios = document.querySelector('#usuarios');
var div_janet = document.querySelector('#janet');
var div_profesor = document.querySelector('#profesor');

getUsuarios().then(data => data.json())
    .then(users => {
        listadousuarios(users.data);
        return getInfo();
    })
    .then(data => {
        div_profesor.innerHTML = data;
        return getJanet();
    })
    .then(data => data.json())
    .then(user =>{
        mostrarjanet(user.data);
    })
    .catch(error => {
        console.log(error+"ffff");  //conocer cual es el problema
        alert(error+"Error en las peticiones");
    });

function getUsuarios(){
    return fetch('https://reqres.in/api/users');
}

function getJanet(){
    return fetch('https://reqres.in/api/users/2');
}

function getInfo(){    //crear una nueva promesa
    var profesor = {
        nombre: 'Dante',
        apellido: 'Portales',
        url: 'www.dantport.com'
    };

    return new Promise((resolve, reject) =>{
        var profesor_string = "";

        setTimeout(function(){
            profesor_string = JSON.stringify(profesor); 
            if(typeof profesor_string != 'string' || profesor_string == '') return reject('error');
            return resolve(profesor_string);

        }, 3000);
        
    });
    

}

function listadousuarios(usuarios){
    usuarios.map((user, i) => {
        let nombre = document.createElement('h3');

        nombre.innerHTML = i + " - " + user.first_name + " " + user.last_name;

        div_usuarios.appendChild(nombre);

        document.querySelector('#usuarios .loading').style.display = 'none';
    });
}

function mostrarjanet(user){
        let nombre = document.createElement('h4');
        let avatar = document.createElement('img');

        nombre.innerHTML =  user.first_name + " " + user.last_name;
        avatar.src = user.avatar;
        avatar.width = '100';

        div_janet.appendChild(nombre);
        div_janet.appendChild(avatar);

        document.querySelector('#janet .loading').style.display = 'none';
}