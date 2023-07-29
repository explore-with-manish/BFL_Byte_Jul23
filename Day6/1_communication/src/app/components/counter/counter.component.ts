import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  @Input() interval: number = 1;

  @Output()
  onMax: EventEmitter<boolean> = new EventEmitter<boolean>();

  count: number = 0;
  clickCount: number = 0;

  flag: boolean = false;

  manageClickCount() {
    this.clickCount++;
    if (this.clickCount > 9) {
      this.flag = true;
      this.onMax.emit(this.flag);
    }
  }

  increment() {
    this.count += this.interval;
    this.manageClickCount();
  }

  decrement() {
    this.count -= this.interval;
    this.manageClickCount()
  }

  reset() {
    this.count = 0;
    this.clickCount = 0;
    this.flag = false;
    this.onMax.emit(this.flag);
  }
}
