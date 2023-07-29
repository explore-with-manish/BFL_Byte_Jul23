import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-details',
  templateUrl: './details.component.html',
  styles: [
  ]
})
export class DetailsComponent {
  @Input() item: string = '';
}
