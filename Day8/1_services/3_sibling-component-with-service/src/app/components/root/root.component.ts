import { Component } from '@angular/core';
import { AuthorsService } from 'src/app/services/authors.service';

@Component({
    selector: 'app-root',
    templateUrl: './root.component.html',
    styleUrls: ['./root.component.css'],
    providers: [AuthorsService]
})
export class RootComponent { }