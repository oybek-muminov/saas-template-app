export const siteConfig = {
  name: "Arcline",
  tagline: "Operations intelligence for engineering teams",
  description:
    "Arcline turns scattered deploys, incidents, and metrics into one live picture of how your engineering org is actually running.",
  url: "https://arcline.example.com",
  ogImage: "https://arcline.example.com/og.png",
  email: "hello@arcline.example.com",
  links: {
    twitter: "https://twitter.com/arcline",
    github: "https://github.com/arcline",
    linkedin: "https://linkedin.com/company/arcline",
  },
} as const;

export type SiteConfig = typeof siteConfig;
