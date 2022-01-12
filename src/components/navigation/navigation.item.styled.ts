import { styled } from '../../config/stitches.config';

export const StyledNavigationItem = styled('li', {
	display: 'flex',
	alignItems: 'center',
	gap: '$1',
	color: '$gray1100',
	fontSize: '$medium',
	cursor: 'pointer',
	transition: '$microInteractions',

	'&:hover': {
		color: '$gray1200'
	}
});
