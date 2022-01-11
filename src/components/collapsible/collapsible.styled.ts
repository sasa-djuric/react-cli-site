import * as BaseCollapsible from '@radix-ui/react-collapsible';
import { keyframes, styled } from '../../config/stitches.config';

const open = keyframes({
	from: {
		height: 0,
		opacity: 0
	},
	to: {
		height: 'var(--radix-collapsible-content-height)',
		opacity: 1
	}
});

const close = keyframes({
	from: {
		height: 'var(--radix-collapsible-content-height)',
		opacity: 1
	},
	to: {
		height: '0px',
		opacity: 0
	}
});

export const StyledContent = styled(BaseCollapsible.Content, {
	overflow: 'hidden',

	'&[data-state="open"]': {
		animation: `${open} 0.25s ease`
	},

	'&[data-state="closed"]': {
		animation: `${close} 0.25s ease both !important`
	}
});
