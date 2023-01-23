import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySearchDetailsComponent } from './display-search-details.component';

describe('DisplaySearchDetailsComponent', () => {
  let component: DisplaySearchDetailsComponent;
  let fixture: ComponentFixture<DisplaySearchDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaySearchDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplaySearchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
