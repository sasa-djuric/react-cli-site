import { FunctionComponent } from 'react';
import { StyledContent } from './collapsible.styled';
import * as BaseCollapsible from '@radix-ui/react-collapsible';

interface SubComponents {
	Content: typeof StyledContent;
	Trigger: typeof BaseCollapsible.Trigger;
}

// @ts-ignore
export const Collapsible: FunctionComponent<BaseCollapsible.CollapsibleProps> & SubComponents = BaseCollapsible.Root;

Collapsible.Content = StyledContent;
Collapsible.Trigger = BaseCollapsible.Trigger;
