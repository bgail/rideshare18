import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { RiderRequestComponent } from './components/rider-request/rider-request.component';
import { MapPartialComponent } from './components/map-partial/map-partial.component';
import { DirectionsPartialComponent } from './components/directions-partial/directions-partial.component';

@NgModule({
  declarations: [
    AppComponent,
    RiderRequestComponent,
    MapPartialComponent,
    DirectionsPartialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
