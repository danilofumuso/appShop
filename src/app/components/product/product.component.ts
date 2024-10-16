import { Component, Input } from '@angular/core';
import { iProduct } from '../../interfaces/i-product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  @Input() product!: iProduct;
}
