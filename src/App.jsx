import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Products from './pages/Products';
import { ProductCard } from './components/ProductCard';
import ProductDetail from './components/ProductDetail';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import About from './pages/About';
import { Contact } from './pages/Contact';
import QuoteForm from './pages/QuoteForm';
import Login from './admin/Components/Login';
import Dashboard from './admin/Dashboard';
import { NewProduct } from './admin/Components/NewProduct';
import { UpdateProduct } from './admin/Components/UpdateProduct';
import { useAuthContext } from './hooks/useAuthContext';
import axios from 'axios';
import AllCategories from './admin/Components/AllCategories';
import { NewCategory } from './admin/Components/NewCategory';
import Inquiries from './admin/Components/Inquiry';
import AllProducts from './admin/Components/Products';
import { UpdateCategory } from './admin/Components/UpdateCategory';
import ViewInquiry from './admin/Components/ViewInquiry';
import AdminLayout from './layouts/adminLayout';

function App() {
	const { user } = useAuthContext();

	const PrivateRoute = ({ children }) => {
		const user = localStorage.getItem('user');
		return user ? children : <Navigate to={'/login'} replace />;
	};

	return (
		<BrowserRouter>
			<div id="container">
				<Navigation />
				<div id="main-content">
					<Routes>
						<Route path="/login" element={<Login />} />
						<Route path="/" element={<AdminLayout />}>
							<Route
								path="/dashboard"
								element={
									<PrivateRoute>
										<Dashboard />
									</PrivateRoute>
								}
							/>
							<Route
								path="/allcategories"
								element={
									<PrivateRoute>
										<AllCategories />
									</PrivateRoute>
								}
							/>
							<Route
								path="/createcategory"
								element={
									<PrivateRoute>
										<NewCategory />
									</PrivateRoute>
								}
							/>
							<Route
								path="/updatecategory/:id"
								element={
									<PrivateRoute>
										<UpdateCategory />
									</PrivateRoute>
								}
							/>
							<Route
								path="/allproducts"
								element={
									<PrivateRoute>
										<AllProducts />
									</PrivateRoute>
								}
							/>
							<Route
								path="/createproduct"
								element={
									<PrivateRoute>
										<NewProduct />
									</PrivateRoute>
								}
							/>
							<Route
								path="/updateproduct/:id"
								element={
									<PrivateRoute>
										<UpdateProduct />
									</PrivateRoute>
								}
							/>
							<Route
								path="/inquiries"
								element={
									<PrivateRoute>
										<Inquiries />
									</PrivateRoute>
								}
							/>
							<Route
								path="viewinquiry/:inquiryId"
								element={
									<PrivateRoute>
										<ViewInquiry />
									</PrivateRoute>
								}
							/>
						</Route>

						<Route index element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/quotation" element={<QuoteForm />} />
						<Route path="/products" element={<Products />} />

						<Route path="/products/:category/:subcategory" element={<ProductCard />} />
						<Route path="/products/:category/:subcategory/:prodId" exact element={<ProductDetail />} />
					</Routes>
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
