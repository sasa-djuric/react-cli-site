import { styled } from '../../config/stitches.config';

export const StyledItem = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	gap: '$2'
});

export const StyledLink = styled('span', {
	fontSize: '19px',
	letterSpacing: '-.015em',
	color: '$primary1100',
	transition: '$colors'
});
