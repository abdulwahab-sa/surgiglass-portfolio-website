import { Outlet } from 'react-router-dom';
import Sidebar from './../admin/Components/Sidebar';
import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
`;

const AdminLayout = () => {
	return (
		<Container>
			<Sidebar />
			<Outlet />
		</Container>
	);
};

export default AdminLayout;
