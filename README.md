# OSU App Club Website

This is the repository for the OSU App Club website. The website is built using [Astro](https://astro.build/), a modern web framework for building fast websites with as little JavaScript as possible, and [shadcn/ui](https://ui.shadcn.com/), a composable design system for building modern web applications.

![blog](public/og.jpg)

> **Warning**
> This app is a work in progress. Our club is actively working on this project.
> See the roadmap below.

## Project Structure

```
├── public/
│   └── fonts/
├── src/
│   ├── components/
│   ├── config/
│   ├── content/
│   ├── hooks/
│   ├── icons/
│   ├── layouts/
│   ├── lib/
│   ├── pages/
│   ├── styles/
│   └── types/
├── astro.config.mjs
├── README.md
├── package.json
├── tailwind.config.cjs
└── tsconfig.json
```

## Features

- Config files
- Views Transitions API
- Routing and Layouts
- React components & hooks
- Desin system built using **shadcn/ui**
- Documentation and blog using **MDX** and **Content Collections**
- Styled using **Tailwind CSS**
- Validations using **Zod**
- Written in **TypeScript**
- 100/100 Lighthouse score

_In Progress:_

- RSS Feed support
- Sitemap support
- Data Fetching
- SEO component
- API Routes and Middlewares
- Authentication using **Auth.js**
- ORM using **Prisma**
- Database on **PlanetScale**

## Roadmap

- [x] Dark mode
- [x] Add Markdown & MDX support
- [x] Sheet mobile nav
- [ ] Add search support for blog
- [ ] Add OG image for blog and others
- [ ] Add SEO component & metadata

## Running Locally

1. Install dependencies using pnpm, bun, or npm (pick one):

```sh
pnpm install
bun install
npm install
```

2. Start the development server:

```sh
pnpm run dev
bun dev
npm run dev
```

## License

Licensed under the [MIT license](/LICENCE.md).
