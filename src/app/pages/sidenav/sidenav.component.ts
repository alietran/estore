import { CategoryService } from "./../../core/services/category.service";
import { Component, OnDestroy } from "@angular/core";
import { ICategory } from "src/app/core/models/interface/category.interface";
import { Subscription } from "rxjs";
import { CategoryStoreItem } from "src/app/core/services/categories.storeItem";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrl: "./sidenav.component.scss",
})
export class SidenavComponent implements OnDestroy {
  categories: ICategory[] = [];

  subscriptions: Subscription = new Subscription();

  constructor(
    private categoryService: CategoryService,
    categoryStore: CategoryStoreItem
  ) {
    this.subscriptions.add(
      categoryStore.categories$.subscribe((categories) => {
        this.categories = categories;
      })
    );
  }

  getCategories(parentCategoryId?: number): ICategory[] {
    return this.categories.filter((category) =>
      parentCategoryId
        ? category.parent_category_id === parentCategoryId
        : category.parent_category_id === null
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
