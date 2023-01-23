import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeForgotPassComponent } from './employee-forgot-pass.component';

describe('EmployeeForgotPassComponent', () => {
  let component: EmployeeForgotPassComponent;
  let fixture: ComponentFixture<EmployeeForgotPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeForgotPassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeForgotPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
