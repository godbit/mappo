import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapContainerComponent } from './map-container/map-container.component';

@NgModule({
  declarations: [MapContainerComponent],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    CommonModule
  ],
  exports: [
    MapContainerComponent
  ]
})
export class MapModule { }
