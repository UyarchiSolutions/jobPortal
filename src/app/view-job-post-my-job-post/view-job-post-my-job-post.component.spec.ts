import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewJobPostMyJobPostComponent } from './view-job-post-my-job-post.component';

describe('ViewJobPostMyJobPostComponent', () => {
  let component: ViewJobPostMyJobPostComponent;
  let fixture: ComponentFixture<ViewJobPostMyJobPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewJobPostMyJobPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewJobPostMyJobPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
