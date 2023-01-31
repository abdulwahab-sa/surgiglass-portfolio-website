import React from 'react';
import styled from 'styled-components';
import products, { about } from './../data';
import BigScreen from './../responsive';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 4rem;
	${BigScreen({
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
	})}
`;
const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 1rem;
	max-width: ${(props) => props.width};
`;
const Img = styled.div`
	background-color: #006400;
	border-radius: 50%;
	height: 100px;
	width: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: 200ms ease-in;
	margin-bottom: 0.9rem;
	cursor: pointer;
	transition: all 0.5s ease-in-out;
	&:hover {
		box-shadow: inset -10rem 0 0 0 #32cd32, inset 10rem 0 0 0 #32cd32;
		color: whitesmoke;
		border: 1.5px solid white;
	}
`;

const Heading = styled.h1`
	text-align: center;
	font-size: 1.6rem;
	margin: 0.8rem auto;
	font-weight: 500;
	&:after {
		content: '';
		display: block;
		width: 100px;
		height: 4px;
		margin: 0.5rem auto;
		background-color: #006400;
	}
	${BigScreen({
		fontSize: '1.8rem',
	})}
`;

const Icon = styled.img`
	height: 50%;
`;
const Title = styled.h2`
	font-weight: 500;
	font-size: 1.3rem;
`;

const Statement = styled.p`
	margin: 1rem auto;
	text-align: center;
	line-height: 24px;
	max-width: ${(props) => props.width};
	padding: 0 10px;
`;

function getUniqueListBy(arr, key) {
	return [...new Map(arr.map((item) => [item[key], item])).values()];
}

function HomeCategories() {
	const mainCategories = getUniqueListBy(products, 'mainCategory');

	return (
		<>
			<Heading style={{ marginTop: '1.5rem' }}>ABOUT US</Heading>
			<Statement width={'70%'}>
				SurgiGlass Company Manufactures & Exports Dental Surgery, Orthodontic, Periodontic, Diagnostic and many other Surgical Instruments.
				We have set the standard of Premium Quality.
			</Statement>
			<Container>
				{about.map((el) => {
					return (
						<Wrapper width={'300px'}>
							<Img>
								<Icon src={el.icon} />
							</Img>
							<Title> {el.title} </Title>
							<Statement width={'90%'}>{el.statement}</Statement>
						</Wrapper>
					);
				})}
			</Container>

			<Heading>OUR CATEGORIES</Heading>
			<Container>
				{mainCategories.map((product) => {
					return (
						<Wrapper width={'200px'}>
							<Img>
								<Icon src={product.icon} />
							</Img>
							<Title> {product.mainCategory} </Title>
						</Wrapper>
					);
				})}
			</Container>
		</>
	);
}

export default HomeCategories;
