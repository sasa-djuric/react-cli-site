import { styled } from '../../../config/stitches.config';

export const StyledSideBar = styled('aside', {
	display: 'flex',
	flexDirection: 'column',
	width: '100%',
	height: '100%',
	borderRight: '1px solid $gray400',
	padding: '$6 0px',
	transition: '$colors'
});
