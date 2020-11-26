import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { BookListComponent } from '../view/useful-link/book-list/book-list.component';
import { LinkComponent } from '../view/useful-link/link/link.component';
import { LinkRoutingModule } from './link-routing.module';

@NgModule({
    declarations:[
        LinkComponent,
        BookListComponent
        
    ],
    imports:[
        CommonModule,
        RouterModule,
        BrowserModule,
        LinkRoutingModule
    ]
})
export class LinkModule{}