import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompOneComponent } from './components/comp-one/comp-one.component';
import { HelloComponent } from './components/hello/hello.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CompOneComponent,
    HelloComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CompOneComponent
  ]
})
export class MOneModule { }
