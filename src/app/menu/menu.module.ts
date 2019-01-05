import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { MenuContainerComponent } from './menu-container/menu-container.component';

@NgModule({
  declarations: [NavComponent, NavItemComponent, MenuContainerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NavComponent,
    MenuContainerComponent
  ]

})
export class MenuModule { }
