import { Component, OnInit } from '@angular/core';
import { iProduct } from '../../interfaces/i-product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.component.html',
  styleUrl: './preferiti.component.scss',
})
export class PreferitiComponent implements OnInit {
  favourites: iProduct[] = [];

  constructor(private productSvc: ProductService) {}

  ngOnInit(): void {
    this.productSvc.favourites$.subscribe((product) => {
      if (!this.favourites.some((prod) => prod.id === product.id)) {
        this.favourites.push(product);
      }
    });
  }
}
