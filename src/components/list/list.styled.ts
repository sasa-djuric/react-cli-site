import { styled } from '../../config/stitches.config';

export const StyledList = styled('ul', {
	display: 'flex',
	flexDirection: 'column',
	gap: '$2',
	listStyle: 'none',

	'& > li:before': {
		content: '-',
		marginRight: '6px'
	}
});
