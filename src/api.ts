import { products } from './mock-database';
import { Product } from './types/product.type';

// A mock function to mimic making an async request for data
export function fetchProducts() {
	return new Promise<{ data: Product[] }>((resolve) =>
		setTimeout(() => resolve({ data: products }), 250)
	);
}
