import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useAPI } from '../../Contexts/ProductContext';

const Container = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	font-family: 'Montserrat', sans-serif;
`;
const Title = styled.h2`
	margin: 2rem auto;
	font-size: 28px;
	color: teal;
	font-weight: 500;
	text-align: center;
`;

const Form = styled.form`
	height: 100%;
	margin: 2rem auto;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	width: 100%;
`;

const InputWrapper = styled.div`
	width: 400px;
	margin: 12px;
	text-align: center;
	color: #303030;
`;

const DescriptionWrapper = styled.div`
	width: 700px;
	margin: 12px;
`;

const Label = styled.label`
	color: #303030;
	margin-top: 10px;
`;
const Input = styled.input`
	//border: 0.5px solid #303030;
	padding: 14px 8px;
	border: 1px solid #d3d3d3;
	color: #303030;
	font-family: 'Montserrat', sans-serif;
	width: 100%;
	border-radius: 8px;
`;

const Select = styled.select`
	padding: 14px 8px;
	color: #303030;
	border: 1px solid #d3d3d3;
	font-family: 'Montserrat', sans-serif;
	width: 100%;
	border-radius: 8px;

	option {
		background: #fff;
	}
`;

const File = styled.input`
	margin: 12px 0;
`;

const Description = styled.textarea`
	padding: 8px;
	color: #303030;
	border: 1px solid #d3d3d3;
	font-family: 'Montserrat', sans-serif;
	width: 100%;
	border-radius: 8px;
`;
const Button = styled.button`
	border: none;
	padding: 12px 28px;
	color: #fff;
	font-size: 14px;
	font-weight: 600;
	background-color: orange;
	border-radius: 8px;
	margin: 6px 0;
	cursor: pointer;
`;

const Successmessage = styled.span`
	color: green;
	font-size: 12px;
	display: block;
	margin-top: 5px;
`;

const Errormessage = styled.span`
	color: red;
	font-size: 12px;
	display: block;
`;

export const NewProduct = () => {
	const { categories, subcategories, products } = useAPI();

	const endPoint = `http://localhost:5000/api/products`;

	const [formInputs, setFormInputs] = useState({
		product_title: '',
		product_description: '',
		product_article: '',
		subcategory_subcategory_id: '',
		category_category_id: '',
	});

	const [fileData, setfileData] = useState([]);

	const [errors, setErrors] = useState({
		product_title: '',
		product_description: '',
		product_article: '',
		subcategory_subcategory_id: '',
		category_category_id: '',
		product_img: '',
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [successMessage, setSuccessMessage] = useState('');

	const handleChange = (event) => {
		setFormInputs({ ...formInputs, [event.target.name]: event.target.value });
	};

	const handleOptionsChange = (e) => {
		setFormInputs({ ...formInputs, [e.target.name]: parseInt(e.target.value) });
	};

	const handleFileChange = (event) => {
		setfileData({
			...fileData,
			[event.target.name]: event.target.files[0],
		});
	};

	const validateForm = () => {
		let newErrors = {};
		if (!formInputs.product_title) {
			newErrors.product_title = 'Title is required';
		}
		if (!formInputs.product_article) {
			newErrors.product_article = 'Article is required';
		}
		if (!formInputs.category_category_id) {
			newErrors.category_category_id = 'Category is required';
		}
		if (!formInputs.subcategory_subcategory_id) {
			newErrors.subcategory_subcategory_id = 'Subcategory is required';
		}
		if (!formInputs.product_description) {
			newErrors.product_description = 'Description is required';
		}
		if (!fileData.product_img) {
			newErrors.product_img = 'Product Image is required';
		}

		setErrors(newErrors);
		return Object.values(newErrors).every((error) => error === '');
	};

	const createProduct = async (productData) => {
		try {
			const result = await axios.post(endPoint, productData);

			if (result) {
				setSuccessMessage('Product has been created successfully!');
				setTimeout(() => {
					window.location.reload();
				}, 2000);
			}
		} catch (err) {
			console.error(err);
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setIsSubmitting(true);
		if (validateForm()) {
			const formData = new FormData();

			const productimage = new Blob([fileData.product_img], { type: fileData.product_img.type });

			formData.append('product_img', productimage, fileData.product_img.name);
			formData.append('product_title', formInputs.product_title);
			formData.append('category_category_id', parseInt(formInputs.category_category_id));
			formData.append('subcategory_subcategory_id', parseInt(formInputs.subcategory_subcategory_id));
			formData.append('product_description', formInputs.product_description);
			formData.append('product_article', formInputs.product_article);
			console.log(formData.get('subcatgory_subcategory_id'));
			createProduct(formData);
		} else {
			setIsSubmitting(false);
		}
	};

	return (
		<Container>
			<Title>Add New Product</Title>
			<Form onSubmit={handleSubmit}>
				<InputWrapper>
					<Input
						type="text"
						placeholder="Enter Product Title"
						name="product_title"
						value={formInputs.product_title}
						onChange={handleChange}
					/>
					{errors.product_title && <Errormessage> {errors.product_title} </Errormessage>}
				</InputWrapper>

				<InputWrapper>
					<Input
						type="text"
						placeholder="Enter Article Number"
						name="product_article"
						value={formInputs.product_article}
						onChange={handleChange}
					/>
					{errors.product_article && <Errormessage> {errors.product_article} </Errormessage>}
				</InputWrapper>

				<InputWrapper>
					<Select name="category_category_id" onChange={handleOptionsChange}>
						<option value="" hidden>
							Choose Category
						</option>
						{categories.map((el) => {
							return (
								<option key={el.category_id} value={el.category_id}>
									{' '}
									{el.category_title}{' '}
								</option>
							);
						})}
					</Select>

					{errors.category_category_id && <Errormessage> {errors.category_category_id} </Errormessage>}
				</InputWrapper>

				<InputWrapper>
					<Select name="subcategory_subcategory_id" onChange={handleOptionsChange}>
						<option value="" hidden>
							Choose Subcategory
						</option>
						{subcategories.map((el) => {
							return (
								<option key={el.subcategory_id} value={el.subcategory_id}>
									{' '}
									{el.subcategory_title}{' '}
								</option>
							);
						})}
					</Select>
					{errors.subcategory_subcategory_id && <Errormessage> {errors.subcategory_subcategory_id} </Errormessage>}
				</InputWrapper>

				<InputWrapper>
					<File type="file" id="files" name="product_img" onChange={handleFileChange} />
					{errors.product_img && <Errormessage> {errors.product_img} </Errormessage>}
				</InputWrapper>

				<DescriptionWrapper>
					<Description
						placeholder="Enter Description"
						rows={8}
						cols={24}
						name="product_description"
						value={formInputs.product_description}
						onChange={handleChange}
					/>
					{errors.product_description && <Errormessage> {errors.product_description} </Errormessage>}
				</DescriptionWrapper>

				<InputWrapper>
					<Button type="submit" disabled={isSubmitting}>
						Create Product
					</Button>
					{successMessage && <Successmessage> {successMessage} </Successmessage>}
				</InputWrapper>
			</Form>
		</Container>
	);
};
