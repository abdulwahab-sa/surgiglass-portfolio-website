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
	align-items: center;
	flex-direction: column;
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

export const NewCategory = () => {
	const { categories } = useAPI();

	const endPoint = `http://localhost:5000/api/subcategories`;

	const [formInputs, setFormInputs] = useState({
		subcategory_title: '',
		category_category_id: '',
	});

	const [fileData, setfileData] = useState([]);

	const [errors, setErrors] = useState({
		category_category_id: '',
		subcategory_title: '',
		subcategory_img: '',
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitSuccess, setSubmitSuccess] = useState(false);

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
		if (!formInputs.subcategory_title) {
			newErrors.subcategory_title = 'Title is required';
		}
		if (!formInputs.category_category_id) {
			newErrors.category_category_id = 'Category is required';
		}
		if (!fileData.subcategory_img) {
			newErrors.subcategory_img = 'Subcategory Image is required';
		}

		setErrors(newErrors);
		return Object.values(newErrors).every((error) => error === '');
	};

	const createSubcategory = async (subcategoryData) => {
		try {
			const result = await axios.post(endPoint, subcategoryData);
			result && setSubmitSuccess(!submitSuccess);
		} catch (err) {
			console.error(err);
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setIsSubmitting(true);
		if (validateForm()) {
			const formData = new FormData();

			const subcategoryImage = new Blob([fileData.subcategory_img], { type: fileData.subcategory_img.type });

			formData.append('subcategory_img', subcategoryImage, fileData.subcategory_img.name);
			formData.append('category_category_id', parseInt(formInputs.category_category_id));
			formData.append('subcategory_title', formInputs.subcategory_title);

			createSubcategory(formData);
		} else {
			setIsSubmitting(false);
		}
	};

	return (
		<Container>
			<Title>Add New Category</Title>
			<Form onSubmit={handleSubmit}>
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

					{/* 	<Input type="text" placeholder="Enter Category" name="mainCategory" value={formInputs.mainCategory} onChange={handleChange} />
					
					*/}
					{errors.category_category_id && <Errormessage> {errors.category_category_id} </Errormessage>}
				</InputWrapper>

				<InputWrapper>
					<Input
						type="text"
						placeholder="Enter Subcategory"
						name="subcategory_title"
						value={formInputs.subcategory_title}
						onChange={handleChange}
					/>

					{errors.subcategory_title && <Errormessage> {errors.subcategory_title}</Errormessage>}
				</InputWrapper>

				<InputWrapper>
					<File type="file" id="files" name="subcategory_img" onChange={handleFileChange} />
					{errors.subcategory_img && <Errormessage> {errors.subcategory_img} </Errormessage>}
				</InputWrapper>

				<InputWrapper>
					<Button type="submit" disabled={isSubmitting}>
						Create Subcategory
					</Button>
					{submitSuccess && <Successmessage> Subcategory has been created! </Successmessage>}
				</InputWrapper>
			</Form>
		</Container>
	);
};
