import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-premiums',
  templateUrl: './employee-premiums.component.html'
})
export class EmployeePremiumsComponent {
  public employee: Employee;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Employee>(baseUrl + 'employee/fc84ef57-562d-4073-a334-731b94662a3f').subscribe(result => {
      this.employee = result;
    }, error => console.error(error));
  }
}

interface Employee extends Person{
  grossAmountPerPaycheck: number;
  dependentsOnInsurance: Person[];
}

interface Person {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
}
