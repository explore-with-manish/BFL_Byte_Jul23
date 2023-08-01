import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './components/root/root.component';
import { BsNavComponent } from './components/bs-nav/bs-nav.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthorsModule } from './authors/authors.module';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [
    RootComponent,
    BsNavComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthorsModule,
    ProductsModule
  ],
  providers: [],
  bootstrap: [
    RootComponent
  ]
})
export class AppModule { }
