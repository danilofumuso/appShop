import { Injectable } from '@angular/core';
import { iProduct } from '../interfaces/i-product';
import { map, ReplaySubject, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { iJsonResponse } from '../interfaces/i-json-response';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl: string = 'https://dummyjson.com/products';

  favourites$ = new ReplaySubject<iProduct>();

  cart$ = new Subject<iProduct>();

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http
      .get<iJsonResponse>(this.apiUrl)
      .pipe(map((res) => res.products));
  }

  addToCart(product: iProduct) {
    this.cart$.next(product);
  }

  addToFavourites(product: iProduct) {
    this.favourites$.next(product);
  }
}
