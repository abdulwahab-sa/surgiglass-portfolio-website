import React from 'react';
import styled from 'styled-components';
import Banner from './../images/form-banner.jpg';

const Container = styled.div`
	min-height: 100vh;
	background: url(${Banner}) no-repeat center center fixed;
	background-size: cover;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 20px 0;
`;

const FormContainer = styled.div`
	background: rgba(255, 255, 255, 0.27);
	border-radius: 16px;
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(4.8px);
	-webkit-backdrop-filter: blur(4.8px);
	border: 1px solid rgba(255, 255, 255, 0.3);
	width: 90%;
	height: 100%;
	max-width: 500px;
	max-height: 600px;
`;

const Form = styled.form``;

const FormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
`;
const FormInputs = styled.div`
	width: 100%;
	height: 100%;
	margin: 0.5rem;
	text-align: center;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
`;
const FormStatement = styled.div`
	padding: 20px;
	color: #303030; ;
`;

const Input = styled.input`
	flex: 1;
	width: 90%;
	margin: 0.6rem auto;
	padding: 10px 8px;
	background-color: whitesmoke;
	border: none;
	border-radius: 5px;
	font-family: inherit;
	color: #303030;
	&:focus {
		outline: none;
	}
`;
const Textarea = styled.textarea`
	width: 90%;
	margin: 0.6rem auto;
	padding: 10px 8px;
	background-color: whitesmoke;
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
		box-shadow: inset -10rem 0 0 0 #ffff, inset 10rem 0 0 0 #ffff;
		color: #006400;
	}
`;

function QuoteForm() {
	return (
		<Container>
			<FormContainer>
				<Form>
					<FormWrapper>
						<FormStatement>Write us your requirements and we will prepare a proposal for you within 24 hours.</FormStatement>

						<FormInputs>
							<Input type="text" placeholder="Your Name" />
							<Input type="text" placeholder="Your Email" />
							<Input type="text" placeholder="Your Phone" />
							<Input type="text" placeholder="Required Qty" />
						</FormInputs>
						<Textarea placeholder="Write your Order Details" rows="6" />
					</FormWrapper>
				</Form>
				<Button> SUBMIT</Button>
			</FormContainer>
		</Container>
	);
}

export default QuoteForm;
