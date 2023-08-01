import { APP_BOOTSTRAP_LISTENER, ComponentRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RootComponent } from './components/root/root.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthorListComponent } from './components/author-list/author-list.component';
import { AuthorQuoteComponent } from './components/author-quote/author-quote.component';

@NgModule({
  declarations: [
    RootComponent,
    AuthorListComponent,
    AuthorQuoteComponent
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
