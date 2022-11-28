import { ProductService } from './../ProductService/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  constructor(private service:ProductService,private ac:ActivatedRoute) { }

  ngOnInit(): void {

    this.service.findByIdProduct(this.ac.snapshot.params['id'])
    .subscribe(
        (t)=> console.log(t) 
    )
  }

}
