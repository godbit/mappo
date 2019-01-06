import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  value: string;

  constructor(private searchService: SearchService) { }

  /**
   * Tells the searchService to perform a search if the searchfield
   * is not empty.
   */
  search(searchString) {
    if (searchString) {
      this.searchService.search(searchString);
    }
  }

  ngOnInit() {
  }

}
