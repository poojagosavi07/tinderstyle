import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.page.html',
  styleUrls: ['./pages.page.scss'],
})
export class PagesPage implements OnInit {

  constructor(
    // private router:Router
    ) { }

  ngOnInit() {
    // setTimeout(()=>
    // {
    //   this.navigation();
    // },1500);
  }

  // navigation()
  // {
  //   this.router.navigate(['./login']);
  // }

  
}
