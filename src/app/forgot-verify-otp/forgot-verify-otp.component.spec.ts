import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotVerifyOtpComponent } from './forgot-verify-otp.component';

describe('ForgotVerifyOtpComponent', () => {
  let component: ForgotVerifyOtpComponent;
  let fixture: ComponentFixture<ForgotVerifyOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotVerifyOtpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotVerifyOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
