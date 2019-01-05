import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/app/map/map.service';

@Component({
  selector: 'app-map-settings',
  templateUrl: './map-settings.component.html',
  styleUrls: ['./map-settings.component.css']
})
export class MapSettingsComponent implements OnInit {
  layerTransparency: number = 50;

  constructor(private mapService: MapService) {}

  ngOnInit() {
  }

  updateTransparency(event) {
    this.layerTransparency = event.value;
    this.mapService.setBasemapTransparency(this.layerTransparency);
  }

}
