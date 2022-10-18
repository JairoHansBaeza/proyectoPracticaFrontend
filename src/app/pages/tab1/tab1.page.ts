import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  products: Product[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(){
    this.productService.obtenerProductos().subscribe(resp=>{
      this.products = resp.products;
      console.log(resp.products);
    });
  }
}
