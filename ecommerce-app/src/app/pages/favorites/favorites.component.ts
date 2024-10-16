import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { iProduct } from '../../models/iproduct';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
})
export class FavoritesComponent implements OnInit {
  constructor(private prodSvc: ProductsService) {}

  products!: iProduct[];

  ngOnInit() {
    this.prodSvc.favourites$.subscribe((products: iProduct[]) => {
      this.products = products;
    });
  }
}
