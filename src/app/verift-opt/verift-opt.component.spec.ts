import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeriftOPTComponent } from './verift-opt.component';

describe('VeriftOPTComponent', () => {
  let component: VeriftOPTComponent;
  let fixture: ComponentFixture<VeriftOPTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeriftOPTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeriftOPTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
