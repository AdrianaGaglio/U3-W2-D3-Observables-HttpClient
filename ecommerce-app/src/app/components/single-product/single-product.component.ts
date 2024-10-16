import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { iProduct } from '../../models/iproduct';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.scss',
})
export class SingleProductComponent implements OnInit {
  @Input() id!: number;

  constructor(private prodSvc: ProductsService) {}

  product!: iProduct;

  ngOnInit() {
    this.prodSvc
      .getProductsById(this.id)
      .subscribe((res) => (this.product = res));
  }

  like(product: iProduct) {
    this.prodSvc.addToFavourites(product);
  }

  addToCart(product: iProduct) {
    this.prodSvc.addToCart(product);
  }
}
