import { Component, OnInit } from "@angular/core";
import { ICategory } from "src/app/core/models/interface/category.interface";
import { CategoryStoreItem } from "src/app/core/services/category/categories.storeItem";
import { ProductStoreItem } from "src/app/core/services/product/product.storeItem";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent implements OnInit {
  items: ICategory[] = [];
  constructor(
    private categoriesStoreItem: CategoryStoreItem,
    private productStoreItem: ProductStoreItem
  ) {
    this.categoriesStoreItem.loadCategory();
    this.productStoreItem.loadProduct();
  }
  ngOnInit() {}

  onSelectCate(cateId: number) {
    this.productStoreItem.loadProduct("maincategoryid=" + cateId);
  }

  onSearchKey(searchKeyWord: string) {
    this.productStoreItem.loadProduct("keyword=" + searchKeyWord);
  }
}
