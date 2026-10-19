# Olya Ezhova — Portfolio

Personal portfolio for Olya Ezhova, Product Designer & Developer. Built with **React 18 + TypeScript + Vite**, deployed on **Vercel**.

## Requirements

- [Node.js](https://nodejs.org/) 20 or newer (22 recommended, see `.nvmrc`)
- npm (bundled with Node)

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173 with hot reload
```

Open the folder in VS Code and run the commands in the integrated terminal (`` Ctrl+` ``).

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Type-check, then build the production site into `dist/` |
| `npm run preview` | Serve the production build locally (run `build` first) |
| `npm run typecheck` | Type-check only |

## Project structure

```
index.html                 Page shell: meta tags, Google Fonts, favicon
public/
  favicon.svg
  videos/                  Project screen recordings (served as-is)
src/
  main.tsx                 Entry point
  App.tsx                  Page layout + viewport / mobile-menu state
  data/
    content.ts             All copy: projects, articles, testimonials, stats, skills, contacts
    types.ts               Content types
  components/              One component + stylesheet per page section
    Nav, Hero, Stats, About (+ Philosophy), Projects, Skills, Articles, Testimonials, Contact
  hooks/                   useViewportWidth, useCountUp, useInterval
  utils/scroll.ts          Scroll helpers that account for the sticky nav
  styles/global.css        Design tokens (colours, fonts), base styles, shared buttons/chips
  assets/                  Portrait, project screenshots and posters (hashed by Vite at build)
vercel.json                Vercel build settings + long-term caching for hashed assets
```

### Editing content

Almost all text lives in `src/data/content.ts`. To add a project screenshot, drop the image into `src/assets/screenshots/`, import it at the top of `content.ts` and add it to that project's `media` list. The laptop frame adapts to the image's proportions on its own. Videos go in `public/videos/` and are referenced as `/videos/<file>.mp4`.

Projects with a `biz` statement (projects 1 and 2) show a Business Impact card in the summary, and their Challenge and Technology move into **View details**. Projects 3 and 4 label the challenge "Goal".

### Breakpoints

| Width | Behaviour |
| --- | --- |
| < 560px | Metric cards stack in one column |
| < 760px | Nav collapses to a Menu button; Research → Ship flow hidden; compact Core strengths; "Next project →" button appears next to View details; metric cards say "tap to reveal" |
| < 860px | Articles heading stops being sticky |
| ≥ 1100px | Metric cards sit four across (two by two from 560px) |

## Push to GitHub

If you are creating a new repository:

```bash
git init                     # skip if this folder is already a git repo
git add .
git commit -m "Portfolio: React + TypeScript + Vite"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

To replace the existing `solgaezhova/portfolio` code instead, push this to a new branch and open a pull request, so the current site stays live until you merge:

```bash
git remote add origin https://github.com/solgaezhova/portfolio.git
git push -u origin portfolio-react-app
```

## Deploy to Vercel

**From the dashboard (recommended)**

1. Sign in at [vercel.com](https://vercel.com) with GitHub.
2. Click **Add New… → Project** and import the repository.
3. Vercel detects Vite automatically (settings are also in `vercel.json`):
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**.

Every push to `main` then deploys to production, and every other branch or pull request gets its own preview URL.

If the repository is already linked to an existing Vercel project (for example `olyaezhovaportfolio.vercel.app`), open that project's **Settings → Build & Deployment**, check that the framework preset is **Vite** and the output directory is **dist**, then merge to `main` to deploy.

**From the command line**

```bash
npm i -g vercel
vercel          # first run links the folder to a project and creates a preview deployment
vercel --prod   # deploy to production
```

No environment variables are needed.
