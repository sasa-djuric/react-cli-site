import { styled } from '../../config/stitches.config';

export const StyledDescription = styled('span', {
	display: 'block',
	fontSize: '$6',
	lineHeight: '30px',
	color: '$gray1100',
	letterSpacing: '-.016em',
	transition: '$colors',

	'@bpPhone': {
		fontSize: '$5',
		lineHeight: '27px',
		letterSpacing: '-0.015em'
	}
});
