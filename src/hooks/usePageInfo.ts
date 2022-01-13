import { useMemo } from 'react';
import { Section } from '../config/routes';

export function usePageInfo(routes: Array<Section>, slug: string) {
	const currentRouteIndex = useMemo(() => {
		let sectionIndex;
		let pageIndex;

		for (let sIndex = 0; sIndex < routes.length; sIndex++) {
			const section = routes[sIndex];

			for (let pIndex = 0; pIndex < section.pages.length; pIndex++) {
				const page = routes[sIndex].pages[pIndex];

				if (page.slug === `/docs/${slug}`) {
					sectionIndex = sIndex;
					pageIndex = pIndex;
					break;
				}
			}
		}

		return {
			section: sectionIndex,
			page: pageIndex
		};
	}, [routes, slug]);

	const pageNavigation = useMemo(() => {
		if (typeof currentRouteIndex.page === 'number' && typeof currentRouteIndex.section === 'number') {
			const currentSection = routes[currentRouteIndex.section];
			let previousPage = currentSection?.pages[currentRouteIndex.page - 1];
			let nextPage = currentSection?.pages[currentRouteIndex.page + 1];

			if (!previousPage) {
				const lastSection = routes[currentRouteIndex.section - 1];

				if (currentSection && lastSection) {
					previousPage = lastSection.pages[lastSection.pages.length - 1];
				}
			}

			if (!nextPage) {
				const nextSection = routes[currentRouteIndex.section + 1];

				if (currentSection && nextSection) {
					nextPage = nextSection.pages[0];
				}
			}

			return {
				previousPage,
				nextPage
			};
		}
	}, [currentRouteIndex.page, currentRouteIndex.section, routes]);

	return {
		currentRouteIndex,
		pageNavigation
	};
}
