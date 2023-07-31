import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Employee } from 'src/app/models/employee.model';

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
    this.employeeForm = this.formBuilder.group({
      employeeID: '',
      name: '',
      designation: '',
      salary: ''
    });

    this.onSave = new EventEmitter<Employee>();
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['employee']) {
      this.employee = changes['employee'].currentValue;
      this.employeeForm.reset(changes['employee'].currentValue);
    }
  }

  onSubmit() {
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
