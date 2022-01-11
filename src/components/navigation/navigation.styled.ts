import { styled } from '../../stitches.config';

export const StyledNavigation = styled('ul', {
	display: 'flex',
	gap: '$5',
	color: '$gray1200',
	listStyle: 'none',

	'@bpPhone': {
		gap: '$3'
	}
});
