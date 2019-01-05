import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.css']
})
export class MapContainerComponent implements OnInit {
  lat: number = 59.00;
  lng: number = 17.50;

  constructor() { }

  ngOnInit() {
  }

}
