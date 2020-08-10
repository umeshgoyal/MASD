import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  fetchGallery(){
    return this.http.get<string>('http://masd.eskoool.com/webservice.asmx/GetBirthdayList');
  }
}
