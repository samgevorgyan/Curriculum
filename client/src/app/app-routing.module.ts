import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {EducationComponent} from './pages/education/education.component';
import {ContactComponent} from './pages/contact/contact.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'education', component: EducationComponent, data: {animation: 'EducationPage'}},
  {path: 'contact', component: ContactComponent, data: {animation: 'ContactPage'}},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
