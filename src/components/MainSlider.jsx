import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import './mainslider.css';
import SlideOne from './SlideOne';
import SlideTwo from './SlideTwo';
import SlideThree from './SlideThree';
import SlideFour from './SlideFour';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';

/*
const Container = styled.div`
	width: 100%;
	height: 100%;
	border: 1px solid blue;
`;
const Wrapper = styled.div`
	color: red;

	//background-size: cover;
	//background-position: 50% 21%;
	text-align: right;
	height: 100vh;
	width: 100%;
`;

const SlideOne = styled.div`
	background-color: blue;
	height: 100%;
	width: 100%;
	position: relative;
`;
*/
const customStyles = {
	height: '100vh',
	width: '100%',
	padding: 0,
	margin: 0,
};

function MainSlider() {
	//const [animation, setAnimation] = useState(true);

	/*useEffect(() => {
		setTimeout(() => {
			setAnimation((prev) => !prev);
			console.log(animation);
		}, 1000);
	}, []);
*/
	const settings = {
		infinite: true,
		speed: 2000,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		dots: true,
		centrePadding: 0,
		fade: true,
		//beforeChange: (current, next) => {},
		/*afterChange: (current) => {
			setAnimation(!animation);
		},*/
	};

	/*
	const [ref, inView, entry] = useInView({
		trackVisibility: true,
		delay: 100,
	});

	const [ref2, inView2, entry2] = useInView({
		trackVisibility: true,
		delay: 100,
	});

	const [ref3, inView3, entry3] = useInView({
		trackVisibility: true,
		delay: 100,
	});
*/
	const [ref, inView] = useInView();

	return (
		<Slider style={customStyles} {...settings}>
			<div ref={ref}>
				<SlideFour />
			</div>
			<div>
				<SlideTwo />
			</div>
			<div>
				<SlideThree />
			</div>
		</Slider>
	);
}

export default MainSlider;
