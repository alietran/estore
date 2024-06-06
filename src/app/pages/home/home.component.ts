import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs";
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
    private productStoreItem: ProductStoreItem,
    private router: Router
  ) {
    this.categoriesStoreItem.loadCategory();
    this.productStoreItem.loadProduct();
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        if ((event as NavigationEnd).url === "/home") {
          router.navigate(["/home/products"]);
        }
      });
  }
  ngOnInit() {}

  onSelectCate(cateId: number) {
    if (cateId === 0) {
      this.productStoreItem.loadProduct();
    } else {
      this.productStoreItem.loadProduct("maincategoryid=" + cateId);
    }
  }

  onSearchKey(searchKeyWord: string) {
    this.productStoreItem.loadProduct("keyword=" + searchKeyWord);
  }
}
