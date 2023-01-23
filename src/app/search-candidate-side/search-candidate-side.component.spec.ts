import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCandidateSideComponent } from './search-candidate-side.component';

describe('SearchCandidateSideComponent', () => {
  let component: SearchCandidateSideComponent;
  let fixture: ComponentFixture<SearchCandidateSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCandidateSideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchCandidateSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
