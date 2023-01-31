import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import { navigation } from '../data';
import { Link } from 'react-router-dom';
import BigScreen from '../responsive';

const Container = styled.div`
	width: 100%;
	height: 80px;
	background-color: #fff;
	opacity: 70%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 8px 20px;
	border-bottom: 1px solid lightgray;
	z-index: 999999;
`;
const Logo = styled.h1`
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-weight: 700;
	color: #006400;
	font-size: 1.2rem;
`;
const MenuToggle = styled.span`
	color: #1b1c1e;
	z-index: 99999999;
	font-size: 28px;
	//height: 80px;
	//width: 80px;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

const MenuWrapper = styled.div`
	height: 100%;
	width: 100%;
	background-color: #fff;
	z-index: 99999;
	position: absolute;
	top: 80px;
	left: ${(props) => props.left};
	transition: 0.3s all ease-in;
	${BigScreen({ width: '350px' })}
`;

const MenuItemWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 50px;
	border-bottom: 1px solid #d3d3d3;
`;
const MenuItems = styled.a`
	font-size: 20px;
	font-weight: 500;
`;

const linkStyles = {
	textDecoration: 'none',
	color: 'inherit',
};

const Navigation = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<>
			<Container>
				<Logo>SURGIGLASS</Logo>
				<MenuToggle onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <FaTimes /> : <FaBars />}</MenuToggle>
			</Container>
			<MenuWrapper left={menuOpen ? '0' : '-100%'}>
				{navigation.map((item) => {
					return (
						<MenuItemWrapper key={item.id}>
							<Link to={item.path} style={linkStyles}>
								<MenuItems>{item.title}</MenuItems>
							</Link>
						</MenuItemWrapper>
					);
				})}
			</MenuWrapper>
		</>
	);
};

export default Navigation;
