import { styled } from '../../config/stitches.config';

export const StyledAnchor = styled('a', {
	color: '$primary1100',
	textDecoration: 'transparent underline',
	textUnderlineOffset: '4px',
	transition: '$colors',

	'&:hover': {
		textDecorationColor: '$primary400'
	}
});
