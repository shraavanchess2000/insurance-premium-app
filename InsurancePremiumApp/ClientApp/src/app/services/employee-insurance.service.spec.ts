import { TestBed } from '@angular/core/testing';

import { Employee } from '../models/employee';
import { EmployeeInsuranceService } from './employee-insurance.service';

describe('EmployeeInsuranceService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: EmployeeInsuranceService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new EmployeeInsuranceService(httpClientSpy as any, "");
  });

  it('should return correct values when calculatePremiumsForPotentialEmployee is called with parameters: "Aaron", 3, 1, 2000', () => {
    let expectedPremiumsCost: number = 2750;
    let expectedNetPay: number = 49250;

    let actualPremiumsCost: number;
    let actualNetPay: number;

    [actualPremiumsCost, actualNetPay] = service.calculatePremiumsForPotentialEmployee("Aaron", 3, 1, 2000);

    expect(actualPremiumsCost).toEqual(expectedPremiumsCost);
    expect(actualNetPay).toEqual(expectedNetPay);
  });

  it('should return correct values when calculatePremiumsForPotentialEmployee is called with parameters: "Jamie", 1, 3, 2000', () => {
    let expectedPremiumsCost: number = 2950;
    let expectedNetPay: number = 49050;

    let actualPremiumsCost: number;
    let actualNetPay: number;

    [actualPremiumsCost, actualNetPay] = service.calculatePremiumsForPotentialEmployee("Jamie", 1, 3, 2000);

    expect(actualPremiumsCost).toEqual(expectedPremiumsCost);
    expect(actualNetPay).toEqual(expectedNetPay);
  });

  it('should return correct values when calculatePremiumsForExistingEmployee is called with a certain employee parameter', () => {
    let expectedPremiumsCost: number = 1950;
    let expectedNetPay: number = 50050;

    let actualPremiumsCost: number;
    let actualNetPay: number;

    let employee: Employee = {
      id: "fc84ef57-562d-4073-a334-731b94662a3f",
      firstName: "Joe",
      middleName: "Mo",
      lastName: "Schmo",
      grossAmountPerPaycheck: 2000,
      dependentsOnInsurance: [
        {
          id: "aa5c3a0d-7a0e-4ad8-b6b4-0859ac45d2ec",
          firstName: "Joey",
          middleName: "Child",
          lastName: "Schmo"
        },
        {
          id: "bdf3dcc1-71f2-49e2-9875-27eabbffedf4",
          firstName: "Anne",
          middleName: "Spouse",
          lastName: "Schmo"
        }
      ]
    };

    [actualPremiumsCost, actualNetPay] = service.calculatePremiumsForExistingEmployee(employee);

    expect(actualPremiumsCost).toEqual(expectedPremiumsCost);
    expect(actualNetPay).toEqual(expectedNetPay);
  });
});
