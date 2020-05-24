import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './view/header/header.component';
import { ShowcaseComponent } from './view/homepage/showcase/showcase.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShowcaseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
