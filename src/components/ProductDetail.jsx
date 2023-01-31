import styled from 'styled-components';

import { Link, useParams } from 'react-router-dom';

import Img from './../images/mirror.jpg';
import products from '../data';

const Container = styled.div`
	height: 100%;
	width: 100%;
`;

const Wrapper = styled.div`
	padding: 50px;
	height: 100%;
	display: flex;
`;

const ImgContainer = styled.div`
	flex: 1;
	height: 400px;
	min-width: 250px;
	max-width: 400px;
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
`;

const InfoContainer = styled.div`
	flex: 1;
	padding: 0px 50px;
	color: #303030;
	text-align: center;
	height: 100%;
	display: flex;
	flex-direction: column;
	height: 400px;
	align-items: center;
	justify-content: center;
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
	const params = useParams();
	const reqProduct = products.find((el) => el.id === parseInt(params.prodId));

	return (
		<Container>
			<Wrapper>
				<ImgContainer>
					<Image src={reqProduct.productImg} />
				</ImgContainer>
				<InfoContainer>
					<Title>{reqProduct.productName}</Title>
					<Article> {`Article # ${reqProduct.article}`}</Article>
					<Article> {`Category: ${reqProduct.subCategory}`}</Article>
					<Desc>
						Introducing our range of premium quality dental instruments, made from durable stainless steel. Our products are the result of
						extensive research and development, ensuring they meet the highest standards in both performance and safety. From scalers to
						forceps, our instruments are designed to make your dental procedures easier and more efficient. Trust us to provide the best
						tools for the job and experience the difference in quality today!
					</Desc>
					<Link to={'/QuoteForm'}>
						<Button>SEND INQUIRY</Button>
					</Link>
				</InfoContainer>
			</Wrapper>
		</Container>
	);
};

export default ProductDetail;
