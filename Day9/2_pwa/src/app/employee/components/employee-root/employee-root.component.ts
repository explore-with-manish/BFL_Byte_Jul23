import { Component } from '@angular/core';
import { Employee } from 'src/app/employee/models/employee.model';

@Component({
  selector: 'employee-root',
  templateUrl: './employee-root.component.html',
  styles: [
  ]
})
export class EmployeeRootComponent {
  employeeList: Array<Employee> = [];
  employee: Employee = { employeeID: 1, name: "", designation: "", salary: 0 };
  edit: boolean = false;
  details: boolean = false;

  saveEmployee(employee: Employee) {
    if (this.edit) {
      var temp_employees = [...this.employeeList];
      var itemIndex  = temp_employees.findIndex(item => item.employeeID == employee.employeeID);
      temp_employees.splice(itemIndex, 1, employee);
      this.employeeList = [...temp_employees];
      this.refreshEmployee();
    } else if (this.details) {
      this.refreshEmployee();
      return;
    } else {
      this.employeeList = [...this.employeeList, { ...employee }];
      this.refreshEmployee();
    }
  }

  selectEmployee(args: { details: boolean, edit: boolean, employee: Employee }) {
    this.details = args.details;
    this.edit = args.edit;
    this.employee = { ...args.employee };
  }

  removeEmployee(id: number) {
    this.employeeList = [...this.employeeList.filter(employee => employee.employeeID !== id)];
    this.refreshEmployee();
  }

  private refreshEmployee() {
    this.employee = { employeeID: this.getNextId(this.employeeList), name: "", designation: "", salary: 0 };
  }

  private getNextId(employees: Employee[]) {
    return employees.length ? employees[employees.length - 1].employeeID + 1 : 1;
  }
}
