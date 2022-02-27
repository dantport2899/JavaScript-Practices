import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Injectable()
export class ZapatillaService{
    public zapatillas: Array<Zapatilla>;
    constructor(){
        this.zapatillas=[
            new Zapatilla('Nike MD','Nike','Verde',70,true),
            new Zapatilla('Reebok Clasic','Reebok','Blanca',80,true),
            new Zapatilla('Nike Runner MD','Nike','Negras',90,true),
            new Zapatilla('Reebok JJ','Reebok','Naranja',90,true),
            new Zapatilla('Adidas Yezzy','Adidas','Azul',100,false)
        ];
    }
    getTexto(){
        return "Hola mundo desde un servicio";
    }

    getZapatillas(): Array<Zapatilla>{
        return this.zapatillas;
    }
}