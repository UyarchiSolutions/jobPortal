import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeVerifyOTPComponent } from './employee-verify-otp.component';

describe('EmployeeVerifyOTPComponent', () => {
  let component: EmployeeVerifyOTPComponent;
  let fixture: ComponentFixture<EmployeeVerifyOTPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeVerifyOTPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeVerifyOTPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
