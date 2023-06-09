import { NgModule } from '@angular/core';
import { StudentCornerComponent } from '../view/student-corner/student-corner.component';
import { SyllabusComponent } from '../view/student-corner/syllabus/syllabus.component';
import { SummerComponent } from '../view/student-corner/summer/summer.component';
import { WinterComponent } from '../view/student-corner/winter/winter.component';
import { MealChartComponent } from '../view/student-corner/meal-chart/meal-chart.component';
import { DateSheetComponent } from '../view/student-corner/date-sheet/date-sheet.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing.module';
import { SlcComponent } from '../view/student-corner/slc/slc.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations:[
        StudentCornerComponent,
        SyllabusComponent,
        SummerComponent,
        WinterComponent,
        MealChartComponent,
        DateSheetComponent,
        SlcComponent
    ],
    imports:[
        RouterModule,
        CommonModule,
        StudentRoutingModule,
        FormsModule
    ]
})
export class StudentModule{}