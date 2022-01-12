import { styled } from '../../config/stitches.config';

export const StyledSideNavigationItem = styled('li', {
	all: 'unset',
	position: 'relative',
	display: 'flex',
	alignItems: 'center',
	gap: '$3',
	padding: '$3 $7 $3 $7',
	fontSize: 'small',
	cursor: 'pointer',
	color: '$gray1200',
	transition: '$colors',
	boxSizing: 'border-box',

	'@bpPhone': {
		padding: '$3 $8 $3 $8'
	},

	'&:hover': {
		background: '$primary300'
	},

	variants: {
		active: {
			true: {
				background: '$primary400',

				'&:hover': {
					background: '$primary400'
				}
			}
		}
	}
});
