import { ComponentProps } from 'react';
import { ScrollArea } from '../../../components/scroll-area';
import { Navigation } from '../navigation';
import { StyledScrollAreaViewport, StyledSideBar } from './sidebar.styled';

type NativeProps = ComponentProps<typeof StyledSideBar>;

interface SideBarProps extends NativeProps {}

export const SideBar: React.FunctionComponent<SideBarProps> = props => {
	return (
		<ScrollArea>
			<StyledScrollAreaViewport>
				<StyledSideBar {...props}>
					<Navigation />
				</StyledSideBar>
			</StyledScrollAreaViewport>
			<ScrollArea.Scrollbar orientation='vertical'>
				<ScrollArea.Thumb />
			</ScrollArea.Scrollbar>
		</ScrollArea>
	);
};
