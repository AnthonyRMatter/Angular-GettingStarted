import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent // Tells Angular that this componenet is now a part of the application's modules
  ],
  imports: [
    BrowserModule,
    FormsModule
  ], // Modules that are external to our Angular application
  bootstrap: [AppComponent] // Starting component for application
})
export class AppModule { }
