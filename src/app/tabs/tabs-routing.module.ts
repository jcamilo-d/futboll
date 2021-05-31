import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'ligas',
        loadChildren: () => import('../pages/ligas/ligas.module').then(m => m.LigasPageModule)
      },
      {
        path: 'equipos',
        loadChildren: () => import('../pages/equipos/equipos.module').then(m => m.EquiposPageModule)
      },
      {
         path: 'jugadores',
         loadChildren: () => import('../pages/jugadores/jugadores.module').then(m => m.JugadoresPageModule)
      },

      {
        path: '',
        redirectTo: '/tabs/ligas',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/ligas',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
