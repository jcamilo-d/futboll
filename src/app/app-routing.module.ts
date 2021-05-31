import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'ligas',
    loadChildren: () => import('./pages/ligas/ligas.module').then( m => m.LigasPageModule)
  },
  {
    path: 'equipos',
    loadChildren: () => import('./pages/equipos/equipos.module').then( m => m.EquiposPageModule)
  },
  {
    path: 'jugadores',
    loadChildren: () => import('./pages/jugadores/jugadores.module').then( m => m.JugadoresPageModule)
  },
  {
    path: 'ligas/id',
    loadChildren: () => import('./pages/descrip-ligas/descrip-ligas.module').then( m => m.DescripLigasPageModule)
  },
  {
    path: 'equipos/id',
    loadChildren: () => import('./pages/descrip-equipos/descrip-equipos.module').then( m => m.DescripEquiposPageModule)
  },
  {
    path: 'jugadores/id',
    loadChildren: () => import('./pages/descrip-jugadores/descrip-jugadores.module').then( m => m.DescripJugadoresPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
