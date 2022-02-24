import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Master de JS y angular';
  public mostrarvideojuegos: boolean = true;

  ocultarvideojuegos(value:boolean){
    this.mostrarvideojuegos = value;
  }
}
