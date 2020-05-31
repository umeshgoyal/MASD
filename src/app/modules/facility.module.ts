import { NgModule } from '@angular/core';
import { FacilityComponent } from '../view/facility/facility.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FacilityRoutingModule } from './facility-routing.module';
import { ChemistryComponent } from '../view/facility/chemistry/chemistry.component';
import { SmartClassComponent } from '../view/facility/smart-class/smart-class.component';
import { SwimmingPoolComponent } from '../view/facility/swimming-pool/swimming-pool.component';
import { MathLabComponent } from '../view/facility/math-lab/math-lab.component';
import { ArtLabComponent } from '../view/facility/art-lab/art-lab.component';
import { RoboticsComponent } from '../view/facility/robotics/robotics.component';
import { PhysicsComponent } from '../view/facility/physics/physics.component';
import { BiologyComponent } from '../view/facility/biology/biology.component';
import { MusicComponent } from '../view/facility/music/music.component';

@NgModule({
    declarations:[
        FacilityComponent,
        ChemistryComponent,
        SmartClassComponent,
        SwimmingPoolComponent,
        MathLabComponent,
        ArtLabComponent,
        RoboticsComponent,
        PhysicsComponent,
        BiologyComponent,
        MusicComponent
    ],
    imports:[
        RouterModule,
        CommonModule,
        FacilityRoutingModule
    ]
})
export class FacilityModule{}