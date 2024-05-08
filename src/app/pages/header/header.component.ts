import { Component, OnInit } from "@angular/core";
import { ICategory } from "src/app/core/models/interface/category.interface";
import { CategoryStoreItem } from "src/app/core/services/categories.storeItem";

interface City {
  name: string;
  code: string;
}

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  // countries: ICategory[] = [];

  // selectedCountry!: City;
  constructor(public categoriesStoreItem: CategoryStoreItem) {}

  ngOnInit() {
    // this.countries = this.categoriesStoreItem.topLevelCategories$;
    // this.selectedCountry = this.countries[0];
  }
}
