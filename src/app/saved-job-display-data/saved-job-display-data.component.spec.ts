import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedJobDisplayDataComponent } from './saved-job-display-data.component';

describe('SavedJobDisplayDataComponent', () => {
  let component: SavedJobDisplayDataComponent;
  let fixture: ComponentFixture<SavedJobDisplayDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedJobDisplayDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedJobDisplayDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
