import { ComponentProps } from 'react';
import { StyledNavigation } from './navigation.styled';
import { NavigationItem } from './navigation.item';

interface SubComponents {
	Item: typeof NavigationItem;
}

type NativeProps = ComponentProps<typeof StyledNavigation>;

interface NavigationProps extends NativeProps {}

export const Navigation: React.FunctionComponent<NavigationProps> & SubComponents = ({ children, ...props }) => {
	return <StyledNavigation {...props}>{children}</StyledNavigation>;
};

Navigation.Item = NavigationItem;
