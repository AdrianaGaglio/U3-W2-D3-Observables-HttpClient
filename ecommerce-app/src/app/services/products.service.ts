import { iCategory } from './../models/icategory';
import { iResponse } from './../models/iresponse';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { iProduct } from '../models/iproduct';
import { BehaviorSubject, filter, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  apiUrl: string = 'https://dummyjson.com/products';

  favourites$ = new BehaviorSubject<iProduct[]>([]);
  favouritesArr: iProduct[] = [];

  cart$ = new BehaviorSubject<iProduct[]>([]);
  cartArr: iProduct[] = [];

  getProducts() {
    return this.http
      .get<iResponse>(this.apiUrl)
      .pipe(map((res: iResponse) => <iProduct[]>res.products));
  }

  getProductsById(id: number) {
    return this.http.get<iProduct>(`${this.apiUrl}/${id}`);
  }

  addToFavourites(product: iProduct) {
    this.favouritesArr.push(product);
    this.favourites$.next(this.favouritesArr);
  }

  addToCart(product: iProduct) {
    this.cartArr.push(product);
    this.cart$.next(this.cartArr);
  }

  getCategories() {
    return this.http.get<iCategory[]>(`${this.apiUrl}/categories`);
  }
}
