import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-sunny-background',
  templateUrl: './sunny-background.component.html',
  styleUrls: ['./sunny-background.component.scss']
})

export class SunnyBackgroundComponent implements OnInit {
  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {
  }
}
