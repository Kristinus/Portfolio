import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { ContentfulService } from '../services/contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  years: number[];
  private products: Entry<any>[] = [];
  constructor(private contentfulService: ContentfulService, private _projects: ProjectsService ) {

    this.years = this._projects.getYears();
  }

  ngOnInit() {
    // this.contentfulService.getProjects().then(products => this.products = products);
    // console.log(this.products);
  }

}
