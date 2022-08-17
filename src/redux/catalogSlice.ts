import {
	createAsyncThunk,
	createSelector,
	createSlice
} from '@reduxjs/toolkit';
import { AppStatusEnum } from '@/types/appStatus.enum';
import { Product } from '@/types/product.type';
import { fetchProducts } from '@/api';
import { RootState } from '@/redux/store';

export interface catalogState {
  status: AppStatusEnum;
  products: Product[];
}

const initialState: catalogState = {
	status: AppStatusEnum.IDLE,
	products: []
};

export const getProducts = createAsyncThunk('catalog/products', async () => {
	return await fetchProducts();
});

export const catalogSlice = createSlice({
	name: 'catalog',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getProducts.pending, (state) => {
				state.status = AppStatusEnum.LOADING;
			})
			.addCase(getProducts.fulfilled, (state, action) => {
				const { data: products } = action.payload;
				state.status = AppStatusEnum.IDLE;
				state.products = products;
			})
			.addCase(getProducts.rejected, (state) => {
				state.status = AppStatusEnum.FAILED;
			});
	}
});

export const selectProducts = (state: RootState) => state.catalog.products;

export const selectProduct = (state: RootState, id: string) => state.catalog.products.find((product: Product) => product.id === id);

export const selectCatalogContent = createSelector(selectProducts,
	(products) => {
		return products.map((product: Product) => {
			const { price } = product;
			return {
				...product,
				displayPrice: (price / 100).toFixed(2)
			};
		})
			.sort((productA, productB) => productA.name.localeCompare(productB.name));
	}
);

export default catalogSlice.reducer;
