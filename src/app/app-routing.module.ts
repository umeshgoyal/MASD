import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './view/homepage/home/home.component';

const appRoute:Route[]=[
    {path:'',component:HomeComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(appRoute)],
    exports:[RouterModule]
})
export class AppRoutingModule{}