import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentCornerComponent } from '../view/student-corner/student-corner.component';
import { SyllabusComponent } from '../view/student-corner/syllabus/syllabus.component';
import { SummerComponent } from '../view/student-corner/summer/summer.component';
import { WinterComponent } from '../view/student-corner/winter/winter.component';
import { MealChartComponent } from '../view/student-corner/meal-chart/meal-chart.component';
import { DateSheetComponent } from '../view/student-corner/date-sheet/date-sheet.component';

const routes:Routes=[
    {path:'',component:StudentCornerComponent,children:[
        {path:'syllabus',component:SyllabusComponent},
        {path:'summer',component:SummerComponent},
        {path:'winter',component:WinterComponent},
        {path:'meal-chart',component:MealChartComponent},
        {path:'date-sheet',component:DateSheetComponent}
    ]}
];
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[
        RouterModule
    ]
})
export class StudentRoutingModule{}