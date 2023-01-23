import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostJobEmployeeComponent } from './post-job-employee.component';

describe('PostJobEmployeeComponent', () => {
  let component: PostJobEmployeeComponent;
  let fixture: ComponentFixture<PostJobEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostJobEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostJobEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
