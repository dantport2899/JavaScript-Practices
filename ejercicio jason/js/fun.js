'use strict'

//json - javascript object notation
var pelicula = {
    titulo: 'Batman vs Superman',
    year: 2017,
    pais: 'Estados Unidos'
};

var peliculas =[
    {
        titulo: 'Jurassic Park Dominion',
        year: 2022,
        pais: 'Estados unicos'
    },pelicula
]

window.addEventListener('load',function(){
    var caja_peliculas = document.querySelector('#peliculas');
    peliculas.forEach(pelicula => {
        var p = document.createElement("p");
        p.append(pelicula.titulo+" - "+pelicula.year);
        caja_peliculas.append(p);
    });
});