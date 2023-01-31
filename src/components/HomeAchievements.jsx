import React from 'react';
import CountUp from 'react-countup';
import styled from 'styled-components';
import Achievements from './../images/Achievments.jpg';
import BigScreen from '../responsive';

const AcheivementContainer = styled.div`
	background: url(${Achievements});
	background-position: center;
	background-attachment: fixed;
	background-size: cover;
	color: whitesmoke;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10px 0;
	position: relative;
	${BigScreen({
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-evenly',
		height: '60vh',
	})}
`;

const Heading = styled.h1`
	font-size: 1.8rem;
	margin: 1.2rem;
	font-weight: 600;
	z-index: 2;
`;
const Statement = styled.p`
	max-width: 80%;
	margin: 1rem;
	font-size: 1.2rem;
	line-height: 24px;
	z-index: 2;
`;
const AcheivementInfo = styled.span`
	font-size: 1.5rem;
	color: whitesmoke;
	font-weight: 600;
	margin-top: 0.6rem;
`;
const AcheivementWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 1.6rem;
	max-width: 300px;
	z-index: 2;
	&:after {
		content: '';
		display: block;
		width: 100px;
		height: 4px;
		margin: 0.5rem auto;
		background-color: #006400;
	}
`;
const Overlay = styled.div`
	height: 100%;
	width: 100%;
	background: #5a5a5a;
	opacity: 60%;
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	z-index: 1;
`;

const counterStyle = {
	fontSize: '2.5rem',
	fontFamily: 'Poppins',
};

function HomeAchievements() {
	return (
		<>
			<AcheivementContainer>
				<Heading> 20+ Years Experience</Heading>
				<Statement>
					{' '}
					We conduct complete intruments manufacturing from development to packing performed in-house in a controlled, certified, and
					monitored management & production system.{' '}
				</Statement>
				<AcheivementWrapper>
					<CountUp end={2500} duration={2} suffix="+" style={counterStyle} />
					<AcheivementInfo>DENTAL INSTRUMENTS</AcheivementInfo>
				</AcheivementWrapper>
				<AcheivementWrapper>
					<CountUp end={1000} duration={2} suffix="+" style={counterStyle} />
					<AcheivementInfo>ORDERS COMPLETED</AcheivementInfo>
				</AcheivementWrapper>
				<AcheivementWrapper>
					<CountUp end={500} duration={2} suffix="+" style={counterStyle} />
					<AcheivementInfo>CLIENTS SERVED</AcheivementInfo>
				</AcheivementWrapper>

				<Overlay></Overlay>
			</AcheivementContainer>
		</>
	);
}

export default HomeAchievements;
