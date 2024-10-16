import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { iCategory } from '../../models/icategory';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent implements OnInit {
  constructor(private prodSvc: ProductsService) {}

  categories!: iCategory[];

  ngOnInit() {
    this.prodSvc
      .getCategories()
      .subscribe((categories) => (this.categories = categories));
  }
}
