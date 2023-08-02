import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from 'src/app/employee/models/employee.model';

@Component({
  selector: 'employee-table',
  templateUrl: './employee-table.component.html',
  styles: [
  ]
})
export class EmployeeTableComponent {
  @Input() employees?: Array<Employee>;
  @Output() onSelect: EventEmitter<{ details: boolean, edit: boolean, employee: Employee }>;
  @Output() onRemove: EventEmitter<number>;

  constructor() {
    this.onSelect = new EventEmitter<{ details: boolean, edit: boolean, employee: Employee }>();
    this.onRemove = new EventEmitter<number>();
  }

  showMessage(id: number) {
    if (window.confirm("Are you sure you want to delete this employee?"))
      this.onRemove.emit(id);
  }
}
