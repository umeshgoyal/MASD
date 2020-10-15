import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
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
      
        if ($(window).scrollTop() > 122) {
          $('#menu-header').addClass('sticky');
        }
        if ($(window).scrollTop() < 123) {
          $('#menu-header').removeClass('sticky');
        }
      });
    });
    
  }
  openParentLogin(){
    window.open('http://masd.eskoool.com/studentlogin.aspx','_blank');
  }
  openERPLogin(){
    window.open('http://masd.eskoool.com/','_blank');
  }
  

}
