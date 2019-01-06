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

  changeBasemap(event) {
    this.mapService.setBasemapByTitle(event.value);
    this.basemapOpacity = this.mapService.getCurrentBasemapOpacity();
    this.currentBasemapVisible = this.mapService.getCurrentBasemapVisibility();
  }

  updateTransparency(event) {
    this.basemapOpacity = event.value;
    this.mapService.setBasemapOpacity(this.basemapOpacity);
  }

  toggleLayerVisibility() {
    this.mapService.setCurrentBasemapVisible(this.currentBasemapVisible);
  }

}
