import { Injectable } from '@angular/core';

export class Project {
  year: number;
  title: string;
  desc: string;
  image: string;
  devpost: string;
  github: string;
  tba: string;
  constructor(year:number, title:string, desc:string, image:string, devpost: string, github:string) {
    this.year = year;
    this.title = title;
    this.desc = desc;
    this.image = image;
    this.devpost = devpost;
    this.github = github;
  }
}

@Injectable()
export class ProjectsService {
  private p2017: Project[] = [];

  constructor() {
    this.p2017.push(
      new Project(2017, "BruiseClues",
      "An app that detects an injury from a photo", "BruiseClues-icon.jpg", "injurydetector", "Kristinus/InjuryDetector"));
    this.p2017.push(
      new Project(2017, "Black Mamba",
      "FRC robot", "BruiseClues-icon.jpg", "", "RickHansenRobotics/FRC-2017-1241-SW"));
      this.p2017[1].tba = "1241/2016"
  }

  getYears(): number[] {
    return [2017, 2016, 2015];
  }

  getProjects(year: number) {
    if(year == 2017) {
      return this.p2017;
    }
  }

}
