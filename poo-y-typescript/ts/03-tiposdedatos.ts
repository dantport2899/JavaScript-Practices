// string y multiples tipos de datos

let cadena: string | number = "Dante Portales";

cadena = 12;

//datos personalizados
type letrasonumeros = string | number;

let id: letrasonumeros = 123414;
id = "hola";

//number
let numero: number= 12;

//boleano
let verdadero_falso: boolean = false;

//any
let cualquiera: any = "hola"

//arrays
var lenguajes: Array<string> = ["PHP","JS","CSS"];

let years: number[] = [12,13,14];

let todo: any[] = ["hola",22,"xd"];


//let vs var
var numero1 = 10;
var numero2 = 12;

if (numero1 ==10) {
    let numero1 = 44;
    var numero2 = 55;
    console.log(numero1,numero2);
}
console.log(numero1,numero2);

console.log(cadena);