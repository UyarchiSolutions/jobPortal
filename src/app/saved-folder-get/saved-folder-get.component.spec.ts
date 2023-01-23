import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedFolderGetComponent } from './saved-folder-get.component';

describe('SavedFolderGetComponent', () => {
  let component: SavedFolderGetComponent;
  let fixture: ComponentFixture<SavedFolderGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedFolderGetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedFolderGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
