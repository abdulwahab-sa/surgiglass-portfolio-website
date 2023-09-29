import React from 'react';
import styled from 'styled-components';
import SlideImg from './../images/banner8.jpg';
import SlideImgTwo from './../images/banner21.jpg';
import BigScreen from '../responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
	height: 100%;
	width: 100%;
	${BigScreen({ display: 'flex', alignItems: 'center', height: '100vh' })}//background-color: #fdfaf6;
`;

const InfoWrapper = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	${BigScreen({ width: '50%' })}
`;

const BlobWrapper = styled.div`
	height: 100%;
	//display: flex;
	justify-content: center;
`;

const GradientBlob = styled.div`
	border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
	background: rgb(199, 248, 0);
	background: -moz-linear-gradient(0deg, rgba(199, 248, 0, 1) 0%, rgba(7, 133, 19, 1) 100%);
	background: -webkit-linear-gradient(0deg, rgba(199, 248, 0, 1) 0%, rgba(7, 133, 19, 1) 100%);
	background: linear-gradient(0deg, rgba(199, 248, 0, 1) 0%, rgba(7, 133, 19, 1) 100%);
	filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#c7f800",endColorstr="#078513",GradientType=1);
`;

const SolidBlob = styled.div`
	position: absolute;
	height: 350px;
	width: 400px;
	border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
	background: ${(props) => props.bg};
`;

const Heading = styled.h1`
	font-size: 2rem;
	font-weight: 800;
	margin: 1rem 0 2rem;
	color: darkgreen;
	&:after {
		content: '';
		display: block;
		height: 4px;
		width: 150px;
		background: linear-gradient(to right, rgba(199, 248, 0, 1) 0%, rgba(7, 133, 19, 1) 100%);
		margin: 1rem auto;
	}
`;
const Subheading = styled.h3`
	font-size: 1.2rem;
	font-weight: 500;
`;
const Button = styled.button`
	border: 1px solid darkgreen;
	display: inline-flex;
	align-self: flex-start;
	flex-grow: 0;
	font-size: 15px;
	font-weight: 500;
	border-radius: 16px;
	padding: 12px 12px;
	margin: 2rem auto;
	cursor: pointer;
	color: darkgreen;
	transition: 0.5s ease-in;
	&:hover {
		box-shadow: inset -10rem 0 0 0 #32cd32, inset 10rem 0 0 0 #32cd32;
		color: whitesmoke;
		border: 1.5px solid white;
	}
`;
const Statement = styled.p`
	font-size: 1.2rem;
	font-weight: 400;
	background: darkgreen;
	color: whitesmoke;
	width: 80%;
	margin: 0 auto;
	padding: 15px 10px;
	border-radius: 18px;
`;

const BlobImg = styled.div`
	height: 60%;
	width: 40%;
	border-radius: 30% 70% 0% 100% / 30% 30% 70% 70%;
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	overflow: hidden;
`;

const Img = styled.img`
	width: 280px;
	z-index: 2;
	margin: 0.5rem auto 2rem;
	border-radius: 30% 5% 30% 5%;
	${BigScreen({ width: '480px' })}
`;

const smallScreen = {};

const bigScreen = {
	position: 'absolute',
	height: '350px',
	width: '450px',
};

function SlideFour() {
	return (
		<Container>
			<InfoWrapper>
				<Subheading>Welcome!</Subheading>
				<Heading>
					SURGIGLASS <br /> INTERNATIONAL
				</Heading>
				<Statement>
					{' '}
					Precision, Care, and Comfort <br /> in Every Instrument{' '}
				</Statement>
				<Link to="/products">
					<Button> EXPLORE PRODUCTS </Button>
				</Link>
			</InfoWrapper>

			<Img src={SlideImg} style={smallScreen} />

			{/*<SolidBlob bg="#f8ff00" style={smallScreen}></SolidBlob>
				<GradientBlob style={smallScreen}></GradientBlob>*/}
		</Container>
	);
}

export default SlideFour;
