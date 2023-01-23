import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceDetailsCandidateComponent } from './advance-details-candidate.component';

describe('AdvanceDetailsCandidateComponent', () => {
  let component: AdvanceDetailsCandidateComponent;
  let fixture: ComponentFixture<AdvanceDetailsCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvanceDetailsCandidateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvanceDetailsCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
