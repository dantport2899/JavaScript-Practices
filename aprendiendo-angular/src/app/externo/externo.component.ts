import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {

  public user:any;
  public userid:number=0;
  public fecha:any;

  constructor(
    private _peticionesService: PeticionesService
  ) { 
    this.userid=1
  }

  ngOnInit(): void {
    this.fecha = new Date();   //inidcar una fecha actual
    //this.fecha = new Date(2019,5,20); //indicar una fecha determinada
    this.cargausuario();
  }

  cargausuario(){
    this.user = false;
    this._peticionesService.getUser(this.userid).subscribe(
      result => {
        this.user = result.data;
      },
      error =>{
        console.log(<any>error);
      }
    );
  }

}
