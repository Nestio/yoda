import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import netlify from "@astrojs/netlify";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  integrations: [
    react(),

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
          label: "DEVELOPER TOOLS",
          items: [
            {
              label: "Webhooks",
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
                  label: "Event Object",
                  link: "/guides/events-and-callbacks/events/overview/",
                },
                {
                  label: "Events List",
                  link: "/guides/events-and-callbacks/events/event-names/",
                },
              ],
            },
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
                  label: "Lease Transaction",
                  link: "/api-reference/lease-transaction/",
                },
                {
                  label: "Applicant",
                  link: "/api-reference/applicant/",
                },
                {
                  label: "Lease",
                  link: "/api-reference/lease/",
                },
                {
                  label: "Document",
                  link: "/api-reference/document/",
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
    mdx(),
  ],
});
