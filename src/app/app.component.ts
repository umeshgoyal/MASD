import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import 'rxjs/add/observable/timer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy {
  showBook=true;
  private timer:Observable<any>;
  sub:Subscription;
ngOnInit(){
  this.setTimer();
}

onActivate(event) {
  window.scroll(0,0);
  //or document.body.scrollTop = 0;
  //or document.querySelector('body').scrollTo(0,0)
  
}
setTimer(){
  this.showBook=true;
  this.timer=Observable.timer(6000);
  this.sub=this.timer.subscribe(()=>{
    this.showBook=false;
    
  });
}
ngOnDestroy(){
  this.sub.unsubscribe();
}
}
