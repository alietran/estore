import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

// interface MenuItem {
//   icon: string;
//   label: string;
// }

@Component({
  selector: 'app-cate-navigate',
  templateUrl: './cate-navigate.component.html',
  styleUrl: './cate-navigate.component.scss',
})
export class CateNavigateComponent {
  items!: MenuItem[];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Men',
        icon: 'pi pi-fw pi-mars',
      },
      {
        label: 'Women',
        icon: 'pi pi-fw pi-venus',
      },
      {
        label: 'Kids',
        icon: 'pi pi-fw pi-user',
      },
      {
        label: 'Best offers',
        icon: 'pi pi-fw pi-gift',
      },
    ];
  }
}
