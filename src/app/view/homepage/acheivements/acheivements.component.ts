import { Component, OnInit } from '@angular/core';
import {counterUp} from 'jquery.counterup';
declare var $:any;
@Component({
  selector: 'app-acheivements',
  templateUrl: './acheivements.component.html',
  styleUrls: ['./acheivements.component.scss']
})
export class AcheivementsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   this.counterQuery();
  }
  counterQuery(){
    $(".counter").counterUp(
      {
        delay:10,
        time:1000
      }
    );
  }

}
