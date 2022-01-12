import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Collapsible } from '../../../components/collapsible';
import { CSS } from '../../../config/stitches.config';
import { Navigation } from '../navigation';
import { StyledMenu, StyledMenuButton, StyledMenuContainer } from './menu.styled';

interface MenuProps {
	css: CSS;
}

export const Menu: React.FunctionComponent<MenuProps> = ({ css }) => {
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();

	function onRouteChangeComplete() {
		setIsOpen(false);
	}

	useEffect(() => {
		router.events.on('routeChangeComplete', onRouteChangeComplete);

		return () => {
			router.events.on('routeChangeComplete', onRouteChangeComplete);
		};
	}, [router.events]);

	return (
		<StyledMenu css={css}>
			<Collapsible style={{ width: '100%' }} open={isOpen} onOpenChange={setIsOpen}>
				<StyledMenuContainer>
					<Collapsible.Trigger asChild>
						<StyledMenuButton>
							<HamburgerMenuIcon />
							Menu
						</StyledMenuButton>
					</Collapsible.Trigger>
				</StyledMenuContainer>
				<Collapsible.Content>
					<Navigation css={{ paddingBottom: '$3' }} />
				</Collapsible.Content>
			</Collapsible>
		</StyledMenu>
	);
};
