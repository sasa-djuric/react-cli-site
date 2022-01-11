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
		</Head>
	);
};
