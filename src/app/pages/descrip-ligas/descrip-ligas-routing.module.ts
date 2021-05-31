import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescripLigasPage } from './descrip-ligas.page';

const routes: Routes = [
  {
    path: '',
    component: DescripLigasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescripLigasPageRoutingModule {}
