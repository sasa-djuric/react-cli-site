import { forwardRef, HTMLProps } from 'react';
import { CSS } from '../../stitches.config';
import { StyledHeading } from './heading.styled';

type NativeProps = Omit<HTMLProps<HTMLHeadingElement>, 'ref' | 'as' | 'css'>;

interface HeadingStyleProps {}

export interface HeadingProps extends HeadingStyleProps, NativeProps {
	level?: 1 | 2 | 3 | 4 | 5 | 6;
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	css?: CSS;
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
	({ level = 2, as, children, ...props }, forwardedRef) => {
		return (
			<StyledHeading ref={forwardedRef} as={as ?? `h${level}`} level={level} {...props}>
				{children}
			</StyledHeading>
		);
	}
);

Heading.displayName = 'Heading';
