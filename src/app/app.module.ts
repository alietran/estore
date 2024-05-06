import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLayoutModule } from './components/admin-layout/admin-layout.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AdminLayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
