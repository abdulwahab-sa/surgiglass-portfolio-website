import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import styled from 'styled-components';
import BigScreen from '../responsive';
import Banner from './../images/footer-banner.jpg';
import { Link } from 'react-router-dom';

const Container = styled.div`
	background: url(${Banner}) no-repeat bottom center fixed;
	background-size: cover;
	width: 100%;
	height: 100%;
	font-weight: 300;
	font-size: 16px;
	text-align: left;
	color: white;
	position: relative;
	padding: 30px 20px;
	${BigScreen({ display: 'flex', alignItems: 'flex-start' })};
`;

const Left = styled.div`
	display: flex;
	flex-direction: column;
	padding: 15px;
	position: relative;
	height: 100%;
	${BigScreen({ width: '33.3%' })}
`;

const Logo = styled.span`
	font-weight: 500;
	z-index: 9;
	font-size: 18px;
`;

const Desc = styled.p`
	margin: 20px 0px;
	z-index: 99;
	line-height: 26px;
`;

const SocialContainer = styled.div`
	display: flex;
	margin: 0 auto;
`;

const SocialIcon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	color: white;
	background-color: #${(props) => props.color};
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
`;

const Center = styled.div`
	position: relative;
	padding: 15px;
	min-height: 100%;
	${BigScreen({ textAlign: 'center', width: '33.3%' })}
`;

const Title = styled.h3`
	margin-bottom: 20px;
	font-weight: 500;
	font-size: 18px;
`;

const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;

const ListItem = styled.li`
	width: 100%;
	height: 40px;
	border-bottom: 0.5px solid #d3d3d3;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Right = styled.div`
	padding: 15px;
	position: relative;
	text-align: left;
	word-break: break-all;
	min-height: 100%;
	${BigScreen({ width: '33.3%' })}
`;

const ContactItem = styled.div`
	margin-bottom: 20px;
	display: flex;
	align-items: center;
`;

const Overlay = styled.div`
	background: #303030;
	opacity: 60%;
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
`;

const Links = [
	{ title: 'Home', link: '/' },
	{ title: 'About Us', link: '/about' },
	{ title: 'Get Quote', link: '/quotation' },
	{ title: 'Our Products', link: '/products' },
	{ title: 'Contact Us', link: '/contact' },
	{ title: 'Terms & Conditions', link: '#' },
];

const Footer = () => {
	return (
		<>
			<Container>
				<Overlay></Overlay>
				<Left>
					<Logo> SURGIGLASS</Logo>
					<Desc>
						SURGIGLASS manufactures and exports finest quality dental instruments to clients worldwide. We fulfill small and bulk orders as
						well. Supported by a large inventory base, we are able to deliver in minimum time, enabling our regular customers to minimize
						their stock requirements.
					</Desc>
					<SocialContainer>
						<SocialIcon color="3B5999">
							<FaFacebook />
						</SocialIcon>
						<SocialIcon color="E4405F">
							<FaInstagram />
						</SocialIcon>
						<SocialIcon color="55ACEE">
							<FaTwitter />
						</SocialIcon>
						<SocialIcon color="E60023">
							<FaLinkedin />
						</SocialIcon>
					</SocialContainer>
				</Left>
				<Center>
					<Title>Useful Links</Title>
					<List>
						{Links.map((item, index) => (
							<Link to={item.link} style={{ textDecoration: 'none', color: '#fff', width: '60%' }}>
								<ListItem key={index}>{item.title}</ListItem>
							</Link>
						))}
					</List>
				</Center>
				<Right>
					<Title>Contact</Title>
					<ContactItem>Bismillah Chowk Pasrur Road, Sialkot - 51310</ContactItem>
					<ContactItem>+92 321 8647446</ContactItem>
					<ContactItem>info@surgiglass.com</ContactItem>
					<ContactItem>surgiglass@gmail.com</ContactItem>
				</Right>
			</Container>
		</>
	);
};

export default Footer;
