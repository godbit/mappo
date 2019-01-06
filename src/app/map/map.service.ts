import { Injectable } from '@angular/core';

import OlMap from 'ol/Map';
import OlTileLayer from 'ol/layer/Tile';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  map: OlMap;

  // TODO: Generalise to handle any number of basemaps.
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

  /**
   * Sets the currentBasemap and updates the visibility of basemaps.
   *
   * @param title The title of the basemap to update to.
   * Titles are stored on the basemap-settings-component.
   */
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

  /**
   * Returns the title of the currently displayed basemap.
   */
  getCurrentBasemapTitle() {
    return this.currentBasemap.title;
  }

  /**
  * Returns the title of available basemaps.
  */
  getBasemapTitles() {
    return [this.defaultBasemap.title, this.lightBasemap.title]
  }

  /**
   * Takes a number between 0 and 100 and sets the opacity of the current basemap accoringly
   */
  setBasemapOpacity(opacity: number) {
    // OL takes opacitiy 0 <= o <= 1
    let o = opacity/100;
    this.currentBasemap.layer.setOpacity(o);
  }

  /**
  * Returns the current basemap opacity o, (o: number 0 <= o <= 100).
  */
  getCurrentBasemapOpacity() {
    return this.currentBasemap.layer.getOpacity() * 100;
  }

  /**
  * Sets the visibility of the current basemap.
  *
  * @param visible true -> visible, false -> not visible
  */
  setCurrentBasemapVisible(visible: boolean) {
    this.currentBasemap.layer.setVisible(visible);
  }

  /**
   * Gets the visibility of the current basemap. Returns
   * true if visible, false if not.
   */
  getCurrentBasemapVisibility() {
    return this.currentBasemap.layer.getVisible();
  }

}

/**
* Used to store the layer and its corresponding title together.
*/
class Basemap {
  layer: OlTileLayer;
  title: string;

  constructor(layer: OlTileLayer,title: string) {
    this.layer = layer;
    this.title = title;
  }
}