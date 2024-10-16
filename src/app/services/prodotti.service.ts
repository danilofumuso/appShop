import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iProduct } from '../interfaces/i-product';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdottiService {
  apiUrl: string = 'https://dummyjson.com/docs/products';

  preferiti$ = new ReplaySubject();

  constructor(private http: HttpClient) {}

  getProducts(): Observable<iProduct[]> {
    return this.http.get<iProduct[]>(this.apiUrl);
  }
}
