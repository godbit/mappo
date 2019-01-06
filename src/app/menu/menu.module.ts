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
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';

import { MapService } from '../map/map.service';
import { SearchresultComponent } from './searchresult/searchresult.component';
import { SearchService } from './search.service';

@NgModule({
  declarations: [MenuContainerComponent, SearchComponent, MapSettingsComponent, SearchresultComponent],
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
    MatSliderModule,
    MatSelectModule,
    MatExpansionModule,
    MatCardModule
  ],
  exports: [
    MenuContainerComponent
  ],
  providers: [
    MapService,
    SearchService
  ]

})
export class MenuModule { }
