import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarotComponent } from './tarot.component';

describe('TarotComponent', () => {
  let component: TarotComponent;
  let fixture: ComponentFixture<TarotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
