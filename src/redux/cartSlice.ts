import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';
import { CartContent } from '@/types/cart.type';
import { selectProducts } from '@/redux/catalogSlice';
import { Product } from '@/types/product.type';

export type CartState = {
  items: {
    [productId: string]: number; // quantity
  };
};

const initialState: CartState = {
	items: {}
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart(state, action: PayloadAction<{ productId: string; quantity: number }>) {
			const { productId, quantity } = action.payload;
			state.items[productId] = (state.items[productId] || 0) + quantity;
		},
		removeFromCart(state, action: PayloadAction<{ productId: string; quantity: number }>) {
			const { productId, quantity } = action.payload;
			const newQuantity = (state.items[productId] || 0) - quantity;
			if (newQuantity <= 0){
				delete state.items[productId];
			} else {
				state.items[productId] = newQuantity;
			}

		}
	}
});

const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartContent = createSelector(selectProducts, selectCartItems,
	(products, items) => {
		const cartContent = Object.keys(items).reduce(
			(acc, productId) => {
				const quantity = items[productId];
				const product = products.find((product: Product) => product.id === productId);
				if (!product) return acc;

				const { price: unitPrice, name } = product;
				const itemTotalPrice = unitPrice * quantity;

				acc.items = [
					...acc.items,
					{
						productId,
						name,
						quantity,
						unitPrice,
						totalPrice: itemTotalPrice,
						displayTotalPrice: (itemTotalPrice / 100).toFixed(2)
					}
				];

				const grandTotal = (acc.grandTotal || 0) + itemTotalPrice;
				acc.grandTotal = grandTotal;
				acc.displayGrandTotal = (grandTotal / 100).toFixed(2);
				return acc;
			},
      { items: [], grandTotal: 0 } as CartContent
		);
		return cartContent;
	}
);

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
