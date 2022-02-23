//interface
interface CamisetaBase{
    setColor(color:string):void;
    getColor():string;
}

//Decorador
function estampar(logo: string){
    return function(target: Function){
        target.prototype.estampacion = function():void{
            console.log("Camiseta estampada con el logo de: "+logo);
        }
    }
}


//Clase (molde del objeto)
@estampar('Gucci Gang')
//que se llame como el fichero y emepzar con mayuscula
// export class Camiseta{
class Camiseta implements CamisetaBase{
    [x: string]: any;

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

//herencia
//clase hija
class Sudadera extends Camiseta{
    public capucha:boolean;
    
    setCapucha(capucha:boolean){
        this.capucha = capucha;
    }

    getCapucha():boolean{
        return this.capucha;
    }
}

var camiseta = new Camiseta("Rojo","Manga Larga","Nike","L",14);
// camiseta.setColor("Rojo");
console.log(camiseta);
camiseta.estampacion();

// var playera = new Camiseta("Azul","Manga Corta","Adidas","M",10);
// playera.setColor("Azul");

var Sudadera_nike = new Sudadera("Rojo","Manga Larga","Nike","L",14);
Sudadera_nike.setCapucha(true);
Sudadera_nike.setColor("White");
console.log(Sudadera_nike)