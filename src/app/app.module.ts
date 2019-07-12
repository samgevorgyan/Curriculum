import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppMaterialModule} from './app-material.module';
import {ParticlesModule} from 'angular-particle';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ParallaxScrollModule} from 'ng2-parallaxscroll';




import {HomeComponent} from './pages/home/home.component';
import {HeaderNavComponent} from './layouts/header-nav/header-nav.component';
import {HeaderComponent} from './layouts/header/header.component';
import { HomeAboutComponent } from './pages/home-about/home-about.component';
import { HomeSkillsComponent } from './pages/home-skills/home-skills.component';
import {NgCircleProgressModule} from 'ng-circle-progress';
import { HomeExperienceComponent } from './pages/home-experience/home-experience.component';
import { HomeJobsComponent } from './pages/home-jobs/home-jobs.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { EducationComponent } from './pages/education/education.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderNavComponent,
    HeaderComponent,
    HomeAboutComponent,
    HomeSkillsComponent,
    HomeExperienceComponent,
    HomeJobsComponent,
    FooterComponent,
    EducationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ParticlesModule,
    FlexLayoutModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    }),
    ParallaxScrollModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
