import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Catalog } from '@/pages/catalog';
import { Product } from '@/pages/product';
import * as gs from '@/common/styles';
import { Cart } from '@/common/cart';


export default function App() {
	return (
		<gs.AppContainer>
			<gs.Main>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Catalog />} />
						<Route path="/:id" element={<Product />} />
					</Routes>
				</BrowserRouter>
			</gs.Main>
			<gs.Aside>
				<Cart />
			</gs.Aside>
		</gs.AppContainer>
	);
}
