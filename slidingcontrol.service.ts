import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlidingcontrolService {
  isLeftVisible = false;
  constructor() { }
  changevisiblestate(value):void{
  	this.isLeftVisible = value;
  }
}
