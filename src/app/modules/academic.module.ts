import { NgModule } from '@angular/core';
import { AcademicComponent } from '../view/academic/academic.component';
import { FeeStructureComponent } from '../view/academic/fee-structure/fee-structure.component';
import { CurriculumComponent } from '../view/academic/curriculum/curriculum.component';
import { SeminarComponent } from '../view/academic/seminar/seminar.component';
import { FacultyComponent } from '../view/academic/faculty/faculty.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AcademicRoutingModule } from './academic-routing.module';

import { LoaderModule } from './loader/loader.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
    declarations:[

    AcademicComponent,
    FeeStructureComponent,
    CurriculumComponent,
    SeminarComponent,
    FacultyComponent
    ],
    imports:[
        RouterModule,
        CommonModule,
        AcademicRoutingModule,
        PdfViewerModule,
        LoaderModule
    ]
})
export class AcademicModule{}