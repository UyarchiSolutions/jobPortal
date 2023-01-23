import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyJobPostComponent } from './my-job-post.component';

describe('MyJobPostComponent', () => {
  let component: MyJobPostComponent;
  let fixture: ComponentFixture<MyJobPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyJobPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyJobPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
