import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapContainerComponent } from './map-container/map-container.component';

@NgModule({
  declarations: [MapContainerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MapContainerComponent
  ]
})
export class MapModule { }
