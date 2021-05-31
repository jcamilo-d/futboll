import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JugadoresPageRoutingModule } from './jugadores-routing.module';

import { JugadoresPage } from './jugadores.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JugadoresPageRoutingModule,
    ComponentsModule
  ],
  declarations: [JugadoresPage]
})
export class JugadoresPageModule {}
