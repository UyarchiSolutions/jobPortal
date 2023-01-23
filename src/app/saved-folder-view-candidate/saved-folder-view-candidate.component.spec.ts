import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedFolderViewCandidateComponent } from './saved-folder-view-candidate.component';

describe('SavedFolderViewCandidateComponent', () => {
  let component: SavedFolderViewCandidateComponent;
  let fixture: ComponentFixture<SavedFolderViewCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedFolderViewCandidateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedFolderViewCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
