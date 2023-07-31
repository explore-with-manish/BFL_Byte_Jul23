import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'validation-form',
  templateUrl: './validation-form.component.html'
})
export class ValidationFormComponent {
  regForm: FormGroup;

  countries = [
    { 'id': "", 'name': 'Select Country' },
    { 'id': 1, 'name': 'India' },
    { 'id': 2, 'name': 'USA' },
    { 'id': 3, 'name': 'UK' }
  ];

  minAge = 20;
  maxAge = 60;

  constructor(private formBuilder: FormBuilder) {
    this.regForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(6)
      ])],
      gender: ['', Validators.required],
      age: ['', [
        Validators.required,
      ]],
      address: this.formBuilder.group({
        country: ['', Validators.required],
        city: ['', Validators.required],
        zip: ['', Validators.required],
        fulladdress: ['', Validators.required],
      }),
      acceptTerms: ['', Validators.requiredTrue],
    });
  }

  logForm() {
    if (this.regForm.valid) {
      console.log(this.regForm.value);
    } else {
      this.regForm.markAllAsTouched();
      console.error("Please fill the form correctly.");
    }
  }

  resetForm() {
    this.regForm.reset();
  }

  get frm() { return this.regForm.controls; }
  get address() { return (this.regForm.controls['address'] as FormGroup).controls; }
}
