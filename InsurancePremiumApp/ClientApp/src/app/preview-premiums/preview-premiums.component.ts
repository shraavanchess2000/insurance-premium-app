import { Component } from '@angular/core';
import { EmployeeInsuranceService } from '../services/employee-insurance.service';

@Component({
  selector: 'app-preview-premiums',
  templateUrl: './preview-premiums.component.html'
})
export class PreviewPremiumsComponent {
  public employee: Employee;
  public employeeNotFoundMessage: string;
  public loadingMessage: string;

  constructor(private employeeInsuranceService: EmployeeInsuranceService) {
  }

  ngOnInit() {
    this.loadingMessage = "Loading...";

    this.employeeInsuranceService.getEmployee("fc84ef57-562d-4073-a334-731b94662a3f").subscribe(result => {
      this.employee = result;

      if (!this.employee) {
        this.employeeNotFoundMessage = "Employee with given ID was not found.";
      }

      else {
        this.employeeNotFoundMessage = null;
      }

      this.loadingMessage = null;
    })
  }
}
