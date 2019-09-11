import { Component } from '@angular/core';

// decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = 'Ivy';

  constructor() {
    this.changeName('Sam');
  }

// void means it doesnt return things 
  changeName(name:string):void {
    this.name = name;
  }
}
