import React, { useContext } from 'react';
import styled from 'styled-components';
import CategoryImg from './../images/mirror.jpg';
import { ProductContext } from '../Contexts/ProductContext';
import products from '../data';
import { Link } from 'react-router-dom';

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
`;
const Wrapper = styled.div`
	width: 260px;
	height: 350px;
	display: flex;
	flex-direction: column;
	box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
	cursor: pointer;
	margin: 1rem;
`;
const Img = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
`;
const CategoryDetail = styled.div`
	height: 60px;
	background-color: #006400;
	color: #fff;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
`;
const Title = styled.h2``;
const Qty = styled.span`
	font-size: 14px;
	font-weight: 300;
`;

const Categories = () => {
	const { showCategories, selectedCategoryarr, category, subcategory, products } = useContext(ProductContext);
	const finalCategories = selectedCategoryarr.length ? selectedCategoryarr : showCategories;
	//const filteredSubcategory = products.filter((items) => items.subCategory == subcategory);

	return (
		<Container>
			{finalCategories.map((el, i, arr) => {
				return (
					<Link to={`/products/${el.mainCategory}/${el.subCategory}`} style={{ textDecoration: 'none' }}>
						<Wrapper key={el.id}>
							<Img src={el.subCategoryImg} />
							<CategoryDetail>
								<Title>{el.subCategory}</Title>
								<Qty>{`${products.filter((item) => item.subCategory === el.subCategory).length} PRODUCTS`}</Qty>
							</CategoryDetail>
						</Wrapper>
					</Link>
				);
			})}
		</Container>
	);
};

export default Categories;
