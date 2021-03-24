import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab6',
  templateUrl: './tab6.page.html',
  styleUrls: ['./tab6.page.scss'],
})
export class Tab6Page{

  // img ="https://ionicframework.com/docs/demos/api/avatar/avatar.svg";
  constructor(public modalController: ModalController, public router: Router) {}

  // async onSetting() {
  //   this.router.navigateByUrl('../pages/setting');
  // }

  // async onPicture() {
  //   return this.router.navigateByUrl('./add-photos');
  // }

  // async onEdit() {
  //  return this.router.navigateByUrl('./edit-profile');

  // }


}
