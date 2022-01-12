import { styled } from '../../config/stitches.config';

export const StyledText = styled('span', {
	fontWeight: 400,
	transition: '$colors',

	variants: {
		variant: {
			default: {
				color: '$gray1200'
			},
			subtile: {
				color: '$gray1100'
			}
		},
		size: {
			small: {
				fontSize: '$2'
			},
			medium: {
				fontSize: '$3'
			}
		},
		truncate: {
			true: {
				whiteSpace: 'nowrap',
				overflow: 'hidden',
				textOverflow: 'ellipsis'
			}
		}
	},

	defaultVariants: {
		variant: 'default',
		size: 'medium',
		truncate: false
	}
});
