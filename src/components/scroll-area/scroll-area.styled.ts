import { styled } from '../../config/stitches.config';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

export const StyledScrollAreaThumb = styled(ScrollAreaPrimitive.Thumb, {
	flex: 1,
	background: '$gray800',
	borderRadius: '999px',
	opacity: 0.5,
	position: 'relative',

	'&::before': {
		content: '""',
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: '100%',
		height: '100%',
		minWidth: '44px',
		minHeight: '44px'
	}
});

export const StyledScrollAreaScrollBar = styled(ScrollAreaPrimitive.ScrollAreaScrollbar, {
	display: 'flex',
	userSelect: 'none',
	touchAction: 'none',
	padding: '3px',

	variants: {
		size: {
			small: {
				'&[data-orientation="vertical"]': {
					width: '10px'
				},

				'&[data-orientation="horizontal"]': {
					flexDirection: 'column',
					height: '10px'
				}
			},
			medium: {
				'&[data-orientation="vertical"]': {
					width: '15px'
				},

				'&[data-orientation="horizontal"]': {
					flexDirection: 'column',
					height: '15px'
				}
			}
		}
	},

	defaultVariants: {
		size: 'small'
	}
});
