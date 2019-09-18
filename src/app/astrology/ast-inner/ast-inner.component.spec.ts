import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AstInnerComponent } from './ast-inner.component';

describe('AstInnerComponent', () => {
  let component: AstInnerComponent;
  let fixture: ComponentFixture<AstInnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstInnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AstInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
