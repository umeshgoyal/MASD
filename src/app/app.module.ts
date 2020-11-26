import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './view/header/header.component';
import { ShowcaseComponent } from './view/homepage/showcase/showcase.component';
import { HomeComponent } from './view/homepage/home/home.component';
import { AboutUsComponent } from './view/homepage/aboutUs/about-us/about-us.component';
import { AppRoutingModule } from './app-routing.module';
import { FacilitiesComponent } from './view/homepage/facilities/facilities.component';
import { FooterComponent } from './view/footer/footer.component';
import { AboutModule } from './modules/about.module';
import { CbseMendateComponent } from './view/cbse-mendate/cbse-mendate.component';
import { FacilityModule } from './modules/facility.module';
import { AcademicModule } from './modules/academic.module';
import { StudentModule } from './modules/student.module';
import { AcheivementsComponent } from './view/homepage/acheivements/acheivements.component';
import { MediaComponent } from './view/homepage/media/media.component';
import { TestimonialComponent } from './view/homepage/testimonial/testimonial.component';
import { GalleryComponent } from './view/gallery/gallery.component';
import { BookComponent } from './view/book/book.component';
import { HttpClientModule } from '@angular/common/http';
import { LinkModule } from './modules/link.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShowcaseComponent,
    HomeComponent,
    AboutUsComponent,
    FacilitiesComponent,
    FooterComponent,
    CbseMendateComponent,
    AcheivementsComponent,
    MediaComponent,
    TestimonialComponent,
    GalleryComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    FacilityModule,
    AcademicModule,
    StudentModule,
    CalendarModule,
    HttpClientModule,
    LinkModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
