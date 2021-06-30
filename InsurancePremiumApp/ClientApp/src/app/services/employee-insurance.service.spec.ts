import { TestBed } from '@angular/core/testing';

import { EmployeeInsuranceService } from './employee-insurance.service';

describe('EmployeeInsuranceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeInsuranceService = TestBed.get(EmployeeInsuranceService);
    expect(service).toBeTruthy();
  });
});
