import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const Title = styled.h2`
	font-size: 1.8rem;
	margin: 1rem auto;
	color: #303030;
`;
const Form = styled.form`
	height: 100%;
	text-align: left;
	margin: 2rem auto;
	display: flex;
	flex-direction: column;
	width: 250px;
`;

const Label = styled.label`
	color: #303030;
	margin: 15px 0 8px;
`;
const Input = styled.input`
	//border: 0.5px solid #303030;
	padding: 8px;
	background-color: #f0f0f0;
	color: #303030;
	border: none;
`;

const File = styled.input`
	margin: 12px 0;
`;

const Description = styled.textarea`
	padding: 8px;
	background-color: #f0f0f0;
	color: #303030;
	border: none;
`;
const Button = styled.button`
	border: none;
	padding: 10px 12px;
	color: #fff;
	background-color: green;
	border-radius: 8px;
	margin: 12px 0;
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
	const [formInputs, setFormInputs] = useState({
		productName: '',
		article: '',
		mainCategory: '',
		subCategory: '',
		productDescription: '',
		//subCategoryImg: '',
		//productImg: '',
	});

	const [fileData, setfileData] = useState([]);

	const [errors, setErrors] = useState({
		productName: '',
		article: '',
		mainCategory: '',
		subCategory: '',
		productDescription: '',
		subCategoryImg: '',
		productImg: '',
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitSuccess, setSubmitSuccess] = useState(false);

	const handleChange = (event) => {
		setFormInputs({ ...formInputs, [event.target.name]: event.target.value });
	};

	const handleFileChange = (event) => {
		setfileData({
			...fileData,
			[event.target.name]: event.target.files[0],
		});
	};

	const validateForm = () => {
		let newErrors = {};
		if (!formInputs.productName) {
			newErrors.productName = 'Title is required';
		}
		if (!formInputs.article) {
			newErrors.article = 'Article is required';
		}
		if (!formInputs.mainCategory) {
			newErrors.mainCategory = 'Category is required';
		}
		if (!formInputs.subCategory) {
			newErrors.subCategory = 'Subcategory is required';
		}
		if (!formInputs.productDescription) {
			newErrors.productDescription = 'Description is required';
		}
		if (!fileData.productImg) {
			newErrors.productImg = 'Product Image is required';
		}
		if (!fileData.subCategoryImg) {
			newErrors.subCategoryImg = 'SubCategory Image is required';
		}
		setErrors(newErrors);
		return Object.values(newErrors).every((error) => error === '');
	};

	const createProduct = async (productData) => {
		const endPoint = 'http://localhost:3005/api/';

		try {
			const result = await axios.post(endPoint, productData);
			setSubmitSuccess(true);
		} catch (err) {
			console.error(err);
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setIsSubmitting(true);
		if (validateForm()) {
			const formData = new FormData();
			const subimage = new Blob([fileData.subCategoryImg], { type: fileData.subCategoryImg.type });
			const productimage = new Blob([fileData.productImg], { type: fileData.productImg.type });

			formData.append('subCategoryImg', subimage, fileData.subCategoryImg.name);
			formData.append('productImg', productimage, fileData.productImg.name);
			formData.append('productName', formInputs.productName);
			formData.append('mainCategory', formInputs.mainCategory);
			formData.append('subCategory', formInputs.subCategory);
			formData.append('productDescription', formInputs.productDescription);
			formData.append('article', formInputs.article);

			createProduct(formData);

			setFormInputs({
				productName: '',
				article: '',
				mainCategory: '',
				subCategory: '',
				productDescription: '',
			});

			setfileData([]);
			// API call
		} else {
			setIsSubmitting(false);
		}
	};

	return (
		<Container>
			<Title>Add New Product</Title>
			<Form onSubmit={handleSubmit}>
				<Label>Product Title</Label>
				<Input type="text" placeholder="Enter Product Title" name="productName" value={formInputs.productName} onChange={handleChange} />
				{errors.productName && <Errormessage> Title is required </Errormessage>}
				<Label>Article #</Label>
				<Input type="text" placeholder="Enter Article Number" name="article" value={formInputs.article} onChange={handleChange} />
				{errors.article && <Errormessage> Article is required </Errormessage>}
				<Label>Main Category</Label>
				<select type="select" name="mainCategory" value={formInputs.mainCategory} onChange={handleChange}>
					<option value="">Select Main Category</option>
					<option value="Diagnostics">Diagnostics</option>
					<option value="Dental Surgery">Dental Surgery</option>
					<option value="Orthodontic">Orthodontic</option>
					<option value="Periodontic">Periodontic</option>
					<option value="Implantology">Implantology</option>
					<option value="Preservation">Preservation</option>
				</select>

				{/*<Label>Category</Label>
				<Input type="text" placeholder="Enter Category" name="mainCategory" value={formInputs.mainCategory} onChange={handleChange} />*/}
				{errors.mainCategory && <Errormessage> Category is required </Errormessage>}
				<Label>Subcategory</Label>
				<Input type="text" placeholder="Enter Subcategory" name="subCategory" value={formInputs.subCategory} onChange={handleChange} />
				{errors.subCategory && <Errormessage> Subcategory is required </Errormessage>}
				<Label>Product Description</Label>
				<Description
					placeholder="Enter Description"
					rows={8}
					cols={24}
					name="productDescription"
					value={formInputs.productDescription}
					onChange={handleChange}
				/>
				{errors.productDescription && <Errormessage> Description is required </Errormessage>}

				<Label>Upload SubCategory Image</Label>
				<File type="file" name="subCategoryImg" onChange={handleFileChange} />
				{errors.subCategoryImg && <Errormessage> Subcategory Image is required </Errormessage>}

				<Label>Upload Product Image</Label>
				<File type="file" name="productImg" onChange={handleFileChange} />
				{errors.productImg && <Errormessage> Product Image is required </Errormessage>}
				<Button type="submit" disabled={isSubmitting}>
					Create
				</Button>
				{submitSuccess && <Successmessage> Product has been created! </Successmessage>}
			</Form>
		</Container>
	);
};
