import styled, { css } from 'styled-components';
interface IButtonProps {
	readonly size?: string;
}

export interface IInputProps extends IButtonProps {
	readonly stack?: boolean;
	readonly stretch?: boolean;
	readonly secondary?: boolean;
}

const buttonStyles = css`
	padding: 0.25rem 1rem;
	border: none;
	cursor: pointer;
	outline: none;
	text-transform: uppercase;
	letter-spacing: 1.25px;
	border-radius: 4px;
	font-weight: 400;
	transition: 0.3s ease-in-out;
	font-family: 'Poppins', sans-serif;
	transform: scale(1.001);
	position: relative;
	line-height: 2rem;

	svg {
		height: 1rem;
		width: 1rem;
		opacity: 0.5;
		position: absolute;
		right: 10%;
		top: 32.5%;
	}
`;

const disabledStyles = css`
	padding: 0.25rem 1rem;
	-webkit-box-shadow: none;
	-moz-box-shadow: none;
	box-shadow: none;
	cursor: not-allowed;
`;

const shadowStyles = css`
	-webkit-box-shadow: 0px 6px 25px 0px rgba(105, 39, 255, 0.5);
	-moz-box-shadow: 0px 6px 25px 0px rgba(105, 39, 255, 0.5);
	box-shadow: 0px 6px 25px 0px rgba(105, 39, 255, 0.5);
`;

export const Buttons =
	styled.div <
	IInputProps >
	`
	button {
		display: ${(props) => (props.stack ? 'block' : 'inline-block')};
		min-width: ${(props) => (props.stretch ? '100%' : 'none')};
		margin: 1rem 0;
	}
`;

export const Button =
	styled.button <
	IInputProps >
	`
	${buttonStyles};
	${shadowStyles};
	background-color: ${(props) =>
		!props.secondary ? props.theme.colors.primaryColor : props.theme.colors.secondaryColor};
	color: ${(props) => props.theme.colors.fgColor};
	font-size: ${(props) => (props.size === 'small' ? 0.7 : 0.9)}rem;
	min-width: ${(props) => (props.size === 'small' ? 125 : 225)}px;
	min-height: ${(props) => (props.size === 'small' ? 35 : 55)}px;

	&:hover {
		opacity: 0.8;
	}

	&:disabled {
		${disabledStyles} background-color: ${(props) => props.theme.colors.disabledBg};
		color: ${(props) => props.theme.colors.disabledColor};
	}
`;

export const FlatButton =
	styled.button <
	IInputProps >
	`
	${buttonStyles};
	background-color: #bdbdbd;
	color: #616161;
	font-size: ${(props) => (props.size === 'small' ? 0.7 : 0.9)}rem;
	min-width: ${(props) => (props.size === 'small' ? 125 : 225)}px;
	min-height: ${(props) => (props.size === 'small' ? 35 : 55)}px;

	&:disabled {
		${disabledStyles};
	}
`;

export const Instagram = styled.button`
	${buttonStyles};
	position: relative;
	color: ${(props) => props.theme.colors.fgColor};
	font-size: 0.9rem;
	min-height: 55px;
	min-width: 225px;
	background: #f09433;
	background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
	background: -webkit-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
	background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
	filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f09433', endColorstr='#bc1888', GradientType=1);
	-webkit-box-shadow: 0px 6px 25px 0px rgba(230, 104, 60, 0.5);
	-moz-box-shadow: 0px 6px 25px 0px rgba(230, 104, 60, 0.5);
	box-shadow: 0px 6px 25px 0px rgba(230, 104, 60, 0.5);

	span {
		position: absolute;
		top: 35%;
		left: 15%;
	}

	&:hover {
		opacity: 0.8;
	}

	&:disabled {
		${disabledStyles};
		background-color: ${(props) => props.theme.colors.disabledBg};
		color: ${(props) => props.theme.colors.disabledColor};
	}
`;
