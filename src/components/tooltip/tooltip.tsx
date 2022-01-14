import { StyledContent, StyledArrow } from './tooltip.styled';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

interface SubComponents {
	Trigger: typeof TooltipPrimitive.Trigger;
	Content: typeof StyledContent;
	Arrow: typeof StyledArrow;
}

// @ts-ignore
export const Tooltip: typeof TooltipPrimitive.Root & SubComponents = TooltipPrimitive.Root;

Tooltip.Trigger = TooltipPrimitive.Trigger;
Tooltip.Content = StyledContent;
Tooltip.Arrow = StyledArrow;
