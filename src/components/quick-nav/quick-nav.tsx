import Link from 'next/link';
import { useRouter } from 'next/router';
import { ComponentProps, useEffect, useState } from 'react';
import { headingToHash } from '../../utils/strings';
import { Heading } from '../heading';
import { StyledContainer, StyledNavigation, StyledNavigationItem } from './quick-nav.styled';

type NativeProps = ComponentProps<typeof StyledContainer>;

interface QuickNavProps extends NativeProps {}

export const QuickNav: React.FunctionComponent<QuickNavProps> = props => {
	const [headings, setHeadings] = useState<Array<HTMLHeadingElement>>([]);
	const router = useRouter();

	useEffect(() => {
		const headingElements: HTMLHeadingElement[] = Array.from(
			document.querySelectorAll<HTMLHeadingElement>('a>h1[id], a>h2[id], a>h3[id], a>h4[id')
		).slice(1);

		setHeadings(headingElements);
	}, [router.asPath]);

	const getLevel = (nodeName: string) => {
		return Number(nodeName.replace('H', ''));
	};

	if (!headings.length) {
		return null;
	}

	return (
		<StyledContainer {...props}>
			<Heading level={3} css={{ marginBottom: '$5' }}>
				Quick nav
			</Heading>
			<StyledNavigation>
				{headings.map(element => {
					return (
						<StyledNavigationItem
							key={element.innerText}
							variant='subtile'
							size='small'
							css={{
								marginLeft: getLevel(element.nodeName) === 3 ? '$7' : '0px'
							}}
						>
							<Link href={'#' + headingToHash(element.innerText)}>{element.innerText}</Link>
						</StyledNavigationItem>
					);
				})}
			</StyledNavigation>
		</StyledContainer>
	);
};
