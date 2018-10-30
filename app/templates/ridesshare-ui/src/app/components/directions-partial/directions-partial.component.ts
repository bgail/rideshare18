import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-directions-partial',
  templateUrl: './directions-partial.component.html',
  styleUrls: ['./directions-partial.component.css']
})
export class DirectionsPartialComponent implements OnInit {

  @ViewChild('mapElement') mapElement: ElementRef;
  constructor() { }

  ngOnInit() {
    this.initializeMap(environment.mapboxAccessToken);
  }

  private initializeMap(accessToken: string): void {
    Object.getOwnPropertyDescriptor(mapboxgl, 'accessToken').set(accessToken);
    const map = new mapboxgl.Map({
      container: this.mapElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [-79.4512, 43.6568],
      zoom: 13
    });
    map.addControl(new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      controls: {
        instructions: false
      }
    }), 'top-left');
  }

}
