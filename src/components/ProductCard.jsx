import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import ItemImg from './../images/mirror.jpg';
import { ProductContext } from '../Contexts/ProductContext';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import products from '../data';
import Sidebar from './Sidebar';

const Container = styled.div`
	display: flex;
	justify-content: space-evenly;
`;

const ProductContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
`;

const Wrapper = styled.div`
	width: 280px;
	height: 420px;
	display: flex;
	flex-direction: column;
	box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
	cursor: pointer;
	margin: 1rem;
	position: relative;
`;
const Img = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
const ProductDetail = styled.div`
	height: 60px;
	background-color: #fff;
	padding: 5px 8px;
	color: #006400;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	z-index: 2;
`;

const View = styled.button`
	background-color: #006400;
	height: 30px;
	color: #fff;
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	padding: 10px;
	cursor: pointer;
`;

const ItemTitle = styled.h2`
	font-weight: 500;
	margin: 5px auto;
`;
const Subcategory = styled.h3`
	font-size: 13px;
	font-weight: 300;
	color: #303030;
`;

const Article = styled.span`
	font-size: 13px;
	font-weight: 300;
	color: #303030;
`;

const linkStyle = {
	textDecoration: 'none',
};

export const ProductCard = () => {
	const { category, subcategory } = useParams();
	const requiredProducts = products.filter((item) => item.subCategory == subcategory);

	return (
		<Container>
			<Sidebar />

			<ProductContainer>
				{requiredProducts.map((el) => {
					return (
						<Link style={linkStyle} to={`/products/${el.mainCategory}/${el.subCategory}/${el.id}`}>
							<Wrapper key={el.id}>
								<Img src={el.productImg} />
								<View> View Product </View>
								<ProductDetail>
									<Subcategory>{el.subCategory} </Subcategory>
									<ItemTitle>{`${el.productName} - ${el.article}`}</ItemTitle>
								</ProductDetail>
							</Wrapper>
						</Link>
					);
				})}
			</ProductContainer>
		</Container>
	);
};
