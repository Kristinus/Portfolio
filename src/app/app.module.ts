import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './common/footer/footer.component';
import { IconGroupComponent } from './home/components/icon-group/icon-group.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectLinkComponent } from './projects/components/project-link/project-link.component';
import { ProjectsService } from './services/projects.service';
import { ProjectRowComponent } from './projects/components/project-row/project-row.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'Projects', component: ProjectsComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    IconGroupComponent,
    ProjectsComponent,
    ProjectLinkComponent,
    ProjectRowComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [ ProjectsService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
