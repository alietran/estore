import { NgModule } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { HeaderComponent } from '../header/header.component';
import { CateNavigateComponent } from '../cate-navigate/cate-navigate.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { AdminLayoutComponent } from './admin-layout.component';

@NgModule({
  declarations: [
    HeaderComponent,
    CateNavigateComponent,
    SidenavComponent,
    AdminLayoutComponent,
  ],
  imports: [
    MenubarModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    DropdownModule,
  ],
  providers: [],
  bootstrap: [],
})
export class AdminLayoutModule {}
