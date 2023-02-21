import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import Categories from '../components/Categories';
import Sidebar from '../components/Sidebar';
import products from '../data';
import { ProductContext } from '../Contexts/ProductContext';
import { useParams } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';

const Container = styled.div`
	display: flex;
	justify-content: space-evenly;
`;

function getUniqueListBy(arr, key) {
	return [...new Map(arr.map((item) => [item[key], item])).values()];
}

const Products = () => {
	const { data } = useContext(ProductContext);
	const uniqueSubCategories = getUniqueListBy(data, 'subCategory');
	const uniqueMainCategories = getUniqueListBy(data, 'mainCategory');
	const [showCategories, setShowCategories] = useState([]);
	const { category, subcategory } = useParams();
	const productsArr = data.filter((items) => items.subCategory == subcategory);
	const selectedCategoryarr = uniqueSubCategories.filter((item) => item.mainCategory == category);

	return (
		<Container>
			<ProductContext.Provider
				value={{
					showCategories,
					uniqueMainCategories,
					uniqueSubCategories,
					setShowCategories,
					selectedCategoryarr,
					category,
					subcategory,
					products,
					data,
				}}
			>
				<Sidebar />
				<Categories />
			</ProductContext.Provider>
		</Container>
	);
};

export default Products;
