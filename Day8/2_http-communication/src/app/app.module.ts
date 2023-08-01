import { APP_BOOTSTRAP_LISTENER, ComponentRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RootComponent } from './components/root/root.component';

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
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
