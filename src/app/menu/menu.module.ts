import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { MenuContainerComponent } from './menu-container/menu-container.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [NavComponent, NavItemComponent, MenuContainerComponent, SearchComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MenuContainerComponent
  ]

})
export class MenuModule { }
