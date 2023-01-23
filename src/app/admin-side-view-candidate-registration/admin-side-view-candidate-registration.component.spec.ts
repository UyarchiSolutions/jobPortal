import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSideViewCandidateRegistrationComponent } from './admin-side-view-candidate-registration.component';

describe('AdminSideViewCandidateRegistrationComponent', () => {
  let component: AdminSideViewCandidateRegistrationComponent;
  let fixture: ComponentFixture<AdminSideViewCandidateRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSideViewCandidateRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSideViewCandidateRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
