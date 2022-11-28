import { ProductService } from './../ProductService/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-shop',
  templateUrl: './show-shop.component.html',
  styleUrls: ['./show-shop.component.css']
})
export class ShowShopComponent implements OnInit {
  list:any
  constructor(private service:ProductService) { }

  ngOnInit(): void {
    this.service.fetchCart().subscribe((p)=> this.list=p)
  }
  

}
