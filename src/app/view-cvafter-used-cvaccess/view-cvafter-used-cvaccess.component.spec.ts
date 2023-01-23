import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCVAfterUsedCVAccessComponent } from './view-cvafter-used-cvaccess.component';

describe('ViewCVAfterUsedCVAccessComponent', () => {
  let component: ViewCVAfterUsedCVAccessComponent;
  let fixture: ComponentFixture<ViewCVAfterUsedCVAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCVAfterUsedCVAccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCVAfterUsedCVAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
