import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimilarService {
  defaultmessages = new Array();
  showmessages = new Array();
  item = "";
  similaritemnum = 0;
  constructor() { }
  receivemessage(item, messages): void{
  	this.item =item;
    if(messages.hasOwnProperty("getSimilarItemsResponse")&&messages.getSimilarItemsResponse.hasOwnProperty("ack")&&messages.getSimilarItemsResponse.ack=="Success"){
      this.similaritemnum = messages.getSimilarItemsResponse.itemRecommendations.item.length;
      this.defaultmessages = messages.getSimilarItemsResponse.itemRecommendations.item;
      this.showmessages = this.defaultmessages.slice(0);
    }
    else this.similaritemnum = 0;
  }

  showmessageschange(ordercategory, orderstyle): void{
    if(ordercategory == "Default"){
      this.showmessages = this.defaultmessages.slice(0);
    }
    if(ordercategory == "Product Name"){
      this.showmessages = this.defaultmessages.slice(0);
      if(orderstyle == "Ascending"){
        this.showmessages = this.showmessages.sort(function(obj1, obj2){
          if(obj1.title>obj2.title) return 1;
          if(obj1.title<obj2.title) return -1;
          return 0;
        });
      }
      else {
        this.showmessages = this.showmessages.sort(function(obj1, obj2){
          if(obj1.title>obj2.title) return -1;
          if(obj1.title<obj2.title) return 1;
          return 0;
        });
      }
    }
    if(ordercategory == "Days Left"){
      this.showmessages = this.defaultmessages.slice(0);
      if(orderstyle == "Ascending"){
        this.showmessages = this.showmessages.sort(function(obj1, obj2){
          return parseInt(obj1.timeLeft.split('P').pop().split('D')[0]) - parseInt(obj2.timeLeft.split('P').pop().split('D')[0]);
        });
      }
      else {
        this.showmessages = this.showmessages.sort(function(obj1, obj2){
          return parseInt(obj2.timeLeft.split('P').pop().split('D')[0]) - parseInt(obj1.timeLeft.split('P').pop().split('D')[0]);
        });
      }
    }
    if(ordercategory == "Price"){
      this.showmessages = this.defaultmessages.slice(0);
      if(orderstyle == "Ascending"){
        this.showmessages = this.showmessages.sort(function(obj1, obj2){
          return parseInt(obj1.buyItNowPrice['__value__']) - parseInt(obj2.buyItNowPrice['__value__']);
        });
      }
      else {
        this.showmessages = this.showmessages.sort(function(obj1, obj2){
          return parseInt(obj2.buyItNowPrice['__value__']) - parseInt(obj1.buyItNowPrice['__value__']);
        });
      }
    }
    if(ordercategory == "Shipping Cost"){
      this.showmessages = this.defaultmessages.slice(0);
      if(orderstyle == "Ascending"){
        this.showmessages = this.showmessages.sort(function(obj1, obj2){
          return parseInt(obj1.shippingCost['__value__']) - parseInt(obj2.shippingCost['__value__']);
        });
      }
      else {
        this.showmessages = this.showmessages.sort(function(obj1, obj2){
          return parseInt(obj2.shippingCost['__value__']) - parseInt(obj1.shippingCost['__value__']);
        });
      }
    }
  }
}
