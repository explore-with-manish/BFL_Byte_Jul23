import { APP_BOOTSTRAP_LISTENER, ComponentRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RootComponent } from './components/root/root.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeTableComponent } from './components/employee-table/employee-table.component';
import { EmployeeRootComponent } from './components/employee-root/employee-root.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';

@NgModule({
  declarations: [
    RootComponent,
    EmployeeTableComponent,
    EmployeeRootComponent,
    EmployeeFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
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
