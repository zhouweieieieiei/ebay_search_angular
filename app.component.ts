import { Component } from '@angular/core';
import { SlidingcontrolService } from './slidingcontrol.service';
import { ProgressbarService } from './progressbar.service'
import { ReswishcontrolService } from './reswishcontrol.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ebayapp';
  tab = 'Results';
  constructor(public slidingcontrolService: SlidingcontrolService, public progressbarService: ProgressbarService, public reswishcontrolService: ReswishcontrolService) { }
}
