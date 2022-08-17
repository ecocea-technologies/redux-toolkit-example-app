import React from 'react';
import * as gs from '@/common/styles';
import * as s from '@/common/cart/styles';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { removeFromCart, selectCartContent } from '@/redux/cartSlice';

export function Cart() {
	const dispatch = useAppDispatch();
	const { items = [], displayGrandTotal } = useAppSelector(selectCartContent);
	const isEmpty = items.length === 0;

	return (
		<gs.Content>
			<gs.Header>
				<h2>🛒 Cart</h2>
			</gs.Header>
			<gs.Body>
				<s.CartBody>
					{isEmpty ?
						<p>Cart is empty</p>:
						<>
							{items.map(({ productId, name, quantity, displayTotalPrice }) => (
								<s.CartItem key={productId}>
									<s.TrashIcon onClick={() => dispatch(removeFromCart({ productId, quantity: 1 }))}/>
									<s.CartItemDescription>
										<strong>{quantity}</strong> × {name}
									</s.CartItemDescription>
									<s.CartItemPriceAndAction>
										<s.CartItemPrice>{displayTotalPrice} €</s.CartItemPrice>
									</s.CartItemPriceAndAction>
								</s.CartItem>
							))}
							<s.CartSummary>{displayGrandTotal} €</s.CartSummary>
						</>
					}
				</s.CartBody>
			</gs.Body>
		</gs.Content>
	);
}
