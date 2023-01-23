import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeMobileVerifyComponent } from './employee-mobile-verify.component';

describe('EmployeeMobileVerifyComponent', () => {
  let component: EmployeeMobileVerifyComponent;
  let fixture: ComponentFixture<EmployeeMobileVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeMobileVerifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeMobileVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
