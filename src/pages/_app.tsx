import type { AppProps } from 'next/app';
import { usePageView } from '../hooks/usePageView';
import { useTheme } from '../hooks/useTheme';

function MyApp({ Component, pageProps }: AppProps) {
	useTheme();
	usePageView();

	return <Component {...pageProps} />;
}

export default MyApp;
