import { ProductService } from './../ProductService/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  list:any
  constructor(private service:ProductService,private route:Router) { }

  ngOnInit(): void {
    this.service.fetchproducts().subscribe((p)=> this.list=p)
  }
  AddToCart(d:any){
    
    this.service.findById(d.id).subscribe(
      (d)=> {
       if (d!==null) {
        alert('Exist')
       }
       
      },(e) =>{
        this.service.addToCart(d).subscribe(() =>console.log('added'))
      }

    )
   // this.service.addToCart(d).subscribe(() =>console.log('added'))
  }


  goToDetail(id:any){
    this.route.navigate(['detail/'+id])
  }
}
