import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LigasPageRoutingModule } from './ligas-routing.module';

import { LigasPage } from './ligas.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LigasPageRoutingModule,
    ComponentsModule

  ],
  declarations: [LigasPage]
})
export class LigasPageModule {}
