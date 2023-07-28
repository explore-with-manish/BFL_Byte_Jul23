// // 1. Element Inline Style
// import { Component } from '@angular/core';

// @Component({
//   selector: 'comp-two',
//   template: `
//     <h1 class="text-primary">Hello from Component Two</h1>
//     <h2 style="border-style: dashed; border-width: 2px; border-color: blue;">From Component Two</h2>
//   `
// })
// export class CompTwoComponent { }

// // 2. Template Style
// import { Component, ViewEncapsulation } from '@angular/core';

// @Component({
//   selector: 'comp-two',
//   template: `
//     <style>
//       .card {
//         border-style: dashed;
//         border-width: 2px;
//         border-color: blue;
//       }
//     </style>
//     <h1 class="text-primary">Hello from Component Two</h1>
//     <h2 class="card">From Component Two</h2>
//   `,
//   encapsulation: ViewEncapsulation.ShadowDom
// })
// export class CompTwoComponent { }

// 3. Component Style
// import { Component } from '@angular/core';

// @Component({
//   selector: 'comp-two',
//   template: `
//     <h1 class="text-primary">Hello from Component Two</h1>
//     <h2 class="card">From Component Two</h2>
//   `,
//   styles: [`
//     .card {
//         border-style: dashed;
//         border-width: 2px;
//         border-color: blue;
//       }
//   `]
// })
// export class CompTwoComponent { }

// 4. External CSS
import { Component } from '@angular/core';

@Component({
  selector: 'comp-two',
  template: `
    <h1 class="text-primary">Hello from Component Two</h1>
    <h2 class="card">From Component Two</h2>
  `,
  styleUrls: ['./comp-two.component.css']
})
export class CompTwoComponent { }