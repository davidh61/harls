# AGENTS.md

## Project

Personal portfolio site for Sam Harlow (samharlow.co.uk) — a photographer/editor. Built with React + Vite. No TypeScript, no test framework.

## Stack

- React 19, Vite 7, React Router DOM v7, Framer Motion, Tailwind CSS v3
- Cloudinary (`dxmcgwo5g`) for image gallery delivery
- Vimeo embeds for video, Umami analytics (via Cloudflare script in `index.html`)
- `gh-pages` for deployment to GitHub Pages

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Start Vite dev server (HMR) |
| `npm run build` | Build to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | ESLint on all `**/*.{js,jsx}` files |
| `npm run predeploy` | Runs `npm run build` automatically |
| `npm run deploy` | Deploys `dist/` to GitHub Pages via `gh-pages` |

## Key Architecture

- **Entry**: `index.html` → `src/main.jsx` → `App.jsx`
- **Routing**: `HashRouter` with two routes: `/` (Home) and `/project/:id` (ProjectDetail)
- **Data**: `src/data/projects.js` maps project IDs to metadata + Cloudinary tags
- **Gallery**: `useCloudinaryGallery` hook fetches images by tag from Cloudinary's resource list API
- **Media grid**: `MediaGrid` uses hardcoded items array (id, type, title, src, videoSrc); clicking a video opens `VideoModal`; clicking a photo navigates to `/project/:id`

## Deployment

`npm run deploy` runs `predeploy` (build) then `gh-pages -d dist`. The CNAME file in `public/` sets the custom domain to `samharlow.co.uk`.

## No Tests / No Typecheck

There is no test framework, no test runner, and no TypeScript. `lint` is the only verification step. Do not assume `npm test` or `tsc` exist.

## ESLint Config

ESLint 9 flat config (`eslint.config.js`). Covers `**/*.{js,jsx}`. Key rule: `no-unused-vars` ignores variables matching `^[A-Z_]`. The `dist/` directory is globally ignored.

## CSS / Theming

Custom properties in `src/index.css` drive the dark theme:
- `--color-bg: #0a0a0a`
- `--color-text: #f0f0f0`
- `--color-accent: #ff003c` (glitch red)
- `--color-accent-2: #00f0ff` (glitch cyan)

Tailwind is configured via `tailwind.config.js` scanning `index.html` and `src/**/*.{js,ts,jsx,tsx}`. PostCSS runs Tailwind + Autoprefixer.

## Known Pattern (Potential Issue)

`src/data/projects.js` uses keys `2, 4, 6, 8, 10` but `MediaGrid` items use `id: 1-10`. ProjectDetail reads `useParams().id` and looks it up in `projects` — numeric IDs in the URL will map to those specific keys. Not all MediaGrid items have matching project data entries (e.g., id 1, 3, 5, 7, 9).