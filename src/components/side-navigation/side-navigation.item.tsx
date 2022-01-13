import { forwardRef, HTMLProps, useEffect, useState } from 'react';
import Link from 'next/link';
import { StyledSideNavigationItem } from './side-navigation.item.styled';
import { useRouter } from 'next/router';

type NativeProps = Omit<HTMLProps<HTMLLIElement>, 'css' | 'ref'>;

interface MenuItemProps extends NativeProps {
	href: string;
}

export const SideNavigationItem = forwardRef<HTMLLIElement, MenuItemProps>(
	({ href, children, ...props }, forwardedRef) => {
		const [isActive, setIsActive] = useState(false);
		const router = useRouter();

		function onRouteChangeComplete() {
			setIsActive(location.pathname === href);
		}

		useEffect(() => {
			setIsActive(location.pathname === href);
			router.events.on('routeChangeComplete', onRouteChangeComplete);

			return () => {
				router.events.off('routeChangeComplete', onRouteChangeComplete);
			};
		}, []);

		return (
			<Link href={href} passHref>
				<a>
					<StyledSideNavigationItem ref={forwardedRef} active={isActive} {...props}>
						{children}
					</StyledSideNavigationItem>
				</a>
			</Link>
		);
	}
);

SideNavigationItem.displayName = 'SideNavigationItem';
