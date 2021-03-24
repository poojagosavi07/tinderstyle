// import { Component, OnInit } from '@angular/core';

import { Component, AfterViewInit, ViewChildren, ElementRef, QueryList, OnInit } from '@angular/core';
import { GestureController, IonCard, Platform, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab7',
  templateUrl: './tab7.page.html',
  styleUrls: ['./tab7.page.scss'],
})
export class Tab7Page implements OnInit, AfterViewInit{
 
  questions = [
    {
      name: 'Donald Trump',
      age: 73,
      image: './../../assets/img/trump.jpg',
      visible: true
    },
    {
      name: 'Barack Obama',
      age: 58,
      image: './../../assets/img/obama.jpg',
      visible: true
    },
    {
      name: 'Elon Musk',
      age: 48,
      image: './../../assets/img/musk.jpg',
      visible: true
    },
    {
      name: 'Jeff Bezos',
      age: 56,
      image: './../../assets/img/bezos.jpg',
      visible: true
    },
    {
      name: 'Beyonce',
      age: 38,
      image: './../../assets/img/beyonce.jpg',
      visible: true
    }
    ,
    {
      name: 'Taylor Swift',
      age: 32,
      image: './../../assets/img/taylor.jpg',
      visible: true
     
    }
  ];

  // constructor() {
  //   this.currentIndex = this.avatars.length - 1;
  //   console.log(this.currentIndex);
  // }

  nbr = 1;
  @ViewChildren(IonCard, {read: ElementRef}) cards: QueryList<ElementRef>;
  constructor(private gestureCtrl: GestureController, public plt: Platform,
              public modalController: ModalController,
              public router: Router) {}
  ngOnInit(): void {
   //  this.checkPhoto();
    /* this.authservice.onGetUser().then(
       () => {},
       () => { this.router.navigate(['/signup2']); }
     ); */
  }

  // LIKE ACTION
  onLike() {
        
    const card = this.cards.toArray()[this.cards.toArray().length - this.nbr];
    card.nativeElement.style.transition = '1s ease-out';
    card.nativeElement.style.transform = `translateY(${-this.plt.width() * 3}px)
          rotate(${100}deg)`;
    this.nbr ++;
  }

  // DISLIKE ACTION
  onDisLike() {
    const card = this.cards.toArray()[this.cards.toArray().length - this.nbr];
    card.nativeElement.style.transition = '1s ease-out';
    card.nativeElement.style.transform = `translateY(${+this.plt.width() * 3}px)
          rotate(${100}deg)`;
    this.nbr ++;

  }

  ngAfterViewInit(): void {
   const cardArray = this.cards.toArray();
   this.useTinderSwipe(cardArray);
  }

  // TINDER SWIPE FONCTIONNALITY
  useTinderSwipe(cardArray) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < cardArray.length; i++) {
      const card = cardArray[i];

      const gesture =  this.gestureCtrl.create({
        el: card.nativeElement,
        gestureName: 'swipte',
        onStart: ev => {

        },
        onMove: ev => {
          card.nativeElement.style.transform = `translateY(${ev.deltaX}px)
          rotate(${ev.deltaX / 10}deg)`;
          this.setCardColor(ev.deltaX, card.nativeElement);
        },
        onEnd: ev => {
          card.nativeElement.style.transition = '1s ease-out';
          if (ev.deltaX > 150) {
            card.nativeElement.style.transform = `translateY(${+this.plt.width() * 3}px)
            rotate(${ev.deltaX / 2}deg)`;
            this.nbr ++;
          } else if (ev.deltaX < -150) {
            card.nativeElement.style.transform = `translateY(${-this.plt.width() * 3}px)
            rotate(${ev.deltaX / 2}deg)`;
            this.nbr ++;
          } else {
            card.nativeElement.style.transform = '';
          }
        }
      });

      gesture.enable(true);
    }
  }

  setCardColor(x, element) {
    let color = '';
    const abs = Math.abs(x);
    const min = Math.trunc(Math.min(16 * 16 - abs, 16 * 16));
    const hexCode = this.decimalToHex(min, 2);

    if (x < 0) {
      color = '#FF' + hexCode  + hexCode;
    } else {
      color = '#' + hexCode + 'FF' + hexCode;
    }
  }

  decimalToHex(d, padding) {
    let hex = Number(d).toString(16);
    padding = typeof padding === 'undefined' || padding === null ? (padding = 2) : padding;

    while (hex.length < padding) {
      hex = '0' + hex;
    }

    return hex;
  }
}