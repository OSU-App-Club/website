---
title: "Spring 2024 Project Details"
description: "This term, we're building a better, OSU-exclusive version of the popular app, 'Chegg'."
pubDate: "April 25 2024"
coverImage: "/spring24-project.png"
category: "events"
draft: false
---

Welcome back to our blog, App Developers!

For our Spring 2024 term project, we're building an open-source alternative to platforms like Chegg, Quizlet, and other study resource platforms. We're calling it "BeavBright". We'll be building this platform from scratch, and actively working on it through the end of the term, so there's plenty of opportunities to get involved.

## Details

[BeavBright](https://github.com/OSU-App-Club/beavbright) will be a platform that allows students to share and access study resources for their classes. Our goal is to build a great way to collaborate with your peers and get help when you need it.

The platform will have features like:

- Uploading and downloading study materials
- Commenting on resources
- Upvoting and downvoting resources
- Searching for resources by class, topic, or keyword
- Course materials repository
- Discussion forum
- and more!

## Non-Technical Requirements

### Goals and Objectives

- Provide a platform for sharing resources, notes, and study materials.
- Facilitate collaboration and study sessions among OSU students, regardless of mode (e-campus, in person, post-bacc)
- Foster a community where users can ask questions, seek help, and share knowledge.

### Problems to Solve

- It’s difficult to find study partners with similar schedules and study preferences.
- There’s a lack of **FREE** centralized platforms for accessing study resources and materials shared by peers.
- Applications that do solve these problems don’t have efficient communication channels, leading to missed study sessions or misunderstandings.

### Target Audience

- Students in university or community college.
- Educators or tutors looking to connect with students for more collaborative learning.
- Clubs or study groups seeking a dedicated platform for organizing study sessions and sharing resources.

## Feature Roadmap

Here's a rough outline of the features we're planning to build for BeavBright:

### Features

- **User Management**
  - Create an account
    - OAuth/Clerk/Custom
  - Profiles
    - Personal Info
    - Study Interest/Availability
- **Study Session Organization**
  - Scheduler
  - Search and join sessions
    - A session is just a synchronous chat between one or many people
  - Reminders
- **Collaboration Tools**
  - Real-time messaging
    - Video/Audio/Text
  - File sharing
  - Whiteboard/Shared notes
- **Repository**
  - Resource Library (flashcards, quizzes, ratings, notes, practice exams)
    - Per course
  - Course and Professor Selector
- **Community**
  - Discussion forum
  - Study groups
- **Productivity**
  - Task/Goal tracker
  - Calendar integration
  - Analytics
- Feedback mechanisms
  - Reporting
  - Suggestions
  - Bug tracking

## Tech Stack

We're using the following technologies to build BeavBright:

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://typescriptlang.org/)
- [ui.shadcn.com](https://ui.shadcn.com/)
- [Node.js](https://nodejs.dev/)
- [Hono](https://hono.dev/)
- [PostgreSQL](https://postgresql.org/)
- [Docker](https://docker.com/)
- [Turborepo](https://turbo.build/)
- [Docker Compose](https://docs.docker.com/compose/)
- [prisma.io](https://prisma.io/)
- [Pnpm](https://pnpm.io/)

## Code Structure

The project is a mono-repo, with the following directories:

### Packages

- `packages/database` - Prisma Database schema and migrations
- `packages/ui` - Design system and UI components
- `packages/eslint-config-custom` - Custom ESLint configuration
- `packages/tsconfig` - Custom TypeScript configuration

### Apps

- `apps/api` - Hono REST API server
- `apps/web` - Next.js web application

In a mono-repo, all the code is in one repository, which makes it easier to manage dependencies and share code between different parts of the project. We're using TurboRepo to manage our mono-repo.

There's a docker-compose file in the root of the repository that sets up the development environment for you. You can run `docker-compose watch` to start the development server. This will start the API server, database, and web server.

> Note: You'll need to have Docker installed on your machine to run the development environment. Additionally, once you run the compose command, you'll need to run `pnpm turbo
db:generate` to generate the Prisma client.

## How to Contribute

If you're interested in contributing to BeavBright, you'll need to follow these steps:

- Join our Discord server
- Join the OSU-App-Club GitHub organization
- Clone the repository
- Create a new branch
- Make your changes
- Push your branch to the repository
- Create a pull request

We're excited to see what comes out of this project, and we hope you are too! If you have any questions, feel free to reach out to us on our Discord server or email.
