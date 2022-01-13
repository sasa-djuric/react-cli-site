import { StyledAnchor } from './anchor.styled';

type NativeProps = React.ComponentProps<typeof StyledAnchor>;

interface AnchorProps extends NativeProps {}

export const Anchor: React.FunctionComponent<AnchorProps> = ({ children, ...props }) => {
	return (
		<StyledAnchor target={props.href?.startsWith('http') ? '_blank' : undefined} {...props}>
			{children}
		</StyledAnchor>
	);
};
