import styled from 'styled-components';
import BigScreen from '../responsive';

const Container = styled.div`
	height: 100%;
	padding: 3rem 0.9rem;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	color: whitesmoke;
	width: 100%;
`;

const Title = styled.h2`
	color: #303030;
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
const Desc = styled.div`
	font-size: 1rem;
	font-weight: 300;
	margin-bottom: 20px;
`;

const InputContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 100%;
`;

const Input = styled.input`
	border: none;
	outline: none;
	text-indent: 20px;
	background-color: #e0e0e0;
	font-family: inherit;
	height: 40px;
	width: 80%;
	margin: 0 auto;
	${BigScreen({ width: '50%' })}
`;

const Button = styled.button`
	border: none;
	background-color: #006400;
	color: #fff;
	font-weight: 600;
	margin: 1rem auto;
	padding: 10px 15px;
	cursor: pointer;
	transition: 0.5s ease-in;
	&:hover {
		box-shadow: inset -10rem 0 0 0 #32cd32, inset 10rem 0 0 0 #32cd32;
		color: whitesmoke;
	}
`;

const Newsletter = () => {
	return (
		<Container>
			<Title>NEWSLETTER</Title>
			<Desc>Get timely updates from your favorite products.</Desc>
			<InputContainer>
				<Input placeholder="Your email" />
			</InputContainer>
			<Button>Subscribe</Button>
		</Container>
	);
};

export default Newsletter;
