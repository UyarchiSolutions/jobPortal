import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeForgotPassVerifyComponent } from './employee-forgot-pass-verify.component';

describe('EmployeeForgotPassVerifyComponent', () => {
  let component: EmployeeForgotPassVerifyComponent;
  let fixture: ComponentFixture<EmployeeForgotPassVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeForgotPassVerifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeForgotPassVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
