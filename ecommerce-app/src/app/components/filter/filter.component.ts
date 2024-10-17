import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { iCategory } from '../../models/icategory';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent implements OnInit {
  constructor(private prodSvc: ProductsService) {}

  @Output() emitCategory = new EventEmitter<string>();

  categories!: string[];

  ngOnInit() {
    this.prodSvc
      .getCategories()
      .subscribe((categories: string[]) => (this.categories = categories));
  }

  emit(category: string) {
    this.emitCategory.emit(category);
  }
}
