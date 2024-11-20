import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { FormularioProductosComponent } from './formulario-productos/formulario-productos.component';



@NgModule({
  declarations: [
    ListadoProductosComponent,
    FormularioProductosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductosModule { }
