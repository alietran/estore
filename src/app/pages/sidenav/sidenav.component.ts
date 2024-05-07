import { CategoryService } from "./../../core/services/category.service";
import { categories } from "./../../core/sampleData/categories.data";
import { Component } from "@angular/core";
import { ICategory } from "src/app/core/models/interface/category.interface";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrl: "./sidenav.component.scss",
})
export class SidenavComponent {
  categories: ICategory[] = [];

  constructor(private categoryService: CategoryService) {
    this.categories = categoryService.getAllCategory();
  }

  getCategories(parentCategoryId?: number): ICategory[] {
    console.log(this.categories.filter((category) => category.parent_category_id === parentCategoryId));
    return this.categories.filter((category) => category.parent_category_id === parentCategoryId);
  }
 
}
