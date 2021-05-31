import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescripEquiposPageRoutingModule } from './descrip-equipos-routing.module';

import { DescripEquiposPage } from './descrip-equipos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescripEquiposPageRoutingModule
  ],
  declarations: [DescripEquiposPage]
})
export class DescripEquiposPageModule {}
