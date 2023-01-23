import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedSearchViewCandidateComponent } from './saved-search-view-candidate.component';

describe('SavedSearchViewCandidateComponent', () => {
  let component: SavedSearchViewCandidateComponent;
  let fixture: ComponentFixture<SavedSearchViewCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedSearchViewCandidateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedSearchViewCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
