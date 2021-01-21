import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './view/homepage/home/home.component';
import { CbseMendateComponent } from './view/cbse-mendate/cbse-mendate.component';
import { GalleryComponent } from './view/gallery/gallery.component';
import { RegistrationComponent } from './view/shared/registration/registration.component';

const appRoute:Route[]=[
    {path:'',component:HomeComponent},
    {path:'cbse',component:CbseMendateComponent},
    {path:'about',loadChildren:'./modules/about.module#AboutModule'},
    {path:'facility',loadChildren:'./modules/facility.module#FacilityModule'},
    {path:'academic',loadChildren:'./modules/academic.module#AcademicModule'},
    {path:'student',loadChildren:'./modules/student.module#StudentModule'},
    {path:'link',loadChildren:'./modules/link.module#LinkModule'},
    {path:'gallery',component:GalleryComponent},
    {path:'registration',component:RegistrationComponent},
    {path:'**',redirectTo:'',pathMatch:'full'}
    
];

@NgModule({
    imports:[RouterModule.forRoot(appRoute)],
    exports:[RouterModule]
})
export class AppRoutingModule{}