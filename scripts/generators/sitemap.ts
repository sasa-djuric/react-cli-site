import fs from 'fs/promises';
import path from 'path';
import { format } from 'prettier';
import { docRoutes } from '../../src/config/doc-routes';

interface GetUrlEntry {
	path: string;
}

function getUrlEntry({ path }: GetUrlEntry) {
	return `<url>
            <loc>https://${process.env.NEXT_PUBLIC_DOMAIN}${path}</loc>
            <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        </url>`;
}

async function generateSitemap() {
	const filePath = path.join(process.cwd(), './out/sitemap.xml');

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
                    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
                        ${docRoutes
							.map(section => section.pages.map(({ slug }) => getUrlEntry({ path: slug })).join('\n'))
							.join('\n')}
                    </urlset>`;

	try {
		await fs.rm(filePath);
	} catch {}

	await fs.writeFile(filePath, format(sitemap, { parser: 'html' }), { encoding: 'utf-8' });
}

generateSitemap();
