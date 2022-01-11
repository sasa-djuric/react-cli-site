import { styled } from '../../stitches.config';

export const StyledNavigationItem = styled('li', {
	display: 'flex',
	alignItems: 'center',
	gap: '$1',
	color: '$gray1100',
	fontSize: '$medium',
	cursor: 'pointer',
	transition: 'all 0.2s ease',

	'&:hover': {
		color: '$gray1200'
	}
});
