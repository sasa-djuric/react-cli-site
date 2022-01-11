import { forwardRef, HTMLProps } from 'react';
import { StyledParagraph } from './paragraph.styled';

type NativeProps = Omit<HTMLProps<HTMLParagraphElement>, 'ref' | 'css'>;

interface ParagraphStyleProps {}

export interface ParagraphProps extends ParagraphStyleProps, NativeProps {}

export const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(({ children, ...props }, forwardedRef) => {
	return (
		<StyledParagraph ref={forwardedRef} {...props}>
			{children}
		</StyledParagraph>
	);
});

Paragraph.displayName = 'Paragraph';
