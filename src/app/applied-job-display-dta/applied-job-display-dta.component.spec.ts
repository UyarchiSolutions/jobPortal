import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedJobDisplayDtaComponent } from './applied-job-display-dta.component';

describe('AppliedJobDisplayDtaComponent', () => {
  let component: AppliedJobDisplayDtaComponent;
  let fixture: ComponentFixture<AppliedJobDisplayDtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppliedJobDisplayDtaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppliedJobDisplayDtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
