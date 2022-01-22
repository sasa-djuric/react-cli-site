import Head from 'next/head';

interface PageMetaProps {
	title: string;
	description: string;
}

export const PageMeta: React.FunctionComponent<PageMetaProps> = ({ title, description }) => {
	return (
		<Head>
			<title>{title}</title>
			<meta name='description' content={description} />

			<meta property='og:title' content={title} />
			<meta property='og:description' content={description} />
			<meta property='og:image' content='https://www.reactcli.dev/assets/logo.png' />

			<meta property='twitter:title' content={title} />
			<meta property='twitter:description' content={description} />
			<meta property='twitter:image' content='https://www.reactcli.dev/assets/logo.png' />
		</Head>
	);
};
