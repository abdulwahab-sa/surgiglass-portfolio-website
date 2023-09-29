import React, { useContext, useReducer, useEffect, createContext } from 'react';
import axios from 'axios';

export const APIContext = createContext();

function reducer(state, action) {
	switch (action.type) {
		case 'SET_CATEGORIES':
			return { ...state, categories: action.payload };
		case 'SET_SUBCATEGORIES':
			return { ...state, subcategories: action.payload };
		case 'SET_PRODUCTS':
			return { ...state, products: action.payload };
		case 'SET_INQUIRIES':
			return { ...state, inquiries: action.payload };
		default:
			throw new Error(`Unhandled action type: ${action.type}`);
	}
}

const initialState = {
	categories: [],
	subcategories: [],
	products: [],
	inquiries: [],
};

export function APIContextProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);

	async function fetchData(endpoint) {
		try {
			const { data } = await axios.get(`http://localhost:5000/api/${endpoint}`);

			if (endpoint === 'categories') {
				dispatch({ type: 'SET_CATEGORIES', payload: data });
			} else if (endpoint === 'subcategories') {
				dispatch({ type: 'SET_SUBCATEGORIES', payload: data });
			} else if (endpoint === 'products') {
				dispatch({ type: 'SET_PRODUCTS', payload: data });
			} else if (endpoint === 'inquiry') {
				dispatch({ type: 'SET_INQUIRIES', payload: data });
			}
		} catch (err) {
			console.error(err);
		}
	}

	useEffect(() => {
		fetchData('categories');
		fetchData('subcategories');
		fetchData('products');
		fetchData('inquiry');
	}, []);

	return <APIContext.Provider value={state}>{children}</APIContext.Provider>;
}

export function useAPI() {
	const context = useContext(APIContext);
	if (context === undefined) {
		throw new Error('Context must be used within a Provider');
	}
	return context;
}

/*
export function APIContextProvider({ children }) {
	const [categories, setCategories] = useState([]);
	const [subcategories, setSubcategories] = useState([]);
	const [products, setProducts] = useState([]);

	async function fetchData(endpoint) {
		try {
			const { data } = await axios.get(`https://tradecity.herokuapp.com/api/${endpoint}`);

			if (endpoint === 'categories') {
				setCategories(data);
			} else if (endpoint === 'subcategories') {
				setSubcategories(data);
			} else if (endpoint === 'products') {
				setProducts(data);
			}
		} catch (err) {
			console.error(err);
		}
	}
	useEffect(() => {
		fetchData('categories');
		fetchData('subcategories');
		fetchData('products');
	}, []);

	return (
		<APIContext.Provider
			value={{
				categories,
				subcategories,
				products,
			}}
		>
			{children}
		</APIContext.Provider>
	);
}

export function useAPI() {
	const context = useContext(APIContext);
	if (context === undefined) {
		throw new Error('Context must be used within a Provider');
	}
	return context;
}
*/
