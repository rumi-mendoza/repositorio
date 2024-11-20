import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoVentasComponent } from './listado-ventas/listado-ventas.component';
import { FormularioVentasComponent } from './formulario-ventas/formulario-ventas.component';



@NgModule({
  declarations: [
    ListadoVentasComponent,
    FormularioVentasComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VentasModule { }
