import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { PageService } from './page.service';
import { HttpClient } from '@angular/common/http';
import { DetailService } from './detail.service';
import { SimilarService } from './similar.service';
import { SlidingcontrolService } from './slidingcontrol.service';
import { WishlistService } from './wishlist.service';
import { PhotoService } from './photo.service';
import { ProgressbarService } from './progressbar.service'

@Component({
  selector: 'app-resulttable',
  templateUrl: './resulttable.component.html',
  styleUrls: ['./resulttable.component.css']
})
export class ResulttableComponent implements OnInit {
  result = "";
  hoveringitem = "";
  selecteditem = "";
  constructor(public http: HttpClient, public searchService: SearchService, public pageService: PageService, public detailService: DetailService, public similarService: SimilarService, public slidingcontrolService: SlidingcontrolService, public wishlistService: WishlistService, public photoService: PhotoService, public progressbarService: ProgressbarService) { }

  ngOnInit() {
  }

  receiveresult(searchresult): void{
  	this.result = searchresult;
  }
  imagejudge(item): boolean{
  	return item.hasOwnProperty("galleryURL");
  }
  titlejudge(item): string{
  	if(item.hasOwnProperty("title")) {
      var title = item.title[0];
      if(title.length>35){
        title = title.slice(0, 35);
        title = title.slice(0, title.lastIndexOf(' '));
        title+=' ...';
      }
      return title;
    }
  	else return "N/A";
  }
  pricejudge(item): string{
  	if(item.hasOwnProperty("sellingStatus")&&item.sellingStatus[0].hasOwnProperty("currentPrice")&&item.sellingStatus[0].currentPrice[0].hasOwnProperty("__value__")) return "$"+item.sellingStatus[0].currentPrice[0]["__value__"];
  	else return "N/A";
  }

  hovering(item) {
    this.hoveringitem = item.itemId[0];
  }

  unhovering() {
    this.hoveringitem = "";
  }

  shippingjudge(item): string{
  	if(item.hasOwnProperty("shippingInfo")&&item.shippingInfo[0].hasOwnProperty("shippingServiceCost")&&item.shippingInfo[0].shippingServiceCost[0].hasOwnProperty("__value__")){
  		var ship_cost = parseInt(item.shippingInfo[0].shippingServiceCost[0]["__value__"]);
		if(ship_cost == 0) return "Free Shipping";
		else return "$"+item.shippingInfo[0].shippingServiceCost[0]["__value__"];
  	}
  	else return "N/A";	
  }
  zipjudge(item): string{
  	if(item.hasOwnProperty("postalCode")) return item.postalCode[0];
  	else return "N/A";
  }
  sellerjudge(item): string{
  	if(item.hasOwnProperty("sellerInfo")&&item.sellerInfo[0].hasOwnProperty("sellerUserName")) return item.sellerInfo[0].sellerUserName[0].toUpperCase();
  	else return "N/A";
  }
  requestdetail(item): void{
    this.progressbarService.setsign(true);
    console.log(item.itemId[0]);
    this.selecteditem = item.itemId[0];
    this.http.get("http://hw8571serverside-env.s84muegm5z.us-west-1.elasticbeanstalk.com/detail", {params: JSON.parse(JSON.stringify({"itemID": item.itemId[0]}))}).subscribe(res => {
      console.log(res);
      this.detailService.receivemessage(item, res);
    }); 
    this.http.get("http://hw8571serverside-env.s84muegm5z.us-west-1.elasticbeanstalk.com/similar", {params: JSON.parse(JSON.stringify({"itemID": item.itemId[0]}))}).subscribe(res => {
      console.log(res);
      this.similarService.receivemessage(item, res);
    }); 
    this.http.get("http://hw8571serverside-env.s84muegm5z.us-west-1.elasticbeanstalk.com/photos", {params: JSON.parse(JSON.stringify({"title": item.title[0]}))}).subscribe(res => {
      console.log(res);
      this.photoService.receivephotos(res["items"]);
    });
    this.progressbarService.setsign(false);
    this.slidingcontrolService.changevisiblestate(true);
  }
}
