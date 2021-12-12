import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fee-structure',
  templateUrl: './fee-structure.component.html',
  styleUrls: ['./fee-structure.component.scss']
})
export class FeeStructureComponent implements OnInit {
  pdfSrc='/assets/pdf/fee_structure.pdf';
  isLoading=true;
  constructor() { }

  ngOnInit(): void {
  }
  hideLoader(){
    this.isLoading=false;
  }
}
