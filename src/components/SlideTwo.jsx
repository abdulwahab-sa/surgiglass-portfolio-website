import React from 'react';
import styled from 'styled-components';
import Banner from './../images/banner.jpg';
import { useInView } from 'react-intersection-observer';

const Wrapper = styled.div`
	height: 100vh;
	width: 100%;
`;

const Background = styled.div`
	height: 100%;
	width: 100%;
	color: #fff;
	background: url(${Banner});
	background-position: left;
	background-size: cover;
	background-repeat: no-repeat;
	background-attachment: fixed;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const OverLay = styled.div`
	position: absolute;
	top: 0;
	z-index: 22;
	opacity: 0.5;
	background-color: darkgreen;
	height: 100vh;
	width: 100%;
	//clip-path: polygon(100% 0, 100% 0, 0 0, 0 100%);
	clip-path: polygon(79% 0, 100% 0, 100% 100%, 28% 100%);
	//clip-path: polygon(0 0, 100% 0%, 41% 100%, 0% 100%);
	//transform: translateX(${(props) => props.translate});
	transition: 0.4s all ease-in;
`;

//<svg id="wave" style="transform:rotate(0deg); transition: 0.3s" viewBox="0 0 1440 490" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(2, 48, 32, 1)" offset="0%"></stop><stop stop-color="rgba(144, 238, 144, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,196L48,220.5C96,245,192,294,288,302.2C384,310,480,278,576,261.3C672,245,768,245,864,277.7C960,310,1056,376,1152,334.8C1248,294,1344,147,1440,106.2C1536,65,1632,131,1728,204.2C1824,278,1920,359,2016,343C2112,327,2208,212,2304,163.3C2400,114,2496,131,2592,147C2688,163,2784,180,2880,220.5C2976,261,3072,327,3168,318.5C3264,310,3360,229,3456,196C3552,163,3648,180,3744,212.3C3840,245,3936,294,4032,302.2C4128,310,4224,278,4320,269.5C4416,261,4512,278,4608,253.2C4704,229,4800,163,4896,147C4992,131,5088,163,5184,212.3C5280,261,5376,327,5472,334.8C5568,343,5664,294,5760,236.8C5856,180,5952,114,6048,147C6144,180,6240,310,6336,334.8C6432,359,6528,278,6624,269.5C6720,261,6816,327,6864,359.3L6912,392L6912,490L6864,490C6816,490,6720,490,6624,490C6528,490,6432,490,6336,490C6240,490,6144,490,6048,490C5952,490,5856,490,5760,490C5664,490,5568,490,5472,490C5376,490,5280,490,5184,490C5088,490,4992,490,4896,490C4800,490,4704,490,4608,490C4512,490,4416,490,4320,490C4224,490,4128,490,4032,490C3936,490,3840,490,3744,490C3648,490,3552,490,3456,490C3360,490,3264,490,3168,490C3072,490,2976,490,2880,490C2784,490,2688,490,2592,490C2496,490,2400,490,2304,490C2208,490,2112,490,2016,490C1920,490,1824,490,1728,490C1632,490,1536,490,1440,490C1344,490,1248,490,1152,490C1056,490,960,490,864,490C768,490,672,490,576,490C480,490,384,490,288,490C192,490,96,490,48,490L0,490Z"></path></svg>
const InfoContainer = styled.div`
	color: white;
	text-align: center;
	font-family: inherit;
	padding: 15px;
	z-index: 3333;
	text-shadow: 2px 2px #303030;
	opacity: 1;
	transition: all 2s ease-in-out;
`;

const Heading = styled.h1`
	//margin-top: 5rem;
	font-size: 2.8rem;
	font-weight: 800;
`;
const SubHeading = styled.h2`
	font-size: 1.4rem;
`;

function SlideTwo() {
	return (
		<Wrapper>
			<Background>
				<InfoContainer>
					<Heading> SINGLE USE INSTRUMENTS</Heading>
					<SubHeading> Engineered to perfection! </SubHeading>
				</InfoContainer>
			</Background>
			<OverLay></OverLay>
		</Wrapper>
	);
}

export default SlideTwo;
