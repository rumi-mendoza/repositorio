const rutas: Routes = [
  { path: '', redirectTo: 'panel-control', pathMatch: 'full' },
  { path: 'panel-control', loadChildren: () => import('./panel-control/panel-control.module').then(m => m.PanelControlModule), canActivate: [AutenticacionGuard] },
  { path: 'productos', loadChildren: () => import('./productos/productos.module').then(m => m.ProductosModule), canActivate: [AutenticacionGuard] },
  { path: 'ventas', loadChildren: () => import('./ventas/ventas.module').then(m => m.VentasModule), canActivate: [AutenticacionGuard] },
  { path: 'inventario', loadChildren: () => import('./inventario/inventario.module').then(m => m.InventarioModule), canActivate: [AutenticacionGuard] },
  { path: 'inicio-sesion', component: InicioSesionComponent }
];

