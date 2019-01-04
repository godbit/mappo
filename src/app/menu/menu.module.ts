import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { NavItemMultiComponent } from './nav-item-multi/nav-item-multi.component';

@NgModule({
  declarations: [NavComponent, NavItemComponent, NavItemMultiComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NavComponent
  ]

})
export class MenuModule { }
