import { ComponentProps } from 'react';
import { Navigation } from '../navigation';
import { StyledSideBar } from './sidebar.styled';

type NativeProps = ComponentProps<typeof StyledSideBar>;

interface SideBarProps extends NativeProps {}

export const SideBar: React.FunctionComponent<SideBarProps> = props => {
	return (
		<StyledSideBar {...props}>
			<Navigation />
		</StyledSideBar>
	);
};
