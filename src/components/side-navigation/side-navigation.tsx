import { forwardRef, ForwardRefExoticComponent, HTMLProps } from 'react';
import { SideNavigationItem } from './side-navigation.item';
import { StyledSideNavigation } from './side-navigation.styled';

interface SubComponents {
	Item: typeof SideNavigationItem;
}

type NativeProps = Omit<HTMLProps<HTMLUListElement>, 'css' | 'ref'>;

export interface MenuProps extends NativeProps {}

// @ts-ignore
export const SideNavigation: ForwardRefExoticComponent<MenuProps> & SubComponents = forwardRef<
	HTMLUListElement,
	MenuProps
>(({ children, ...props }, forwardedRef) => {
	return (
		<StyledSideNavigation ref={forwardedRef} {...props}>
			{children}
		</StyledSideNavigation>
	);
});

SideNavigation.displayName = 'SideNavigation';

SideNavigation.Item = SideNavigationItem;
