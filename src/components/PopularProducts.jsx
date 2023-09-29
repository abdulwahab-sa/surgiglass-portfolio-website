import React, { useContext } from 'react';
import styled from 'styled-components';
import { useAPI } from '../Contexts/ProductContext';
import { Link } from 'react-router-dom';

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
	object-position: center;
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

const linkStyle = {
	textDecoration: 'none',
};

function PopularProducts() {
	const { data } = useContext(ProductContext);

	const getRandomObjects = (arr) => {
		if (arr.length <= 9) {
			return arr;
		}

		const shuffled = arr.sort(() => 0.5 - Math.random());
		return shuffled.slice(0, 9);
	};

	const randomObjects = getRandomObjects(data);

	return (
		<ProductContainer>
			{randomObjects.map((el) => {
				return (
					<Link style={linkStyle} to={`/products/${el.mainCategory}/${el.subCategory}/${el.id}`}>
						<Wrapper key={el.id}>
							<Img src={`data:image/jpeg;base64,${el.productImg}`} />
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
	);
}

export default PopularProducts;
