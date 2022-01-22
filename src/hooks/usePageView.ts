import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { pageview } from '../analytics';

export function usePageView() {
	const router = useRouter();

	useEffect(() => {
		router.events.on('routeChangeComplete', pageview);

		return () => {
			router.events.off('routeChangeComplete', pageview);
		};
	}, [router.events]);
}
