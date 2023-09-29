import React from 'react';
import styled from 'styled-components';
import adminIcon from './../../images/admin-icon.png';
import { NavLink } from 'react-router-dom';
import { MdSpaceDashboard, MdShoppingCart, MdMessage, MdCategory } from 'react-icons/md';
import './Sidebar.css';

const Container = styled.div`
	height: 100vh;
	width: 20rem;
	padding: 12px 14px;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 6px;
	position: static;
	left: 0;
	top: 0;
	color: #303030;
	font-family: 'Montserrat', sans-serif;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const Logo = styled.img`
	width: 60px;
`;

const Title = styled.h2`
	font-size: 14px;
	font-weight: 500;
	margin-left: 20px;
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 12px 8px;
	background-color: #eeeeee;
	border-radius: 10px;
	width: 80%;
	margin: 12px;
	color: #303030;
`;

const NavWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 32px;
	font-size: 16px;
	font-weight: 500;
`;

const NavIcon = styled.span`
	font-size: 22px;
	margin-right: 8px;
`;

const Button = styled.button`
	padding: 12px 14px;
	background-color: teal;
	color: #fff;
	border-radius: 12px;
	width: 80%;
	border: none;
	font-size: 16px;
	font-family: inherit;
	font-weight: 600;
	margin: 26px auto;
	cursor: pointer;
`;

const Links = [
	{
		id: 1,
		icon: MdSpaceDashboard,
		title: 'Dashboard',
		to: '/dashboard',
	},
	{
		id: 2,
		icon: MdCategory,
		title: 'Categories',
		to: '/allcategories',
	},
	{
		id: 3,
		icon: MdShoppingCart,
		title: 'Products',
		to: '/allproducts',
	},
	{
		id: 4,
		icon: MdMessage,
		title: 'Inquiries',
		to: '/inquiries',
	},
];

const NavStyles = {
	textDecoration: 'none',
	padding: '10px 8px',
	width: '100%',
	borderRadius: '8px',
	display: 'flex',
	alignItems: 'center',
	color: 'teal',
	marginBottom: '5px',
};

const Sidebar = () => {
	return (
		<Container>
			<div>
				<Wrapper>
					<img src={adminIcon} style={{ width: '40px' }} />
					<Title>
						{' '}
						Administrator <br /> Logged In{' '}
					</Title>
				</Wrapper>
				<NavWrapper>
					{Links.map((el) => {
						return (
							<NavLink
								key={el.id}
								to={el.to}
								className={({ isActive, isPending }) => (isPending ? 'pendingLinks' : isActive ? 'activeLinks' : '')}
								style={NavStyles}
							>
								<NavIcon>{<el.icon />}</NavIcon> {el.title}
							</NavLink>
						);
					})}
				</NavWrapper>
				<Button>Log Out</Button>
			</div>
		</Container>
	);
};

export default Sidebar;
