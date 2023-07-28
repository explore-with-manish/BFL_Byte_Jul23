import { Component } from '@angular/core';

@Component({
  selector: 'app-assign-one',
  templateUrl: './assign-one.component.html'
})
export class AssignOneComponent {
  terms: string;

  constructor() {
    this.terms = "Terms of service are the legal agreements between a service provider and a person who wants to use that service. The person must agree to abide by the terms of service in order to use the offered service. Terms of service can also be merely a disclaimer, especially regarding the use of websites.";
  }
}
