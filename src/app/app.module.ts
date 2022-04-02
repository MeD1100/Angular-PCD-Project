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
import { DashboardAllComponent } from './dashboard/dashboard-all/dashboard-all.component';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DragScrollModule } from 'ngx-drag-scroll';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';

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
    DashboardAllComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DragScrollModule,
    MatCardModule,
    MatButtonModule,
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
