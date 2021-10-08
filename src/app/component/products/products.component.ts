import { Component, OnInit } from '@angular/core';
import { ApiComponent } from 'src/app/service/api/api.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public productList : any ;
  constructor(private api : ApiComponent) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res => {
      this.productList=res;

    })
  }

}
