import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReswishcontrolService {
  tab = 'Results';
  constructor() { }
  updatetab(tab) {
  	this.tab = tab;
  }
}
