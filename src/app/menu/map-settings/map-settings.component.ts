import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-settings',
  templateUrl: './map-settings.component.html',
  styleUrls: ['./map-settings.component.css']
})
export class MapSettingsComponent implements OnInit {
  layerTransparency: number = 50;

  constructor() { }

  ngOnInit() {
  }

  updateTransparency(event) {
    this.layerTransparency = event.value;
  }

}
