import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products;

  constructor(private ps:ProductService) { }

  ngOnInit(): void {
    this.products=this.ps.getProducts();
  }

}
