import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShareMyFeedsPageRoutingModule } from './share-my-feeds-routing.module';

import { ShareMyFeedsPage } from './share-my-feeds.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareMyFeedsPageRoutingModule
  ],
  declarations: [ShareMyFeedsPage]
})
export class ShareMyFeedsPageModule {}
