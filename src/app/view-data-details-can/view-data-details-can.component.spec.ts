import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDataDetailsCanComponent } from './view-data-details-can.component';

describe('ViewDataDetailsCanComponent', () => {
  let component: ViewDataDetailsCanComponent;
  let fixture: ComponentFixture<ViewDataDetailsCanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDataDetailsCanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDataDetailsCanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
