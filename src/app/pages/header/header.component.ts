import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { CartStoreItem } from "src/app/core/services/cart/cart.storeItem";
import { CategoryStoreItem } from "src/app/core/services/category/categories.storeItem";
import { UserService } from "src/app/core/services/user/user.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output()
  searchClicked: EventEmitter<string> = new EventEmitter<string>();
  subscription: Subscription = new Subscription();

  isUserAuthenticated: boolean = false;
  userName: string;

  constructor(
    public categoriesStoreItem: CategoryStoreItem,
    public cartStore: CartStoreItem,
    private userService: UserService,
    private router: Router
  ) {
    this.subscription.add(
      this.userService.isUserAuthenticated$.subscribe((value) => {
        this.isUserAuthenticated = value;
      })
    );
    const storedUserName = localStorage.getItem("userName");
    this.userName = storedUserName !== null ? JSON.parse(storedUserName) : "";
  }

  ngOnInit() {}

  onClickSearch(keyword: string) {
    this.searchClicked.emit(keyword);
  }

  logout() {
    this.userService.logout();
    this.router.navigate(["home/products"]);
  }

  pastOrder() {
    this.router.navigate(["home/past-order"]);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
