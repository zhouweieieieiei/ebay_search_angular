import { Component, OnInit } from '@angular/core';
import {PageService} from './page.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  arr = Array;
  constructor(public pageService: PageService) { }

  ngOnInit() {
  }
}
