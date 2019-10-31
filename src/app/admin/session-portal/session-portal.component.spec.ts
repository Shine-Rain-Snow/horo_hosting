import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionPortalComponent } from './session-portal.component';

describe('SessionPortalComponent', () => {
  let component: SessionPortalComponent;
  let fixture: ComponentFixture<SessionPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
