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
  source: OlOSM;
  initialLayer: OlTileLayer;
  view: OlView;

  constructor() { }

  initMapService(map: OlMap, source: OlOSM, initialLayer: OlTileLayer, view: OlView) {
    this.map = map;
    this.source = source;
    this.initialLayer = initialLayer;
    this.view = view;
  }

  // ======== Getters ========
  getMap() {
    return this.map;
  }

  getSource() {
    return this.source;
  }

  getBaseLayer() {
    return this.initialLayer;
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
    this.initialLayer.setOpacity(o);
  }

}
