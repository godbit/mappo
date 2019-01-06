import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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

  baseUrl = "https://nominatim.openstreetmap.org/search?q=";
  configUrl = "&format=json&polygon_kml=1&addressdetails=1"

  constructor(private http: HttpClient) {
  }

  search(searchString) {
    // Update states for html-elements
    this.searchState();
    // Parse string for request
    let searchUrl = this.parseSearchString(searchString)

    // Do request and handle response
    let obs = this.http.get(this.baseUrl + searchUrl + this.configUrl);
    obs.subscribe((response) => this.handleResponse(response));
  }

  handleResponse(response) {
    this.noSearchState();

    if (response.length == 0) {
      this.noResultState();
      return;
    }
    this.retsultState()
    console.log(response);
  }

  parseSearchString(searchString: string) {
    let searchUrl = searchString.replace(" ", "+")
    return searchUrl;
  }

  searchState() {
    // Update that a search has occured
    this.noSearch = false;
    this.noSearchChange.next(this.noSearch);
    // Set into searching state
    this.searching = true;
    this.searchingChange.next(this.searching);
  }

  noSearchState() {
    this.searching = false;
    this.searchingChange.next(this.searching);
  }

  retsultState() {
    this.result = true;
    this.resultChange.next(this.result);
  }

  noResultState() {
    this.result = false;
    this.resultChange.next(this.result);
    this.searching = false;
    this.searchingChange.next(this.searching);
  }

}
