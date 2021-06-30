import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewPremiumsComponent } from './preview-premiums.component';

describe('PreviewPremiumsComponent', () => {
  let component: PreviewPremiumsComponent;
  let fixture: ComponentFixture<PreviewPremiumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewPremiumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewPremiumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
