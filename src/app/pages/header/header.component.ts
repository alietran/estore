import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";
import { Router } from "@angular/router";
import { DeviceDetectorService } from "ngx-device-detector";
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
  isMobile = false;
  isUserAuthenticated: boolean = false;
  userName: string = "";

  constructor(
    public categoriesStoreItem: CategoryStoreItem,
    public cartStore: CartStoreItem,
    public userService: UserService,
    private router: Router,
    private deviceService: DeviceDetectorService
  ) {
    this.subscription.add(
      this.userService.isUserAuthenticated$.subscribe((value) => {
        this.isUserAuthenticated = value;
      })
    );

    this.subscription.add(
      this.userService.loggedUser$.subscribe((value) => {
        if (value) {
          this.userName = value.firstName + " " + value.lastName;
        } else {
          const user = localStorage.getItem("userName");
          if (user) {
            this.userName = JSON.parse(user);
          }
        }
      })
    );
  }

  ngOnInit() {
    if (this.deviceService.isMobile()) {
      this.isMobile = true;
    }
  }

  onClickSearch(keyword: string) {
    this.searchClicked.emit(keyword);
  }

  onKeyUp(event: any): void {
    if (event.key === "Enter") {
      this.onClickSearch(event.target.value);
    }
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
