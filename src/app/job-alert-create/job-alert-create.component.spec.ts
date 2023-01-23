import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAlertCreateComponent } from './job-alert-create.component';

describe('JobAlertCreateComponent', () => {
  let component: JobAlertCreateComponent;
  let fixture: ComponentFixture<JobAlertCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobAlertCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobAlertCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
