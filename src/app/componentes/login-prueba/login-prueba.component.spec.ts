import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPruebaComponent } from './login-prueba.component';

describe('LoginPruebaComponent', () => {
  let component: LoginPruebaComponent;
  let fixture: ComponentFixture<LoginPruebaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPruebaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
