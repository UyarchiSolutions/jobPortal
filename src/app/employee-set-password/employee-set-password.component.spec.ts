import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSetPasswordComponent } from './employee-set-password.component';

describe('EmployeeSetPasswordComponent', () => {
  let component: EmployeeSetPasswordComponent;
  let fixture: ComponentFixture<EmployeeSetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeSetPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeSetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
