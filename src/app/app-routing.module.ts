import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { SignupComponent } from './authentification/signup/signup.component';
import { LoginComponent } from './authentification/login/login.component';
import { PageStatistiqueComponent } from './pages/profile/page-statistique/page-statistique.component';
import { NouvelArticleComponent } from './pages/profile/articles/articles/nouvel-article/nouvel-article.component';
import { ArticlesComponent } from './pages/profile/articles/articles/articles/articles.component';
import { MvtsldComponent } from './pages/profile/Mouvement-des-soldes/mvtsld/mvtsld.component';

const routes: Routes = [
  {path:'home', component: HomeComponent}, //home
  {path:'profile',
   component: ProfileComponent,
   children: [
     {
       path: 'statistiques',
       component: PageStatistiqueComponent
     },
     {
       path: 'articles',
       component: ArticlesComponent
     },
     {
       path: 'nouvelarticle',
       component: NouvelArticleComponent
     },
     {
       path: 'mvtsld',
       component: MvtsldComponent
     }
   ]},
  {path:'contact', component: ContactComponent},
  {path:'about', component: AboutComponent},
  {path:'signup', component: SignupComponent},
  {path:'login', component: LoginComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full' }
];

//{ path: '**', component: Error404Component }

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
