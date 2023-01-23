import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeViewPlanDetailsByAdminComponent } from './employee-view-plan-details-by-admin.component';

describe('EmployeeViewPlanDetailsByAdminComponent', () => {
  let component: EmployeeViewPlanDetailsByAdminComponent;
  let fixture: ComponentFixture<EmployeeViewPlanDetailsByAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeViewPlanDetailsByAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeViewPlanDetailsByAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
