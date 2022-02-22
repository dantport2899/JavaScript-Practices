"use strict";
//Clase (molde del objeto)
//que se llame como el fichero y emepzar con mayuscula
class Camiseta {
    //metodos (funciones o acciones del objeto)
    constructor(color, modelo, marca, talla, precio) {
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.talla = talla;
        this.precio = precio;
    }
    setColor(color) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }
}
var camiseta = new Camiseta("Rojo", "Manga Larga", "Nike", "L", 14);
camiseta.setColor("Rojo");
var playera = new Camiseta("Azul", "Manga Corta", "Adidas", "M", 10);
playera.setColor("Azul");
console.log(camiseta, playera.getColor());
