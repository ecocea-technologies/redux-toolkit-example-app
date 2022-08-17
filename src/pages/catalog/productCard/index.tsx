import * as s from './styles';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { DisplayProduct } from '@/types/product.type';
import { useAppDispatch } from '@/redux/store';
import { addToCart } from '@/redux/cartSlice';

type Props = {
  product: DisplayProduct;
};

export default function ProductCard({ product }: Props) {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const addToCartClicked = (productId: string) => {
		dispatch(addToCart({ productId, quantity: 1 }));
	};
	const [fav, setFav] = useState(false);

	return (
		<s.ProductContainer>
			<s.ProductName onClick={() => navigate(`/${product.id}`)}>
				{product.name}
			</s.ProductName>
			<s.ProductImg
				src={product.img}
				alt={product.img}
				onError={({ currentTarget }) => {
					currentTarget.onerror = null; // prevents looping
					currentTarget.src = '/assets/default_product.png';
				}}
			/>
			<s.ProductPrice>{product.displayPrice} €</s.ProductPrice>

			<button onClick={() => addToCartClicked(product.id)}>
				<span role="img" aria-label="Plus">
          ➕
				</span>{' '}
        Add to cart
			</button>
			<s.Heart onClick={() => setFav(!fav)} fav={fav}/>
		</s.ProductContainer>
	);
}
