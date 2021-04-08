import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesPage } from './pages.page';

const routes: Routes = [
  {
    path: '',
    component: PagesPage
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'add-photos',
    loadChildren: () => import('./add-photos/add-photos.module').then( m => m.AddPhotosPageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./setting/setting.module').then( m => m.SettingPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'gender-selection',
    loadChildren: () => import('./gender-selection/gender-selection.module').then( m => m.GenderSelectionPageModule)
  },
  {
    path: 'share-my-feeds',
    loadChildren: () => import('./share-my-feeds/share-my-feeds.module').then( m => m.ShareMyFeedsPageModule)
  },
  {
    path: 'account-recovery',
    loadChildren: () => import('./account-recovery/account-recovery.module').then( m => m.AccountRecoveryPageModule)
  },
  {
    path: 'account-recovery-no',
    loadChildren: () => import('./account-recovery-no/account-recovery-no.module').then( m => m.AccountRecoveryNoPageModule)
  },
  {
    path: 'account-recovery-mail',
    loadChildren: () => import('./account-recovery-mail/account-recovery-mail.module').then( m => m.AccountRecoveryMailPageModule)
  },
  {
    path: 'otp-verification',
    loadChildren: () => import('./otp-verification/otp-verification.module').then( m => m.OtpVerificationPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesPageRoutingModule {}
