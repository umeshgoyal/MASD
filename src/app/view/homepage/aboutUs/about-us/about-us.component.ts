import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {Birthday} from 'src/app/models/birthday.model';
import { AboutService } from 'src/app/services/about.service';
import { News } from 'src/app/models/news.model';
import { Subscription } from 'rxjs';
declare var $:any;

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit,OnDestroy {
@ViewChild('myNews',{static:false}) myNews:ElementRef;
  

  constructor(private aboutService:AboutService) { }
  birthdays:Birthday[]=this.aboutService.getBirthday();
  news:News[]=[];
  newsUrl:string[]=['https://drive.google.com/file/d/1o542fvrnIrI9oC5MvsTHEzPTtlKZ3TYR/view?usp=sharing','https://drive.google.com/file/d/1LqfB-UQNvtmlu2Pte3QrqFAH1Tk6peY5/view?usp=sharing'];

  private subs:Subscription[]=[];
  ngOnInit(): void {
    this.subs.push(this.aboutService.birthdayChanged.subscribe(birthday=>{
      this.birthdays=birthday;
    }));
    this.birthdays=this.aboutService.getBirthday();
    this.news=this.aboutService.getNews();
    this.subs.push(this.aboutService.newChanged.subscribe(news=>{
      this.news=news.reverse();
      
    }));
   
  }
  
//   customDates(args){
//     if (args.date.getDay() === 0 || args.date.getDay() === 6) {
//       //set 'true' to disable the weekends
//       args.isDisabled = true;
//     }
//     let span: HTMLElement;
//     //defines the custom HTML element to be added.
//     span = document.createElement('span');
//     //Use "e-icons" class name to load Essential JS 2 built-in icons.
//     span.setAttribute('class', 'e-icons highlight-day');
//     if (+args.date.getDate() === 14 && +args.date.getMonth() === 6) {
//         //append the span element to day cell.
//         args.element.appendChild(span);
//         //set the custom tooltip to the special dates.
//         args.element.setAttribute('title', 'Ambedkar Jayanti Holiday');
//         console.log(args.date.getMonth());
//         //Use "special" class name to highlight the special dates, which you can refer in "styles.css".
//         args.element.className = 'special';
//     }
//     if (+args.date.getDate() === 13 && +args.date.getMonth() == 6) {
//         args.element.appendChild(span);
//         args.element.className = 'special';
//         //set the custom tooltip to the special dates.
//         args.element.setAttribute('title', 'Baisakhi Holiday');
//     }
//     if (+args.date.getDate() === 3 && +args.date.getMonth() == 8) {
//       args.element.appendChild(span);
//       args.element.className = 'special';
//       //set the custom tooltip to the special dates.
//       args.element.setAttribute('title', 'Raksha Bandhan');
//   }
//   if (+args.date.getDate() === 15 && +args.date.getMonth() == 8) {
//     args.element.appendChild(span);
//     args.element.className = 'special';
//     //set the custom tooltip to the special dates.
//     args.element.setAttribute('title', 'Independence Day');
// }
// if (+args.date.getDate() === 14 && +args.date.getMonth() == 11) {
//   args.element.appendChild(span);
//   args.element.className = 'special';
//   //set the custom tooltip to the special dates.
//   args.element.setAttribute('title', 'Diwali');
// }

//   }
ngOnDestroy(){
  this.subs.forEach(s=>s.unsubscribe());
}
}
