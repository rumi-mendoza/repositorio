import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoInventarioComponent } from './listado-inventario.component';

describe('ListadoInventarioComponent', () => {
  let component: ListadoInventarioComponent;
  let fixture: ComponentFixture<ListadoInventarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoInventarioComponent]
    });
    fixture = TestBed.createComponent(ListadoInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
