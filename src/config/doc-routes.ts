import { Section } from './routes';

export const docRoutes: Array<Section> = [
	{
		label: 'Overview',
		pages: [
			{
				title: 'Introduction',
				slug: '/docs/overview/introduction'
			},
			{
				title: 'Getting started',
				slug: '/docs/overview/getting-started'
			}
		]
	},
	{
		label: 'Commands',
		pages: [
			{
				title: 'Component',
				slug: '/docs/commands/component'
			},
			{
				title: 'Context',
				slug: '/docs/commands/context'
			},
			{
				title: 'Hook',
				slug: '/docs/commands/hook'
			}
		]
	},
	{
		label: 'Configuration',
		pages: [
			{
				title: 'Overview',
				slug: '/docs/config/overview'
			},
			{
				title: 'Project',
				slug: '/docs/config/project'
			},
			{
				title: 'Component',
				slug: '/docs/config/component'
			},
			{
				title: 'Style',
				slug: '/docs/config/style'
			},
			{
				title: 'Story',
				slug: '/docs/config/story'
			},
			{
				title: 'Test',
				slug: '/docs/config/test'
			},
			{
				title: 'Context',
				slug: '/docs/config/context'
			},
			{
				title: 'Hook',
				slug: '/docs/config/hook'
			}
		]
	}
];
