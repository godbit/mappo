import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-item-multi',
  templateUrl: './nav-item-multi.component.html',
  styleUrls: ['./nav-item-multi.component.css']
})
export class NavItemMultiComponent implements OnInit {
  isOpen = false;

  constructor() { }

  ngOnInit() {
  }

  expand() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }

}
