import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SignupComponent } from './authentification/signup/signup.component';
import { LoginComponent } from './authentification/login/login.component';
import { BannerComponent } from './sharepage/banner/banner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@Angular/material/icon';
import {MatButtonModule} from '@Angular/material/button';
import { BanksComponent } from './sharepage/banks/banks.component';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DragScrollModule } from 'ngx-drag-scroll';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './pages/profile/menu/menu.component';
import { PageStatistiqueComponent } from './pages/profile/page-statistique/page-statistique.component';
import { HeaderComponent } from './pages/profile/header/header/header.component';
import { DetailArticleComponent } from './pages/profile/articles/detail-article/detail-article.component';
import { NouvelArticleComponent } from './pages/profile/articles/articles/nouvel-article/nouvel-article.component';
import { ArticlesComponent } from './pages/profile/articles/articles/articles/articles.component';
import { MvtsldComponent } from './pages/profile/mvtsld/mvtsld.component';
import { DetailMvtsldComponent } from './pages/profile/mvtsld/detail-mvtsld/detail-mvtsld.component';
import { PaginationComponent } from './pages/profile/Pagination/pagination/pagination.component';
import { ClientComponent } from './pages/profile/clients/client/client.component';
import { DetailClienComponent } from './pages/profile/clients/detail-clien/detail-clien.component';
import { DetailMvtsldHistoComponent } from './pages/profile/mvtsld/detail-mvtsld-histo/detail-mvtsld-histo.component';
import { NouveauClientComponent } from './pages/profile/clients/nouveau-client/nouveau-client.component';
import { DetailCmdClientComponent } from './pages/profile/clients/detail-cmd-client/detail-cmd-client.component';
import { DetailCmdClientHistoComponent } from './pages/profile/clients/detail-cmd-client-histo/detail-cmd-client-histo.component';
import { ClientcmdComponent } from './pages/profile/clients/clientcmd.component';
import { BouttonActionComponent } from './pages/profile/boutton-action/boutton-action.component';
import { CategoriesComponent } from './pages/profile/categories/categories.component';
import { NouvelleCategorieComponent } from './pages/profile/categories/nouvelle-categorie/nouvelle-categorie.component';
import { ChangerMdpComponent } from './pages/profile/changer-mdp/changer-mdp.component';
import { PageProfilComponent } from './pages/profile/page-profil/page-profil.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AdminComponent } from './pages/profile/admins/admin/admin.component';
import { DetailAdminComponent } from './pages/profile/admins/detail-admin/detail-admin.component';
import { NouveauAdminComponent } from './pages/profile/admins/nouveau-admin/nouveau-admin.component';
import { ProfileUserComponent } from './pages/profile-user/profile-user.component';
import { MenuUserComponent } from './pages/profile-user/menu/menu-user/menu-user.component';
import { ArticlesUserComponent } from './pages/profile-user/articles-user/articles-user/articles-user/articles-user.component';
import { DetailArticleUserComponent } from './pages/profile-user/articles-user/detail-article-user/detail-article-user.component';
import { MvtsldUserComponent } from './pages/profile-user/mvtsld-user/mvtsld-user.component';
import { DetailMvtsldUserComponent } from './pages/profile-user/mvtsld-user/detail-mvtsld-user/detail-mvtsld-user.component';
import { DetailMvtsldHistoUserComponent } from './pages/profile-user/mvtsld-user/detail-mvtsld-histo-user/detail-mvtsld-histo-user.component';
import { CategoriesUserComponent } from './pages/profile-user/categories-user/categories-user.component';
import { HeaderUserComponent } from './pages/profile-user/header-user/header-user.component';
import { PageProfilUserComponent } from './pages/profile-user/page-profil-user/page-profil-user.component';
import { ChangerMdpUserComponent } from './pages/profile-user/changer-mdp-user/changer-mdp-user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxUiLoaderModule, NgxUiLoaderConfig, SPINNER, POSITION,PB_DIRECTION, NgxUiLoaderRouterModule, NgxUiLoaderHttpModule } from 'ngx-ui-loader';
import { UpdateComponent } from './pages/profile/update/update.component';
import { DetailsEditingComponent } from './pages/profile/update/details-editing/details-editing.component';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: "#008aff",
  bgsOpacity: 0.5,
  bgsPosition: "bottom-right",
  bgsSize: 60,
  bgsType: "ball-spin-clockwise",
  blur: 5,
  delay: 0,
  fastFadeOut: true,
  fgsColor: "#008aff",
  fgsPosition: "center-center",
  fgsSize: 60,
  fgsType: "ball-spin-clockwise",
  gap: 24,
  logoPosition: "center-center",
  logoSize: 120,
  logoUrl: "assets/images/Dollar-logo-on-transparent-background-PNG.png",
  masterLoaderId: "master",
  overlayBorderRadius: "0",
  overlayColor: "rgba(40, 40, 40, 0.8)",
  pbColor: "#008aff",
  pbDirection: "ltr",
  pbThickness: 3,
  hasProgressBar: true
  };


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SignupComponent,
    LoginComponent,
    BannerComponent,
    BanksComponent,
    MenuComponent,
    PageStatistiqueComponent,
    HeaderComponent,
    ArticlesComponent,
    DetailArticleComponent,
    NouvelArticleComponent,
    MvtsldComponent,
    DetailMvtsldComponent,
    PaginationComponent,
    DetailMvtsldHistoComponent,
    DetailClienComponent,
    ClientComponent,
    NouveauClientComponent,
    DetailCmdClientComponent,
    DetailCmdClientHistoComponent,
    ClientcmdComponent,
    BouttonActionComponent,
    CategoriesComponent,
    NouvelleCategorieComponent,
    ChangerMdpComponent,
    PageProfilComponent,
    AdminComponent,
    DetailAdminComponent,
    NouveauAdminComponent,
    ProfileUserComponent,
    MenuUserComponent,
    ArticlesUserComponent,
    DetailArticleUserComponent,
    MvtsldUserComponent,
    DetailMvtsldUserComponent,
    DetailMvtsldHistoUserComponent,
    CategoriesUserComponent,
    HeaderUserComponent,
    PageProfilUserComponent,
    ChangerMdpUserComponent,
    UpdateComponent,
    DetailsEditingComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DragScrollModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatIconModule,
    MDBBootstrapModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyBzpYcXpT2lLSHW90qVD_LLIbIfW6418a8',
      libraries: ['places']
    }),
    NgbModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderRouterModule.forRoot({
      showForeground: false,
    })
    ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
