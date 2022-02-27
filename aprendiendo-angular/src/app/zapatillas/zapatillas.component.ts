import { Component, OnInit} from "@angular/core";
import { Zapatilla } from "../models/zapatilla";
import { ZapatillaService } from "../services/zapatilla.service";

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',
    styleUrls: ['./zapatillas.component.css'],
    providers: [ZapatillaService]
})

export class ZapatillasComponent implements OnInit{
    public titulo: string = "Componente de zapatillas"
    public Zapatillas: Array<Zapatilla>=[];
    public marcas: String[] = [];
    public color: string;
    public mimarca: string = "Dantport";

    constructor(
        private _zapatillaService: ZapatillaService
    ){
        this.color = 'orange';
        
    }

    ngOnInit(): void {
        this.Zapatillas = this._zapatillaService.getZapatillas();

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