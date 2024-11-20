import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NucleoModule } from './nucleo/nucleo.module';
import { AutenticacionModule } from './autenticacion/autenticacion.module';
import { PanelControlModule } from './panel-control/panel-control.module';
import { ProductosModule } from './productos/productos.module';
import { VentasModule } from './ventas/ventas.module';
import { InventarioModule } from './inventario/inventario.module';
import { MenuNavegacionComponent } from './compartido/menu-navegacion/menu-navegacion.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuNavegacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NucleoModule,
    AutenticacionModule,
    PanelControlModule,
    ProductosModule,
    VentasModule,
    InventarioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
