import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelticCardsComponent } from './celtic-cards.component';

describe('CelticCardsComponent', () => {
  let component: CelticCardsComponent;
  let fixture: ComponentFixture<CelticCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelticCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelticCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
