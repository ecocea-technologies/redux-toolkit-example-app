import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { RootState, useAppSelector } from '@/redux/store';
import { selectProduct } from '@/redux/catalogSlice';
import * as gs from '@/common/styles';
import * as s from '@/pages/product/styles';

export function Product() {
	const navigate = useNavigate();
	const location = useLocation();
	const product = useAppSelector((state: RootState) =>
		selectProduct(state, location.pathname.substring(1))
	);

	return product ? (
		<gs.Content>
			<gs.Header>
				<h1>🥒 {product.name}</h1>
			</gs.Header>
			<gs.Body>
				<s.ProductWrapper>
					<p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt condimentum viverra. Ut cursus nisl eu purus dignissim, ac
            euismod ante finibus. Nulla malesuada purus vitae arcu pharetra
            condimentum. Nullam odio odio, iaculis ut sem eu, dictum tristique
            nunc. Aenean scelerisque ipsum quis egestas pharetra. Morbi
            tristique nulla risus, aliquet ornare tellus cursus fermentum. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum
            urna quam, quis pellentesque mauris pulvinar ut. Etiam sodales purus
            eget commodo pharetra. Donec lorem augue, accumsan vel sollicitudin
            sit amet, porttitor vel metus. Praesent porttitor non tellus sed
            pellentesque. In a sem sit amet quam sagittis semper. Ut ultrices
            dapibus erat, nec fermentum quam faucibus id. Sed tellus diam,
            sodales vitae magna sed, tincidunt viverra elit. Sed maximus, nulla
            ut efficitur tristique, nulla mauris maximus neque, at placerat erat
            nunc eu ex. Quisque lacus urna, pulvinar vel urna vitae, maximus
            vestibulum mauris. Morbi vel mi consequat, laoreet arcu at,
            pellentesque lectus. Proin finibus semper lacus, ac convallis dui
            interdum at. Maecenas sed tellus nibh. Vivamus odio sem, vehicula in
            convallis consectetur, ultricies id nibh. Nullam lobortis magna
            ultrices, fermentum odio vitae, accumsan purus. Suspendisse suscipit
            mauris ligula, eu varius nibh semper at. Maecenas ullamcorper
            molestie metus ac vehicula. Duis at eros auctor, pellentesque ipsum
            eget, rutrum elit. Aliquam sit amet nunc purus. Nullam id nisl
            semper magna feugiat euismod id a augue. In dapibus mi sed ipsum
            hendrerit dictum. Maecenas sollicitudin felis mattis scelerisque
            efficitur. Curabitur facilisis mattis maximus. Pellentesque gravida
            aliquam urna, ac laoreet tortor tempus sit amet.
					</p>
					<button onClick={() => navigate('/')}>Back</button>
				</s.ProductWrapper>
			</gs.Body>
		</gs.Content>
	) : <></>;
}
