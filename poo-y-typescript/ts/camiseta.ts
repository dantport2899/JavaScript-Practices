//Clase (molde del objeto)
//que se llame como el fichero y emepzar con mayuscula
class Camiseta{
    //propiedades (caracteristicas del objeto)
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;

    //metodos (funciones o acciones del objeto)
    constructor(color:string,modelo:string,marca:string,talla:string,precio:number){
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.talla = talla;
        this.precio = precio;
    }

    public setColor(color: string){
        this.color = color;
    }

    public getColor(){
        return this.color;
    }
} 

var camiseta = new Camiseta("Rojo","Manga Larga","Nike","L",14);
camiseta.setColor("Rojo");

var playera = new Camiseta("Azul","Manga Corta","Adidas","M",10);
playera.setColor("Azul");

console.log(camiseta,playera.getColor());