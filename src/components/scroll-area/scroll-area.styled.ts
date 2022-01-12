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
		minWidth: 44,
		minHeight: 44
	}
});

export const StyledScrollAreaScrollBar = styled(ScrollAreaPrimitive.ScrollAreaScrollbar, {
	display: 'flex',
	userSelect: 'none',
	touchAction: 'none',
	padding: '3px',
	$size: '',

	'&[data-orientation="vertical"]': {
		width: '$size'
	},

	'&[data-orientation="horizontal"]': {
		flexDirection: 'column',
		height: '$size'
	},

	variants: {
		size: {
			small: {
				$size: '10px'
			},
			medium: {
				$size: '15px'
			}
		}
	},

	defaultVariants: {
		size: 'small'
	}
});
