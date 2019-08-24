import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photo.service';

@Component({
  selector: 'app-photostab',
  templateUrl: './photostab.component.html',
  styleUrls: ['./photostab.component.css']
})
export class PhotostabComponent implements OnInit {

  constructor(public photoService: PhotoService) { }

  ngOnInit() {
  }

}
