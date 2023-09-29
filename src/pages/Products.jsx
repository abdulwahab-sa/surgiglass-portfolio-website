import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import Categories from '../components/Categories';
import Sidebar from '../components/Sidebar';
import { useAPI } from '../Contexts/ProductContext';
import { useParams } from 'react-router-dom';

const Container = styled.div`
	display: flex;
	justify-content: space-evenly;
`;

const Products = () => {
	const [category, setCategory] = useState('');
	const { subcategories } = useAPI();
	const [data, setData] = useState([]);

	useEffect(() => {
		if (category) {
			const filteredData = subcategories.filter((item) => item.category_title === category);
			setData(filteredData);
		} else {
			setData(subcategories);
		}
	}, [category, subcategories]);

	return (
		<Container>
			<Sidebar setData={setData} setCategory={setCategory} />
			<Categories data={data} />
		</Container>
	);
};

export default Products;
