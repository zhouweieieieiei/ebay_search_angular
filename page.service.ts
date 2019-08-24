import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  pagenum = 0;
  curpage = 0;
  constructor() { }

  updatepagenum(pagenum): void{
  	this.pagenum = pagenum;
  	if(this.pagenum>0) this.curpage = 1;
  }
  updatecurpage(pageindex): void{
  	this.curpage = pageindex;
  }
}
