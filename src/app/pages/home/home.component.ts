import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";
import { ICategory } from "src/app/core/models/interface/category.interface";
import { CategoryStoreItem } from "src/app/core/services/categories.storeItem";
import { CategoryService } from "src/app/core/services/category.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent implements OnInit {
  items: ICategory[] = [];
  constructor(private categoriesStoreItem: CategoryStoreItem) {
    this.categoriesStoreItem.loadCategory();
  }
  ngOnInit() {}
}
