import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelticDetailComponent } from './celtic-detail.component';

describe('CelticDetailComponent', () => {
  let component: CelticDetailComponent;
  let fixture: ComponentFixture<CelticDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelticDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelticDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
