import type { AppProps } from 'next/app';
import { useTheme } from '../hooks/useTheme';

function MyApp({ Component, pageProps }: AppProps) {
	useTheme();
	return <Component {...pageProps} />;
}

export default MyApp;
