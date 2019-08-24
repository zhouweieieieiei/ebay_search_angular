import { Component, OnInit } from '@angular/core';
import { DetailService } from './detail.service';
import { SlidingcontrolService } from './slidingcontrol.service';
import { WishlistService } from './wishlist.service';
import { FacebookService, InitParams, UIParams, UIResponse } from 'ngx-facebook';
import { DetailtabcontrolService } from './detailtabcontrol.service'

@Component({
  selector: 'app-detailtable',
  templateUrl: './detailtable.component.html',
  styleUrls: ['./detailtable.component.css']
})
export class DetailtableComponent implements OnInit {
  constructor(public detailService: DetailService, public slidingcontrolService: SlidingcontrolService, public wishlistService: WishlistService, public fb: FacebookService, public detailtabcontrolService: DetailtabcontrolService){
    let initParams: InitParams = {
      appId: '261558571392922',
      xfbml: true,
      version: 'v2.8'
    };
 
    fb.init(initParams);
  }

  ngOnInit() {
  }

  fbshare(item): void{
    /*this.fb.ui({
      method: 'share',
      href: item.ViewItemURLForNaturalSearch,
      quote: 'Buy '+item.Title+' at $'+item.CurrentPrice.Value+' from LINK below.',
    }, function(response){});*/

    this.fb.ui({
      method: 'share',
      href: item.ViewItemURLForNaturalSearch,
      quote: 'Buy '+item.Title+' at $'+item.CurrentPrice.Value+' from LINK below.',
    }).then(response => {
        console.log(response);
    }).catch(e => {
        console.log(e);
    });
  }

  fbshare2(item) {
    return "http://www.facebook.com/sharer/sharer.php?u="+encodeURI(item.ViewItemURLForNaturalSearch)+"&quote="+"Buy "+item.Title+" at $"+item.CurrentPrice.Value+" from LINK below.";
  }
}
