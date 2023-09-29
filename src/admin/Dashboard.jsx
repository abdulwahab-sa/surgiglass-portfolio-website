import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import Inquiry from './Components/Inquiry';
import Sidebar from './Components/Sidebar';
import Categories from './Components/AllCategories';
import { NewCategory } from './Components/NewCategory';
import MainPanel from './Components/MainPanel';

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
`;

const Title = styled.h2`
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-weight: 700;
	color: #303030;
	font-size: 1.2rem;
	width: 80%;
`;

const Header = styled.div`
	height: 60px;
	border-bottom: 1px solid grey;
	padding: 5px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 16px;
`;
const TableWrapper = styled.div`
	margin: 3rem auto;
`;
const Button = styled.button`
	display: flex;
	justify-content: center;
	text-align: center;
	margin: ${(props) => props.margin};
	padding: 10px 12px;
	border: none;
	background-color: ${(props) => props.bg};
	color: ${(props) => props.color};
	font-weight: 500;
	font-family: 'Montserrat', sans-serif;
	cursor: pointer;
`;

const Dashboard = () => {
	const [dashboard, setDashboard] = useState([]);

	const { logout } = useLogout();
	const handleLogout = (e) => {
		e.preventDefault();
		logout();
	};

	return (
		/* 
		<Container>
			<Header>
				<Title> Trade City Corp - Admin Dashboard </Title>
				<Button onClick={handleLogout} bg={'yellow'} color={'#303030'}>
					Logout
				</Button>
			</Header>
			<Link to={'/addproduct'} style={{ textDecoration: 'none' }}>
				<Button bg={'teal'} margin={'0 auto'}>
					{' '}
					Add Product
				</Button>
			</Link>
			<Inquiry />
			
		</Container>
		*/

		<MainPanel />
	);
};

export default Dashboard;
