import { Injectable } from '@angular/core';

import OlMap from 'ol/Map';
import OlTileLayer from 'ol/layer/Tile';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  map: OlMap;

  currentBasemap: Basemap;
  defaultBasemap: Basemap;
  lightBasemap: Basemap;

  constructor() { }

  initMapService(map: OlMap, defaultBasemap: OlTileLayer, lightBasemap: OlTileLayer) {
    this.map = map;
    this.defaultBasemap = new Basemap(defaultBasemap, "Standard OSM");
    this.lightBasemap = new Basemap(lightBasemap, "Light OSM");
    this.currentBasemap = this.defaultBasemap;
  }

  // ======== Getters ========
  getMap() {
    return this.map;
  }

  getLayers() {
    return this.map.getLayers();
  }

  // ======== Basemap ========

  setBasemapByTitle(title: string) {
      // No change -> return
      if (title == this.currentBasemap.title) {
        return;
      }

      // Update which is current and toggle visibility
      if (title == this.defaultBasemap.title) {
        this.currentBasemap = this.defaultBasemap;
        this.defaultBasemap.layer.setVisible(true);
        this.lightBasemap.layer.setVisible(false);
      } else {
        this.currentBasemap = this.lightBasemap;
        this.lightBasemap.layer.setVisible(true);
        this.defaultBasemap.layer.setVisible(false);
      }
  }

  getCurrentBasemapTitle() {
    return this.currentBasemap.title;
  }

  getBasemapTitles() {
    return [this.defaultBasemap.title, this.lightBasemap.title]
  }

  /**
   * Takes a number between 0 and 100 and sets the opacity of the layer accoringly
   */
  setBasemapOpacity(opacity: number) {
    // OL takes opacitiy 0 <= o <= 1
    let o = opacity/100;
    this.currentBasemap.layer.setOpacity(o);
  }

  getCurrentBasemapOpacity() {
    return this.currentBasemap.layer.getOpacity() * 100;
  }

  setCurrentBasemapVisible(visible) {
    this.currentBasemap.layer.setVisible(visible);
  }

  getCurrentBasemapVisibility() {
    return this.currentBasemap.layer.getVisible();
  }

}

class Basemap {
  layer: OlTileLayer;
  title: string;

  constructor(layer: OlTileLayer,title: string) {
    this.layer = layer;
    this.title = title;
  }
}