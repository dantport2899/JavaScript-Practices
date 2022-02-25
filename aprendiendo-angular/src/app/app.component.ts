import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Master de JS y angular';
  public descripcion: string;
  public config;
  public mostrarvideojuegos: boolean = true;

  constructor(){
    this.config = Configuracion;
    this.title = Configuracion.titulo;
    this.descripcion = Configuracion.descripcion;
  }

  ocultarvideojuegos(value:boolean){
    this.mostrarvideojuegos = value;
  }
}
