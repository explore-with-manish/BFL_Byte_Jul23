import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <div class="container-fluid text-center">
      <h1 class="red">Hello World!</h1>
      <h1 class="text-primary">Hello World!</h1>
      <h1 class="text-success">Hello World!</h1>
      <h1 class="text-secondary">Hello World!</h1>
      <h1 class="text-warning">Hello World!</h1>
      <h1 class="text-success">
        Home : <span class="bi bi-house"></span>
        Activity : <span class="bi bi-activity"></span>
        Car : <span class="bi bi-car-front"></span>
      </h1>
      <h1 class="text-info">
        Home : <span class="bi bi-house"></span>
        Activity : <span class="bi bi-activity"></span>
        Car : <span class="bi bi-car-front"></span>
      </h1>
    </div>
  `
})
export class HelloComponent {

}
