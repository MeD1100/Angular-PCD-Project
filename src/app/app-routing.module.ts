import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { SignupComponent } from './authentification/signup/signup.component';
import { LoginComponent } from './authentification/login/login.component';
import { PageStatistiqueComponent } from './pages/profile/page-statistique/page-statistique.component';
import { NouvelArticleComponent } from './pages/profile/articles/articles/nouvel-article/nouvel-article.component';
import { ArticlesComponent } from './pages/profile/articles/articles/articles/articles.component';
import { MvtsldComponent } from './pages/profile/mvtsld/mvtsld.component';
import { ClientComponent } from './pages/profile/clients/client/client.component';
import { NouveauClientComponent } from './pages/profile/clients/nouveau-client/nouveau-client.component';
import { ClientcmdComponent } from './pages/profile/clients/clientcmd.component';
import { CategoriesComponent } from './pages/profile/categories/categories.component';
import { NouvelleCategorieComponent } from './pages/profile/categories/nouvelle-categorie/nouvelle-categorie.component';
import { PageProfilComponent } from './pages/profile/page-profil/page-profil.component';
import { ChangerMdpComponent } from './pages/profile/changer-mdp/changer-mdp.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AdminComponent } from './pages/profile/admins/admin/admin.component';
import { NouveauAdminComponent } from './pages/profile/admins/nouveau-admin/nouveau-admin.component';
import { ApplicationGuardService } from './service/guard/application-guard.service';
import { ProfileUserComponent } from './pages/profile-user/profile-user.component';
import { ArticlesUserComponent } from './pages/profile-user/articles-user/articles-user/articles-user/articles-user.component';
import { MvtsldUserComponent } from './pages/profile-user/mvtsld-user/mvtsld-user.component';
import { CategoriesUserComponent } from './pages/profile-user/categories-user/categories-user.component';
import { PageProfilUserComponent } from './pages/profile-user/page-profil-user/page-profil-user.component';
import { ChangerMdpUserComponent } from './pages/profile-user/changer-mdp-user/changer-mdp-user.component';
import { DetailsEditingComponent } from './pages/profile/update/details-editing/details-editing.component';
import { UpdateComponent } from './pages/profile/update/update.component';

const routes: Routes = [
  {path:'home', component: HomeComponent}, //home
  {path:'profile',
   component: ProfileComponent,
   canActivate: [ApplicationGuardService],
   children: [
     {
       path: 'statistiques',
       component: PageStatistiqueComponent,
       canActivate: [ApplicationGuardService],
     },
     {
       path: 'cheques',
       component: ArticlesComponent,
   canActivate: [ApplicationGuardService],
     },
     {
       path: 'nouvelcheque',
       component: NouvelArticleComponent,
   canActivate: [ApplicationGuardService],

     },
     {
       path: 'mvtsld',
       component: MvtsldComponent,
   canActivate: [ApplicationGuardService],

      },
     {
      path: 'clients',
      component: ClientComponent,
      canActivate: [ApplicationGuardService],

    },
     {
      path: 'nouveauclient',
      component: NouveauClientComponent,
      canActivate: [ApplicationGuardService],

    },
     {
       path: 'clientcmd',
       component: ClientcmdComponent,
       canActivate: [ApplicationGuardService],

      },
     {
      path: 'admins',
      component: AdminComponent,
      canActivate: [ApplicationGuardService],

    },
     {
      path: 'nouveauadmin',
      component: NouveauAdminComponent,
      canActivate: [ApplicationGuardService],

    },
     {
       path: 'categories',
       component: CategoriesComponent,
       canActivate: [ApplicationGuardService],

      },
     {
       path:'nouvellecategorie',
       component: NouvelleCategorieComponent,
       canActivate: [ApplicationGuardService],

      },
     {
       path:'page',
       component: PageProfilComponent,
       canActivate: [ApplicationGuardService],

      },
     {
       path:'changermdp',
       component: ChangerMdpComponent,
       canActivate: [ApplicationGuardService],
      },
      {
        path:'update/:id',
        component: UpdateComponent,
        canActivate: [ApplicationGuardService],
      },
      {
        path: 'details/:id',
        component: DetailsEditingComponent,
        canActivate: [ApplicationGuardService],
      }

   ]},
   {path:'profile-user',
   component: ProfileUserComponent,
   canActivate: [ApplicationGuardService],
   children: [
    {
      path:'cheques-user',
      component: ArticlesUserComponent,
      canActivate: [ApplicationGuardService],
     },
     {
       path:'mvtsld-user',
       component: MvtsldUserComponent,
      canActivate: [ApplicationGuardService],
     },
     {
       path:'categories-user',
       component: CategoriesUserComponent,
       canActivate: [ApplicationGuardService],
     },
     {
       path:'page-user',
       component: PageProfilUserComponent,
       canActivate: [ApplicationGuardService],
     },
     {
       path: 'changer-mdp-user',
       component: ChangerMdpUserComponent,
       canActivate: [ApplicationGuardService],
     }
   ]
   },
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
