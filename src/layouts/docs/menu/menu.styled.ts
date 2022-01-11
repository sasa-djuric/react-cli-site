import { styled } from '../../../config/stitches.config';

export const StyledMenu = styled('div', {
	display: 'flex',
	width: '100%',
	borderBottom: '1px solid $gray600'
});

export const StyledMenuContainer = styled('div', {
	display: 'flex',
	alignItems: 'center',
	height: '45px',
	padding: '$2 $4'
});

export const StyledMenuButton = styled('button', {
	all: 'unset',
	display: 'flex',
	alignItems: 'center',
	gap: '$2',
	fontSize: '$2',
	padding: '$1 $2',
	borderRadius: '2px',
	boxShadow: '0 0 0 0px $colors$gray800',
	translate: 'all 0.2s ease',
	backgroundColor: 'transparent',
	userSelect: 'none',

	'&:active': {
		backgroundColor: '$gray500',
		boxShadow: '0 0 0 2px $colors$gray800'
	},

	'&:active, &:focus': {
		boxShadow: '0 0 0 1px $colors$gray800'
	}
});
