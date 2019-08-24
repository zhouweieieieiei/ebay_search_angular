import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressbarService {
  progressbarshow = false;
  constructor() { }
  setsign(sign) {
  	this.progressbarshow = sign;
  	console.log(this.progressbarshow);
  }
}
