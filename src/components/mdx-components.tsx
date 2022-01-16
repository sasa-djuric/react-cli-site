/* eslint-disable react/display-name */
import { ComponentProps, Fragment } from 'react';
import Link from 'next/link';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json';
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash';
import prism from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import { Link2Icon } from '@radix-ui/react-icons';
import { headingToHash } from '../utils/strings';
import { Description } from './description';
import { Heading, HeadingProps } from './heading';
import { Paragraph } from './paragraph';
import { Text } from './text';
import { styled } from '../config/stitches.config';
import { Table } from './table';
import { Code } from './code';
import { Anchor } from './anchor';

SyntaxHighlighter.registerLanguage('json', json);
SyntaxHighlighter.registerLanguage('bash', bash);

const HeadingLink = styled('a', {
	'&:hover svg': {
		opacity: 0.5
	},

	'& svg': {
		marginLeft: '$3',
		opacity: 0,
		transition: '$microInteractions'
	}
});

const createHeading = (initialProps: Partial<HeadingProps>) => (props: React.PropsWithChildren<HeadingProps>) => {
	const hash = initialProps.level !== 1 ? headingToHash(props.children as string) : undefined;
	const href = initialProps.level !== 1 ? '#' + hash : undefined;

	const Wrapper = href
		? ({ children }: React.PropsWithChildren<{}>) => (
				<Link href={href} passHref>
					<HeadingLink>
						{children}
						<Link2Icon />
					</HeadingLink>
				</Link>
		  )
		: Fragment;

	return (
		<Wrapper>
			<Heading
				id={hash}
				{...initialProps}
				{...props}
				css={{
					cursor: href ? 'pointer' : 'default',
					display: 'inline-block',
					...(initialProps.css || {})
				}}
			/>
		</Wrapper>
	);
};

const StyledSyntaxHighlighter = styled(SyntaxHighlighter, {
	paddingBottom: '0px !important',
	paddingTop: '22px !important',
	paddingLeft: '32px !important',
	margin: '22px 0px !important',

	'@bpPhone': {
		fontSize: '$2',
		paddingLeft: '24px !important'
	}
});

export const mdxComponents = {
	h1: createHeading({ level: 1, css: { marginBottom: '$2' } }),
	h2: createHeading({ level: 2, css: { marginTop: '$7', marginBottom: '$2' } }),
	h3: createHeading({ level: 3, css: { marginTop: '$7', marginBottom: '$1' } }),
	p: (props: any) => <Paragraph css={{ marginBottom: '$3' }} {...props} />,
	span: (props: any) => <Text css={{ marginTop: '$2', marginBottom: '$7' }} {...props} />,
	Description: (props: any) => <Description css={{ marginTop: '$2', marginBottom: '$9' }} {...props} />,
	code: ({ className, children }: any) => {
		return className ? (
			<StyledSyntaxHighlighter language={className.replace('language-', '')} style={prism}>
				{children}
			</StyledSyntaxHighlighter>
		) : (
			<Code>{children}</Code>
		);
	},
	table: (props: ComponentProps<typeof Table>) => <Table css={{ marginTop: '$6', marginBottom: '$9' }} {...props} />,
	thead: Table.Head,
	tbody: Table.Body,
	tr: Table.Row,
	th: Table.Th,
	td: Table.Td,
	EmptyColumn: styled('span', {
		display: 'block',
		width: '7px',
		height: '1px',
		margin: 'auto 0px auto 15px',
		background: '$gray1100',
		transition: '$colors'
	}),
	br: styled('br', {
		content: '',
		display: 'block',
		marginTop: '16px'
	}),
	Space: styled('div', {
		display: 'flex',
		gap: '$2',
		alignItems: 'center',
		flexWrap: 'wrap'
	}),
	a: (props: ComponentProps<typeof Anchor>) =>
		props.href ? (
			<Link href={props.href} passHref>
				<Anchor {...props} />
			</Link>
		) : (
			<Anchor {...props} />
		)
};
