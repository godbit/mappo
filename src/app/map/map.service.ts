import { Injectable } from '@angular/core';

import OlMap from 'ol/Map';
import OlTileLayer from 'ol/layer/Tile';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  map: OlMap;

  currentBasemap: [OlTileLayer, string] = [, ""];
  defaultBasemap: [OlTileLayer, string] = [, "Standard OSM"];
  lightBasemap: [OlTileLayer, string] = [, "Light OSM"];

  constructor() { }

  initMapService(map: OlMap, defaultBasemap: OlTileLayer, lightBasemap: OlTileLayer, currentBasemap: OlTileLayer) {
    this.map = map;
    this.defaultBasemap[0] = defaultBasemap;
    this.lightBasemap[0] = lightBasemap;
    this.currentBasemap[0] = currentBasemap;
  }

  // ======== Getters ========
  getMap() {
    return this.map;
  }

  getLayers() {
    return this.map.getLayers();
  }

  // ======== Layers ========

  setBasemapByName(name: string) {
      // No change -> return
      if (name == this.currentBasemap[1]) {
        return;
      }

      // Update which is current
      if (name == this.defaultBasemap[1]) {
        this.currentBasemap = this.defaultBasemap;
      } else {
        this.currentBasemap = this.lightBasemap;
      }

      // Toggle visibility
      this.defaultBasemap[0].setVisible(!this.defaultBasemap[0].getVisible());
      this.lightBasemap[0].setVisible(!this.lightBasemap[0].getVisible());
  }

  getCurrentBasemapName() {
    return this.currentBasemap[1];
  }

  getBasemapNames() {
    return [this.defaultBasemap[1], this.lightBasemap[1]]
  }

  /**
   * Takes a number between 0 and 100 and sets the opacity of the layer accoringly
   */
  setBasemapTransparency(opacity: number) {
    // OL takes opacitiy 0 <= o <= 1
    let o = opacity/100;
    this.currentBasemap[0].setOpacity(o);
  }

}
