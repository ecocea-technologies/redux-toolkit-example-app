import React, { useEffect } from 'react';
import * as s from './styles';
import * as gs from '@/common/styles';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { getProducts, selectCatalogContent } from '@/redux/catalogSlice';
import ProductCard from '@/pages/catalog/productCard';
import LoaderWrapper from '@/common/loader';

export function Catalog() {
	const dispatch = useAppDispatch();
	const products = useAppSelector(selectCatalogContent);

	useEffect(() => { dispatch(getProducts()); }, [dispatch]);
	return (
		<LoaderWrapper>
			<gs.Content>
				<gs.Header>
					<h1>🥒 Grocery store</h1>
				</gs.Header>
				<gs.Body>
					<s.CatalogContainer>
						{products.map((product, i) => (
							<ProductCard product={product} key={i} />
						))}
					</s.CatalogContainer>
				</gs.Body>
			</gs.Content>
		</LoaderWrapper>
	);
}
