import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  inputs: ['sSrchTitleText']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}