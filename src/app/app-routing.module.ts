import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { AdminDashboardComponent } from "./pages/admin-dashboard/admin-dashboard.component";
import { ProductsComponent } from "./pages/products/products.component";
import { AdminLayoutComponent } from "./pages/admin-layout/admin-layout.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "admin",
    component: AdminLayoutComponent,
    children: [
      { path: "dashboard", component: AdminDashboardComponent },
      { path: "products", component: ProductsComponent },
    ],
  },
  {
    path: "**",
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
