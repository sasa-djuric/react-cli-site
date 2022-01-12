import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Collapsible } from '../../../components/collapsible';
import { CSS } from '../../../config/stitches.config';
import { Navigation } from '../navigation';
import { StyledMenu, StyledMenuButton, StyledMenuContainer } from './menu.styled';
import { ScrollArea } from '../../../components/scroll-area';

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
					<ScrollArea>
						<ScrollArea.Viewport style={{ height: 'calc(100vh - 111px)' }}>
							<Navigation css={{ paddingBottom: '$3' }} />
						</ScrollArea.Viewport>
						<ScrollArea.Scrollbar orientation='vertical'>
							<ScrollArea.Thumb />
						</ScrollArea.Scrollbar>
					</ScrollArea>
				</Collapsible.Content>
			</Collapsible>
		</StyledMenu>
	);
};
