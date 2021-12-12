import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from 'src/app/view/shared/loader/loader.component';



@NgModule({
  declarations: [
    LoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoaderComponent
  ]
})
export class LoaderModule { }
