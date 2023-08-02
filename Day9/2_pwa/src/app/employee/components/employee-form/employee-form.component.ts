import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/employee/models/employee.model';

@Component({
  selector: 'employee-form',
  templateUrl: './employee-form.component.html',
  styles: [
  ]
})
export class EmployeeFormComponent implements OnChanges {
  @Input() employee?: Employee;
  @Output() onSave: EventEmitter<Employee>;

  employeeForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    // this.employeeForm = this.formBuilder.group({
    //   employeeID: '',
    //   name: '',
    //   designation: '',
    //   salary: ''
    // });

    this.employeeForm = this.formBuilder.group({
      employeeID: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      designation: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      salary: ['', [Validators.required, Validators.pattern(/^\d+$/)]]
    });

    this.onSave = new EventEmitter<Employee>();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['employee']) {
      this.employee = changes['employee'].currentValue;
      this.employeeForm.reset(changes['employee'].currentValue);
    }
  }

  onSubmit() {
    if (this.employeeForm.invalid) {
      this.employeeForm.markAllAsTouched();
      return;
    }

    const employee = this.formGroupToEmployee(this.employeeForm.value);
    this.onSave.emit(employee);
  }

  reset() {
    this.employeeForm.reset();
  }

  private formGroupToEmployee(formValue: any): Employee {
    const employee: Employee = {
      employeeID: formValue.employeeID,
      name: formValue.name,
      designation: formValue.designation,
      salary: formValue.salary
    };
    return employee;
  }
}
