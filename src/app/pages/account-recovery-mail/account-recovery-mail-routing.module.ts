import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountRecoveryMailPage } from './account-recovery-mail.page';

const routes: Routes = [
  {
    path: '',
    component: AccountRecoveryMailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRecoveryMailPageRoutingModule {}
