import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'Calculadora'
})
export class Calculadora implements PipeTransform{
    //dato | calculadora: otro dato
    transform(value: any,value_two: any) {
        let operaciones = `
            Suma: ${ value + value_two} - 
            Resta: ${ value - value_two} - 
            Multiplicación: ${ value * value_two} - 
            División: ${ value / value_two}
        `;

        return operaciones;
    }
}