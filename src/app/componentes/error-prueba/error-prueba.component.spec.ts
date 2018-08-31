import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorPruebaComponent } from './error-prueba.component';

describe('ErrorPruebaComponent', () => {
  let component: ErrorPruebaComponent;
  let fixture: ComponentFixture<ErrorPruebaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorPruebaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorPruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
