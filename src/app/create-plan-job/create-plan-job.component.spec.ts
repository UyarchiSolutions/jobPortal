import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePlanJobComponent } from './create-plan-job.component';

describe('CreatePlanJobComponent', () => {
  let component: CreatePlanJobComponent;
  let fixture: ComponentFixture<CreatePlanJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePlanJobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePlanJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
