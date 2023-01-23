import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSideAterPayByEmployeeComponent } from './admin-side-ater-pay-by-employee.component';

describe('AdminSideAterPayByEmployeeComponent', () => {
  let component: AdminSideAterPayByEmployeeComponent;
  let fixture: ComponentFixture<AdminSideAterPayByEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSideAterPayByEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSideAterPayByEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
