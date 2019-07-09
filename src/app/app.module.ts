import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppMaterialModule} from './app-material.module';
import {ParticlesModule} from 'angular-particle';
import {FlexLayoutModule} from '@angular/flex-layout';



import {HomeComponent} from './pages/home/home.component';
import {HeaderNavComponent} from './layouts/header-nav/header-nav.component';
import {HeaderComponent} from './layouts/header/header.component';
import { HomeAboutComponent } from './pages/home-about/home-about.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderNavComponent,
    HeaderComponent,
    HomeAboutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ParticlesModule,
    FlexLayoutModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
