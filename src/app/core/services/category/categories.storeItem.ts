import { Injectable } from "@angular/core";
import { ICategory } from "../../models/interface/category.interface";
import { CategoryService } from "./category.service";
import { StoreItem } from "../../shared/storeItem";
import { Observable, map } from "rxjs";

@Injectable()
export class CategoryStoreItem extends StoreItem<ICategory[]> {
  constructor(private categoryService: CategoryService) {
    super([]);
  }

  async loadCategory() {
    this.categoryService
      .getAllCategory()
      .subscribe((categories) => this.setValue(categories));
  }

  get categories$(): Observable<ICategory[]> {
    return this.value$;
  }

  get topLevelCategories$(): Observable<ICategory[]> {
    return this.value$.pipe(
      map((categories) =>
        categories.filter((category) => category.parent_category_id === null)
      )
    );
  }
}
