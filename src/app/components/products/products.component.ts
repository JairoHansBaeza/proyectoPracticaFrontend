import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

  @Input() products: Product[];

  constructor() { }

  ngOnInit() {}

  addToCart(){
    console.log('Agregando al carro');
  }
}
