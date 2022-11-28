import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  addproduct(d:any){
    return this.http.post("http://localhost:3000/products",d)
  }
  fetchproducts(){
    return this.http.get("http://localhost:3000/products")
  }

  addToCart(d:any){
    return this.http.post("http://localhost:3000/cart",d)
  }

  fetchCart(){
    return this.http.get("http://localhost:3000/cart")
  }
  findById(i:any){
    return this.http.get(`http://localhost:3000/cart/${i}`)
  }
  findByIdProduct(i:any){
    return this.http.get(`http://localhost:3000/cart/${i}`)
  }
}
