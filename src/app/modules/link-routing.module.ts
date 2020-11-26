import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { BookListComponent } from '../view/useful-link/book-list/book-list.component';
import { LinkComponent } from '../view/useful-link/link/link.component';

const route:Route[]=[
    {path:'',component:LinkComponent,children:[
        {path:'book-list',component:BookListComponent}
    ]}
];
@NgModule({
    imports:[
        RouterModule.forChild(route)
    ],
    exports:[RouterModule]
})
export class LinkRoutingModule{}