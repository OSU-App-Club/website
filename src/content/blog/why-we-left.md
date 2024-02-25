---
title: "Why We Left Wix for Astro.js"
description: "Reflections, thoughts, and reasons for our club leadership deciding to move on from Wix to Astro.js"
pubDate: "Feb 24 2024"
coverImage: "/why-we-left.jpg"
category: "code"
draft: false
---

Over the last 3 years, App Development Club leadership teams have been using Wix to host, manage, and maintain our former club website. However, as we grew, we realized that Wix was not the best platform for us to best represent our club. In this article, we'll dive into the technical decision making behind our switch, and why we're excited to be using Astro.js for our new website.

## Why Wix?

Wix was a great platform for us to start with. It was easy to use, had a lot of templates to choose from, and was generally a good place for the club to quickly manage content. It was also free, _although with a caveat_ which was a plus for us early on.

If you go [here](https://appdevclub.org) you can see what our Wix site looked like. Initially, it was a great place for us to start, but as we grew, we realized that Wix was not the best platform for us to best represent our club.

If you want to see the Wix site version of this article, where we dive into the technical decision making behind our switch, you can go [here](https://appdove.wixsite.com/club/post/goodbye-wix-hello-astro).

## Why We Left

### 1. Limited Customization

As we grew, our leadership team realized that we needed more customization. We wanted to be able to add more features to our website, and Wix was not the best platform for that.

### 2. It's Not Free and Open Source

Unfortunately, just to remove the Wix branding, we found out that we'd have to pay a monthly fee. Additionally, since the source code for the Wix site is not on GitHub, we can't collaborate on the website as a team.

### 3. It's Wix

Wix is a great platform for small businesses and personal websites, where you just want to get something out there, but it's not the best platform for a club like ours where we pride ourselves on application development and open source. We wanted a platform that was more in line with our values.

## What's Astro.js?

Astro.js is what this site is built with. It's a new, "all in one" framework for building content rich sites on the web. It's fast, flexible, and open source. We're excited to be using it for our new website.

Here's some highlights of Astro.js:

- [Islands](https://docs.astro.build/en/concepts/islands/): A component-based web architecture optimized for content-driven websites.
- [UI Agnostic](https://docs.astro.build/en/guides/framework-components/): Supports React, Preact, Svelte, Vue, Solid, Lit, HTMX, web components, and more.
- [Zero JS, by default](https://docs.astro.build/en/basics/astro-components/): Less client-side JavaScript to slow our site down.
- [Content Collections](https://docs.astro.build/en/guides/content-collections/): Organize, validate, and provide TypeScript type-safety for your Markdown content.
- [Customizable](https://docs.astro.build/en/guides/integrations-guide/): Tailwind, MDX, and hundreds of integrations to choose from.

List from [Astro's official documentation](https://docs.astro.build/)

It's easy to see why we're excited to be using Astro.js for our new website. Currently, we're using the React, Vercel, and TailwindCSS integration along with Shadcn for our design system.

We're slowly migrating each component from pure React to Astro.js, and cannot wait to see the final product. Thanks for reading, and we hope you're just as excited as we are for the new website!
