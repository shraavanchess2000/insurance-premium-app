import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmployeePremiumsComponent } from './view-employee-premiums.component';

describe('ViewEmployeePremiumsComponent', () => {
  let component: ViewEmployeePremiumsComponent;
  let fixture: ComponentFixture<ViewEmployeePremiumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEmployeePremiumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEmployeePremiumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
