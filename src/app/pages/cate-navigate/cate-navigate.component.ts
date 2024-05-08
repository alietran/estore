import { CategoryStoreItem } from "src/app/core/services/categories.storeItem";
import { Component } from "@angular/core";
import { ICategory } from "src/app/core/models/interface/category.interface";

@Component({
  selector: "app-cate-navigate",
  templateUrl: "./cate-navigate.component.html",
  styleUrl: "./cate-navigate.component.scss",
})
export class CateNavigateComponent {
  categories: ICategory[] = [];
  constructor(public categoryStore: CategoryStoreItem) {}
}
