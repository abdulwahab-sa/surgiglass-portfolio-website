import React from 'react';
import styled from 'styled-components';
import Slideimg from './../images/banner2.jpg';

const Wrapper = styled.div`
	height: 100vh;
	width: 100%;
	background: url(${Slideimg});
	background-position: left;
	background-size: cover;
`;

const Background = styled.div`
	height: 100vh;
	width: 100%;
	color: #fff;
`;

const OverLay = styled.div`
	background-color: darkgreen;
	height: 100vh;
	width: 100%;
	//clip-path: polygon(100% 0, 100% 0, 0 0, 0 100%);
	//transform: translateX(-100%);
	clip-path: polygon(0 0, 34% 0, 75% 100%, 0% 100%);
	//clip-path: polygon(0 0, 100% 0%, 41% 100%, 0% 100%);
	transition: 0.4s all ease-in;
`;

const SlideImg = styled.img`
	position: absolute;
	background-color: whitesmoke;
	bottom: 0;
	right: 0;
	width: 100%;
	max-width: 280px;
	box-shadow: 0 12px 22px 0 rgba(0, 0, 0, 0.2), 0 12px 22px 0 rgba(0, 0, 0, 0.19);
	z-index: 999;
	transform: rotate(-30deg);
	transition: 0.4s all ease-out;
	object-fit: cover;
`;

const InfoContainer = styled.div`
	color: #fff;
	text-align: left;
	font-family: inherit;
	z-index: 999999;
	position: absolute;
	top: 30%;
	left: 30px;
	text-shadow: 2px 2px #303030;
`;

const Heading = styled.h1`
	font-size: 3rem;
	font-weight: 800;
	margin: 0.5rem auto;
`;
const SubHeading = styled.h2`
	font-size: 1.4rem;
	font-weight: 400;
`;

function SlideThree() {
	return (
		<Wrapper>
			<svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%', opacity: '0.6' }}>
				<path
					d="M208.08,0.00 C152.69,67.09 262.02,75.98 200.80,150.00 L0.00,150.00 L0.00,0.00 Z"
					style={{ stroke: 'none', fill: '#006400' }}
				></path>
			</svg>

			<InfoContainer>
				<Heading>
					{' '}
					DENTAL <br /> INSTRUMENTS{' '}
				</Heading>
				<SubHeading> Engineered to perfection! </SubHeading>
			</InfoContainer>
		</Wrapper>
	);
}

export default SlideThree;
