import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {EducationComponent} from './pages/education/education.component';
import {ContactComponent} from './pages/contact/contact.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: {animation: 'HomePage'} },
  { path: 'education', component: EducationComponent ,data: {animation: 'EducationPage'}},
  { path: 'contact', component: ContactComponent ,data: {animation: 'ContactPage'} },
  { path: '',  redirectTo: '/home',  pathMatch: 'full' },
  { path: '**', component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }