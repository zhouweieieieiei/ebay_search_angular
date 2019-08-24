import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  messages = "";
  item = "";
  constructor() { }
  receivemessage(item, messages): void{
  	this.item =item;
  	this.messages = messages;
  }
}
