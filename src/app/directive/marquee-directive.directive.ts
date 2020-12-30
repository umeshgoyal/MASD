import {AfterViewInit, Directive, ElementRef, HostListener, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[appMarqueeDirective]'
})
export class MarqueeDirectiveDirective implements OnInit ,AfterViewInit{
  scrWidth:any;
  constructor(private elRef:ElementRef) { }
  ngOnInit(){
   
  }
  
    
  ngAfterViewInit(){
    // this.elRef.nativeElement.start();
  }
  
  @HostListener('load') onload(eventData:Event){
    
      this.elRef.nativeElement.start();
    
   
  }
  
  
  @HostListener('mouseenter') mouseenter(eventData:Event){
    this.scrWidth = window.innerWidth;
    if(this.scrWidth>420){
      this.elRef.nativeElement.stop();
    }
   
  }
  @HostListener('mouseleave') mouseleave(eventData:Event){
    if(this.scrWidth>420){
      this.elRef.nativeElement.start();
    }
    
  }

}
