import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './components/root/root.component';
import { BsNavComponent } from './components/bs-nav/bs-nav.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthorsModule } from './authors/authors.module';
import { ProductsModule } from './products/products.module';
import { AdminComponent } from './components/admin/admin.component';
import { TokenInterceptor } from './services/interceptors/token.interceptor';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RootComponent,
    BsNavComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    AdminComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    AuthorsModule,
    ProductsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, multi: true, useClass: TokenInterceptor
    }
  ],
  bootstrap: [
    RootComponent
  ]
})
export class AppModule { }
