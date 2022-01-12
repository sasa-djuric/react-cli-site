import Link from 'next/link';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json';
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash';
import prism from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import { headingToHash } from '../utils/strings';
import { Description } from './description';
import { Heading } from './heading';
import { Paragraph } from './paragraph';
import { Text } from './text';
import { styled } from '../config/stitches.config';

SyntaxHighlighter.registerLanguage('json', json);
SyntaxHighlighter.registerLanguage('bash', bash);

const StyledCode = styled('code', {
	display: 'inline-block',
	background: '$gray200',
	padding: '7px 10px',
	borderRadius: '0.3em',
	color: '$primary1100',
	transition: '$colors',
	whiteSpace: 'nowrap',

	'@bpPhone': {
		fontSize: '$2',
		padding: '5px 8px'
	}
});

export const mdxComponents = {
	h1: (props: any) => (
		<Link href={'#' + headingToHash(props.children)} passHref>
			<a>
				<Heading
					id={headingToHash(props.children)}
					level={1}
					css={{ marginBottom: '$2', cursor: 'pointer', display: 'inline-block' }}
					{...props}
				/>
			</a>
		</Link>
	),
	h2: (props: any) => (
		<Link href={'#' + headingToHash(props.children)} passHref>
			<a>
				<Heading
					id={headingToHash(props.children)}
					level={2}
					css={{ marginTop: '$7', marginBottom: '$2', cursor: 'pointer', display: 'inline-block' }}
					{...props}
				/>
			</a>
		</Link>
	),
	h3: (props: any) => (
		<Link href={'#' + headingToHash(props.children)} passHref>
			<a>
				<Heading
					id={headingToHash(props.children)}
					level={3}
					css={{ marginTop: '$7', marginBottom: '$1', cursor: 'pointer', display: 'inline-block' }}
					{...props}
				/>
			</a>
		</Link>
	),
	p: (props: any) => <Paragraph css={{ marginBottom: '$3' }} {...props} />,
	span: (props: any) => <Text css={{ marginTop: '$2', marginBottom: '$7' }} {...props} />,
	Description: (props: any) => <Description css={{ marginTop: '$2', marginBottom: '$9' }} {...props} />,
	code: ({ className, children }: any) => {
		return className ? (
			<SyntaxHighlighter
				language={className.replace('language-', '')}
				style={prism}
				customStyle={{ paddingTop: '22px', paddingBottom: '0px', paddingLeft: '32px', margin: '22px 0px' }}
			>
				{children}
			</SyntaxHighlighter>
		) : (
			<StyledCode>{children}</StyledCode>
		);
	},
	table: styled('table', {
		width: '100%',
		textAlign: 'left',
		borderCollapse: 'collapse',
		boxSizing: 'border-box',
		tableLayout: 'auto',

		'@bpPhone': {
			tableLayout: 'unset'
		}
	}),
	thead: styled('thead', {
		'& th': {
			fontSize: '$2',
			fontWeight: 400,
			color: '$gray1100',
			borderBottom: '1px solid $gray600',
			padding: '14px 18px 14px 2px',
			transition: '$colors',

			'@bpPhone': {
				fontSize: '$1'
			}
		}
	}),
	tbody: styled('tbody', {
		'& td': {
			fontSize: '$3',
			fontWeight: 400,
			lineHeight: '20px',
			color: '$gray1100',
			borderBottom: '1px solid $gray600',
			padding: '18px 18px 18px 2px',
			width: '34%',
			transition: '$colors',

			'@bpPhone': {
				fontSize: '$2',
				width: 'unset',
				padding: '14px 8px 14px 2px'
			}
		}
	}),
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
	})
};
