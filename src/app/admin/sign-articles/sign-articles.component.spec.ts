import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignArticlesComponent } from './sign-articles.component';

describe('SignArticlesComponent', () => {
  let component: SignArticlesComponent;
  let fixture: ComponentFixture<SignArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
