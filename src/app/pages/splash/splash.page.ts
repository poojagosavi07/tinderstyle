import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {
  progress = 0.20;
  constructor() 
  {
    setInterval( () => {  
      this.progress += .1;  
      }, 1000 ); 
   }

  ngOnInit() {
    
  }

     
  

}
