import { Component, OnInit, ViewChild } from '@angular/core';  //importar view child para leer los componetnes
import * as $ from "jquery";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public widthSlider: number = 300;
  public anchuratoSlider!: any;
  public captions: boolean=false;
  public autor: any;

@ViewChild('textos', {static: true}) textos: any;

  constructor() { }

  ngOnInit(): void {
   console.log(this.textos.nativeElement.textContent);
  }
  cargarSlider(){
    this.anchuratoSlider = this.widthSlider;
  }

  resetearSlider(){
    this.anchuratoSlider = 0;
  }

  getAutor(event:any){  
    this.autor = event;
  }

}
