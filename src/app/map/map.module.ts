import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapContainerComponent } from './map-container/map-container.component';
import { MapService } from './map.service';

@NgModule({
  declarations: [MapContainerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MapContainerComponent
  ],
  providers: [
    MapService
  ]
})
export class MapModule { }
