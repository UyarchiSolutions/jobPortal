import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkSendPageComponent } from './link-send-page.component';

describe('LinkSendPageComponent', () => {
  let component: LinkSendPageComponent;
  let fixture: ComponentFixture<LinkSendPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkSendPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkSendPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
