import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutSchoolComponent } from '../view/about-school/about-school.component';
import { AboutMasdComponent } from '../view/about-school/about-masd/about-masd.component';
import { AboutWhyComponent } from '../view/about-school/about-why/about-why.component';
import { HistoryComponent } from '../view/about-school/history/history.component';
import { CMessageComponent } from '../view/about-school/c-message/c-message.component';
import { VcMessageComponent } from '../view/about-school/vc-message/vc-message.component';
import { PrincipalComponent } from '../view/about-school/principal/principal.component';
import { AuditorMessageComponent } from '../view/about-school/auditor-message/auditor-message.component';

const route:Routes=[
    {path:'about',component:AboutSchoolComponent,children:[
        {path:'masd',component:AboutMasdComponent},
        {path:'why-masd',component:AboutWhyComponent},
        {path:'history',component:HistoryComponent},
        {path:'chairman-message',component:CMessageComponent},
        {path:'viceChairman-message',component:VcMessageComponent},
        {path:'auditor-message',component:AuditorMessageComponent},
        {path:'principal',component:PrincipalComponent}
    ]}
];
@NgModule({
    imports:[RouterModule.forChild(route)],
    exports:[RouterModule]
})
export class AboutRoutingModule{}