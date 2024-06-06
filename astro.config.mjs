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
										{ label: 'Event Names', link: '/guides/events-and-callbacks/events/event-names/' },
										{
											label: 'Unit Reserved',
											link: '/guides/events-and-callbacks/events/event-unit-reserved/',
											badge: 'Event'
										},
										{
											label: 'Unit Released',
											link: '/guides/events-and-callbacks/events/event-unit-released/',
											badge: 'Event'
										},
										{
											label: 'Unit Changed',
											link: '/guides/events-and-callbacks/events/event-unit-changed/',
											badge: 'Event'
										},
										{
											label: 'Application Completed',
											link: '/guides/events-and-callbacks/events/event-application-completed/',
											badge: 'Event'
										},
										{
											label: 'Application Submitted',
											link: '/guides/events-and-callbacks/events/event-application-submitted/',
											badge: 'Event'
										},
									]
								},
							]
						},
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
