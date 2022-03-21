import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';  //importar decoradores input y output para importar y exportar datos

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() anchura!: number;
  @Input() etiquetas!: boolean;
  @Output() conseguirautor = new EventEmitter();

  public autor: any;

  constructor() { 
    this.autor ={
      nombre: "Dante Portales",
      web:"Dantport.com",
      youtube: "Danteport2899"
    }
  }

  ngOnInit(): void {
    $("#logo").click(function(e){
      e.preventDefault(); //previene la redireccion del enlace
      $("header").css("background","#00FFF3");
    });

    ($('.bxslider')as any).bxSlider({
      mode: 'fade',
      captions: this.etiquetas,
      slideWidth: this.anchura  
    });

    //lanzar evento
    this.conseguirautor.emit(this.autor);

  }

  lanzar(event:any){
    console.log(event);
    this.conseguirautor.emit(this.autor);
  }

}
