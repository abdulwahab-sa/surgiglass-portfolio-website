import React, { useState } from 'react';
import styled from 'styled-components';
import Banner from './../images/form-banner.jpg';
import axios from 'axios';

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
	max-height: 1050px;
	max-width: 500px;
`;

const Form = styled.form``;

const FormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
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
	color: #303030;
`;

const Statement = styled.span``;

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

const InputWrapper = styled.div`
	width: 90%;
	margin: 10px auto;
	text-align: center;
`;

const Errormessage = styled.span`
	color: red;
	font-size: 12px;
	display: block;
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
	const endPoint = `https://surgiglass-njvx8.ondigitalocean.app/api/inquiry`;

	const [InputData, setInputData] = useState({
		inquiry_name: '',
		inquiry_email: '',
		inquiry_phone: '',
		inquiry_req_qty: '',
		order_detail: '',
	});

	const [fileData, setfileData] = useState([]);

	const [errors, setErrors] = useState({
		inquiry_name: '',
		inquiry_phone: '',
		inquiry_email: '',
		inquiry_req_qty: '',
		order_detail: '',
	});

	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (event) => {
		setInputData({ ...InputData, [event.target.name]: event.target.value });
	};

	const handleFileChange = (event) => {
		setfileData({
			...fileData,
			[event.target.name]: event.target.files[0],
		});
	};

	const validateForm = () => {
		let newErrors = {};
		if (!InputData.inquiry_name) {
			newErrors.inquiry_name = 'Name is required';
		}
		if (!InputData.inquiry_phone) {
			newErrors.inquiry_phone = 'Phone is required';
		}
		if (!InputData.inquiry_email) {
			newErrors.inquiry_email = 'Email is required';
		}
		if (!InputData.inquiry_req_qty) {
			newErrors.inquiry_req_qty = 'Quantity is required';
		}
		if (!InputData.order_detail) {
			newErrors.order_detail = 'Description is required';
		}

		setErrors(newErrors);
		return Object.values(newErrors).every((error) => error === '');
	};

	const param = new URLSearchParams({
		inquiry_name: InputData.inquiry_name,
		inquiry_phone: InputData.inquiry_phone,
		inquiry_email: InputData.inquiry_email,
		inquiry_req_qty: parseInt(InputData.inquiry_req_qty),
		order_detail: InputData.order_detail,
	});

	const sendInquiry = async () => {
		try {
			const result = await axios({
				method: 'post',
				url: endPoint,
				data: param.toString(),
			});
			if (result) console.log('success');
		} catch (err) {
			console.error(err);
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setIsSubmitting(true);
		if (validateForm()) {
			const forminputs = new FormData();
			forminputs.append('inquiry_name', InputData.inquiry_name);
			forminputs.append('inquiry_phone', InputData.inquiry_phone);
			forminputs.append('inquiry_email', InputData.inquiry_email);
			forminputs.append('inquiry_req_qty', parseInt(InputData.inquiry_req_qty));
			forminputs.append('order_detail', InputData.order_detail);

			sendInquiry();
		} else {
			setIsSubmitting(false);
		}
	};

	return (
		<Container>
			<FormContainer>
				<Form onSubmit={handleSubmit}>
					<FormWrapper>
						<FormStatement>
							<Statement>Write us your requirements and we will prepare a proposal for you within 24 hours.</Statement>
						</FormStatement>
						<FormInputs>
							<InputWrapper>
								<Input type="text" name="inquiry_name" value={InputData.inquiry_name} placeholder="Your Name" onChange={handleChange} />
								{errors.inquiry_name && <Errormessage>{errors.inquiry_name}</Errormessage>}
							</InputWrapper>
							<InputWrapper>
								<Input type="text" name="inquiry_email" value={InputData.inquiry_email} placeholder="Your Email" onChange={handleChange} />
								{errors.inquiry_email && <Errormessage>{errors.inquiry_email}</Errormessage>}
							</InputWrapper>
							<InputWrapper>
								<Input type="text" name="inquiry_phone" value={InputData.inquiry_phone} placeholder="Your Phone" onChange={handleChange} />
								{errors.inquiry_phone && <Errormessage>{errors.inquiry_phone}</Errormessage>}
							</InputWrapper>

							<InputWrapper>
								<Input
									type="number"
									name="inquiry_req_qty"
									value={InputData.inquiry_req_qty}
									placeholder="Required Qty"
									onChange={handleChange}
								/>
								{errors.inquiry_req_qty && <Errormessage>{errors.inquiry_req_qty}</Errormessage>}
							</InputWrapper>
							<InputWrapper>
								<Textarea
									type="text"
									name="order_detail"
									value={InputData.order_detail}
									placeholder="Write your Order Details"
									rows="6"
									onChange={handleChange}
								/>
								{errors.order_detail && <Errormessage>{errors.order_detail}</Errormessage>}
							</InputWrapper>
						</FormInputs>
						{/* 
							<AttachmentWrapper>
								<Label>Upload your logo, techpacks etc.</Label>
								<FileAttachment name="attachment" value={InputData.attachment} type="file" multiple onChange={handleFileChange} />
							</AttachmentWrapper>

							*/}
						<Button type="submit" disabled={isSubmitting}>
							Get Quote
						</Button>
						{/*submitSuccess && <Successmessage> Inquiry has been sent! </Successmessage>*/}
					</FormWrapper>
				</Form>
			</FormContainer>
		</Container>
	);
}

export default QuoteForm;
