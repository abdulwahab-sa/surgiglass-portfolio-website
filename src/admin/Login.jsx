import React, { useState } from 'react';
import styled from 'styled-components';
import { useLogin } from '../hooks/useLogin';

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const FormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 300px;
	align-items: center;
	justify-content: space-evenly;
	width: 260px;
	box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
	font-family: 'Montserrat', sans-serif; ;
`;
const Form = styled.form`
	display: flex;
	flex-direction: column;
`;
const Heading = styled.h2`
	font-size: 22px;
	font-weight: 500;
	color: #303030;
`;
const Input = styled.input`
	width: 100%;
	margin: 10px auto;
	padding: 8px 12px;
	text-indent: 6px;
	background-color: #fff;
	border: 0.5px solid grey;
	color: #303030;
`;
const Button = styled.button`
	border: none;
	padding: 10px 8px;
	background-color: orange;
	width: 50%;
	color: #fff;
	cursor: pointer;
	margin: 12px auto;
`;

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const { login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();

		await login(username, password);
	};
	return (
		<Container>
			<FormWrapper>
				<Heading>ADMIN LOGIN</Heading>
				<Form onSubmit={handleSubmit}>
					<Input type="text" placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)} />
					<Input type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
					<Button type="submit">LOGIN</Button>
				</Form>
			</FormWrapper>
		</Container>
	);
};

export default Login;
