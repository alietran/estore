import { Component, OnInit } from '@angular/core';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  countries!: City[];

  selectedCountry!: City;
  constructor() {}

  ngOnInit() {
    this.countries = [
      { name: 'Men', code: 'M' },
      { name: 'Women', code: 'W' },
      { name: 'Kids', code: 'K' },
    ];
    this.selectedCountry = this.countries[0];
  }
}
