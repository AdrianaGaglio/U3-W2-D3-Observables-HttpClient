import { iCategory } from './../models/icategory';
import { iResponse } from './../models/iresponse';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { iProduct } from '../models/iproduct';
import { BehaviorSubject, filter, map, Observable, Subject } from 'rxjs';

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

  searchQuery$ = new Subject<string>();
  queryString!: string;

  getProducts(): Observable<iProduct[]> {
    return this.http
      .get<iResponse>(this.apiUrl)
      .pipe(map((res: iResponse) => <iProduct[]>res.products));
  }

  getProductsById(id: number): Observable<iProduct> {
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

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/category-list`);
  }

  getProductsByCategories(category: string): Observable<iProduct[]> {
    return this.http
      .get<iResponse>(`${this.apiUrl}/category/${category}`)
      .pipe(map((res: iResponse) => <iProduct[]>res.products));
  }

  searchProduct(): Observable<iProduct> {
    this.searchQuery$.subscribe((query) => (this.queryString = query));
    return this.http.get<iProduct>(
      `${this.apiUrl}/search?q=${this.queryString}`
    );
  }
}
