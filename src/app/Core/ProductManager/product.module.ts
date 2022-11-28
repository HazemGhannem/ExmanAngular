import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { HomeComponent } from './home/home.component';
import { ShowShopComponent } from './show-shop/show-shop.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DetailsComponent } from './details/details.component'


@NgModule({
  declarations: [
    AddProductComponent,
    HomeComponent,
    ShowShopComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ]
})
export class ProductModule { }
