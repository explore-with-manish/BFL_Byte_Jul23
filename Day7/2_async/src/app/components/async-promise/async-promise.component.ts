import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'async-promise',
  template: `
    <h2 class="text-info">Promise & Async Pipe</h2>
    <h2>Result: {{promiseData}}</h2>
    <h2>Promise: {{promiseInstance  | async}}</h2>
  `
})
export class AsyncPromiseComponent implements OnInit {
  promiseData?: number;
  promiseInstance?: Promise<number>;

  ngOnInit(): void {
    this.getPromise().then(data => {
      this.promiseData = data;
    });

    this.promiseInstance = this.getPromise();
  }

  getPromise(): Promise<number> {
    return new Promise((resolve, reject) => {
      setInterval(function () {
        resolve(Math.random());
      }, 2000);
    });
  }
}
