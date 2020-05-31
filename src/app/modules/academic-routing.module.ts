import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcademicComponent } from '../view/academic/academic.component';
import { FeeStructureComponent } from '../view/academic/fee-structure/fee-structure.component';
import { CurriculumComponent } from '../view/academic/curriculum/curriculum.component';
import { SeminarComponent } from '../view/academic/seminar/seminar.component';
import { FacultyComponent } from '../view/academic/faculty/faculty.component';

const routes: Routes=[
    {path:'',component:AcademicComponent,children:[
        {path:'fee',component:FeeStructureComponent},
        {path:'curriculum',component:CurriculumComponent},
        {path:'seminar',component:SeminarComponent},
        {path:'faculty',component:FacultyComponent}
    ]}
];
@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ]
})
export class AcademicRoutingModule{}