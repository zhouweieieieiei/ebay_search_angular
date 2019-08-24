import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  photos = "";
  constructor() { }
  receivephotos(photos):void{
  	this.photos = photos;
  }
}
