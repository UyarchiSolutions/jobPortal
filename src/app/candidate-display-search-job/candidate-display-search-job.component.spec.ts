import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateDisplaySearchJobComponent } from './candidate-display-search-job.component';

describe('CandidateDisplaySearchJobComponent', () => {
  let component: CandidateDisplaySearchJobComponent;
  let fixture: ComponentFixture<CandidateDisplaySearchJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateDisplaySearchJobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidateDisplaySearchJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
