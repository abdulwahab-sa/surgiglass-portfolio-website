import './TableLayout.css';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ProductList() {
	const [data, setData] = useState([]);
	const endPoint = 'https://surgiglass.herokuapp.com/api/';

	const fetchproducts = async () => {
		axios
			.get(endPoint)
			.then((response) => {
				const productData = response.data;
				setData(productData);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	useEffect(() => {
		fetchproducts();
	}, []);

	const handleDelete = (id) => {
		setData(data.filter((item) => item.id !== id));
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
		{ field: 'id', headerName: 'ID', width: 60 },
		{
			field: 'productImg',
			headerName: 'Product',
			width: 100,
			renderCell: (params) => {
				return (
					<div className="productListItem">
						<img className="productListImg" src={`data:image/jpeg;base64,${params.row.productImg}`} alt="" />
						{params.row.name}
					</div>
				);
			},
		},
		{ field: 'productName', headerName: 'Product Title', width: 180 },
		{ field: 'mainCategory', headerName: 'Category', width: 150 },
		{
			field: 'subCategory',
			headerName: 'SubCategory',
			width: 200,
		},
		{
			field: 'subCategoryImg',
			headerName: 'SubCategory Img',
			width: 100,
			renderCell: (params) => {
				return (
					<div className="productListItem">
						<img className="productListImg" src={`data:image/jpeg;base64,${params.row.subCategoryImg}`} alt="" />
						{params.row.name}
					</div>
				);
			},
		},
		{
			field: 'article',
			headerName: 'Article #',
			width: 160,
		},
		{
			field: 'productDescription',
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
						<Link to={'/update/' + params.row.id}>
							<button className="productListEdit">Edit</button>
						</Link>
						<DeleteOutline className="productListDelete" onClick={() => handleDelete(params.row.id)} />
					</>
				);
			},
		},
	];

	return (
		<div className="productList">
			<DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={8} checkboxSelection />
		</div>
	);
}
