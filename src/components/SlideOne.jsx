import React from 'react';
import styled from 'styled-components';
import Slideimg from './../images/banner4.jpg';

const Wrapper = styled.div`
	height: 100%;
	width: 100%;
	position: relative;
`;

const Background = styled.div`
	height: 100vh;
	width: 100%;
	background: url(${Slideimg});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const OverLay = styled.div`
	background-color: darkgreen;
	height: 100vh;
	width: 100%;
	opacity: 0.4;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	//clip-path: polygon(100% 0, 100% 0, 0 0, 0 100%);
	//transform: translateX(-100%);
	//clip-path: polygon(0 0, 0% 100%, 100% 0);
	//clip-path: polygon(0 0, 100% 0%, 41% 100%, 0% 100%);
	transition: 0.4s all ease-in;
`;

const SlideImg = styled.img`
	position: absolute;
	bottom: 0;
	right: 0;
	width: 100%;
	max-width: 280px;
	box-shadow: 0 10px 22px 0 rgba(0, 0, 0, 0.2), 0 10px 22px 0 rgba(0, 0, 0, 0.19);
	z-index: 999;
	transform: rotate(-30deg);
	transition: 0.4s all ease-out;
	object-fit: cover;
`;

const InfoContainer = styled.div`
	color: #fff;
	z-index: 9999;
	margin: 0 auto;
	text-align: left;
	font-family: inherit;
	text-shadow: 2px 2px #303030;
`;

const Heading = styled.h1`
	font-size: 2.8rem;
	font-weight: 800;
`;
const SubHeading = styled.h2`
	font-size: 1.4rem;
`;

function SlideOne() {
	return (
		<Wrapper>
			<Background>
				<InfoContainer>
					<SubHeading>WELCOME!</SubHeading>
					<Heading> SURGIGLASS INTERNATIONAL</Heading>
					<SubHeading> Engineered to perfection! </SubHeading>
				</InfoContainer>
			</Background>
			<OverLay></OverLay>
		</Wrapper>
	);
}

export default SlideOne;
