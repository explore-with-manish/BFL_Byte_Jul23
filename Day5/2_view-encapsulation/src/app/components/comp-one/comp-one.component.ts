// // 1. Element Inline Style
// import { Component } from '@angular/core';

// @Component({
//   selector: 'comp-one',
//   template: `
//     <h1 class="text-success">Hello from Component One</h1>
//     <h2 style="border-style: solid; border-width: 2px; border-color: green;">From Component One</h2>
//   `
// })
// export class CompOneComponent { }

// // 2. Template Style
// import { Component, ViewEncapsulation } from '@angular/core';

// @Component({
//   selector: 'comp-one',
//   template: `
//     <style>
//         .card {
//             border-style: solid;
//             border-width: 2px;
//             border-color: green;
//         }
//     </style>
//     <h1 class="text-success">Hello from Component One</h1>
//     <h2 class="card">From Component One</h2>
//   `,
//   encapsulation: ViewEncapsulation.ShadowDom
// })
// export class CompOneComponent { }

// // 3. Component Style
// import { Component } from '@angular/core';

// @Component({
//   selector: 'comp-one',
//   template: `
//     <h1 class="text-success">Hello from Component One</h1>
//     <h2 class="card">From Component One</h2>
//   `,
//   styles: [`
//     .card {
//         border-style: solid;
//         border-width: 2px;
//         border-color: green;
//     }
//   `]
// })
// export class CompOneComponent { }

// 4. External CSS
import { Component } from '@angular/core';

@Component({
  selector: 'comp-one',
  template: `
    <h1 class="text-success">Hello from Component One</h1>
    <h2 class="card">From Component One</h2>
  `,
  styleUrls: ['./comp-one.component.css']
})
export class CompOneComponent { }
