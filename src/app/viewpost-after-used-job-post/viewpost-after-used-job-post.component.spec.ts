import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpostAfterUsedJobPostComponent } from './viewpost-after-used-job-post.component';

describe('ViewpostAfterUsedJobPostComponent', () => {
  let component: ViewpostAfterUsedJobPostComponent;
  let fixture: ComponentFixture<ViewpostAfterUsedJobPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewpostAfterUsedJobPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewpostAfterUsedJobPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
