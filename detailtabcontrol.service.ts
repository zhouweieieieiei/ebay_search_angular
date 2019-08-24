import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailtabcontrolService {
  tab = "product";
  constructor() { }
  updatetab(tab) {
  	this.tab = tab;
  }
}
