import { SideNavigation } from '../../../components/side-navigation';
import { CSS } from '../../../config/stitches.config';
import { docRoutes } from '../../../config/doc-routes';
import { StyledNavigationContainer } from './navigation.styled';
import { Heading } from '../../../components/heading';

interface NavigationProps {
	css?: CSS;
}

export const Navigation: React.FunctionComponent<NavigationProps> = props => {
	return (
		<>
			{docRoutes.map(section => {
				return (
					<StyledNavigationContainer key={section.label}>
						<Heading level={4} css={{ padding: '$2 $7' }}>
							{section.label}
						</Heading>
						<SideNavigation {...props}>
							{section.pages.map(page => (
								<SideNavigation.Item key={page.slug} href={`/${page.slug}`}>
									{page.title}
								</SideNavigation.Item>
							))}
						</SideNavigation>
					</StyledNavigationContainer>
				);
			})}
		</>
	);
};
