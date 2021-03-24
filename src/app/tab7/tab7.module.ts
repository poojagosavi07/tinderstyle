import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SwipeCardLibModule } from 'ng-swipe-card';
import { Tab7PageRoutingModule } from './tab7-routing.module';

import { Tab7Page } from './tab7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwipeCardLibModule,
    Tab7PageRoutingModule
  ],
  declarations: [Tab7Page]
})
export class Tab7PageModule {}
