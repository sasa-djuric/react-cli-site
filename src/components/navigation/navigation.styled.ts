import { styled } from '../../config/stitches.config';

export const StyledNavigation = styled('ul', {
	display: 'flex',
	gap: '$5',
	color: '$gray1200',
	listStyle: 'none',
	transition: '$colors',

	'@bpPhone': {
		gap: '$3'
	}
});
