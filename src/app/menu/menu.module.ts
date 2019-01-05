import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { NavItemComponent } from './nav-item/nav-item.component';

@NgModule({
  declarations: [NavComponent, NavItemComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NavComponent
  ]

})
export class MenuModule { }
