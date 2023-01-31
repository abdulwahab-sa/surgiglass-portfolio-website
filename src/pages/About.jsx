import React from 'react';
import styled from 'styled-components';
import Banner from './../images/banner21.jpg';
import Banner2 from './../images/banner22.jpg';
import BigScreen from '../responsive';
import { AiOutlineCheck } from 'react-icons/ai';

const Container = styled.div`
	height: 100%;
	width: 100%;
`;

const Img = styled.img`
	//height: 60vh;
	width: 100%;
	object-fit: cover;
	object-position: 50%;
	${BigScreen({
		height: '70vh',
	})}
`;

const Wrapper = styled.div`
	width: 90%;
	margin: 1rem auto;
`;

const Paragraph = styled.div`
	text-align: left;
	line-height: 24px;
`;
const Heading = styled.h1`
	text-align: left;
	font-size: 1.8rem;
	margin: 2rem 0 2rem;
	font-weight: 500;
	&:after {
		content: '';
		display: block;
		width: 100px;
		height: 4px;
		margin-top: 0.5rem;
		background-color: #006400;
	}
	${BigScreen({
		fontSize: '2.4rem',
	})}
`;

const Span = styled.span`
	margin-left: 0.5rem;
	width: 100%;
	text-align: left;
	line-height: 22px;
`;

const SpanWrapper = styled.div`
	display: flex;
	margin: 0.6rem 0;
`;

const Icon = styled.span`
	color: darkgreen;
	font-size: 1rem;
`;

const arr = [
	'Improved Quality',
	'Customized products ',
	'Product enhancements',
	'Provision of engineering diagrams',
	'Cost Reductions',
	'Productivity improvements',
	'Package designing and innovation',
];

function About() {
	return (
		<Container>
			<Img src={Banner} />
			<Wrapper>
				<Heading>ABOUT SURGIGLASS</Heading>
				<Paragraph>
					SURGIGLASS INTERNATIONAL was first established in the industrial city of Sialkot, Pakistan in 1971. Following a shift in our
					business model, we started exporting our instruments globally in 1980. <br /> <br /> We are a family owned and managed
					manufacturing unit that aims to provide solutions to our customers' everyday surgical instruments needs and challenges. <br />{' '}
					<br /> We aim to provide excellent customer service and we promote a 'can do' culture. We aspire to being the easiest company in
					the market to deal with for any and all of your surgical instruments needs. <br /> <br />
					At all times we aim to provide high-quality surgical products with quality matching German made instruments. Our instrument range
					is regularly updating and growing with the newest technological advances. We are proud to offer cutting edge surgical instruments
					at competitive, value for money prices.
				</Paragraph>

				<Heading>Products and Services:</Heading>
				<Paragraph>
					With a portfolio of over 8,000 products covering all the major aspects of surgical and dental care ALLEN has become a reputable
					real manufacturer and reliable supplier. <br /> <br /> We are proud to be one of the few production plants in Sialkot who have a
					complete setup from FORGING TILL FINAL PACKAGING, this production plant is backed up by an integrated team of technically trained
					and skilled professionals. <br /> <br />
					SURGIGLASS strives to deliver the highest quality products without defects. Strict Quality Control is built into our process
					beginning with raw material inspection and certification through packaging of the finished product. <br /> <br />
					Our Quality Assurance processes ensure compliance to all applicable standards, regulatory requirements, safety requirements and
					customer requirements. <br /> <br /> SURGIGLASS also promotes a growing range of competitively priced single-use instruments and
					products. Finally, the packaging of the instruments can be customized as per the needs of our clients.
				</Paragraph>

				<Heading>Continuous Developments:</Heading>
				<Paragraph>
					ALLEN attempts to continuously improve the quality, reliability, and cost of all its manufactured products and services. ALLEN
					works closely with all our strategic managers to develop continuous improvement systems that will bring value to our organization.
					Systems may range in scope from: <br /> <br />
				</Paragraph>

				{arr.map((el) => {
					return (
						<SpanWrapper>
							<Icon>
								{' '}
								<AiOutlineCheck />
							</Icon>
							<Span>{el} </Span>
						</SpanWrapper>
					);
				})}

				<Heading>Culture and Values:</Heading>
				<Paragraph>
					SURGIGLASS prides itself on providing excellent customer service across all levels of the organisation. <br /> <br /> We employ
					experienced Managers that service all over the globe and are available to assist you with any enquiries, quotations, or to offer
					advice and answer questions relating to a product or specialty. <br /> <br /> Our customers are our most important asset and we
					endeavour to provide a personalised customer service experience. We aim to provide the highest level of customer service to the
					International Healthcare market and are proud that we have built and continue to maintain solid relationships with our customers
					and distributors.
				</Paragraph>
			</Wrapper>
			<Img src={Banner2} style={{ marginTop: '2rem' }} />
		</Container>
	);
}

export default About;
