import { ComponentProps } from 'react';
import { Item, ItemProps } from './item';
import { StyledPageNavigation } from './page-navigation.styled';

interface SubComponents {
	Previous: typeof Previous;
	Next: typeof Next;
}

type NativeProps = ComponentProps<typeof StyledPageNavigation>;

interface PageNavigationProps extends NativeProps {}

export const PageNavigation: React.FunctionComponent<PageNavigationProps> & SubComponents = ({
	children,
	...props
}) => {
	return <StyledPageNavigation {...props}>{children}</StyledPageNavigation>;
};

const Previous: React.FunctionComponent<Omit<ItemProps, 'label'>> = props => <Item label='Previous' {...props} />;

const Next: React.FunctionComponent<Omit<ItemProps, 'label'>> = props => (
	<Item label='Next' css={{ ...(props.css ?? {}), textAlign: 'end', marginLeft: 'auto' }} {...props} />
);

PageNavigation.Previous = Previous;
PageNavigation.Next = Next;
