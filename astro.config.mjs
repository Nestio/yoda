import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  	adapter: netlify(),
	integrations: [
		starlight({
			title: 'Funnel Leasing',
			logo: {
				light: '/src/assets/logo.svg',
				dark: '/src/assets/logo.svg',
				replacesTitle: true,
			},
			social: {
				github: 'https://github.com/Nestio/yoda',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{
							label: 'Events and Callbacks',
							items: [
								{ label: 'Overview', link: '/guides/events-and-callbacks/overview/' },
								{ label: 'Walkthrough', link: '/guides/events-and-callbacks/walkthrough/' },
								{
									label: 'Events',
									items: [
										{ label: 'Event Object', link: '/guides/events-and-callbacks/events/overview/' },
										{ label: 'Event List', link: '/guides/events-and-callbacks/events/event-names/' },
										{
											label: 'Unit Reserved',
											link: '/guides/events-and-callbacks/events/event-unit-reserved/',
										},
										{
											label: 'Unit Released',
											link: '/guides/events-and-callbacks/events/event-unit-released/',
										},
										{
											label: 'Unit Changed',
											link: '/guides/events-and-callbacks/events/event-unit-changed/',
										},
										{
											label: 'Application Completed',
											link: '/guides/events-and-callbacks/events/event-application-completed/',
										},
										{
											label: 'Application Submitted',
											link: '/guides/events-and-callbacks/events/event-application-submitted/',
										},
									]
								},
							]
						},
					],
				},
				{
					label: 'API Reference',
					items: [
						{
							label: 'Introduction',
							link: '/api-reference/overview/',
						},
						{
							label: 'Authentication',
							link: '/api-reference/authentication/',
						},

					]
				},
			],
		}),
	],
});
