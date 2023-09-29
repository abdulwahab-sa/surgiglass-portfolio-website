import './TableLayout.css';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { useAPI } from '../../Contexts/ProductContext';

export default function ProductTable() {
	const { products } = useAPI();

	const [data, setData] = useState(products);

	useEffect(() => {
		setData(products);
		console.log(products);
	}, [products]);

	const endPoint = `https://surgiglass-njvx8.ondigitalocean.app/api/products/`;

	const handleDelete = (id) => {
		setData(data.filter((item) => item.product_id !== id));
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
		{ field: 'product_id', headerName: 'ID', width: 60 },
		{
			field: 'product_img',
			headerName: 'Product',
			width: 100,
			renderCell: (params) => {
				const imageBlob = new Blob([new Uint8Array(params.row.product_img.data)], { type: 'image/png' });
				const imageUrl = URL.createObjectURL(imageBlob);

				return (
					<div className="productListItem">
						<img className="productListImg" src={imageUrl} alt="" />
						{params.row.name}
					</div>
				);
			},
		},
		{ field: 'product_title', headerName: 'Product Title', width: 180 },
		{ field: 'subcategory_title', headerName: 'Subcategory', width: 180 },
		{ field: 'category_title', headerName: 'Main Category', width: 180 },
		{
			field: 'product_description',
			headerName: 'Description',
			width: 200,
		},
		{
			field: 'action',
			headerName: 'Action',
			width: 150,
			renderCell: (params) => {
				return (
					<>
						<Link to={'/updateproduct/' + params.row.product_id}>
							<button className="productListEdit">Edit</button>
						</Link>
						<DeleteOutline className="productListDelete" onClick={() => handleDelete(params.row.product_id)} />
					</>
				);
			},
		},
	];

	return (
		<div className="productList">
			<DataGrid
				getRowId={(row) => row.product_id}
				rows={data}
				disableSelectionOnClick
				columns={columns}
				pageSize={8}
				checkboxSelection
				sx={{ overflowX: 'scroll !important' }}
			/>
		</div>
	);
}
