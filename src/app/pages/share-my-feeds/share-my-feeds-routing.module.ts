import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShareMyFeedsPage } from './share-my-feeds.page';

const routes: Routes = [
  {
    path: '',
    component: ShareMyFeedsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShareMyFeedsPageRoutingModule {}
