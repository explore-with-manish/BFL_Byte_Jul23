import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyOneComponent } from './components/lazy-one/lazy-one.component';
import { LazyTwoComponent } from './components/lazy-two/lazy-two.component';
import { LazyRoutingModule } from './lazy-routing.module';

@NgModule({
  declarations: [
    LazyOneComponent,
    LazyTwoComponent
  ],
  imports: [
    CommonModule,
    LazyRoutingModule
  ]
})
export class LazyModule { }
