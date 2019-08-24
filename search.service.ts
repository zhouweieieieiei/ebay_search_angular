import { Injectable } from '@angular/core';
import {PageService} from './page.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  messages = "";
  itemnum = 0;
  constructor(private pageService: PageService) { }
  receivemessage(messages):void{
  	this.messages = messages;
  	if(messages!=""&&messages.findItemsAdvancedResponse[0].ack[0] == "Success"){
  		this.itemnum = parseInt(messages.findItemsAdvancedResponse[0].searchResult[0]['@count']);
  	}
  	else this.itemnum = 0;
  	console.log(this.itemnum);
  	this.pageService.updatepagenum(Math.ceil(this.itemnum/10));
  }
}
