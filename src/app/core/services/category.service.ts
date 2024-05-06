import { Injectable } from '@angular/core';
import { ICategory } from '../models/interface/category.interface';
import { categories } from '../sampleData/categories.data';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
 

  getAllCategory(): ICategory[] {
    return categories;
  }
}
