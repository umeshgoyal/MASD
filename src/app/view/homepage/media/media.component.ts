import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

declare var $:any;

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {
  result='';
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.fetchGallery().subscribe((response)=>{
      console.log(response);
    });
  }
  
}
