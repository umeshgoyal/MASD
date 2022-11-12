import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SlcService } from 'src/app/services/slc/slc.service';
declare var $:any;
@Component({
  selector: 'app-slc',
  templateUrl: './slc.component.html',
  styleUrls: ['./slc.component.scss']
})
export class SlcComponent implements OnInit {

  term: string;
  caption:string='';
  slcList:{admission:string}[]=[];
  isApproved:string='';
  alert=false;
  message:string;
  constructor(private service:SlcService) { }

  ngOnInit(): void {
    this.slcList = this.service.getSlc();
    $('.detail').hide();
  }
  onSubmit(form:NgForm){
    $('.detail').hide();
    this.alert=false;
    if(form.invalid){
      return null;
    }
    const id=form.value.search;
    let slc = this.slcList.find(item=>item.admission===id);
    if(slc){
        $('.detail').show();
        this.caption=id;
        this.isApproved='SLC ISSUED';
        form.reset();
    }
    else{
        this.alert=true;
        form.reset();
    }
  }
}
