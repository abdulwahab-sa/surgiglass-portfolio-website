import styled from 'styled-components';
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAPI } from '../Contexts/ProductContext';
import BigScreen from './../responsive';
import products from '../data';

const Container = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Wrapper = styled.div`
	padding: 10px;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: 20px 0;
	${BigScreen({ flexDirection: 'row' })}
`;

const ImgContainer = styled.div`
	height: 450px;
	min-width: 250px;
	max-width: 500px;
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
`;

const InfoContainer = styled.div`
	padding: 10px;
	color: #303030;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	${BigScreen({ width: '60%' })}
`;

const Title = styled.h1`
	font-size: 1.6rem;
	font-weight: 400;
	margin-bottom: 0.8rem;
`;

const Article = styled.span`
	margin: 0.3rem auto;
`;

const Desc = styled.p`
	margin: 20px 0px;
	line-height: 21px;
`;

const Button = styled.button`
	border: none;
	background-color: #006400;
	color: #fff;
	font-weight: 400;
	margin: 1rem auto;
	padding: 10px 15px;
	cursor: pointer;
	transition: 0.5s ease-in;
	&:hover {
		box-shadow: inset -10rem 0 0 0 #32cd32, inset 10rem 0 0 0 #32cd32;
		color: whitesmoke;
	}
`;

const ProductDetail = () => {
	const { prodId } = useParams();
	const { products } = useAPI();
	const reqProduct = products.find((el) => el.product_id === parseInt(prodId));

	return (
		<Container>
			<Wrapper>
				<ImgContainer>
					<Image src={URL.createObjectURL(new Blob([new Uint8Array(reqProduct.product_img.data)], { type: 'image/png' }))} />
				</ImgContainer>
				<InfoContainer>
					<Title>{reqProduct.product_title}</Title>
					<Article> {`Article # ${reqProduct.product_article}`}</Article>
					<Article> {`Category: ${reqProduct.subcategory_title}`}</Article>
					<Desc>{reqProduct.product_description}</Desc>
					<Link to={'/quotation'}>
						<Button>SEND INQUIRY</Button>
					</Link>
				</InfoContainer>
			</Wrapper>
		</Container>
	);
};

export default ProductDetail;
