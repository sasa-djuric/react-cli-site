import { styled } from '../../config/stitches.config';

export const StyledCode = styled('code', {
	display: 'inline-block',
	background: '$gray200',
	padding: '7px 10px',
	borderRadius: '0.3em',
	color: '$primary1100',
	transition: '$colors',
	whiteSpace: 'nowrap',

	'@bpPhone': {
		fontSize: '$2',
		padding: '5px 8px'
	}
});
