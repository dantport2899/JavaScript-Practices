import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() anchura!: number;
  @Input() etiquetas!: boolean;


  constructor() { }

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
  }

}
