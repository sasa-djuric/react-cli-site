/* eslint-disable react/display-name */
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
	const hash = '#' + headingToHash(props.children as string);

	return (
		<Link href={hash} passHref>
			<HeadingLink>
				<Heading
					id={hash}
					{...initialProps}
					{...props}
					css={{
						cursor: 'pointer',
						display: 'inline-block',
						...(initialProps.css || {})
					}}
				/>
				<Link2Icon />
			</HeadingLink>
		</Link>
	);
};

export const mdxComponents = {
	h1: createHeading({ level: 1, css: { marginBottom: '$2' } }),
	h2: createHeading({ level: 2, css: { marginTop: '$7', marginBottom: '$2' } }),
	h3: createHeading({ level: 3, css: { marginTop: '$7', marginBottom: '$1' } }),
	p: (props: any) => <Paragraph css={{ marginBottom: '$3' }} {...props} />,
	span: (props: any) => <Text css={{ marginTop: '$2', marginBottom: '$7' }} {...props} />,
	Description: (props: any) => <Description css={{ marginTop: '$2', marginBottom: '$9' }} {...props} />,
	code: ({ className, children }: any) => {
		return className ? (
			<SyntaxHighlighter
				language={className.replace('language-', '')}
				style={prism}
				customStyle={{
					paddingTop: '22px',
					paddingBottom: '0px',
					paddingLeft: '32px',
					margin: '22px 0px'
				}}
			>
				{children}
			</SyntaxHighlighter>
		) : (
			<Code>{children}</Code>
		);
	},
	table: Table,
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
	a: Anchor
};
