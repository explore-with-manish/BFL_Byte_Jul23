import { Component, Input } from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent {
  @Input() personList?: string[];
  selected: string = '';

  select(person: string, e: Event) {
    this.selected = person;
    e.preventDefault();
  }
}
