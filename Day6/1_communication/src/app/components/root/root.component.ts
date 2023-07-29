import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html'
})
export class RootComponent implements OnInit {
  pList: Array<string>;
  message: string = '';

  @ViewChild('c1', { static: true })
  counterOne?: CounterComponent;

  @ViewChild('c2', { static: true })
  counterTwo?: CounterComponent;

  @ViewChildren(CounterComponent)
  counters?: QueryList<CounterComponent>;

  constructor() {
    this.pList = ['Anuj', 'Dhivya', 'Gayatri', 'Lokesh', 'Pankaj', 'Rakesh', 'Shruthi', 'Vijay', 'Vishal'];
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  p2_reset(counter: CounterComponent) {
    counter.reset();
  }

  p3_reset() {
    this.counterOne?.reset();
    this.counterTwo?.reset();
  }

  reset_all() {
    this.counters?.forEach(counter => counter.reset());
  }

  updateMessage(flag: boolean) {
    if (flag)
      this.message = 'Max Click reached, please reset to continue';
    else
      this.message = '';
  }
}