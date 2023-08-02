import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthorRootComponent } from './authors/components/author-root/author-root.component';
import { ProductsRootComponent } from './products/components/products-root/products-root.component';
import { ProductNotSelectedComponent } from './products/components/product-not-selected/product-not-selected.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'authors', component: AuthorRootComponent },
  { 
    path: 'products', 
    component: ProductsRootComponent, 
    children: [
      { path: '', component: ProductNotSelectedComponent },
      { path: ':id', component: ProductDetailsComponent },
    ]
  },
  { path: 'admin', component: AdminComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
