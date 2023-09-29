import './TableLayout.css';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAPI } from '../../Contexts/ProductContext';
import Buffer from 'buffer';

export default function CategoryTable() {
	const { categories, subcategories } = useAPI();

	const [data, setData] = useState(subcategories);

	useEffect(() => {
		setData(subcategories);
		console.log(subcategories);
	}, [subcategories]);

	const handleDelete = (id) => {
		setData(data.filter((item) => item.id !== id));
		axios
			.delete(`http://localhost:5000/api/subcategories/${id}`)
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const columns = [
		{ field: 'subcategory_id', headerName: 'ID', width: 60 },

		{
			field: 'subcategory_title',
			headerName: 'SubCategory',
			width: 200,
		},
		{
			field: 'category_title',
			headerName: 'Main Category',
			width: 200,
		},
		{
			field: 'subcategory_img',
			headerName: 'SubCategory Img',
			width: 150,
			renderCell: (params) => {
				const imageBlob = new Blob([new Uint8Array(params.row.subcategory_img.data)], { type: 'image/png' });
				const imageUrl = URL.createObjectURL(imageBlob);

				return (
					<div className="productListItem">
						<img className="productListImg" src={imageUrl} alt="" />
						{params.row.name}
					</div>
				);
			},
		},
		{
			field: 'action',
			headerName: 'Action',
			width: 150,
			renderCell: (params) => {
				return (
					<>
						<Link to={'/updatecategory/' + params.row.subcategory_id}>
							<button className="productListEdit">Edit</button>
						</Link>
					</>
				);
			},
		},
	];

	return (
		<div className="productList">
			<DataGrid
				getRowId={(row) => row.subcategory_id}
				rows={data}
				disableSelectionOnClick
				columns={columns}
				pageSize={8}
				checkboxSelection
			/>
		</div>
	);
}
