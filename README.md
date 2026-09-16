# Arcline SaaS Landing Template

Arcline is a polished SaaS landing-page template for engineering and operations products. It gives product teams, founders, and agencies a responsive marketing surface with a navbar, product hero, feature grid, pricing, testimonials, FAQ, conversion CTAs, and footer, ready to rebrand and connect to a real application.

## Tech Stack

- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS v4
- Radix UI primitives for the mobile sheet and FAQ accordion
- Lucide React icons and Motion animations

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production Build

```bash
npm run build
npm run start
```

Quality checks:

```bash
npm run lint
npx tsc --noEmit
```

## Customization

- Edit [src/lib/site-config.ts](src/lib/site-config.ts) to change the brand name, tagline, description, email, and social links.
- Edit the color tokens at the top of [src/app/globals.css](src/app/globals.css) to retint the full site.
- Edit [src/lib/data.ts](src/lib/data.ts) for features, pricing plans, testimonials, FAQ entries, and footer links.
- Update the section components in [src/components](src/components) when content needs behavior beyond the shared data.

## Project Structure

```text
src/app/           App Router pages, layout, metadata, and global styles
src/components/    Landing-page sections and reusable UI primitives
src/lib/           Site configuration, content data, and utilities
src/types/         Shared TypeScript data contracts
public/            Static assets
```

## Deployment

Deploy with Vercel by importing the repository into a new Vercel project. The default Next.js build settings are sufficient; the production command is `npm run build`.

## Placeholder Routes

The template intentionally includes links to routes that are not built in this landing-page package: `/signup`, `/login`, `/demo`, `/docs`, `/about`, `/careers`, `/blog`, `/integrations`, `/changelog`, `/help`, `/community`, `/status`, `/privacy`, `/terms`, and `/security`. Wire these routes to the real authentication, documentation, marketing, support, and legal pages for the finished product.
