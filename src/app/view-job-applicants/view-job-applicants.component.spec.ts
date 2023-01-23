import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewJobApplicantsComponent } from './view-job-applicants.component';

describe('ViewJobApplicantsComponent', () => {
  let component: ViewJobApplicantsComponent;
  let fixture: ComponentFixture<ViewJobApplicantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewJobApplicantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewJobApplicantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
