import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(public el: ElementRef) {
    
  }

  ngOnInit(){
    var element = this.el.nativeElement.style.color = "blue";
    this.el.nativeElement.style.background = "gray";
    this.el.nativeElement.style.padding = "20px";
    this.el.nativeElement.style.margintop = "15px";
  }

}
