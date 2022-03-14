import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $("#logo").click(function(e){
      e.preventDefault(); //previene la redireccion del enlace
      $("header").css("background","#00FFF3");
    });

    ($('.bxslider')as any).bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 600  
    });
  }

}
