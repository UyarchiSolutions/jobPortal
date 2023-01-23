import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedSearchViewByEmployeerComponent } from './saved-search-view-by-employeer.component';

describe('SavedSearchViewByEmployeerComponent', () => {
  let component: SavedSearchViewByEmployeerComponent;
  let fixture: ComponentFixture<SavedSearchViewByEmployeerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedSearchViewByEmployeerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedSearchViewByEmployeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
