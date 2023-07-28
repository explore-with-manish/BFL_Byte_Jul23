import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html'
})
export class RootComponent {
  flag: boolean = false;
  name: string = "";

  addName() {
    this.name = 'Angular';
  }

  removeName() {
    this.name = '';
  }
}
