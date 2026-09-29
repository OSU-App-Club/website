# App Development Club Website

Source code for the official website for the App Development Club at Oregon State University. It is built using [Astro](https://astro.build) and [Shadcn UI](https://ui.shadcn.com/). Our legacy website is still available at [osuappdev.club](https://www.osuappdev.club/).

![blog](public/preview.png)

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
- RSS Feed support

_In Progress:_

- Sitemap support
- Data Fetching
- SEO component
- API Routes and Middlewares
- Authentication using **Auth.js**
- ORM using **Prisma**
- Database on **PlanetScale**
- 0% JavaScript

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

## Contribution

1. Join our [Discord server](https://discord.gg/fJpwFbKDMz)
2. Join the OSU-App-Club GitHub organization
3. Clone the repository
4. Create a new branch
5. Make your changes
6. Push your branch to the repository
7. Create a pull request

This project primarily uses [Gitmoji](https://gitmoji.dev). Feel free to follow the convention:

```text
📝 docs: add contribution guidelines
✨ feat: add RSS auto-discovery and button
```

This is similar to the [Example of Usage](https://github.com/carloscuesta/gitmoji?tab=readme-ov-file#example-of-usage) on the official Gitmoji repository

## License

Licensed under the [MIT license](/LICENCE.md).
