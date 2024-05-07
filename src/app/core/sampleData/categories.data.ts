import { ICategory } from '../models/interface/category.interface';

export const categories: ICategory[] = [
  {
    id: 1,
    label: 'Mens',
    icon: 'pi pi-fw pi-mars',
    items: [
      {
        label: 'Casual Wear',
      },
    ],
  },
  {
    id: 2,
    label: 'Womens',
    icon: 'pi pi-fw pi-venus',
    items: [
      {
        label: 'Poly wear',
      },
      {
        label: 'Foot wear',
      },
    ],
  },
  {
    id: 3,
    label: 'Kids',
    icon: 'pi pi-fw pi-user',
    items: [
      {
        label: 'Accessories',
      },
    ],
  },
];
