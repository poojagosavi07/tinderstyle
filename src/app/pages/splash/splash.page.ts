import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {
  progress = 0.20;
  constructor(public route: Router) 
  {
    setInterval( () => {  
      this.progress += .1;  
      }, 1000 ); 
   }

  ngOnInit() {
    setTimeout(function() 
    {
      document.getElementById('splash').style.display='none'
      document.getElementById('bar').style.display = 'none'
      }, 10*500);
      this.router.navigateByUrl('/pages/login');
    
  }

     
  

}
