import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html'
})
export class RootComponent {
  message: string;
  flag: boolean;
  h: number;
  w: number;

  constructor() {
    this.message = "Hello World!";
    this.flag = false;
    this.h = 300;
    this.w = 300;
  }

  doChange() {
    this.message = new Date().toLocaleTimeString();
  }

  anchorClick1() {
    this.message = new Date().toLocaleTimeString();
  }

  anchorClick2(e: Event) {
    this.message = new Date().toLocaleTimeString();
    e.preventDefault();
  }
}
