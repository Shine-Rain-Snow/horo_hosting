import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LenormandSelectComponent } from './lenormand-select.component';

describe('LenormandSelectComponent', () => {
  let component: LenormandSelectComponent;
  let fixture: ComponentFixture<LenormandSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LenormandSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LenormandSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
