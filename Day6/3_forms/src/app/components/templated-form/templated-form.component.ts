import { Component } from '@angular/core';

@Component({
  selector: 'templated-form',
  templateUrl: './templated-form.component.html'
})
export class TemplatedFormComponent {
  logForm(frm: any) {
    if (frm.valid)
      console.log(frm.value);
    else
      console.error("Invalid Form...");
  }
}
