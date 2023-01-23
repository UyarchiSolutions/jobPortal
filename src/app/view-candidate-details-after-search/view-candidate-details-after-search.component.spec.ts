import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCandidateDetailsAfterSearchComponent } from './view-candidate-details-after-search.component';

describe('ViewCandidateDetailsAfterSearchComponent', () => {
  let component: ViewCandidateDetailsAfterSearchComponent;
  let fixture: ComponentFixture<ViewCandidateDetailsAfterSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCandidateDetailsAfterSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCandidateDetailsAfterSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
