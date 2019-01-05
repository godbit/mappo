import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuContainerComponent } from './menu-container/menu-container.component';
import { SearchComponent } from './search/search.component';
import { MapSettingsComponent } from './map-settings/map-settings.component';

// Material design components
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSliderModule} from '@angular/material/slider';

import { MapService } from '../map/map.service';

@NgModule({
  declarations: [MenuContainerComponent, SearchComponent, MapSettingsComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatToolbarModule,
    MatSliderModule
  ],
  exports: [
    MenuContainerComponent
  ],
  providers: [
    MapService
  ]

})
export class MenuModule { }
