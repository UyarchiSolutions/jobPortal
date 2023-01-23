import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RePostMyJobPostComponent } from './re-post-my-job-post.component';

describe('RePostMyJobPostComponent', () => {
  let component: RePostMyJobPostComponent;
  let fixture: ComponentFixture<RePostMyJobPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RePostMyJobPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RePostMyJobPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
