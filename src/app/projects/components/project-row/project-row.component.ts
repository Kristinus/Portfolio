import { Project } from './../../../services/projects.service';
import { Component, OnInit, Input } from '@angular/core';
import { ProjectsService } from '../../../services/projects.service';

@Component({
  selector: 'app-project-row',
  templateUrl: './project-row.component.html',
  styleUrls: ['./project-row.component.scss']
})
export class ProjectRowComponent implements OnInit {
  @Input() year: number;
  private projects: Project[];
  constructor(private _projectService: ProjectsService) {
  }

  ngOnInit() {
    this.projects = this._projectService.getProjects(this.year);
  }

}
