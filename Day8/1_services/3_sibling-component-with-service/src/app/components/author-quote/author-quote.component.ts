import { Component } from '@angular/core';
import { Author } from 'src/app/models/author.interface';
import { AuthorsService } from 'src/app/services/authors.service';

@Component({
  selector: 'author-quote',
  templateUrl: './author-quote.component.html',
  styleUrls: ['./author-quote.component.css']
})
export class AuthorQuoteComponent {
  selectedAuthor?: Author;

  constructor(private authorsService: AuthorsService) { }

  getQuote() {
    this.selectedAuthor = this.authorsService.SelectedAuthor;
  }
}
