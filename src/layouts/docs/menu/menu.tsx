import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Collapsible } from '../../../components/collapsible';
import { CSS } from '../../../stitches.config';
import { Navigation } from '../navigation';
import { StyledMenu, StyledMenuButton, StyledMenuContainer } from './menu.styled';

interface MenuProps {
	css: CSS;
}

export const Menu: React.FunctionComponent<MenuProps> = ({ css }) => {
	return (
		<StyledMenu css={css}>
			<Collapsible style={{ width: '100%' }}>
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
