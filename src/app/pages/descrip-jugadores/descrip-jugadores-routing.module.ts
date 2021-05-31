import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescripJugadoresPage } from './descrip-jugadores.page';

const routes: Routes = [
  {
    path: '',
    component: DescripJugadoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescripJugadoresPageRoutingModule {}
