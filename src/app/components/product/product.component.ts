import { Component, Input } from '@angular/core';
import { iProduct } from '../../interfaces/i-product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  @Input() product!: iProduct;

  constructor(private productSvc: ProductService) {}

  addProductToCart(product: iProduct) {
    this.productSvc.addToCart(product);
  }
}
