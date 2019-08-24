import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchService } from './search.service';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { ProgressbarService } from './progressbar.service'
import { SlidingcontrolService } from './slidingcontrol.service';
import { ReswishcontrolService } from './reswishcontrol.service'
import { DetailtabcontrolService } from './detailtabcontrol.service'
import { DetailService } from './detail.service';

@Component({
  selector: 'app-inputform',
  templateUrl: './inputform.component.html',
  styleUrls: ['./inputform.component.css']
})
export class InputformComponent implements OnInit {
  search_info = {
    keyword: "",
    category: "All Categories",
    new: false,
    used: false,
    unspecified: false,
    local_pickup: false,
    free_shipping: false,
    distance: "",
    location: "current",
    zipcode: "",
    currentzipcode: ""
  }
  public myform: FormGroup;
  disabled = true;
  keywordvalid = true;
  zipcodevalid = true;
  //myControl = new FormControl({disabled: true});
  options: string[] = [];

  constructor(private el:ElementRef, private http: HttpClient, private searchService: SearchService, public fb: FormBuilder, public progressbarService: ProgressbarService, public  slidingcontrolService: SlidingcontrolService, public reswishcontrolService: ReswishcontrolService, public detailtabcontrolService: DetailtabcontrolService, public detailService: DetailService) { }

  ngOnInit() {
    this.geolocation();
    console.log(this.disabled);
    this.disabled = true;
    //this.el.nativeElement.querySelector('.sb').disabled = true;
    this.myform = this.fb.group({
        myControl: new FormControl({ value: '', disabled: this.disabled })
    });
  }

  select_current(): void{
    this.el.nativeElement.querySelector('.sb').disabled = true;
    this.search_info.location = "current";
    this.search_info.zipcode = "";
    this.disabled = true;
    this.zipcodevalid = true;
  }

  select_other(): void{
    this.el.nativeElement.querySelector(".sb").disabled = false;
    this.disabled = false;
  }

  keywordcheck(){
    console.log(this.search_info.keyword);
    if(this.search_info.keyword&&this.search_info.keyword.trim().length>0) {this.keywordvalid = true;}
    else this.keywordvalid = false;
  }

  zipcodecheck(){
    console.log(this.search_info.zipcode);
    if(this.search_info.zipcode) this.zipcodevalid = true;
    else this.zipcodevalid = false;
  }

  zipcodecontent(){
    if(this.search_info.location == "current") return false;
    if(this.search_info.zipcode.length!=5) return true;
    for(var i = 0; i<5; i++){
      if(this.search_info.zipcode[i]<'0'||this.search_info.zipcode[i]>'9') return true;
    }
    return false;
  }

  geolocation(): void{
      var xmlhttp= new XMLHttpRequest();
      xmlhttp.open("GET","http://ip-api.com/json",false);
      xmlhttp.send();
      if(xmlhttp.status==404){
        alert("Unable to get the location");
      }
      else{
        var geoinfo=JSON.parse(xmlhttp.responseText);
        this.search_info.currentzipcode = geoinfo['zip'];
      }
  }

  clear(): void{
    this.search_info.keyword = "";
    this.search_info.category = "All Categories";
    this.search_info.new = false;
    this.search_info.used = false;
    this.search_info.unspecified = false;
    this.search_info.local_pickup = false;
    this.search_info.free_shipping = false;
    this.search_info.distance = "";
    this.search_info.location = "current";
    this.search_info.zipcode = "";
    this.searchService.receivemessage("");
    this.detailService.receivemessage("", "");
    this.slidingcontrolService.isLeftVisible = false;
    this.reswishcontrolService.updatetab("Results");
    this.detailtabcontrolService.updatetab("product");
  }

  searchitem(): void{
    this.progressbarService.setsign(true);
    this.slidingcontrolService.isLeftVisible = false;
    console.log(this.search_info);
    if(this.search_info.distance == "") this.search_info.distance = "10";
    this.http.get("http://hw8571serverside-env.s84muegm5z.us-west-1.elasticbeanstalk.com/search", {params: JSON.parse(JSON.stringify(this.search_info))}).subscribe(res => {
      console.log(res);
      this.searchService.receivemessage(res);
    }); 
    //this.http.get("http://hw8571serverside-env.s84muegm5z.us-west-1.elasticbeanstalk.com/search", {params: this.search_info}).subscribe(res => { console.log(res);}); 
    this.progressbarService.setsign(false);

    this.reswishcontrolService.updatetab('Results');
    this.detailtabcontrolService.updatetab("product");
  }

  zipcodechange(): void{
    if(this.search_info.zipcode){
      this.http.get("http://hw8571serverside-env.s84muegm5z.us-west-1.elasticbeanstalk.com/zip", {params: JSON.parse(JSON.stringify({"zipcode": this.search_info.zipcode}))}).subscribe(res => {
        console.log(res);
        var zips = [];
        for (var i = 0; i < res["postalCodes"].length; i++){
          zips.push(res["postalCodes"][i].postalCode);
        }
        this.options = zips;
      }); 
    }
    else this.options = [];
  }
}
