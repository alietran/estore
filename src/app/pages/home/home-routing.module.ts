import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { ProductItemComponent } from "../product-item/product-item.component";
import { ProductDetailComponent } from "../product-detail/product-detail.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      { path: "products", component: ProductItemComponent },
      { path: "product/:id", component: ProductDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
