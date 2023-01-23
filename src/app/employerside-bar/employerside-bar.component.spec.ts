import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployersideBarComponent } from './employerside-bar.component';

describe('EmployersideBarComponent', () => {
  let component: EmployersideBarComponent;
  let fixture: ComponentFixture<EmployersideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployersideBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployersideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
