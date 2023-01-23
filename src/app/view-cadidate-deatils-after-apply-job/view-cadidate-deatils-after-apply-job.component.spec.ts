import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCadidateDeatilsAfterApplyJobComponent } from './view-cadidate-deatils-after-apply-job.component';

describe('ViewCadidateDeatilsAfterApplyJobComponent', () => {
  let component: ViewCadidateDeatilsAfterApplyJobComponent;
  let fixture: ComponentFixture<ViewCadidateDeatilsAfterApplyJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCadidateDeatilsAfterApplyJobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCadidateDeatilsAfterApplyJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
