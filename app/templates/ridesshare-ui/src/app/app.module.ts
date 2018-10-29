import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';


import { AppComponent } from './app.component';
import { RiderRequestComponent } from './components/rider-request/rider-request.component';
import { MapPartialComponent } from './components/map-partial/map-partial.component';

@NgModule({
  declarations: [
    AppComponent,
    RiderRequestComponent,
    MapPartialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxMapboxGLModule.withConfig({
      accessToken: '',
      // geocoderAccessToken: 'TOKEN'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
