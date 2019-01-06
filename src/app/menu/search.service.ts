import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  noSearch = true;
  searching = false;
  result = false;

  noSearchChange: Subject<boolean> = new Subject<boolean>();
  searchingChange: Subject<boolean> = new Subject<boolean>();
  resultChange: Subject<boolean> = new Subject<boolean>();

  constructor() {
  }

  search() {
    // Update that a search has occured
    this.noSearch = false;
    this.noSearchChange.next(this.noSearch);
    // Set into searching state
    this.searching = true;
    this.searchingChange.next(this.searching);
  }

}
