import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePlanViewComponent } from './manage-plan-view.component';

describe('ManagePlanViewComponent', () => {
  let component: ManagePlanViewComponent;
  let fixture: ComponentFixture<ManagePlanViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagePlanViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagePlanViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
