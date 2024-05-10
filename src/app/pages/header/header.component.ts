import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { CartStoreItem } from "src/app/core/services/cart/cart.storeItem";
import { CategoryStoreItem } from "src/app/core/services/category/categories.storeItem";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @Output()
  searchClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    public categoriesStoreItem: CategoryStoreItem,
    public cartStore: CartStoreItem
  ) {}

  ngOnInit() {}

  onClickSearch(keyword: string) {
    this.searchClicked.emit(keyword);
  }
}
