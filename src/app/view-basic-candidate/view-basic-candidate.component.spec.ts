import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBasicCandidateComponent } from './view-basic-candidate.component';

describe('ViewBasicCandidateComponent', () => {
  let component: ViewBasicCandidateComponent;
  let fixture: ComponentFixture<ViewBasicCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBasicCandidateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBasicCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
