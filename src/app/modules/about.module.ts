import { NgModule } from '@angular/core';
import { AboutSchoolComponent } from '../view/about-school/about-school.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about-routing.module';
import { AboutMasdComponent } from '../view/about-school/about-masd/about-masd.component';
import { AboutWhyComponent } from '../view/about-school/about-why/about-why.component';
import { HistoryComponent } from '../view/about-school/history/history.component';
import { CMessageComponent } from '../view/about-school/c-message/c-message.component';
import { VcMessageComponent } from '../view/about-school/vc-message/vc-message.component';
import { AuditorMessageComponent } from '../view/about-school/auditor-message/auditor-message.component';
import { PrincipalComponent } from '../view/about-school/principal/principal.component';

@NgModule({
    declarations:[
        AboutSchoolComponent,
        AboutMasdComponent,
        AboutWhyComponent,
        HistoryComponent,
        CMessageComponent,
        VcMessageComponent,
        AuditorMessageComponent,
        PrincipalComponent
    ],
    imports:[
        RouterModule,
        CommonModule,
        AboutRoutingModule
    ]
})
export class AboutModule{}