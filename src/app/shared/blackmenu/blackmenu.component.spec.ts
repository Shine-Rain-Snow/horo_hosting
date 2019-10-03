import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackmenuComponent } from './blackmenu.component';

describe('BlackmenuComponent', () => {
  let component: BlackmenuComponent;
  let fixture: ComponentFixture<BlackmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
