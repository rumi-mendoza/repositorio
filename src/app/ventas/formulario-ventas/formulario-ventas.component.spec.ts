import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioVentasComponent } from './formulario-ventas.component';

describe('FormularioVentasComponent', () => {
  let component: FormularioVentasComponent;
  let fixture: ComponentFixture<FormularioVentasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioVentasComponent]
    });
    fixture = TestBed.createComponent(FormularioVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
