import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './view/homepage/home/home.component';
import { CbseMendateComponent } from './view/cbse-mendate/cbse-mendate.component';
import { GalleryComponent } from './view/gallery/gallery.component';

const appRoute:Route[]=[
    {path:'',component:HomeComponent},
    {path:'cbse',component:CbseMendateComponent},
    {path:'about',loadChildren:'./modules/about.module#AboutModule'},
    {path:'facility',loadChildren:'./modules/facility.module#FacilityModule'},
    {path:'academic',loadChildren:'./modules/academic.module#AcademicModule'},
    {path:'student',loadChildren:'./modules/student.module#StudentModule'},
    {path:'gallery',component:GalleryComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(appRoute)],
    exports:[RouterModule]
})
export class AppRoutingModule{}