import { Component, OnInit } from '@angular/core';

import OlMap from 'ol/Map';
import OlOSM from 'ol/source/OSM';
import OlTileLayer from 'ol/layer/Tile';
import OlView from 'ol/View';

// Import works but ts complains anyway.
// @ts-ignore
import { fromLonLat } from 'ol/proj';
import { MapService } from '../map.service';

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
  defaultBasemap: OlTileLayer;
  lightBasemap: OlTileLayer;
  view: OlView;

  constructor(private mapService: MapService) { }

  ngOnInit() {
    this.initMap();
    this.passToMapService();
  }

  /**
   * Creates a openlayers map with two layers (basemaps)
   */
  initMap() {
    let sourceDefault = new OlOSM({
      url: 'http://tile.osm.org/{z}/{x}/{y}.png'
    });
    let sourceLight = new OlOSM({
      url: 'https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoibm9haGhvbG0iLCJhIjoiY2lrZWNmNDI2MDA0YnY4bHo3aXU1dGZkeSJ9.8Eavws7sLknJNwX_9YcEpw'
    });

    this.defaultBasemap = new OlTileLayer({
      source: sourceDefault
    });
    this.lightBasemap = new OlTileLayer({
      source: sourceLight
    });

    this.view = new OlView({
      center: fromLonLat([this.lng, this.lat]),
      zoom: this.zoom
    });

    this.map = new OlMap({
      target: 'map',
      layers: [this.defaultBasemap, this.lightBasemap],
      view: this.view
    });

    // Only display the defaultbasemap initially.
    this.lightBasemap.setVisible(false);
  }

  /**
   * Passes the created map and reference to basemaps to the central mapservice which
   * handles all interaction and updating of the map object.
   */
  passToMapService() {
    this.mapService.initMapService(this.map, this.defaultBasemap, this.lightBasemap);
  }
}
