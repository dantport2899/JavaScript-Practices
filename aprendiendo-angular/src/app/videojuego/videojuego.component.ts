import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core'


@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
    
})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
    public titulo: string;
    public listado: string;

    constructor() {
        this.titulo = "Componente de Video juegos";
        this.listado = "Listado de los jeugos mas populares:";
        console.log("Se ha cargado el componente: Video juego")
    }

    ngOnInit(): void {
        console.log("Oninit ejecutado")
    }

    ngDoCheck(): void {
        console.log("Docheck ejecutado");
    }

    cambiartitulo(){
        this.titulo = "Nuevo titulo del componente";
    }

    ngOnDestroy(): void {
        console.log("On destroy ejecutado");    
    }
}