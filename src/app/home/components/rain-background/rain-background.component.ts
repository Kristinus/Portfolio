import { Component, OnInit, ViewChild, ElementRef, Renderer } from '@angular/core';

export class RainDrop {
  left: string;
  bottom: string;
  delay: string;
  dur: string;
}

@Component({
  selector: 'app-rain-background',
  templateUrl: './rain-background.component.html',
  styleUrls: ['./rain-background.component.scss']
})

export class RainBackgroundComponent implements OnInit {

  drops: RainDrop[] = [];

  constructor(private renderer:Renderer) {
    this.makeItRain();
  }

  ngOnInit() {

    console.log(this.drops);
  }

  makeItRain() {
    //clear out everything
    $('.rain').empty();

    var increment = 0;
    var drops = "";
    var backDrops = "";

    while (increment < 94) {
      //couple random numbers to use for various randomizations
      //random number between 98 and 1
      var randoHundo = (Math.floor(Math.random() * 98 + 1));
      //random number between 5 and 2
      var randoFiver = (Math.floor(Math.random() * 5 + 2));
      //increment
      increment += randoFiver;
      //add in a new raindrop with various randomizations to certain CSS properties
      let drop = new RainDrop;
      drop.left = increment + '%';
      drop.bottom = (randoFiver + randoFiver - 1 + 90) + '%';
      drop.delay = '1.' + randoHundo + 's';
      drop.dur = '1.25' + randoHundo + 's';
      this.drops.push(drop);
    }
  }

  setStyles(drop: RainDrop, isDrop:boolean) {
    var style;
    if(isDrop) {
      style = {
        'left': drop.left,
        'bottom': drop.bottom,
        'animation-delay': drop.delay,
        'animation-duration': drop.dur
      }
    }
    else {
      style = {
        'animation-delay': drop.delay,
        'animation-duration': drop.dur
      }
    }
    return style;
  }


}
