import { styled } from '../../../config/stitches.config';

export const StyledHeader = styled('header', {
	display: 'flex',
	alignItems: 'center',
	width: '100%',
	height: '100%',
	borderBottom: '1px solid $gray400',
	padding: '0px $7',
	gap: '$2',
	transition: '$colors'
});

export const StyledThemeToggle = styled('button', {
	unset: 'all',
	display: 'flex',
	background: 'transparent',
	border: 'none',
	outline: 'none',
	color: '$gray1200',
	cursor: 'pointer',
	transition: '$microInteractions',
	padding: '$1',
	borderRadius: '$medium',

	'&:hover': {
		background: '$gray400'
	}
});

export const LogoContainer = styled('div', {
	display: 'flex',
	opacity: '0.95',
	width: '187px',
	height: '26px',

	'& path': {
		fill: '$white',
		transition: '$colors'
	},

	'@bpPhone': {
		width: '160px'
	}
});
