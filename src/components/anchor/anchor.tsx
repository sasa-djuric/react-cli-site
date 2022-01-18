import { forwardRef } from 'react';
import { StyledAnchor } from './anchor.styled';

type NativeProps = React.ComponentProps<typeof StyledAnchor>;

interface AnchorProps extends NativeProps {}

// eslint-disable-next-line react/display-name
export const Anchor: React.FunctionComponent<AnchorProps> = forwardRef(({ children, ...props }, forwardedRef) => {
	return (
		<StyledAnchor target={props.href?.startsWith('http') ? '_blank' : undefined} {...props}>
			{children}
		</StyledAnchor>
	);
});
