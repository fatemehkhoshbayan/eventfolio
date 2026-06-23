# Eventfolio

A digital portfolio for documenting your technical milestones, conference experiences, and engineering journey.

Built with Angular 22, Tailwind CSS, and a custom design system.

## Features

- **Home** — landing page with project overview
- **Wall** — timeline of events and milestones *(planned)*
- **People** — connections from conferences and meetups *(planned)*
- **Gallery** — photos and media from your journey *(planned)*
- **Profile** — your public engineering profile *(planned)*

## Tech stack

- [Angular](https://angular.dev/) 22 (standalone components, signals-ready)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Vitest](https://vitest.dev/) for unit tests
- [Prettier](https://prettier.io/) for formatting

## Prerequisites

- Node.js 20+
- npm 11+

## Getting started

```bash
# Install dependencies
npm install

# Start the dev server
npm start
```

Open [http://localhost:4200](http://localhost:4200). The app reloads when you change source files.

## Scripts

| Command | Description |
| --- | --- |
| `npm start` | Run the development server |
| `npm run build` | Production build (output in `dist/`) |
| `npm run watch` | Development build with watch mode |
| `npm test` | Run unit tests with Vitest |

## Project structure

```
src/
├── app/
│   ├── features/       # Route-level pages (home, wall, etc.)
│   ├── layout/         # Header, footer, main layout shell
│   ├── app.routes.ts   # Application routes
│   └── app.config.ts   # App providers and configuration
├── styles.css          # Global styles and design tokens
└── main.ts               # Application bootstrap
```

Path aliases (e.g. `@/layout`, `@/features`) are configured in `tsconfig.json`.

## Code generation

```bash
ng generate component features/wall/wall
```

For all available schematics:

```bash
ng generate --help
```

## Editor setup

Recommended extensions and shared editor settings live in `.vscode/`. Prettier is configured as the default formatter with format-on-save enabled.

## License

Private project.
