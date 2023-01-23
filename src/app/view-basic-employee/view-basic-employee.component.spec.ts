import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBasicEmployeeComponent } from './view-basic-employee.component';

describe('ViewBasicEmployeeComponent', () => {
  let component: ViewBasicEmployeeComponent;
  let fixture: ComponentFixture<ViewBasicEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBasicEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBasicEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
