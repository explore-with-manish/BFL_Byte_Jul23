import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html'
})
export class ReactiveFormComponent {
  regForm: FormGroup;

  constructor(private frmBuilder: FormBuilder) {
    this.regForm = this.frmBuilder.group({
      firstname: '',
      lastname: '',
      address: this.frmBuilder.group({
        city: '',
        zip: ''
      })
    });
  }

  logForm() {
    console.log(this.regForm.value);
  }

  resetForm() { 
    this.regForm.reset();
  }

  setForm() { 
    this.regForm.setValue({
      firstname: 'John',
      lastname: 'Doe',
      address: {
        city: 'New York',
        zip: '10001'
      }
    });
  }

  patchForm() { 
    this.regForm.patchValue({
      firstname: 'John',
      lastname: 'Doe'
    });
  }
}
