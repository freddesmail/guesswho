import { Component, OnInit, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Pixelate } from 'pixelate';
//import 'pixelate.js'

declare var Pixelate:any;

@Component({
  selector: 'gamescreen',
  templateUrl: './gamescreen.component.html',
  styleUrls: ['./gamescreen.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class GamescreenComponent implements OnInit {


  private animation:any;
  private pixelate;
  private pixelval:number;
  public currentPoint: number;

  constructor() {
    Pixelate = require('pixelate');
    this.pixelval = 1;
    this.currentPoint = 10;
  }

  ngOnInit() {
    var image = document.getElementById('image');
    this.pixelate = new Pixelate(image, {
  amount: 1, // default: 0, pixelation percentage amount (range from 0 to 1)
});
this.animate();





//this.startAnimation();
//this.animate(1, pixelate);
  }

  pauseAnimation() {
    clearInterval(this.animation);
  }

  startAnimation() {
    this.animate();
  }

  showRightAnswer() {
    // visa vad kändisen heter
  }

  updateCurrentPoint() {
    console.log('currentPoint', this.pixelval);
    if(this.pixelval <=1 && this.pixelval >0.99) {
      console.log('hello 10');
      this.currentPoint = 10;
    }
    if(this.pixelval <=0.99 && this.pixelval >0.98) {
      this.currentPoint = 9;
    }
    if(this.pixelval <=0.98 && this.pixelval >0.97) {
      this.currentPoint = 8;
    }
    if(this.pixelval <=0.97 && this.pixelval >0.96) {
      console.log('hello 7');
      this.currentPoint = 7;
    }
    if(this.pixelval <=0.96 && this.pixelval >0.95) {
      this.currentPoint = 6;
    }
    if(this.pixelval <=0.95 && this.pixelval >0.94) {
      this.currentPoint = 5;
    }
    if(this.pixelval <=0.94 && this.pixelval >0.93) {
      this.currentPoint = 4;
    }
    if(this.pixelval <=0.93 && this.pixelval >0.92) {
      this.currentPoint = 3;
    }
    if(this.pixelval <=0.92 && this.pixelval >0.91) {
      this.currentPoint = 2;
    }
    if(this.pixelval <=0.91) {
      this.currentPoint = 1;
    }
  }

  animate() {
    let temp = this;
     this.animation = setInterval(() => {
      this.pixelval = this.pixelval - 0.001;

      temp.pixelate.setAmount(this.pixelval).render();
      console.log('pixelval: ', this.pixelval);
      this.updateCurrentPoint();
      if(this.pixelval< 0.85) {
      temp.pixelate.setAmount(0).render();
        this.showRightAnswer();
        clearInterval(this.animation);
      }
    }, 300);

  }



}
