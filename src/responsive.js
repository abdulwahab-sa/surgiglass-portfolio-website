import { css } from 'styled-components';

const BigScreen = (props) => {
	return css`
		@media only screen and (min-width: 650px) {
			${props}
		}
	`;
};

export default BigScreen;
