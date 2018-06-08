import { Injectable } from '@angular/core';

export class Project {
  year: number;
  title: string;
  desc: string;
  //Extension to Front Image
  image: string;
  //Extension to devpost
  devpost: string;
  //Extension to Github
  github: string;
  //Extension to The Blue Alliance
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
  private p2018: Project[] = [];
  private p2017: Project[] = [];
  private p2016: Project[] = [];
  private p2015: Project[] = [];

  private projects = { 2017:this.p2017, 2016:this.p2016, 2015:this.p2015 };

  constructor() {
    this.p2017.push(
      new Project(2017, "BruiseClues",
      "An app that detects an injury from a photo", "BruiseClues-icon.jpg", "injurydetector", "Kristinus/InjuryDetector"));
    this.p2017.push(
      new Project(2017, "SpitFire",
      "FRC robot", "Spitfire-icon.jpg", "", "RickHansenRobotics/FRC-2017-1241-SW"));
      this.p2017[1].tba = "1241/2017"

    this.p2016.push(
      new Project(2017, "Black Mamba",
      "FRC robot", "BlackMamba-icon.jpg", "", "RickHansenRobotics/FRC-2016-1241-SH"));
      this.p2016[0].tba = "1241/2016"
  }

  getYears(): number[] {
    return [2018, 2017, 2016, 2015];
  }

  getProjects(year: number) {
    return this.projects[year];
  }

}
