import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router,private socialSharing: SocialSharing) { }

  ngOnInit() {
  }
 
  tryLogin()
  {}
  
  openRegister(){
    this.router.navigate(['/register']);

  }

  sendShare(message, subject, url) {
    this.socialSharing.share(message, subject, null, url);
  }  // End of fu
  
}
