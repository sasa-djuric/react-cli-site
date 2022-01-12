import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { QuickNav } from '../../components/quick-nav';
import { StyledMain, StyledMainWrapper, StyledWrapper } from './docs.styled';
import { Header } from './header';
import { Menu } from './menu';
import { SideBar } from './sidebar';

interface DocsLayoutProps {}

export const DocsLayout: React.FunctionComponent<DocsLayoutProps> = ({ children }) => {
	const router = useRouter();
	const mainRef = useRef<HTMLElement>(null);

	function onRouteChangeComplete() {
		mainRef.current?.scroll({
			top: 0,
			left: 0
		});
	}

	useEffect(() => {
		router.events.on('routeChangeComplete', onRouteChangeComplete);

		return () => {
			router.events.off('routeChangeComplete', onRouteChangeComplete);
		};
	}, [router]);

	return (
		<StyledWrapper>
			<Header css={{ gridArea: 'header' }} />
			<Menu css={{ gridArea: 'menu', display: 'none', '@bpTablet': { display: 'flex' } }} />
			<SideBar css={{ gridArea: 'sidebar', '@bpTablet': { display: 'none' } }} />
			<StyledMain ref={mainRef}>
				<StyledMainWrapper>{children}</StyledMainWrapper>
				<QuickNav
					css={{
						position: 'sticky',
						top: '0px',
						padding: '72px 25px',
						marginRight: '30px',
						height: 'max-content',
						'@bpTabletLandscape': {
							display: 'none'
						}
					}}
				/>
			</StyledMain>
		</StyledWrapper>
	);
};
