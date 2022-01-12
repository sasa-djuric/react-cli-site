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

SyntaxHighlighter.registerLanguage('json', json);
SyntaxHighlighter.registerLanguage('bash', bash);

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
		return (
			<SyntaxHighlighter
				language={className.replace('language-', '')}
				style={prism}
				customStyle={{ paddingTop: '22px', paddingBottom: '0px', paddingLeft: '32px', margin: '22px 0px' }}
			>
				{children}
			</SyntaxHighlighter>
		);
	}
};
