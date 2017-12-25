import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  private years: number[];
  constructor(private _projects: ProjectsService ) {
    this.years = this._projects.getYears();
  }

  ngOnInit() {
  }

}
