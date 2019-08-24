import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  constructor() { }

  applyitem() {
    var tempwishitemlist = JSON.parse(localStorage.wishitemlist);
    return tempwishitemlist.slice(0);
  }

  applynum() {
    if(localStorage.getItem('wishitemnum')) return parseInt(localStorage.wishitemnum);
    else return 0;
  }

  applyprice() {
    return parseFloat(localStorage.wishitemprice).toFixed(2);
  }

  additem(item): void{
    if(localStorage.getItem('wishitemnum')){
      var tempwishitemlist = JSON.parse(localStorage.wishitemlist);
      tempwishitemlist.push(item);
      localStorage.wishitemlist = JSON.stringify(tempwishitemlist);

      var tempwishitemIDlist = JSON.parse(localStorage.wishitemIDlist);
      tempwishitemIDlist.push(item.itemId[0]);
      localStorage.wishitemIDlist = JSON.stringify(tempwishitemIDlist);

      localStorage.wishitemnum = (parseInt(localStorage.wishitemnum)+1).toString();
      localStorage.wishitemprice = (parseFloat(localStorage.wishitemprice)+parseFloat(item.sellingStatus[0].currentPrice[0]["__value__"])).toString();
    }
    else{
      localStorage.setItem("wishitemnum", '1');
      localStorage.setItem("wishitemprice", item.sellingStatus[0].currentPrice[0]["__value__"]);
      localStorage.setItem("wishitemIDlist", JSON.stringify([item.itemId[0]]));
      localStorage.setItem("wishitemlist", JSON.stringify([item]));
    }
  }
  deleteitem(item): void{
  	if(this.searchitem(item)){
      var tempwishitemlist = JSON.parse(localStorage.wishitemlist);
      var tempwishitemIDlist = JSON.parse(localStorage.wishitemIDlist);
  	  tempwishitemlist.splice(tempwishitemIDlist.indexOf(item.itemId[0]),1);
  	  tempwishitemIDlist.splice(tempwishitemIDlist.indexOf(item.itemId[0]),1);
      localStorage.wishitemnum = (parseInt(localStorage.wishitemnum)-1).toString();
      localStorage.wishitemprice = (parseFloat(localStorage.wishitemprice)-parseFloat(item.sellingStatus[0].currentPrice[0]["__value__"])).toString();
      localStorage.wishitemlist = JSON.stringify(tempwishitemlist);
      localStorage.wishitemIDlist = JSON.stringify(tempwishitemIDlist);
  	}
  }
  searchitem(item): boolean{
    if(!localStorage.getItem('wishitemnum')||parseInt(localStorage.wishitemnum) == 0) return false;
  	return JSON.parse(localStorage.wishitemIDlist).indexOf(item.itemId[0])>-1;
  }
}
