import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescripJugadoresPageRoutingModule } from './descrip-jugadores-routing.module';

import { DescripJugadoresPage } from './descrip-jugadores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescripJugadoresPageRoutingModule
  ],
  declarations: [DescripJugadoresPage]
})
export class DescripJugadoresPageModule {}
