import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { keyframes, styled } from '../../config/stitches.config';

const slideDown = keyframes({
	'0%': {
		opacity: 0,
		transform: 'translateY(-3px)'
	},
	'100%': {
		opacity: 1,
		transform: 'translateY(0)'
	}
});

const slideUp = keyframes({
	'0%': {
		opacity: 0,
		transform: 'translateY(3px)'
	},
	'100%': {
		opacity: 1,
		transform: 'translateY(0)'
	}
});

export const StyledContent = styled(TooltipPrimitive.Content, {
	background: '$gray1200',
	color: '$black',
	fontSize: '$1',
	padding: '$1 $3',
	borderRadius: '$small',
	animationDuration: '0.6s',
	animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',

	'&[data-side="top"]': {
		animationName: slideDown
	},

	'&[data-side="bottom"]': {
		animationName: slideUp
	}
});

export const StyledArrow = styled(TooltipPrimitive.Arrow, {
	fill: '$gray1200'
});
