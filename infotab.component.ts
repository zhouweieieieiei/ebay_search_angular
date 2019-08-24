import { Component, OnInit } from '@angular/core';
import { DetailService } from './detail.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-infotab',
  templateUrl: './infotab.component.html',
  styleUrls: ['./infotab.component.css']
})
export class InfotabComponent implements OnInit {
  arr = Array;
  constructor(public detailService: DetailService, private modalService: NgbModal) { }

  ngOnInit() {
  }

  open(content): void{
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
  }

  imagejudge(item): boolean{
  	return item.hasOwnProperty("PictureURL");
  }

  subtitlejudge(item): boolean{
  	return item.hasOwnProperty("Subtitle");
  }

  pricejudge(item): boolean{
  	return item.hasOwnProperty("CurrentPrice")&&item.CurrentPrice.hasOwnProperty("Value");
  }

  locationjudge(item): boolean{
  	return item.hasOwnProperty("Location");
  }

  returnpolicyjudge(item): boolean{
  	return item.hasOwnProperty("ReturnPolicy")&&item.ReturnPolicy.hasOwnProperty("InternationalReturnsAccepted")&&item.ReturnPolicy.InternationalReturnsAccepted == "ReturnsAccepted";
  }

  specificsnum(item): number{
  	if(item.hasOwnProperty("ItemSpecifics") && item.ItemSpecifics.hasOwnProperty("NameValueList")) return item.ItemSpecifics.NameValueList.length;
  	else return 0;
  }
}
