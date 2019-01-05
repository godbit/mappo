import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { MenuContainerComponent } from './menu-container/menu-container.component';
import { SearchComponent } from './search/search.component';
import { MapSettingsComponent } from './map-settings/map-settings.component';

@NgModule({
  declarations: [NavComponent, NavItemComponent, MenuContainerComponent, SearchComponent, MapSettingsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MenuContainerComponent
  ]

})
export class MenuModule { }
