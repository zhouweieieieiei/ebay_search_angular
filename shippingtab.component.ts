import { Component, OnInit } from '@angular/core';
import { DetailService } from './detail.service';

@Component({
  selector: 'app-shippingtab',
  templateUrl: './shippingtab.component.html',
  styleUrls: ['./shippingtab.component.css']
})
export class ShippingtabComponent implements OnInit {

  constructor(public detailService: DetailService) { }

  ngOnInit() {
  }

  shippingcostjudge(item): boolean{
  	return item.hasOwnProperty("shippingInfo")&&item.shippingInfo[0].hasOwnProperty("shippingServiceCost")&&item.shippingInfo[0].shippingServiceCost[0].hasOwnProperty("__value__")
  }

  shippingcostnum(item): string{
  	var ship_cost = parseInt(item.shippingInfo[0].shippingServiceCost[0]["__value__"]);
	if(ship_cost == 0) return "Free Shipping";
	else return "$"+item.shippingInfo[0].shippingServiceCost[0]["__value__"];
  }

  shippinglocationjudge(item): boolean{
  	return item.hasOwnProperty("shippingInfo")&&item.shippingInfo[0].hasOwnProperty("shipToLocations");
  }

  shippinghandlingtimejudge(item): boolean{
  	return item.hasOwnProperty("shippingInfo")&&item.shippingInfo[0].hasOwnProperty("handlingTime");
  }

  shippinghandlingtimenum(item): string{
  	var handlingtime = parseInt(item.shippingInfo[0].handlingTime[0]);
  	if(handlingtime > 1) return item.shippingInfo[0].handlingTime[0]+" Days";
  	else return item.shippingInfo[0].handlingTime[0]+" Day";
  }

  shippingexpeditedshippingjudge(item): boolean{
  	return item.hasOwnProperty("shippingInfo")&&item.shippingInfo[0].hasOwnProperty("expeditedShipping");
  }

  shippingonedayshippingjudge(item): boolean{
  	return item.hasOwnProperty("shippingInfo")&&item.shippingInfo[0].hasOwnProperty("oneDayShippingAvailable");
  }

  shippingreturnacceptedjudge(item): boolean{
  	return item.hasOwnProperty("returnsAccepted");
  }
}
