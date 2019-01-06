import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/app/map/map.service';

@Component({
  selector: 'app-map-settings',
  templateUrl: './map-settings.component.html',
  styleUrls: ['./map-settings.component.css']
})
export class MapSettingsComponent implements OnInit {
  basemapOpacity: number = 100;
  basemapTitles: string [];
  currentBasemapTitle: string;
  currentBasemapVisible: boolean;

  constructor(private mapService: MapService) { }

  ngOnInit() {
    this.basemapTitles = this.mapService.getBasemapTitles();
    this.currentBasemapTitle = this.mapService.getCurrentBasemapTitle();
    this.currentBasemapVisible = this.mapService.getCurrentBasemapVisibility();
  }

  /**
   * Changes to active basemap to the map selected in the droprown.
   * Sets the basemapOpacity control to the to match selcted basemap.
   * Sets the basemapVisibile control to the visibilty of the selected basemap.
   */
  changeBasemap(event) {
    this.mapService.setBasemapByTitle(event.value);
    this.basemapOpacity = this.mapService.getCurrentBasemapOpacity();
    this.currentBasemapVisible = this.mapService.getCurrentBasemapVisibility();
  }

  /**
   * Updates the basemap transparancy through the mapService.
   */
  updateTransparency(event) {
    this.basemapOpacity = event.value;
    this.mapService.setBasemapOpacity(this.basemapOpacity);
  }

  /**
  * Toggles the basemap visiblity through the mapService.
  */
  toggleLayerVisibility() {
    this.mapService.setCurrentBasemapVisible(this.currentBasemapVisible);
  }

}
