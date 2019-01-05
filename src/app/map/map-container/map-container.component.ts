import { Component, OnInit } from '@angular/core';

import OlMap from 'ol/Map';
import OlOSM from 'ol/source/OSM';
import OlTileLayer from 'ol/layer/Tile';
import OlView from 'ol/View';

// Import works but ts complains anyway.
// @ts-ignore
import { fromLonLat } from 'ol/proj';

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.css']
})

export class MapContainerComponent implements OnInit {
  lat: number = 59.00;
  lng: number = 17.50;
  zoom: number = 7;
  map: OlMap;
  source: OlOSM;
  layer: OlTileLayer;
  view: OlView;

  constructor() { }

  ngOnInit() {
    this.initMap();
  }

  initMap() {
    this.source = new OlOSM({
      url: 'https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoibm9haGhvbG0iLCJhIjoiY2lrZWNmNDI2MDA0YnY4bHo3aXU1dGZkeSJ9.8Eavws7sLknJNwX_9YcEpw'
    });

    this.layer = new OlTileLayer({
      source: this.source
    });

    this.view = new OlView({
      center: fromLonLat([this.lng, this.lat]),
      zoom: this.zoom
    });

    this.map = new OlMap({
      target: 'map',
      layers: [this.layer],
      view: this.view
    });
  }
}
