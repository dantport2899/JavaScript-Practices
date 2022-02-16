'use strict'
//local storage
    //comprobar disponibilidad del local storage
    if (typeof(Storage) != 'undefined') {
        console.log("Local Storage disponible");
    } else {
        console.log("Incompatible con Local Storage");
    }

    //Guardar datos
    localStorage.setItem("titulo","Practica de local storage de Dante Portales");

    //recuperar elemento
    console.log(localStorage.getItem("titulo"));
    document.querySelector("#local").innerHTML = localStorage.getItem("titulo");

    //guardar objetos
    var usuario = {
        nombre: "Dante Portales",
        email: "dantport@gamil.com",
        web: "dantport.com"
    };

    localStorage.setItem("usuario", JSON.stringify(usuario));  //es necesario tranformar el JSON en string

    //RECUPERAR OBJETO 
    var user = JSON.parse(localStorage.getItem("usuario")); //transformar el string a JSON
    
    var divdatos = document.querySelector("#datos");
    var p = document.createElement("p");
    p.append(user.email);
    p.append(" / "+user.web);
    divdatos.append(p);
    
    console.log(user.email);

    //borrar un elemento del local storage
    localStorage.removeItem('usuario');

    //borrar todo el local storage
    localStorage.clear();
