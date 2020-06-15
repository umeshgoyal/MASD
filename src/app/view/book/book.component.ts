import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
declare var $:any;
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    this.query();
  }
  query(){
    setTimeout(function(){ 
      $(".book-preload").hide(); 
      
    }, 6000);
  }

}
