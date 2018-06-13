import { Component, OnInit } from '@angular/core';
import { ProjectsService, Project } from '../services/projects.service';
import { ContentfulService } from '../services/contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  years: number[];

  constructor(private contentfulService: ContentfulService, private projectService: ProjectsService ) {

    this.years = projectService.getYears();
  }

  ngOnInit() {
    // this.contentfulService.getProjects().then(products => this.products = products);
    // console.log(this.products);
  }

}
