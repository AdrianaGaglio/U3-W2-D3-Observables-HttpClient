import { Component, OnInit } from '@angular/core';
import { iProduct } from '../../models/iproduct';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(private prodSvc: ProductsService) {}

  products!: iProduct[];
  isSearch: boolean = false;

  ngOnInit() {
    this.prodSvc.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  filter(category: string) {
    this.prodSvc
      .getProductsByCategories(category)
      .subscribe((products: iProduct[]) => (this.products = products));
  }
}
