# Eventfolio

A digital portfolio for documenting your technical milestones, conference experiences, and engineering journey.

Built with Angular 22, Tailwind CSS, and a custom design system.

## Features

- **Home** — hero section with tier summary cards (Events, Photos, People)
- **Wall** — timeline of events and milestones *(scaffolded)*
- **Not Found** — fallback page for unknown routes
- **People** — connections from conferences and meetups *(planned)*
- **Gallery** — photos and media from your journey *(planned)*
- **Profile** — your public engineering profile *(planned)*

## Tech stack

- [Angular](https://angular.dev/) 22 (standalone components, signals-ready)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Iconify](https://iconify.design/) with [Lucide](https://lucide.dev/) icons via `@iconify/tailwind4`
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

## Routes

| Path | Page | Status |
| --- | --- | --- |
| `/` | Home | Implemented |
| `/wall` | Wall | Scaffolded (lazy-loaded) |
| `/**` | Not Found | Implemented |

Navigation links for People, Gallery, and Profile are in the header but not yet wired to routes.

## Project structure

```
src/
├── app/
│   ├── features/       # Route-level pages
│   │   ├── home/       # Landing page with hero and tier cards
│   │   ├── wall/       # Event timeline (in progress)
│   │   └── not-found/  # 404 fallback page
│   ├── layout/         # Header, footer, and main layout shell
│   ├── shared/         # Reusable UI components (e.g. InfoCard)
│   ├── app.routes.ts   # Application routes
│   └── app.config.ts   # App providers and configuration
├── styles.css          # Global styles, design tokens, and Tailwind theme
└── main.ts             # Application bootstrap
```

Path aliases (e.g. `@/layout`, `@/features`, `@/shared`) are configured in `tsconfig.json`.

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
