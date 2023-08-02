import { APP_BOOTSTRAP_LISTENER, ComponentRef, NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RootComponent } from './components/root/root.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeModule } from './employee/employee.module';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    EmployeeModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
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
