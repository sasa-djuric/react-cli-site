import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { getCssText, globalStyles } from '../stitches.config';

globalStyles();

export default class Document extends NextDocument {
	render() {
		return (
			<Html lang='en'>
				<Head>
					<style id='stitches' dangerouslySetInnerHTML={{ __html: getCssText() }} />
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
					<link
						href='https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
						rel='stylesheet'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
