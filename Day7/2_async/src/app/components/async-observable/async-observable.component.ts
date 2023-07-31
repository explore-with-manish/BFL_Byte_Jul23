import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, interval, map } from 'rxjs';

@Component({
  selector: 'async-observable',
  template: `
    <h2 class="text-info">Observable & Async Pipe</h2>
    <h2>Result: {{observableData}}</h2>
    <h2>Observable: {{observableInstance | async}} </h2>
  `
})
export class AsyncObservableComponent implements OnInit, OnDestroy {
  observableData?: number;
  sub?: Subscription;
  observableInstance?: Observable<number>;

  ngOnInit(): void {
    this.sub = this.getObservable().subscribe({
      next: (data) => {
        this.observableData = data;
      }
    });

    this.observableInstance = this.getObservable();
  }

  getObservable(): Observable<number> {
    return interval(2000).pipe(map(_ => Math.random()));
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
