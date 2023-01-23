import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEmployerPlanEmployeeViewComponent } from './manage-employer-plan-employee-view.component';

describe('ManageEmployerPlanEmployeeViewComponent', () => {
  let component: ManageEmployerPlanEmployeeViewComponent;
  let fixture: ComponentFixture<ManageEmployerPlanEmployeeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageEmployerPlanEmployeeViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageEmployerPlanEmployeeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
