import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import netlify from "@astrojs/netlify";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  integrations: [
    starlight({
      title: "Funnel Leasing",
      customCss: [
        // Path to your Tailwind base styles:
        "./src/content/tailwind.css",
      ],
      logo: {
        light: "/src/assets/logo.svg",
        dark: "/src/assets/logo.svg",
        replacesTitle: true,
      },
      social: {
        github: "https://github.com/Nestio/yoda",
      },
      sidebar: [
        {
          label: "API Reference",
          items: [
            {
              label: "Introduction",
              link: "/api-reference/overview/",
            },
            {
              label: "Authentication",
              link: "/api-reference/authentication/",
            },
            {
              label: "Errors",
              link: "/api-reference/errors/",
            },
            {
              label: "Application",
              link: "/api-reference/application/",
            },
            {
              label: "Applicant",
              link: "/api-reference/applicant/",
            },
            {
              label: "Document",
              link: "/api-reference/document/",
            },
            {
              label: "Lease",
              link: "/api-reference/lease/",
            },
          ],
        },
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Events and Callbacks",
              items: [
                {
                  label: "Overview",
                  link: "/guides/events-and-callbacks/overview/",
                },
                {
                  label: "Walkthrough",
                  link: "/guides/events-and-callbacks/walkthrough/",
                },
                {
                  label: "Events",
                  items: [
                    {
                      label: "Event Object",
                      link: "/guides/events-and-callbacks/events/overview/",
                    },
                    {
                      label: "Event List",
                      link: "/guides/events-and-callbacks/events/event-names/",
                    },
                    {
                      label: "Application Unit Reserved",
                      link: "/guides/events-and-callbacks/events/application-unit-reserved",
                    },
                    {
                      label: "Application Unit Updated",
                      link: "/guides/events-and-callbacks/events/application-unit-updated",
                    },
                    {
                      label: "Application Approved",
                      link: "/guides/events-and-callbacks/events/application-status-approved",
                    },
                    {
                      label: "Application Canceled",
                      link: "/guides/events-and-callbacks/events/application-status-canceled/",
                    },
                    {
                      label: "Application Completed",
                      link: "/guides/events-and-callbacks/events/application-status-completed/",
                    },
                    {
                      label: "Application Denied",
                      link: "/guides/events-and-callbacks/events/application-status-denied/",
                    },
                    {
                      label: "Application Voided",
                      link: "/guides/events-and-callbacks/events/application-status-voided",
                    },
                    {
                      label: "Resident Moved In",
                      link: "/guides/events-and-callbacks/events/resident-status-moved-in",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
