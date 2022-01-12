import { ScrollArea } from '../../../components/scroll-area';
import { styled } from '../../../config/stitches.config';

export const StyledSideBar = styled('aside', {
	width: '100%',
	height: '100%',
	padding: '$6 0px'
});

export const StyledScrollAreaViewport = styled(ScrollArea.Viewport, {
	borderRight: '1px solid $gray400',
	height: 'calc(100vh - 65px)',
	transition: '$colors',

	'@bpTablet': {
		display: 'none'
	}
});
