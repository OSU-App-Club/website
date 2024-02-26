---
title: "Why We Left Wix for Astro.js"
description: "Reflections, thoughts, and reasons for our team deciding to move on from Wix to Astro.js."
pubDate: "Feb 24 2024"
coverImage: "/why-we-left.jpg"
category: "code"
draft: false
---

Over the past 3 years, our team here at the App Development Club has been using Wix to host, manage, and maintain our club website. However, as we grew this past year to over **500+ members** we soon realized that Wix was not the best platform for us to best represent our club.

In this article, we'll dive into the decision making behind our switch, and why we're excited to be using the Astro.js framework going forward.

## Why Wix?

Initially, Wix was a fantastic platform for us to start with. It was easy to use, had a lot of templates to choose from, and was generally a good place for the club to quickly manage our website content.

If you go [here](https://appdove.wixsite.com/club) you can see what our legacy Wix site looks like. Funnily enough, I also wrote a blog post about why we're saying Goodbye to Wix as well. You can find that [here](https://appdove.wixsite.com/club/post/goodbye-wix-hello-astro).

## Why We Left

There's a few reasons why we decided to leave Wix:

### 1. Limited Customization

As we grew, our leadership team realized that we needed more customization on our website. We wanted to be able to add features that fit more advanced use cases, and we found that Wix was not the best platform for that. Things such as custom animations, dynamic content, and a more advanced design system were not possible with Wix.

### 2. It's Not Free and Open Source

Unfortunately, just to remove the Wix branding watermark, we found out that we'd have to pay a hefty fee. We all know the watemark:

![Wix Watermark](/wix-watermark.png)

As a club that prides itself on open source, we wanted a platform that was more in line with our values. Additionally, since the source code for the Wix site is not on GitHub, we can't collaborate on the website as a team.

### 3. It's Wix

Wix is a great platform for small businesses and personal websites, where you just want to get something out there, but it's not the best platform for a club like ours where we pride ourselves on application development and custom tailored solutions. There were also other issues with Wix, such as:

- No free tracking or analytics
- Difficult to integrate with other platforms
- Lack of responsiveness

All of these reasons led us to the decision to leave Wix and find a new platform for our website. After a few weeks of research, we found Astro.js.

## What's Astro.js?

Astro.js is a new, "all in one" framework for building content rich sites on the web. It's fast, flexible, and open source. Our team is extremely excited to be using it for our new website.

Here are some of my favorite features of Astro.js, and why we're excited to be using it:

- [Islands](https://docs.astro.build/en/concepts/islands/): A component-based web architecture optimized for content-driven websites.
- [UI Agnostic](https://docs.astro.build/en/guides/framework-components/): Supports React, Preact, Svelte, Vue, Solid, Lit, HTMX, web components, and more.
- [Zero JS, by default](https://docs.astro.build/en/basics/astro-components/): Less client-side JavaScript to slow our site down.
- [Content Collections](https://docs.astro.build/en/guides/content-collections/): Organize, validate, and provide TypeScript type-safety for your Markdown content.
- [Customizable](https://docs.astro.build/en/guides/integrations-guide/): Tailwind, MDX, and hundreds of integrations to choose from.

_This is all from the [Astro.js official documentation](https://docs.astro.build/)._

It's easy to see why we're excited to be using Astro.js for our new website. Currently, we're using the React, Vercel, and TailwindCSS integrations along with shadcn/ui for our design system.

We're slowly migrating each component to be 100% Astro.js, and we're excited to see where this new stack takes us. If you're interested in contributing code, articles, or even bug fixes, you can find our new website's source code [here](https://github.com/osu-app-club/website).

Cheers to the future of the App Development Club website! 🚀
