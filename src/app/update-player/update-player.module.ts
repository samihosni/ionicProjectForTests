import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatePlayerPageRoutingModule } from './update-player-routing.module';

import { UpdatePlayerPage } from './update-player.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatePlayerPageRoutingModule
  ],
  declarations: [UpdatePlayerPage]
})
export class UpdatePlayerPageModule {}
