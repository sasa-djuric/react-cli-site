import { styled } from '../../config/stitches.config';
import { Text } from '../text';

export const StyledContainer = styled('div', {
	userSelect: 'none'
});

export const StyledNavigation = styled('ul', {
	display: 'flex',
	flexDirection: 'column',
	listStyle: 'none'
});

export const StyledNavigationItem = styled(Text, {
	width: 'max-content',
	margin: '$2 0px',
	cursor: 'pointer',
	transition: 'all 0.2s ease',
	outline: '2px solid transparent',
	outlineOffset: '2px',

	'&:hover': {
		color: '$gray1200'
	},

	'&:active': {
		outline: '2px solid $gray800',
		outlineOffset: '2px'
	}
});
