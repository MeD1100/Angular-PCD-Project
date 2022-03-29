import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { SignupComponent } from './authentification/signup/signup.component';
import { LoginComponent } from './authentification/login/login.component';
import { DashboardAllComponent } from './dashboard/dashboard-all/dashboard-all.component';


const routes: Routes = [
  {path:'dashboard', component: DashboardAllComponent},
  {path:'home', component: HomeComponent}, //home
  {path:'profile', component: ProfileComponent},
  {path:'contact', component: ContactComponent},
  {path:'about', component: AboutComponent},
  {path:'signup', component: SignupComponent},
  {path:'login', component: LoginComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full' },
];

//{ path: '**', component: Error404Component }

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
