import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePremiumsComponent } from './employee-premiums.component';

describe('EmployeePremiumsComponent', () => {
  let component: EmployeePremiumsComponent;
  let fixture: ComponentFixture<EmployeePremiumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeePremiumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeePremiumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
