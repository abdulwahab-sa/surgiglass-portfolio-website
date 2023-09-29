import React, { useContext, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FaSearch, FaAngleDown, FaAngleUp } from 'react-icons/fa';
import products from '../data';
import { useAPI } from '../Contexts/ProductContext';
import { Link } from 'react-router-dom';
import BigScreen from '../responsive';
import useOnclickOutside from 'react-cool-onclickoutside';

const Container = styled.div`
	border: 1px solid #d3d3d3;
	height: 100vh;
	width: 75vw;
	padding: 20px 0;
	position: absolute;
	z-index: 999;
	background-color: #fff;
	overflow-y: scroll;
	transition: all 0.3s ease-in;
	left: ${(props) => props.left};

	${BigScreen({ width: '350px', position: 'static' })}
`;
const SearchWrapper = styled.div`
	display: flex;
	display: flex;
	justify-content: center;
	margin: 1rem auto;
	width: 90%;
`;
const Input = styled.input`
	border: 1px solid lightgray;
	height: 32px;
	max-width: 170px;
	text-indent: 10px;
	&:focus {
		outline: none;
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	}
`;
const Search = styled.span`
	background-color: darkgreen;
	min-width: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
	cursor: pointer;
`;
const CategoryWrapper = styled.div`
	max-width: 90%;
	margin: 2rem auto;
`;

const CategoryItem = styled.a`
	font-weight: 400;
`;

const CategoryItemWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 50px;
	border-bottom: 1px solid #d3d3d3;
`;
const DropDownArrow = styled.span`
	font-size: 16px;
	color: #006400;
`;

const Title = styled.h2`
	font-weight: 500;
	text-align: left;
	&:after {
		content: '';
		display: block;
		width: 60px;
		height: 2px;
		margin: 0.5rem 0;
		background-color: #006400;
	}
`;
const Quantity = styled.span`
	margin-left: 5px;
`;

const MenuButton = styled.div`
	height: 70px;
	width: 30px;
	background-color: #006400;
	border-radius: 10px 0 0 10px;
	position: fixed;
	top: 40%;
	right: 0px;
	z-index: 99999999;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #fff;
	font-weight: 500;
	font-size: 12px;
	${BigScreen({ display: 'none' })}
`;

const linkStyles = {
	textDecoration: 'none',
	color: 'inherit',
};
const SubCategoryWrapper = styled.div``;
const SubCategoryItem = styled.a``;

function getUniqueListBy(arr, key) {
	return [...new Map(arr.map((item) => [item[key], item])).values()];
}

function Sidebar({ setCategory }) {
	const { categories } = useAPI();
	const [dropdown, setDropdown] = useState(false);
	const [disabled, setDisabled] = useState(false);
	const [textInput, setTextInput] = useState('');

	const handleClick = (e, el) => {
		e.preventDefault();
		e.stopPropagation();
		//setShowCategories(el);
	};

	const [responsive, setResponsive] = useState(true);
	const [responsiveSidebar, setResponsiveSidebar] = useState(false);
	useEffect(() => {
		const handleResize = () => {
			window.innerWidth < 600 ? setResponsive(true) : setResponsive(false);
			window.innerWidth > 600 && setDisabled(true);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [responsive]);

	const handleMenuClick = () => {
		setResponsiveSidebar(!responsiveSidebar);
	};

	const testStyles = {
		transform: 'translateX(350px)',
	};

	const ref = useOnclickOutside(
		() => {
			setResponsiveSidebar(false);
		},
		{ disabled }
	);
	/*
	//const filteredProducts = data.filter((product) => product.subCategory.toLowerCase().includes(textInput.toLowerCase()));

	const handleSearchClick = (e) => {
		e.preventDefault();
		setShowCategories(filteredProducts);
	};

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			setShowCategories(filteredProducts);
		}
	};
*/
	const handleChange = (e) => {
		setTextInput(e.target.value);
	};

	return (
		<Container left={responsiveSidebar ? '0' : '-100%'} ref={ref}>
			<SearchWrapper>
				{' '}
				<Input type="text" placeholder="Search Products" value={textInput} onChange={handleChange} />
				<Search>
					{' '}
					<FaSearch />{' '}
				</Search>
			</SearchWrapper>
			<CategoryWrapper>
				<Title> Our Products</Title>
				<CategoryItemWrapper>
					<CategoryItem onClick={() => setCategory('')}>All Categories</CategoryItem>
				</CategoryItemWrapper>

				{categories.map((el) => {
					return (
						<CategoryItemWrapper key={el.category_id} onClick={() => setCategory(el.category_title)}>
							<Link to={`#`} style={linkStyles}>
								<CategoryItem> {el.category_title} </CategoryItem>
							</Link>
						</CategoryItemWrapper>
					);
				})}
			</CategoryWrapper>

			{responsive && (
				<MenuButton
					onClick={(e) => {
						handleMenuClick();
					}}
				>
					M <br /> E<br />N<br />U
				</MenuButton>
			)}
		</Container>
	);
}

export default Sidebar;

/*dropdown && (
			<CategoryWrapper>
				<CategoryItemWrapper style={{ justifyContent: 'center' }}>
					<CategoryItem>Forceps</CategoryItem>
					<Quantity>(20)</Quantity>
				</CategoryItemWrapper>
			</CategoryWrapper>
			); */
