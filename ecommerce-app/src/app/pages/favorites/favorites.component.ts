import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { iProduct } from '../../models/iproduct';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
})
export class FavoritesComponent implements OnInit {
  constructor(private prodSvc: ProductsService, private router: Router) {}

  products!: iProduct[];

  ngOnInit() {
    this.prodSvc.favourites$.subscribe((products: iProduct[]) => {
      this.products = products;
    });
  }
}
