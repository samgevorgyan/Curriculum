import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppMaterialModule} from './app-material.module';
import {ParticlesModule} from 'angular-particle';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ParallaxScrollModule} from 'ng2-parallaxscroll';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';




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
import { ContactComponent } from './pages/contact/contact.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpService} from "./services/http.service";
import {ConvertToHttpParamsService} from "./services/convert-to-http-params.service";
import {HttpClientModule} from "@angular/common/http";


library.add(fas, far, fab);

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
    ContactComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    ParticlesModule,
    FlexLayoutModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
    }),
    ParallaxScrollModule,
    FontAwesomeModule

  ],
  providers: [
    HttpService,
    ConvertToHttpParamsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
