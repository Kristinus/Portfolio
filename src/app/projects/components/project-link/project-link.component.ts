import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../../services/projects.service';

@Component({
  selector: 'app-project-link',
  templateUrl: './project-link.component.html',
  styleUrls: ['./project-link.component.scss']
})
export class ProjectLinkComponent implements OnInit {
  @Input() project: Project;
  constructor() { }

  ngOnInit() {
    if(!this.project.image) {
      this.project.image = 'no-image.png';
    }
  }
}
