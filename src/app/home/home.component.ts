import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  winter = false;
  spring = false;
  summer = false;
  fall = false;

  constructor() { }

  ngOnInit() {
    const today = new Date();
    if (today.getUTCMonth() < 3) {
      this.winter = true;
    } else if (today.getUTCMonth() < 6) {
      this.spring = true;
    } else if (today.getUTCMonth() < 9) {
      this.summer = true;
    } else {
      this.fall = true;
    }
  }

}
