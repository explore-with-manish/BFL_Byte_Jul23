// import { Component, OnDestroy, OnInit } from '@angular/core';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';

// import { Post } from 'src/app/models/post.model';
// import { Subscription } from 'rxjs';

// @Component({
//   selector: 'app-root',
//   templateUrl: './root.component.html',
//   styleUrls: ['./root.component.css']
// })
// export class RootComponent implements OnInit, OnDestroy {
//   url: string = 'https://jsonplaceholder.typicode.com/posts';
//   message: string = 'Loading Data, please wait...';

//   posts?: Array<Post>;
//   get_sub?: Subscription;

//   constructor(private httpClient: HttpClient) { }

//   ngOnInit() {
//     this.get_sub = this.httpClient.get<Array<Post>>(this.url).subscribe({
//       next: (data: Array<Post>) => {
//         this.posts = data;
//         this.message = '';
//       },
//       error: (error: HttpErrorResponse) => {
//         this.message = error.message;
//       }
//     });
//   }

//   ngOnDestroy(): void {
//     this.get_sub?.unsubscribe();
//   }
// }

// // ---------------------------------------

// import { Component, OnDestroy, OnInit } from '@angular/core';
// import { HttpErrorResponse } from '@angular/common/http';

// import { Post } from 'src/app/models/post.model';
// import { Subscription } from 'rxjs';
// import { PostService } from 'src/app/services/post.service';

// @Component({
//   selector: 'app-root',
//   templateUrl: './root.component.html',
//   styleUrls: ['./root.component.css'],
//   // providers: [PostService]
// })
// export class RootComponent implements OnInit, OnDestroy {
//   message: string = 'Loading Data, please wait...';

//   posts?: Array<Post>;
//   get_sub?: Subscription;

//   constructor(private postService: PostService) { }

//   ngOnInit() {
//     this.get_sub = this.postService.getAllPosts().subscribe({
//       next: (data: Array<Post>) => {
//         this.posts = data;
//         this.message = '';
//       },
//       error: (error: HttpErrorResponse) => {
//         this.message = error.message;
//       }
//     });
//   }

//   ngOnDestroy(): void {
//     this.get_sub?.unsubscribe();
//   }
// }

// ---------------------------------------

import { Component, OnDestroy, OnInit } from '@angular/core';

import { Post } from 'src/app/models/post.model';
import { Subscription } from 'rxjs';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit, OnDestroy {
  message: string = 'Loading Data, please wait...';

  posts?: Array<Post>;
  get_sub?: Subscription;
  del_sub?: Subscription;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.get_sub = this.postService.getAllPosts().subscribe({
      next: (data: Array<Post>) => {
        this.posts = data;
        this.message = '';
      },
      error: (error: string) => {
        this.message = error;
      }
    });
  }

  deletePost(id: number, e: Event) { 
    e.preventDefault();

    this.message = `Deleting a record with id: ${id}...`;

    this.del_sub = this.postService.deletePost(id).subscribe({
      next: () => {
        this.posts = this.posts?.filter(p => p.id !== id);
        this.message = `Record with id: ${id} was deleted successfully!`;
      
        setTimeout(()=>{
          this.message = '';
        }, 5000);
      },
      error: (error: string) => {
        this.message = error;
      }
    });
  }

  ngOnDestroy(): void {
    this.get_sub?.unsubscribe();
  }
}