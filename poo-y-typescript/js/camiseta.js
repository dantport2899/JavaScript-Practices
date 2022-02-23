"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Decorador
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log("Camiseta estampada con el logo de: " + logo);
        };
    };
}
//Clase (molde del objeto)
let Camiseta = 
//que se llame como el fichero y emepzar con mayuscula
// export class Camiseta{
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
};
Camiseta = __decorate([
    estampar('Gucci Gang')
    //que se llame como el fichero y emepzar con mayuscula
    // export class Camiseta{
], Camiseta);
//herencia
//clase hija
class Sudadera extends Camiseta {
    setCapucha(capucha) {
        this.capucha = capucha;
    }
    getCapucha() {
        return this.capucha;
    }
}
var camiseta = new Camiseta("Rojo", "Manga Larga", "Nike", "L", 14);
// camiseta.setColor("Rojo");
console.log(camiseta);
camiseta.estampacion();
// var playera = new Camiseta("Azul","Manga Corta","Adidas","M",10);
// playera.setColor("Azul");
var Sudadera_nike = new Sudadera("Rojo", "Manga Larga", "Nike", "L", 14);
Sudadera_nike.setCapucha(true);
Sudadera_nike.setColor("White");
console.log(Sudadera_nike);
