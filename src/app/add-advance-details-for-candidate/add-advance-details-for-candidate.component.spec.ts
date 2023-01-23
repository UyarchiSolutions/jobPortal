import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdvanceDetailsForCandidateComponent } from './add-advance-details-for-candidate.component';

describe('AddAdvanceDetailsForCandidateComponent', () => {
  let component: AddAdvanceDetailsForCandidateComponent;
  let fixture: ComponentFixture<AddAdvanceDetailsForCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdvanceDetailsForCandidateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAdvanceDetailsForCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
