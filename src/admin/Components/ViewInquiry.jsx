import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useAPI } from '../../Contexts/ProductContext';

const Container = styled.div`
	width: 100%;
	margin: 3rem auto;
	height: 100%;
	font-family: 'Montserrat', sans-serif;
`;

const Heading = styled.h2`
	margin: 2rem auto;
	font-size: 28px;
	color: teal;
	font-weight: 500;
	text-align: center;
`;

const BodyWrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	padding: 5px 15px;
`;

const Wrapper = styled.div`
	padding: 5px 16px;
	border-bottom: 1px solid #d3d3d3;
	display: flex;
	flex-direction: column;
	margin: 8px;
	width: 400px;
`;

const Title = styled.h2`
	font-size: 14px;
	color: teal;
`;

const Message = styled.span`
	font-size: 16px;
	color: #303030;
`;

const OrderDetailWrapper = styled.div`
	padding: 5px 16px;
	border-bottom: 1px solid #d3d3d3;
	display: flex;
	flex-direction: column;
	margin: 8px;
	width: 80%;
`;

const ViewInquiry = () => {
	const { inquiries } = useAPI();
	const { inquiryId } = useParams();

	const reqInquiry = inquiries.find((item) => item.inquiry_id === parseInt(inquiryId));

	return (
		<Container>
			<Heading>Inquiry from Customer</Heading>
			<BodyWrapper>
				<Wrapper>
					<Title>Full Name</Title>
					<Message>{reqInquiry.inquiry_name}</Message>
				</Wrapper>
				<Wrapper>
					<Title>Email</Title>
					<Message>{reqInquiry.inquiry_email}</Message>
				</Wrapper>
				<Wrapper>
					<Title>Contact</Title>
					<Message>{reqInquiry.inquiry_phone}</Message>
				</Wrapper>
				<Wrapper>
					<Title>Required Qty</Title>
					<Message>{reqInquiry.inquiry_req_qty}</Message>
				</Wrapper>
				<OrderDetailWrapper>
					<Title>Order Details</Title>
					<Message>{reqInquiry.order_detail}</Message>
				</OrderDetailWrapper>
			</BodyWrapper>
		</Container>
	);
};

export default ViewInquiry;
