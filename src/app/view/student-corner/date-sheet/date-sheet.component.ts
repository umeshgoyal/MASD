import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-sheet',
  templateUrl: './date-sheet.component.html',
  styleUrls: ['./date-sheet.component.scss']
})
export class DateSheetComponent implements OnInit {
 currentYear:number=new Date().getFullYear();
 nxtYear:number=new Date().getFullYear()+1;

  constructor() { }

  ngOnInit(): void {
    console.log(this.currentYear);
    console.log(this.nxtYear);
  }

}
