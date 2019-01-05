import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
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
