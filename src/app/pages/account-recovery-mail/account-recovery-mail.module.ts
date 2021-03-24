import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountRecoveryMailPageRoutingModule } from './account-recovery-mail-routing.module';

import { AccountRecoveryMailPage } from './account-recovery-mail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountRecoveryMailPageRoutingModule
  ],
  declarations: [AccountRecoveryMailPage]
})
export class AccountRecoveryMailPageModule {}
