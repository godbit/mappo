import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  noSearch = true;
  searching = false;
  hasResult = false;

  searchResults: Result[] = [];
  //resultChange: Subject<Result[]> = new Subject<Result[]>();

  noSearchChange: Subject<boolean> = new Subject<boolean>();
  searchingChange: Subject<boolean> = new Subject<boolean>();
  hasResultChange: Subject<boolean> = new Subject<boolean>();

  baseUrl = "https://nominatim.openstreetmap.org/search?q=";
  configUrl = "&format=json&polygon_kml=1&addressdetails=1";

  constructor(private http: HttpClient) {
  }

  search(searchString) {
    // Update states for html-elements
    this.searchState();
    // Remove all results from previous search
    this.emptyResults();
    // Parse string for request
    let searchUrl = this.parseSearchString(searchString)

    // Do request and handle response
    let obs = this.http.get(this.baseUrl + searchUrl + this.configUrl);
    obs.subscribe((response) => this.handleResponse(response));
  }

  handleResponse(response) {
    this.noSearchState();

    // No result found
    if (response.length == 0) {
      this.noResultState();
      return;
    }

    // Enter state that result has been received.
    this.retsultState();

    // Add all results from current search to result array as Result objects.
    for (var i in response) {
      var searchResult: Result = this.buildResult(response[i]);
      this.searchResults.push(searchResult);
    }
  }

  /**
   * Iterate through response and save as Result object.
   */
  buildResult(responseItem): Result {
    let r = new Result();

    for (var prop in responseItem) {
      r[prop] = responseItem[prop];
    }

    return r;
  }

  /**
   * Empty the result array of current results.
   */
  emptyResults() {
    if (this.searchResults) {
      this.searchResults = [];
    }
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
    this.hasResult = true;
    this.hasResultChange.next(this.hasResult);
  }

  noResultState() {
    this.hasResult = false;
    this.hasResultChange.next(this.hasResult);
    this.searching = false;
    this.searchingChange.next(this.searching);
  }

}

/**
 * Holds all properties of a search response.
 */
class Result {
  // TODO: Type this correctly when copying response-data.
  address: any;
  boundingbox: [string, string, string, string];
  class: string;
  display_name: string;
  geokml: string;
  icon: string;
  importance: string;
  lat: string;
  licence: string;
  lon: string;
  osm_id: string;
  osm_type: string;
  place_id: string;
  type: string;

  constructor() { }
}

