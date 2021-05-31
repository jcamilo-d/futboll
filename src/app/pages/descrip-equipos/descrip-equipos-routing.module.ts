import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescripEquiposPage } from './descrip-equipos.page';

const routes: Routes = [
  {
    path: '',
    component: DescripEquiposPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescripEquiposPageRoutingModule {}
