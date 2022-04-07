import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
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
    DetailCmdClientComponent
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
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
