import { Component, OnInit, Input, OnChanges } from '@angular/core';

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
  public showPath = false;

  geometry = {
    type: 'LineString',
    coordinates: [
      [this.lon, this.lat],
    ]
  };

  constructor() { }

  ngOnInit() {
  }

  public getDestCoordinates(result: any) {
    const coordinates = result['result']['center'];
    if (coordinates.length !== 0) {
      this.destLon = coordinates[0];
      this.destLat = coordinates[1];
      this.showPath = true;
      this.geometry = {
        type: 'LineString',
        coordinates: [
          [this.lon, this.lat],
          [this.destLon, this.destLat],
        ]
      };
    }
  }

}
