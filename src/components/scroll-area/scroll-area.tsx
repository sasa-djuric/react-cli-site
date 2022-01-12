import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import { StyledScrollAreaScrollBar, StyledScrollAreaThumb } from './scroll-area.styled';

interface SubComponents {
	Viewport: typeof ScrollAreaPrimitive.Viewport;
	Scrollbar: typeof StyledScrollAreaScrollBar;
	Thumb: typeof StyledScrollAreaThumb;
}

// @ts-ignore
export const ScrollArea: typeof ScrollAreaPrimitive.Root & SubComponents = ScrollAreaPrimitive.Root;

ScrollArea.Viewport = ScrollAreaPrimitive.Viewport;
ScrollArea.Scrollbar = StyledScrollAreaScrollBar;
ScrollArea.Thumb = StyledScrollAreaThumb;
