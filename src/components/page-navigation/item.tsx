import Link from 'next/link';
import { ComponentProps } from 'react';
import { Box } from '../box';
import { Text } from '../text';
import { StyledItem, StyledLink } from './item.styled';

type NativeProps = ComponentProps<typeof StyledItem>;

export interface ItemProps extends NativeProps {
	label: string;
	href: string;
}

export const Item: React.FunctionComponent<ItemProps> = ({ label, href, children, ...props }) => {
	return (
		<Box {...props}>
			<Link href={href} passHref>
				<a>
					<StyledItem>
						<Text css={{ color: '$gray1100' }}>{label}</Text>
						<StyledLink>{children}</StyledLink>
					</StyledItem>
				</a>
			</Link>
		</Box>
	);
};
