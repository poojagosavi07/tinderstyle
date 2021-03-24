import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountRecoveryNoPage } from './account-recovery-no.page';

const routes: Routes = [
  {
    path: '',
    component: AccountRecoveryNoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRecoveryNoPageRoutingModule {}
