import { APP_BOOTSTRAP_LISTENER, ComponentRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RootComponent } from './components/root/root.component';
import { FormsModule } from '@angular/forms';
import { AssignOneComponent } from './components/assign-one/assign-one.component';
import { AssignTwoComponent } from './components/assign-two/assign-two.component';

@NgModule({
  declarations: [
    RootComponent,
    AssignOneComponent,
    AssignTwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    {
      provide: APP_BOOTSTRAP_LISTENER,
      multi: true,
      useFactory: () => {
        return (component: ComponentRef<any>) => {
          console.log(component);
        };
      }
    }
  ],
  bootstrap: [
    RootComponent
  ]
})
export class AppModule { }
