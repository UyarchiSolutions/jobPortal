import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewJobPostingComponent } from './admin-view-job-posting.component';

describe('AdminViewJobPostingComponent', () => {
  let component: AdminViewJobPostingComponent;
  let fixture: ComponentFixture<AdminViewJobPostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewJobPostingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewJobPostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
