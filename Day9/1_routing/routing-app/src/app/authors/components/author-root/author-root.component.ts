import { Component } from '@angular/core';
import { AuthorsService } from '../../services/authors.service';

@Component({
  selector: 'author-root',
  templateUrl: './author-root.component.html',
  providers: [AuthorsService]
})
export class AuthorRootComponent {

}
