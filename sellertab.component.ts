import { Component, OnInit } from '@angular/core';
import { DetailService } from './detail.service';

@Component({
  selector: 'app-sellertab',
  templateUrl: './sellertab.component.html',
  styleUrls: ['./sellertab.component.css']
})
export class SellertabComponent implements OnInit {

  constructor(public detailService: DetailService) { }

  ngOnInit() {
  }

  sellerjudge(item): boolean{
    return item.hasOwnProperty("Seller")&&item.Seller.hasOwnProperty("UserID");
  }

  sellerfeedbackscorejudge(item): boolean{
  	return item.hasOwnProperty("sellerInfo")&&item.sellerInfo[0].hasOwnProperty("feedbackScore");
  }

  sellerpopularityjudge(item): boolean{
  	return item.hasOwnProperty("sellerInfo")&&item.sellerInfo[0].hasOwnProperty("positiveFeedbackPercent");
  }

  sellerfeedbackratingstarscorejudge(item): boolean{
  	return item.hasOwnProperty("sellerInfo")&&item.sellerInfo[0].hasOwnProperty("feedbackRatingStar");
  }

  sellerfeedbackratingstarstylejudge(item): number{
  	var score = parseInt(item.sellerInfo[0].feedbackScore[0]);
  	if(score<=9) return 0;
  	if(score<=49) return 1;
  	if(score<=99) return 2;
  	if(score<=499) return 3;
  	if(score<=999) return 4;
  	if(score<=4999) return 5;
  	if(score<=9999) return 6;
  	if(score<=24999) return 7;
  	if(score<=49999) return 8;
  	if(score<=99999) return 9;
  	if(score<=499999) return 10;
  	if(score<=999999) return 11;
  	return 12;
  }

  sellertopratedjudge(item): boolean{
  	return item.hasOwnProperty("sellerInfo")&&item.sellerInfo[0].hasOwnProperty("topRatedSeller");
  }

  sellerstorenamejudge(item): boolean{
  	return item.hasOwnProperty("storeInfo")&&item.storeInfo[0].hasOwnProperty("storeName");
  }

  sellerbuyproductatjudge(item): boolean{
  	return item.hasOwnProperty("storeInfo")&&item.storeInfo[0].hasOwnProperty("storeURL");
  }
}
