import React, { useEffect, useState } from 'react';
import MainSlider from '../components/MainSlider';
import SlideFour from '../components/SlideFour';
import { useInView } from 'react-intersection-observer';
import Videosection from '../components/Videosection';
import HomeCategories from '../components/HomeCategories';
import HomeAchievements from '../components/HomeAchievements';
import Newsletter from '../components/Newsletter';
import About from './About';
import QuoteForm from './QuoteForm';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import Categories from '../components/Categories';
import Products from './Products';
import Navigation from '../components/Navigation';

function Home() {
	const [width, setWidth] = useState(window.innerWidth);
	const breakpoint = 750;

	useEffect(() => {
		const handleWindowResize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleWindowResize);
		return () => window.removeEventListener('resize', handleWindowResize);
	}, []);

	return (
		<>
			{width > breakpoint ? <MainSlider /> : <SlideFour />}
			<HomeCategories />
			<Videosection />
			<HomeAchievements />
			<Newsletter />
		</>
	);
}

export default Home;
