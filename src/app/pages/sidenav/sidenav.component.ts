import { Component, EventEmitter, OnDestroy, Output } from "@angular/core";
import { Subscription } from "rxjs";
import { ICategory } from "src/app/core/models/interface/category.interface";
import { CategoryStoreItem } from "src/app/core/services/category/categories.storeItem";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrl: "./sidenav.component.scss",
})
export class SidenavComponent implements OnDestroy {
  @Output()
  subCategoryClicked: EventEmitter<number> = new EventEmitter<number>();

  categories: ICategory[] = [];

  subscriptions: Subscription = new Subscription();

  constructor(categoryStore: CategoryStoreItem) {
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

  onSubCategoryClick(subCate: ICategory): void {
    this.subCategoryClicked.emit(subCate.id);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
