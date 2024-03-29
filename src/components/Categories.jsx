import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAPI } from '../Contexts/ProductContext';
import { Link, useParams } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const Container = styled.div`
	color: #303030;
	padding: 10px;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	width: 100%;
	height: 100%;
`;

const Title = styled.h2`
	width: 100vw;
	height: 3rem;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: teal;
	color: whitesmoke;
	text-align: center;
	letter-spacing: 4px;
	margin: 2rem auto;
	font-family: 'Montserrat', sans-serif;
	font-weight: 700;
	letter-spacing: 10px;
`;

const Info = styled.div`
	opacity: 0;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.2);
	z-index: 3;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.5s ease;
	cursor: pointer;
`;

const Wrapper = styled.div`
	flex: 1;
	margin: 5px;
	width: 280px;
	height: 350px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #f5fbfd;
	position: relative;

	&:hover ${Info} {
		opacity: 1;
	}
`;

const Img = styled.img`
	height: 100%;
	width: 100%;
	border-radius: 50%;
	z-index: 2;
	object-fit: cover;
`;

const Icon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px;
	transition: all 0.5s ease;
	color: #303030;
	&:hover {
		background-color: #e9f5f5;
		transform: scale(1.1);
	}
`;

const CatTitle = styled.h2`
	color: whitesmoke;
	background-color: #006400;
	opacity: 0.7;
	height: 2.8rem;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 4;
	position: absolute;
	bottom: 30%;
	letter-spacing: 1px;
	font-weight: 500;
	cursor: pointer;
`;
const Qty = styled.span`
	font-size: 14px;
	font-weight: 300;
`;

const Categories = ({ data }) => {
	return (
		<Container>
			{data?.map((el, i, arr) => {
				return (
					<Link to={`/products/${el.category_title}/${el.subcategory_title}`} key={el.subcategory_id} style={{ textDecoration: 'none' }}>
						<Wrapper>
							<Img src={URL.createObjectURL(new Blob([new Uint8Array(el.subcategory_img.data)], { type: 'image/png' }))} />

							<Info>
								<Icon>
									<FaSearch />
								</Icon>
							</Info>
							<CatTitle>{el.subcategory_title.toUpperCase()}</CatTitle>
							{/*<Qty>{`${data.filter((item) => item.subCategory === el.subCategory).length} PRODUCTS`}</Qty>*/}
						</Wrapper>
					</Link>
				);
			})}
		</Container>
	);
};

export default Categories;
