import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorRootComponent } from './components/author-root/author-root.component';
import { AuthorListComponent } from './components/author-list/author-list.component';
import { AuthorQuoteComponent } from './components/author-quote/author-quote.component';

@NgModule({
  declarations: [
    AuthorRootComponent,
    AuthorListComponent,
    AuthorQuoteComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AuthorRootComponent
  ]
})
export class AuthorsModule { }
