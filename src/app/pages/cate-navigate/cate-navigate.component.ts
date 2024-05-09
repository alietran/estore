import { Component, EventEmitter, Output } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs";
import { ICategory } from "src/app/core/models/interface/category.interface";
import { CategoryStoreItem } from "src/app/core/services/category/categories.storeItem";

@Component({
  selector: "app-cate-navigate",
  templateUrl: "./cate-navigate.component.html",
  styleUrl: "./cate-navigate.component.scss",
})
export class CateNavigateComponent {
  @Output()
  mainCategoryClicked: EventEmitter<number> = new EventEmitter<number>();

  displayOptions: boolean = false;

  categories: ICategory[] = [];
  constructor(public categoryStore: CategoryStoreItem, private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.displayOptions =
          (event as NavigationEnd).url === "/home/products" ? true : false;
      });
}


  onCategoryClick(mainCate: ICategory): void {
    this.mainCategoryClicked.emit(mainCate.id);
  }
}
