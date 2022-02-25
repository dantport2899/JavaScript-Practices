import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';  //servicios para rutas con parametros

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  public nombre:string="";
  public followers:number=0;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ){ }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params)=>{
      this.nombre = params['nombre'];
      this.followers = +params['followers']; //colocar el mas para convertir a tipo numero

      if(this.nombre == null){
        this._router.navigate(['/home']);
      }
    });
  }

  redirigir(){
    this._router.navigate(['/zapatillas']);
  }

}
