import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeInsuranceService {
  private httpClient: HttpClient;
  private baseUrl: string;

  constructor(httpClient: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.httpClient = httpClient;
    this.baseUrl = baseUrl;
  }

  getEmployee(id: string): Observable<Employee> {
    return this.httpClient.get<Employee>(this.baseUrl + 'employee/' + id);
  }

  calculatePremiumsForExistingEmployee(employee: Employee): [number, number] {
    let premiumsCost: number;
    let employeeFullName: string = employee.firstName + employee.middleName + employee.lastName;

    if (employeeFullName.startsWith("A")) {
      premiumsCost = 1000 * 0.9;
    }

    else {
      premiumsCost = 1000;
    }

    for (let i = 0; i < employee.dependentsOnInsurance.length; i++) {
      let employeeDependentFullName = employee.dependentsOnInsurance[i].firstName + employee.dependentsOnInsurance[i].middleName + employee.dependentsOnInsurance[i].lastName;

      if (employeeDependentFullName.startsWith("A")) {
        premiumsCost = premiumsCost + 500 * 0.9;
      }

      else {
        premiumsCost = premiumsCost + 500;
      }
    }

    let netPay: number = employee.grossAmountPerPaycheck * 26 - premiumsCost;

    return [premiumsCost, netPay];
  }

  calculatePremiumsForPotentialEmployee(employeeName: string, numberOfDependentsWithNamesStartingWithA: number, numberOfOtherDependents: number, grossAmountPerPaycheck: number): [number, number] {
    let premiumsCost: number;

    if (employeeName.startsWith("A")) {
      premiumsCost = 1000 * 0.9;
    }

    else {
      premiumsCost = 1000;
    }

    premiumsCost = premiumsCost + (500 * 0.9) * numberOfDependentsWithNamesStartingWithA;

    premiumsCost = premiumsCost + 500 * numberOfOtherDependents;

    let netPay: number = grossAmountPerPaycheck * 26 - premiumsCost;

    return [premiumsCost, netPay];
  }
}
