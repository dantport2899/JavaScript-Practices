import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
   
  }
  cargarSlider(){
    this.anchuratoSlider = this.widthSlider;
  }

  resetearSlider(){
    this.anchuratoSlider = 0;
  }

}
