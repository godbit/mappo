import { Injectable } from '@angular/core';

import OlMap from 'ol/Map';
import OlOSM from 'ol/source/OSM';
import OlTileLayer from 'ol/layer/Tile';
import OlView from 'ol/View';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  map: OlMap;
  defaultBasemap: OlTileLayer;
  lightBasemap: OlTileLayer;
  view: OlView;

  constructor() { }

  initMapService(map: OlMap, defaultBasemap: OlTileLayer, lightBasemap: OlTileLayer) {
    this.map = map;
    this.defaultBasemap = defaultBasemap;
    this.lightBasemap = lightBasemap;
  }

  // ======== Getters ========
  getMap() {
    return this.map;
  }

  getView() {
    return this.view;
  }

  getLayers() {
    return this.map.getLayers();
  }

  // ======== Layers ========

  /**
   * Takes a number between 0 and 100 and sets the opacity of the layer accoringly
   */
  setLayerTransparency(opacity: number) {
    // OL takes opacitiy 0 <= o <= 1
    let o = opacity/100;
    this.lightBasemap.setOpacity(o);
    console.log(o);
  }

}
