import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SCompComponent } from './components/s-comp/s-comp.component';

@NgModule({
  declarations: [
    SCompComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SCompComponent
  ]
})
export class SharedModule { }
