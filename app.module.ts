import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { MatTooltipModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule} from '@angular/material';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FacebookModule } from 'ngx-facebook';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { InputformComponent } from './inputform.component';
import { ResulttableComponent } from './resulttable.component';
import { PageComponent } from './page.component';
import { DetailtableComponent } from './detailtable.component';
import { SlidingtableComponent } from './slidingtable.component';
import { InfotabComponent } from './infotab.component';
import { SellertabComponent } from './sellertab.component';
import { ShippingtabComponent } from './shippingtab.component';
import { PhotostabComponent } from './photostab.component';
import { SimilarproductstabComponent } from './similarproductstab.component';
import { WishlistComponent } from './wishlist.component';
import { ProgressbarComponent } from './progressbar.component';

@NgModule({
  declarations: [
    AppComponent,
    InputformComponent,
    ResulttableComponent,
    PageComponent,
    DetailtableComponent,
    SlidingtableComponent,
    InfotabComponent,
    SellertabComponent,
    ShippingtabComponent,
    PhotostabComponent,
    SimilarproductstabComponent,
    WishlistComponent,
    ProgressbarComponent,
  ],
  imports: [
    NgbModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RoundProgressModule,
    MatTooltipModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule, 
    MatRippleModule,
    MatAutocompleteModule,
    FacebookModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
