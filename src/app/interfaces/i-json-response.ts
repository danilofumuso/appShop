import { iProduct } from './i-product';

export interface iJsonResponse {
  products: iProduct[];
  total: number;
  skip: number;
  limit: number;
}
