import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote/dist/types';
import { DocsLayout } from '../../layouts/docs';
import { PageNavigation } from '../../components/page-navigation';
import { usePageInfo } from '../../hooks/usePageInfo';
import { PageMeta } from '../../components/page-meta';
import { mdxComponents } from '../../components/mdx-components';
import { PageMeta as IPageMeta } from '../../config/routes';
import { docRoutes } from '../../config/doc-routes';

interface DocsProps {
	meta: IPageMeta;
	slug: string;
	mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const Docs: React.FunctionComponent<DocsProps> = ({ meta, slug, mdxSource }) => {
	const { pageNavigation } = usePageInfo(docRoutes, slug);

	return (
		<DocsLayout>
			<PageMeta {...meta} />
			<MDXRemote {...mdxSource} components={mdxComponents} />
			<PageNavigation css={{ marginTop: '$10' }}>
				{pageNavigation?.previousPage && (
					<PageNavigation.Previous href={pageNavigation?.previousPage.slug}>
						{pageNavigation?.previousPage.title}
					</PageNavigation.Previous>
				)}
				{pageNavigation?.nextPage && (
					<PageNavigation.Next href={pageNavigation?.nextPage.slug}>
						{pageNavigation?.nextPage.title}
					</PageNavigation.Next>
				)}
			</PageNavigation>
		</DocsLayout>
	);
};

export const getStaticProps: GetStaticProps = async ({ params: { slug } = {} }) => {
	const rootPath = process.cwd();
	const docsPath = path.join(rootPath, 'docs');
	const docPath = path.join(docsPath, (slug as Array<string>).join('/') + '.mdx');
	const markdownWithMeta = await fs.readFile(docPath, 'utf-8');
	const { data: meta, content } = matter(markdownWithMeta);
	const mdxSource = await serialize(content);

	return {
		props: {
			meta,
			slug: (slug as Array<string>).join('/'),
			mdxSource
		}
	};
};

export const getStaticPaths = async () => {
	const paths = docRoutes
		.map(section => {
			return section.pages.map(page => {
				return {
					params: {
						slug: page.slug.replace('/docs/', '').split('/')
					}
				};
			});
		})
		.flat();

	return {
		paths,
		fallback: false
	};
};

export default Docs;
