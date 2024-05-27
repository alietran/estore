import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AccordionModule } from "primeng/accordion";
import { BadgeModule } from "primeng/badge";
import { CardModule } from "primeng/card";
import { DropdownModule } from "primeng/dropdown";
import { ImageModule } from "primeng/image";
import { MenubarModule } from "primeng/menubar";
import { RatingModule } from "primeng/rating";
import { CartStoreItem } from "src/app/core/services/cart/cart.storeItem";
import { CategoryStoreItem } from "src/app/core/services/category/categories.storeItem";
import { CategoryService } from "src/app/core/services/category/category.service";
import { ProductService } from "src/app/core/services/product/product.service";
import { ProductStoreItem } from "src/app/core/services/product/product.storeItem";
import { UserService } from "src/app/core/services/user/user.service";
import { CartComponent } from "../cart/cart.component";
import { CateNavigateComponent } from "../cate-navigate/cate-navigate.component";
import { HeaderComponent } from "../header/header.component";
import { ProductDetailComponent } from "../product-detail/product-detail.component";
import { ProductItemComponent } from "../product-item/product-item.component";
import { ProductsComponent } from "../products/products.component";
import { SidenavComponent } from "../sidenav/sidenav.component";
import { SigninComponent } from "../signin/signin.component";
import { SignupComponent } from "../signup/signup.component";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
@NgModule({
  declarations: [
    HeaderComponent,
    CateNavigateComponent,
    SidenavComponent,
    HomeComponent,
    ProductsComponent,
    ProductItemComponent,
    ProductDetailComponent,
    CartComponent,
    SignupComponent,
    SigninComponent,
  ],
  imports: [
    CommonModule,
    MenubarModule,
    FormsModule,
    DropdownModule,
    AccordionModule,
    CardModule,
    ImageModule,
    RatingModule,
    HttpClientModule,
    RouterModule,
    HomeRoutingModule,
    BadgeModule,
    ReactiveFormsModule,
  ],
  providers: [
    CategoryService,
    CategoryStoreItem,
    ProductService,
    ProductStoreItem,
    CartStoreItem,
    UserService,
  ],
  bootstrap: [],
})
export class HomeModule {}
