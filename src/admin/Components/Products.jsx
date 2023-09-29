import React from 'react';
import ProductList from '../Tables/ProductTable';
import styled from 'styled-components';
import ProductTable from '../Tables/ProductTable';
import { Link } from 'react-router-dom';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	font-family: 'Montserrat', sans-serif;
`;

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin: 20px 0;
`;

const Heading = styled.h2`
	margin: 1.2rem;
	font-size: 28px;
	color: teal;
	font-weight: 500;
`;

const Button = styled.button`
	background-color: teal;
	height: 50px;
	padding: 18px;
	display: flex;
	align-items: center;
	border: none;
	color: #fff;
	font-family: inherit;
	border-radius: 8px;
	font-size: 16px;
	font-weight: 500;
	cursor: pointer;
`;

const AllProducts = () => {
	return (
		<Container>
			<Wrapper>
				<Heading>All Products</Heading>
				<Link style={{ textDecoration: 'none' }} to={'/createproduct'}>
					<Button>Create Product</Button>
				</Link>
			</Wrapper>
			<ProductTable />
		</Container>
	);
};

export default AllProducts;
