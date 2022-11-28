import { DetailsComponent } from './details/details.component';
import { ShowShopComponent } from './show-shop/show-shop.component';
import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './add-product/add-product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : "add" ,component:AddProductComponent},
  {path : "home" ,component:HomeComponent},
  {path : "show" ,component:ShowShopComponent},
  {path : "detail/:id" ,component:DetailsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
