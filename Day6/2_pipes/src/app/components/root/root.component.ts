import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html'
})
export class RootComponent {
  pList: Array<string>;
  name: string;
  num: number;
  person: { id: number, name: string, address: { city: string, pin: number } };
  today: Date;
  flag: boolean;

  constructor() {
    this.pList = ['Anuj', 'Dhivya', 'Gayatri', 'Lokesh', 'Pankaj', 'Rakesh', 'Shruthi', 'Vijay', 'Vishal'];
    this.name = 'manish sharma';
    this.num = Math.PI;
    this.person = { id: 1, name: "Manish", address: { city: "Pune", pin: 411021 } };
    this.today = new Date();
    this.flag = true;
  }

  get format() { return this.flag ? 'shortDate' : 'fullDate'; }

  updateFlag() {
    this.flag = !this.flag;
  }
}