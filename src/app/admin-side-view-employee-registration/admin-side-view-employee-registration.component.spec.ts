import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSideViewEmployeeRegistrationComponent } from './admin-side-view-employee-registration.component';

describe('AdminSideViewEmployeeRegistrationComponent', () => {
  let component: AdminSideViewEmployeeRegistrationComponent;
  let fixture: ComponentFixture<AdminSideViewEmployeeRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSideViewEmployeeRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSideViewEmployeeRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
