import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ICategory } from 'src/app/core/models/interface/category.interface';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  // items!: MenuItem[];
  items: ICategory[]= [];
  constructor(private categoriesService: CategoryService) {
    this.items = categoriesService.getAllCategory();
  }
  ngOnInit() {
    // this.items = [
    //   {
    //     label: 'Mens',
    //     // icon: 'pi pi-fw pi-mars',
    //     items: [
    //       {
    //         label: 'Casual Wear',
    //       },
    //     ],
    //   },
    //   {
    //     label: 'Womens',
    //     // icon: 'pi pi-fw pi-venus',
    //     items: [
    //       {
    //         label: 'Poly wear',
    //       },
    //       {
    //         label: 'Foot wear',
    //       },
    //     ],
    //   },
    //   {
    //     label: 'Kids',
    //     // icon: 'pi pi-fw pi-user',
    //     items: [
    //       {
    //         label: 'Accessories',
    //       },
    //     ],
    //   },
    // ];
  }
}
