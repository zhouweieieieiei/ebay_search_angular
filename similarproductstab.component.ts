import { Component, OnInit } from '@angular/core';
import { SimilarService } from './similar.service';
@Component({
  selector: 'app-similarproductstab',
  templateUrl: './similarproductstab.component.html',
  styleUrls: ['./similarproductstab.component.css']
})
export class SimilarproductstabComponent implements OnInit {
  ordercategory = "Default";
  orderstyle = "Ascending";
  showitemnum = 5;
  constructor(public similarService: SimilarService) { }

  ngOnInit() {
  }

  extractleftdays(item): string{
  	return item.timeLeft.split('P').pop().split('D')[0];
  }

  showmoreitems(): void{
  	this.showitemnum = 20;
  }

  showlessitems(): void{
  	this.showitemnum = 5;
  }

  ordercategorychange(): void{
  	this.similarService.showmessageschange(this.ordercategory, this.orderstyle);
  }

  orderstylechange(): void{
  	this.similarService.showmessageschange(this.ordercategory, this.orderstyle);
  }
}
