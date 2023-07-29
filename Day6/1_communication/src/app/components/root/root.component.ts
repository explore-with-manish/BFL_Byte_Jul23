import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html'
})
export class RootComponent {
  pList: Array<string>;

  constructor() {
    this.pList = ['Anuj', 'Dhivya', 'Gayatri', 'Lokesh', 'Pankaj', 'Rakesh', 'Shruthi', 'Vijay', 'Vishal'];
  }
}