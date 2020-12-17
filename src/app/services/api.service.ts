import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Birthday } from '../models/birthday.model';
import { AboutService } from './about.service';
import { News } from '../models/news.model';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient,private aboutService:AboutService) { }

  fetchBirthday(){
    return this.http.get<Birthday[]>('http://masd.eskoool.com/webservice.asmx/GetBirthdayList?schoolid=1').subscribe((birthday)=>{
    this.aboutService.setBirthday(birthday);
    });
  }

  fetchNews(){
    return this.http.get<News[]>('http://masd.eskoool.com/webservice.asmx/GetEventNews?strschoolid=1&strtype=news').subscribe((news)=>{
      this.aboutService.setNews(news);
      });
  }
}
