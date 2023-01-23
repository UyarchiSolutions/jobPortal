import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmployeeAdvanceComponent } from './edit-employee-advance.component';

describe('EditEmployeeAdvanceComponent', () => {
  let component: EditEmployeeAdvanceComponent;
  let fixture: ComponentFixture<EditEmployeeAdvanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEmployeeAdvanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEmployeeAdvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
