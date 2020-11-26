import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  toHomework(){
    this.router.navigate(['/student/summer']);
    window.scrollTo(0,0);
  }
  toSyllabus(){
    this.router.navigate(['/student/syllabus']);
    window.scrollTo(0,0);
  }
}
