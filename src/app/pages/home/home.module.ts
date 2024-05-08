import { NgModule } from "@angular/core";
import { MenubarModule } from "primeng/menubar";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { DropdownModule } from "primeng/dropdown";
import { SidenavComponent } from "../sidenav/sidenav.component";
import { HeaderComponent } from "../header/header.component";
import { CateNavigateComponent } from "../cate-navigate/cate-navigate.component";
import { HomeComponent } from "./home.component";
import { AccordionModule } from "primeng/accordion";
import { ProductsComponent } from "../products/products.component";
import { CardModule } from "primeng/card";
import { ImageModule } from "primeng/image";
import { RatingModule } from 'primeng/rating';
import { HttpClientModule } from "@angular/common/http";
import { CategoryService } from "src/app/core/services/category.service";
import { CategoryStoreItem } from "src/app/core/services/categories.storeItem";

@NgModule({
  declarations: [
    HeaderComponent,
    CateNavigateComponent,
    SidenavComponent,
    HomeComponent,
    ProductsComponent,
  ],
  imports: [
    MenubarModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    DropdownModule,
    AccordionModule,
    CardModule,
    ImageModule,
    RatingModule,
    HttpClientModule
  ],
  providers: [CategoryService, CategoryStoreItem],
  bootstrap: [],
})
export class HomeModule {}
