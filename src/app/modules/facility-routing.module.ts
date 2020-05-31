import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacilityComponent } from '../view/facility/facility.component';
import { ChemistryComponent } from '../view/facility/chemistry/chemistry.component';
import { SmartClassComponent } from '../view/facility/smart-class/smart-class.component';
import { SwimmingPoolComponent } from '../view/facility/swimming-pool/swimming-pool.component';
import { MathLabComponent } from '../view/facility/math-lab/math-lab.component';
import { ArtLabComponent } from '../view/facility/art-lab/art-lab.component';
import { RoboticsComponent } from '../view/facility/robotics/robotics.component';
import { PhysicsComponent } from '../view/facility/physics/physics.component';
import { BiologyComponent } from '../view/facility/biology/biology.component';
import { MusicComponent } from '../view/facility/music/music.component';

const routes:Routes=[
    {path:'',component:FacilityComponent,children:[
        {path:'chemistry-lab',component:ChemistryComponent},
        {path:'smart-class',component:SmartClassComponent},
        {path:'pool',component:SwimmingPoolComponent},
        {path:'math-lab',component:MathLabComponent},
        {path:'art-lab',component:ArtLabComponent},
        {path:'robotics-lab',component:RoboticsComponent},
        {path:'physics-lab',component:PhysicsComponent},
        {path:'biology-lab',component:BiologyComponent},
        {path:'music',component:MusicComponent}
    ]}
];
@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
})
export class FacilityRoutingModule{}