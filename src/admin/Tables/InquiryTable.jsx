import './TableLayout.css';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAPI } from '../../Contexts/ProductContext';

const dummyData = [
	{
		id: 1,
		name: 'John Doe',
		email: 'test@gmail.com',
		phone: '123456789',
		requiredQty: '500',
		orderDetail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, eveniet.',
	},
];

export default function InquiryTable() {
	const { inquiries } = useAPI();

	const [data, setData] = useState(inquiries);

	useEffect(() => {
		setData(inquiries);
	}, [inquiries]);

	const endPoint = `https://surgiglass-njvx8.ondigitalocean.app/api/inquiry/`;

	const handleDelete = (id) => {
		setData(data.filter((item) => item.inquiry_id !== id));
		axios
			.delete(`${endPoint}${id}`)
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const columns = [
		{ field: 'inquiry_id', headerName: 'ID', width: 60 },

		{ field: 'inquiry_name', headerName: 'Client Name', width: 150 },
		{ field: 'inquiry_email', headerName: 'Email', width: 150 },
		{
			field: 'inquiry_phone',
			headerName: 'Contact',
			width: 150,
		},

		{
			field: 'inquiry_req_qty',
			headerName: 'Required Qty',
			width: 120,
		},
		{
			field: 'order_detail',
			headerName: 'Order Details',
			width: 200,
		},
		{
			field: 'action',
			headerName: 'Action',
			width: 150,
			renderCell: (params) => {
				return (
					<>
						<Link to={'/viewinquiry/' + params.row.inquiry_id}>
							<button className="productListEdit">View</button>
						</Link>
						<DeleteOutline className="productListDelete" onClick={() => handleDelete(params.row.inquiry_id)} />
					</>
				);
			},
		},
	];

	return (
		<div className="productList">
			<DataGrid
				getRowId={(row) => row.inquiry_id}
				rows={data}
				disableSelectionOnClick
				columns={columns}
				pageSize={8}
				checkboxSelection
				sx={{ overflowX: 'scroll' }}
			/>
		</div>
	);
}
