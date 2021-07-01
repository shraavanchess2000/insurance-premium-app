import { Component } from '@angular/core';
import { EmployeeInsuranceService } from '../services/employee-insurance.service';

import { Employee } from '../models/employee';

@Component({
  selector: 'app-view-employee-premiums',
  templateUrl: './view-employee-premiums.component.html'
})
export class ViewEmployeePremiumsComponent {
  public employee: Employee;
  public employeeId: string;
  public employeeNotFoundMessage: string;
  public loadingMessage: string;
  public netPay: number;
  public premiumsCost: number;

  constructor(private employeeInsuranceService: EmployeeInsuranceService) {
  }

  public onSubmit() {
    this.loadingMessage = "Loading...";

    this.employeeInsuranceService.getEmployee(this.employeeId).subscribe(result => {
      this.employee = result;

      if (!this.employee) {
        this.employeeNotFoundMessage = "Employee with given ID was not found.";
      }

      else {
        this.employeeNotFoundMessage = null;

        [this.premiumsCost, this.netPay] = this.employeeInsuranceService.calculatePremiumsForExistingEmployee(this.employee);
      }

      this.loadingMessage = null;
    })
  }
}
