import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from './Core/ProductManager/product.module';
import { StoreComponent } from './Component/store/store.component';


@NgModule({
  declarations: [
    AppComponent,
    StoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
