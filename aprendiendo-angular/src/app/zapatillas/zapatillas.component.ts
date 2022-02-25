import { Component, OnInit} from "@angular/core";
import { Zapatilla } from "../models/zapatilla";

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',
    styleUrls: ['./zapatillas.component.css']
})

export class ZapatillasComponent implements OnInit{
    public titulo: string = "Componente de zapatillas"
    public Zapatillas: Array<Zapatilla>;
    public marcas: String[] = [];
    public color: string;
    public mimarca: string = "Dantport";

    constructor(){
        this.color = 'orange';
        this.Zapatillas=[
            new Zapatilla('Nike MD','Nike','Verde',70,true),
            new Zapatilla('Reebok Clasic','Reebok','Blanca',80,true),
            new Zapatilla('Nike Runner MD','Nike','Negras',90,true),
            new Zapatilla('Reebok JJ','Reebok','Naranja',90,true),
            new Zapatilla('Adidas Yezzy','Adidas','Azul',100,false)
        ];
    }

    ngOnInit(): void {
        console.log(this.Zapatillas);
        this.getmarcas();
    }

    getmarcas(){
        this.Zapatillas.forEach((zapatilla,index)=>{
            if(this.marcas.indexOf(zapatilla.marca) < 0){   //si el elemento no existe lo registra
                this.marcas.push(zapatilla.marca);
            }
        });

        console.log(this.marcas);
    }

    getMarca(){
        alert(this.mimarca);
    }

    addMarca(){
        this.marcas.push(this.mimarca);
    }

    borrarmarca(index:number){
        // delete this.marcas[index];
        this.marcas.splice(index,1);
    }

    onBlur(){
        alert("Has salido del input");
    }

    mostrarpalabra(){
        alert(this.mimarca);
    }
}