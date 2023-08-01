import { Component, Inject, OnInit } from '@angular/core';
// import { authorList } from 'src/app/data/author-list-data';
import { Author } from 'src/app/models/author.interface';
import { AuthorsService } from 'src/app/services/authors.service';
import { NAuthorsService } from 'src/app/services/nauthors.service';
import { AUTHORS_TOKEN } from 'src/app/utilities/tokens/di-token';

@Component({
    selector: 'app-root',
    templateUrl: './root.component.html',
    styleUrls: ['./root.component.css'],
    providers: [
        // { provide: 'Authors', useValue: authorList }
        // { provide: AUTHORS_TOKEN, useValue: authorList }

        // { provide: AUTHORS_TOKEN, useExisting: 'Authors' }

        // { provide: AuthorsService, useClass: AuthorsService }
        // AuthorsService

        // NAuthorsService

        { provide: "ENV", useValue: "PROD" },
        {
            provide: AuthorsService, useFactory: (env: any) => {
                if (env === "DEV")
                    return new AuthorsService();
                else
                    return new NAuthorsService();
            }, deps: ['ENV']
        }
    ]
})
export class RootComponent implements OnInit {
    list?: Array<Author>;
    selectedAuthor?: Author;

    // constructor(@Inject('Authors') private authors: Array<Author>) { }
    // constructor(@Inject(AUTHORS_TOKEN) private authors: Array<Author>) { }

    // constructor(private authorsService: AuthorsService) { }

    // constructor(private authorsService: NAuthorsService) { }

    constructor(private authorsService: AuthorsService) { }

    ngOnInit() {
        // this.list = this.authors;
        this.list = this.authorsService.Authors;
    }

    selectAuthor(a: Author) {
        this.selectedAuthor = a;
    }

    isSelected(a: Author) {
        return this.selectedAuthor === a;
    }
}