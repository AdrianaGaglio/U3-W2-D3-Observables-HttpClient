import { iProduct } from './iproduct';

export interface iResponse {
  products: iProduct[];
  total: number;
  skip: number;
  limit: number;
}
