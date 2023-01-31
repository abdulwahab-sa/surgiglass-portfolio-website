import React, { useState, useEffect } from 'react';
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
	const uniqueSubCategories = getUniqueListBy(products, 'subCategory');
	const uniqueMainCategories = getUniqueListBy(products, 'mainCategory');
	const [showCategories, setShowCategories] = useState(uniqueSubCategories);
	const { category, subcategory } = useParams();
	const productsArr = products.filter((items) => items.subCategory == subcategory);
	const selectedCategoryarr = uniqueSubCategories.filter((item) => item.mainCategory == category);

	return (
		<Container>
			<ProductContext.Provider
				value={{
					showCategories,
					uniqueMainCategories,
					setShowCategories,
					selectedCategoryarr,
					category,
					subcategory,
					products,
				}}
			>
				<Sidebar />
				<Categories />
			</ProductContext.Provider>
		</Container>
	);
};

export default Products;
