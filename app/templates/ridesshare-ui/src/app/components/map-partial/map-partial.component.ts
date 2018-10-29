import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-map-partial',
  templateUrl: './map-partial.component.html',
  styleUrls: ['./map-partial.component.css']
})
export class MapPartialComponent implements OnInit {

  @Input() public lat;
  @Input() public lon;

  private destLat = null;
  private destLon = null;
  public geolocate = false;
  constructor() { }

  ngOnInit() {
  }

  public getDestCoordinates(result: any) {
    const coordinates = result['result']['center'];
    if (coordinates.length !== 0) {
      this.destLon = coordinates[0];
      this.destLat = coordinates[1];
    }
  }

}
