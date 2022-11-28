import { ProductService } from './../ProductService/product.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  formgroup = this.fb.group({
    name: ['',[Validators.required]],
    price:[''],
    Description:[''],
  })

  get test(){
    return this.formgroup.get('name');
  }

  get price(){
    return this.formgroup.get('price');
  }

  get Description(){
    return this.formgroup.get('Description');
  }


  constructor(private fb: FormBuilder,private service:ProductService) { }

  ngOnInit(): void {
  
  }
  addproduct(f:any){
    this.service.addproduct(f).subscribe(
      ()=> alert('added')
    )

  }

}
