import React from 'react';
import styled from 'styled-components';
import ProductList from '../Tables/ProductTable';
import InquiryTable from '../Tables/InquiryTable';

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

const tableData = [];

const Inquiries = () => {
	return (
		<Container>
			<Wrapper>
				<Heading>Inquiries</Heading>
			</Wrapper>
			<InquiryTable />
		</Container>
	);
};

export default Inquiries;
