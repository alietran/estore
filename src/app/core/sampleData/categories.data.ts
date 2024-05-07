import { ICategory } from "../models/interface/category.interface";

export const categories: ICategory[] = [
  {
    id: 1,
    category: "Mens",
  },
  {
    id: 2,
    category: "Womens",
  },
  {
    id: 3,
    category: "Kids",
  },
  {
    id: 4,
    category: "Kids",
    parent_category_id: 1,
  },
  {
    id: 5,
    category: "Party Wear",
    parent_category_id: 2,
  },
  {
    id: 6,
    category: "Foot Wear",
    parent_category_id: 2,
  },
  {
    id: 7,
    category: "Accessory",
    parent_category_id: 3,
  },
 
];
