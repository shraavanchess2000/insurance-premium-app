import { Component } from '@angular/core';
import { EmployeeInsuranceService } from '../services/employee-insurance.service';

@Component({
  selector: 'app-preview-premiums',
  templateUrl: './preview-premiums.component.html'
})
export class PreviewPremiumsComponent {
  public employeeName: string;
  public employeeNameInput: string;
  public loadingMessage: string;
  public netPay: number;
  public numberOfDependentsWithNamesStartingWithA: number;
  public numberOfOtherDependents: number;
  public premiumsCost: number;

  private grossAmountPerPaycheck: number = 2000;

  constructor(private employeeInsuranceService: EmployeeInsuranceService) {
  }

  public onSubmit() {
    this.loadingMessage = "Loading...";

    [this.premiumsCost, this.netPay] = this.employeeInsuranceService.calculatePremiumsForPotentialEmployee(this.employeeNameInput, this.numberOfDependentsWithNamesStartingWithA, this.numberOfOtherDependents, this.grossAmountPerPaycheck);

    this.employeeName = this.employeeNameInput;

    this.loadingMessage = null;
  }
}
