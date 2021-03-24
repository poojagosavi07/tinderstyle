import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab9',
  templateUrl: './tab9.page.html',
  styleUrls: ['./tab9.page.scss'],
})
export class Tab9Page implements OnInit {

  ngOnInit() {
  }
  chatData = [{
    id: '12edd', name: 'Jovenica Alba',
    image: '../../assets/chat/chat1.jpg',
    // tslint:disable-next-line:max-line-length
    description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
    count: '2',
    time: '12:17'
  }, {
    id: '12edd', name: 'Oliver',
    image: ' ../../assets/chat/chat2.jpg',
    // tslint:disable-next-line:max-line-length
    description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
    time: '12:17'
  }, {
    id: '12edd', name: 'George',
    image: ' ../../assets/chat/chat3.jpg',
    // tslint:disable-next-line:max-line-length
    description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
    count: '2',
    time: 'Yesterday'
  }
  ];
  constructor( public route: Router) {}

  onShow(chat) {
    this.route.navigate(['bubble', chat]);
  }
}