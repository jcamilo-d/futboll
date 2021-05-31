import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescripLigasPageRoutingModule } from './descrip-ligas-routing.module';

import { DescripLigasPage } from './descrip-ligas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescripLigasPageRoutingModule
  ],
  declarations: [DescripLigasPage]
})
export class DescripLigasPageModule {}
