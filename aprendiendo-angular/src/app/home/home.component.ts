import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';  //servicios para rutas con parametros

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public identificado: boolean=false;
  public nombre: string = "";
  public seguidores: number= 0;

  constructor(  private _router: Router) { }

  ngOnInit(): void {
    this.identificado = false;
  }

  ircursos(){
    this._router.navigate(['/cursos/'+this.nombre+'/'+this.seguidores]);
  }

  setIdentificado(){
    this.identificado = true;
  }

  unsetIdentificado(){
    this.identificado = false;
  }

}
