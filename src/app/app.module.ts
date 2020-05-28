import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './view/header/header.component';
import { ShowcaseComponent } from './view/homepage/showcase/showcase.component';
import { HomeComponent } from './view/homepage/home/home.component';
import { AboutUsComponent } from './view/homepage/aboutUs/about-us/about-us.component';
import { AppRoutingModule } from './app-routing.module';
import { FacilitiesComponent } from './view/homepage/facilities/facilities.component';
import { FooterComponent } from './view/footer/footer.component';
import { AboutModule } from './modules/about.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShowcaseComponent,
    HomeComponent,
    AboutUsComponent,
    FacilitiesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
