import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayJobAlertComponent } from './display-job-alert.component';

describe('DisplayJobAlertComponent', () => {
  let component: DisplayJobAlertComponent;
  let fixture: ComponentFixture<DisplayJobAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayJobAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayJobAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
