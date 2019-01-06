import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Result } from '../search.service';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent implements OnInit {
  noSearch: boolean;
  searching: boolean;
  hasResult: boolean;

  searchResults: Result[] = [];
  _searchResultsSubscription;

  _noSearchSubscription;
  _searchingSubscription;
  _resultHasSubscription;

  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
    this.noSearch = this.searchService.noSearch;
    this.searching = this.searchService.searching;
    this.hasResult = this.searchService.hasResult;
    this.initSubscriptions();
  }

  initSubscriptions() {
    this._noSearchSubscription = this.searchService.noSearchChange.subscribe((value: boolean) => {
        this.noSearch = value;
    });

    this._searchingSubscription = this.searchService.searchingChange.subscribe((value: boolean) => {
        this.searching = value;
    });

    this._resultHasSubscription = this.searchService.hasResultChange.subscribe((value: boolean) => {
        this.hasResult = value;
    });

    this._searchResultsSubscription = this.searchService.searchResultsChange.subscribe((value: Result[]) => {
        this.searchResults = value;
        console.log("searchResults changed");
        console.log(this.searchResults);
    });
  }

}
