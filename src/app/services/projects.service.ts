import { Injectable } from '@angular/core';

export class Project {
  year: number;
  name: string;
  subtitle: string;
  desc: string;
  // Extension to Front Image
  image: string;
  // Extension to devpost
  devpost?: string;
  // Extension to Github
  github?: string;
  // Extension to The Blue Alliance
  tba?: string;
}

@Injectable()
export class ProjectsService {
  private projects: Project[] = [];

  constructor() {
    this.projects.push(
      {
        year: 2017,
        name: 'BruiseClues',
        subtitle: 'Hackathon Project',
        desc: 'An app that detects an injury from a photo',
        image: 'BruiseClues-icon.jpg',
        devpost: 'injurydetector',
        github: 'Kristinus/InjuryDetector'
      });
    this.projects.push(
      {
        year: 2017,
        name: 'SpitFire',
        subtitle: 'FRC Robot',
        desc: 'FRC Robot',
        image: 'Spitfire-icon.jpg',
        tba: '1241/2017',
        github: 'RickHansenRobotics/FRC-2017-1241-SW'
      });
    this.projects.push(
      {
        year: 2016,
        name: 'Black Mamba',
        subtitle: 'FRC Robot',
        desc: 'FRC Robot',
        image: 'BlackMamba-icon.jpg',
        tba: '1241/2016',
        github: 'RickHansenRobotics/FRC-2016-1241-SH'
      });
  }


  getYears(): number[] {
    return Array.from(new Set(this.projects.map(x => x.year)));
  }

  getProjectsByYear(year: number): Project[] {
    return this.projects.filter(x => x.year === year);
  }

}
