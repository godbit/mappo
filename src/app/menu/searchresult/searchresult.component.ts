import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent implements OnInit {
  noSearch: boolean;
  searching: boolean;
  result: boolean;

  _noSearchSubscription;
  _searchingSubscription;
  _resultSubscription;

  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
    this.noSearch = this.searchService.noSearch;
    this.searching = this.searchService.searching;
    this.result = this.searchService.result;
    this.initSubscriptions();
  }

  initSubscriptions() {
    this._noSearchSubscription = this.searchService.noSearchChange.subscribe((value: boolean) => {
        this.noSearch = value
    });

    this._searchingSubscription = this.searchService.searchingChange.subscribe((value: boolean) => {
        this.searching = value
    });

    this._resultSubscription = this.searchService.resultChange.subscribe((value: boolean) => {
        this.result = value
    });
  }

}
