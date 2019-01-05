import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/app/map/map.service';

@Component({
  selector: 'app-map-settings',
  templateUrl: './map-settings.component.html',
  styleUrls: ['./map-settings.component.css']
})
export class MapSettingsComponent implements OnInit {
  basemapOpacity: number = 100;
  basemapNames: string [];
  currentBasemapName: string;

  constructor(private mapService: MapService) {
    this.basemapNames = this.mapService.getBasemapNames();
    this.currentBasemapName = this.mapService.getCurrentBasemapName();
  }

  ngOnInit() {
  }

  changeBasemap(event) {
    this.mapService.setBasemapByName(event.value);
    this.basemapOpacity = this.mapService.getCurrentBasemapOpacity();
  }

  updateTransparency(event) {
    this.basemapOpacity = event.value;
    this.mapService.setBasemapOpacity(this.basemapOpacity);
  }

}
