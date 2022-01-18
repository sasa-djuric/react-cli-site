import { ListItem } from './list.item';
import { StyledList } from './list.styled';

interface SubComponents {
	Item: typeof ListItem;
}

// @ts-ignore
export const List: React.FunctionComponent<React.ComponentProps<typeof StyledList>> & SubComponents = StyledList;

List.Item = ListItem;
