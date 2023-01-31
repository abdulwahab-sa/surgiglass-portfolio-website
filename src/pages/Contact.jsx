import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaPhone, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import BigScreen from '../responsive';

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	color: #303030;
`;

const Statement = styled.p`
	font-size: 1.6rem;
	font-family: 500;
	line-height: 2.2rem;
	margin: 0 auto;
	width: 70%;
`;
const Title = styled.h2`
	width: 100%;
	height: 3rem;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #006400;
	color: whitesmoke;
	text-align: center;
	letter-spacing: 4px;
	margin: 1rem auto;
	font-weight: 700;
`;
const ContactContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-evenly;
	margin: 2.5rem auto;
`;
const Info = styled.div`
	display: flex;
	width: 260px;
	height: 160px;
	margin: 1.5rem;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	background-color: #006400;
	color: #fff;
`;
const InfoTitle = styled.h3`
	font-size: 24px;
`;
const InfoDetail = styled.span``;

const FormContainer = styled.div`
	width: 80%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 1rem auto;
	${BigScreen({
		width: '350px',
	})}
`;

const Form = styled.form`
	width: 100%;
`;

const FormInputs = styled.div`
	width: 100%;
	height: 100%;
	margin: 0.5rem auto;
	text-align: center;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
`;

const Input = styled.input`
	flex: 1;
	width: 100%;
	margin: 0.6rem auto;
	padding: 10px 8px;
	background-color: #d3d3d3;
	border: none;
	border-radius: 5px;
	font-family: inherit;
	color: #303030;
	&:focus {
		outline: none;
	}
`;
const Textarea = styled.textarea`
	width: 100%;
	margin: 0.6rem auto;
	padding: 10px 8px;
	background-color: #d3d3d3;
	border: none;
	border-radius: 5px;
	font-family: inherit;
	color: #303030;
	resize: none;
	&:focus {
		outline: none;
	}
`;

const Button = styled.button`
	padding: 10px 18px;
	color: whitesmoke;
	background-color: #006400;
	margin: 0.6rem auto;
	border: none;
	font-weight: 600;
	cursor: pointer;
	transition: 0.5s ease-in;
	&:hover {
		box-shadow: inset -10rem 0 0 0 #32cd32, inset 10rem 0 0 0 #32cd32;
	}
`;

export const Contact = () => {
	return (
		<Container>
			<Title>CONTACT INFORMATION</Title>
			<Statement>Contact Us Directly For More Information Or Leave A Message Below And We'll Get Back To You ASAP!</Statement>
			<ContactContainer>
				<Info>
					<InfoTitle>
						<FaEnvelope />
					</InfoTitle>
					<InfoDetail>info@surgiglass.com</InfoDetail>
					<InfoDetail>surgiglass@gmail.com</InfoDetail>
				</Info>
				<Info>
					<InfoTitle>
						<FaPhone />
					</InfoTitle>
					<InfoDetail>+92 321 8647446 </InfoDetail>
				</Info>
				<Info>
					<InfoTitle>
						<FaClock />
					</InfoTitle>
					<InfoDetail>Monday - Thursday: 10am - 6pm</InfoDetail>
					<InfoDetail>Friday: 10am - 3pm</InfoDetail>
				</Info>
				<Info>
					<InfoTitle>
						<FaMapMarkerAlt />
					</InfoTitle>
					<InfoDetail>Bismillah Chowk, Pasrur Road</InfoDetail>
					<InfoDetail>Sialkot - 51310, Pakistan</InfoDetail>
				</Info>
			</ContactContainer>
			<Statement> Fill out the form below! </Statement>
			<FormContainer>
				<Form>
					<FormInputs>
						<Input type="text" placeholder="Your Name" />
						<Input type="text" placeholder="Your Email" />
					</FormInputs>
					<Textarea placeholder="Your Message" rows="6" />
				</Form>
				<Button>Submit</Button>
			</FormContainer>
		</Container>
	);
};
