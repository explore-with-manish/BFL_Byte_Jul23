import { Component } from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent {
  personList: Array<string>;
  selected: string = '';

  constructor() {
    this.personList = ['Manish', 'Ramesh', 'Suresh', 'Rajesh', 'Dinesh', 'Ganesh'];
  }

  select(person: string, e: Event) {
    this.selected = person;
    e.preventDefault();
  }
}
