import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private ProdSvc: ProductsService) {}

  search!: string;

  searchProd(query: string) {
    this.ProdSvc.searchQuery$.next(query);
  }
}
