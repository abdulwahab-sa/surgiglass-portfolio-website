import './App.css';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Products from './pages/Products';
import { ProductCard } from './components/ProductCard';
import Categories from './components/Categories';
import ProductDetail from './components/ProductDetail';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import About from './pages/About';
import { Contact } from './pages/Contact';
import QuoteForm from './pages/QuoteForm';
import Login from './admin/Login';
import Dashboard from './admin/Dashboard';
import { NewProduct } from './admin/NewProduct';
import { UpdateProduct } from './admin/UpdateProduct';
import { useAuthContext } from './hooks/useAuthContext';
import { ProductContext } from './Contexts/ProductContext';
import axios from 'axios';

function App() {
	const [data, setData] = useState([]);

	const endPoint = 'http://localhost:3005/api/';
	useEffect(() => {
		fetchProducts();
	}, []);

	const fetchProducts = async () => {
		try {
			const productData = await axios.get(endPoint);
			const result = productData.data;

			setData(result);
		} catch (error) {
			console.error(error);
		}
	};
	const { user } = useAuthContext();

	return (
		<BrowserRouter>
			<ProductContext.Provider value={{ data }}>
				<div id="container">
					<Navigation />
					<div id="main-content">
						<Routes>
							<Route path="/admin" element={user ? <Dashboard /> : <Navigate to={'/login'} />} />
							<Route path="/login" element={!user ? <Login /> : <Navigate to={'/admin'} />} />
							<Route path="/addproduct" element={user ? <NewProduct /> : <Navigate to={'/login'} />} />
							<Route path="/update/:id" element={user ? <UpdateProduct /> : <Navigate to={'/login'} />} />
							<Route index element={<Home />} />
							<Route path="/about" element={<About />} />
							<Route path="/contact" element={<Contact />} />
							<Route path="/quotation" element={<QuoteForm />} />
							<Route path="/products" element={<Products />} />
							<Route path="/products/:category" element={<Products />} />
							<Route path="/products/:category/:subcategory" element={<ProductCard />} />
							<Route path="/products/:category/:subcategory/:prodId" exact element={<ProductDetail />} />
						</Routes>
					</div>
					<Footer />
				</div>
			</ProductContext.Provider>
		</BrowserRouter>
	);
}

export default App;
