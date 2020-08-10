import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meal-chart',
  templateUrl: './meal-chart.component.html',
  styleUrls: ['./meal-chart.component.scss']
})
export class MealChartComponent implements OnInit {

  currentYear:number=new Date().getFullYear();
  nxtYear:number=new Date().getFullYear()+1;
  constructor() { }

  ngOnInit(): void {
  }

}
