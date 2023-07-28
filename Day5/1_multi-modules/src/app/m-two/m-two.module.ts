import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompTwoComponent } from './components/comp-two/comp-two.component';
import { HelloComponent } from './components/hello/hello.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CompTwoComponent,
    HelloComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CompTwoComponent
  ]
})
export class MTwoModule { }
