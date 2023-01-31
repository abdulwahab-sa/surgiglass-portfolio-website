import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import { ProductCard } from './components/ProductCard';
import Categories from './components/Categories';
import ProductDetail from './components/ProductDetail';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import About from './pages/About';
import { Contact } from './pages/Contact';
import QuoteForm from './pages/QuoteForm';

function App() {
	return (
		<BrowserRouter>
			<div id="container">
				<Navigation />
				<div id="main-content">
					<Routes>
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
		</BrowserRouter>
	);
}

export default App;
