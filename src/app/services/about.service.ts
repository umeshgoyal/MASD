import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Birthday } from '../models/birthday.model';
import { News } from '../models/news.model';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  private birthdays:Birthday[]=[];
  birthdayChanged=new Subject<Birthday[]>();
  private news:News[]=[];
  newChanged=new Subject<News[]>();
  constructor() { }

  setBirthday(birthday:Birthday[]){
    this.birthdays=birthday;
    this.birthdayChanged.next(this.birthdays.slice());
  }
  getBirthday(){
    return this.birthdays;
  }
  setNews(news:News[]){
    this.news=news;
    this.newChanged.next(this.news.slice());
  }
  getNews(){
    return this.news;
  }

}
