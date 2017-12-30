import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() color:string;
  public isCollapsed = true;
  constructor() { }

  ngOnInit() {
  }

  setClasses() {
    let classes = {
      white: (this.color == "white")
    };
    return classes;
  }

}
