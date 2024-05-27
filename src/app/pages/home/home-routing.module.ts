import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CartComponent } from "../cart/cart.component";
import { ProductDetailComponent } from "../product-detail/product-detail.component";
import { ProductItemComponent } from "../product-item/product-item.component";
import { SigninComponent } from "../signin/signin.component";
import { SignupComponent } from "../signup/signup.component";
import { HomeComponent } from "./home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      { path: "products", component: ProductItemComponent },
      { path: "product/:id", component: ProductDetailComponent },
      { path: "cart", component: CartComponent },
      { path: "signup", component: SignupComponent },
      { path: "signin", component: SigninComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
