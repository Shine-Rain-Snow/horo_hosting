import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksDreamComponent } from './books-dream.component';

describe('BooksDreamComponent', () => {
  let component: BooksDreamComponent;
  let fixture: ComponentFixture<BooksDreamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksDreamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksDreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
