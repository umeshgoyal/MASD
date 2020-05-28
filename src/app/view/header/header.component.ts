import { Component, OnInit, ViewChild } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
   this.stickyQuery();
  }
  stickyQuery(){
    $(document).ready(function() {
  
      $(window).scroll(function () {
          //if you hard code, then use console
          //.log to determine when you want the 
          //nav bar to stick.  
          console.log($(window).scrollTop())
        if ($(window).scrollTop() > 122) {
          $('#menu-header').addClass('sticky');
        }
        if ($(window).scrollTop() < 123) {
          $('#menu-header').removeClass('sticky');
        }
      });
    });
    
  }
  

}
