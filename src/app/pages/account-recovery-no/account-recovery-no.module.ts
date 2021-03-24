import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountRecoveryNoPageRoutingModule } from './account-recovery-no-routing.module';

import { AccountRecoveryNoPage } from './account-recovery-no.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountRecoveryNoPageRoutingModule
  ],
  declarations: [AccountRecoveryNoPage]
})
export class AccountRecoveryNoPageModule {}
