# Brandon Downer — Portfolio

A personal portfolio site built with React, TypeScript, Vite, and Tailwind CSS.
No backend, database, or authentication — it's a static site you can deploy
anywhere (Vercel, Netlify, GitHub Pages, etc.).

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

```bash
npm run build     # production build → /dist
npm run preview   # preview the production build locally
```

## Editing content

Almost everything on the site is driven by plain data files in `src/data/` —
edit these instead of hunting through components:

| File | Controls |
|---|---|
| `src/data/links.ts` | Name, title, email, GitHub, LinkedIn, resume path |
| `src/data/experience.ts` | Work experience timeline |
| `src/data/projects.ts` | Project cards **and** their full case-study pages |
| `src/data/skills.ts` | Skills, grouped by category |
| `src/data/education.ts` | Education & certifications |

Anything marked `TODO` in those files is a placeholder — search the project
for `TODO` to find every spot that needs real content, dates, or an
employer-approved metric before launch. Do not replace a `TODO` with an
invented number or outcome; leave it until you have the real, approved
figure.

## Adding your resume

Drop your resume PDF into `public/resume/` as `Brandon-Downer-Resume.pdf`
(see `public/resume/README.txt`). Every "Download Resume" button already
points at that path.

## Adding project screenshots / diagrams

Case-study pages currently show a placeholder box for screenshots and
architecture diagrams. Add images to `public/projects/` and swap the
placeholder `<div>` in `src/pages/CaseStudy.tsx` for an `<img>` tag once
you have real assets — or extend `src/data/projects.ts` with an
`imageUrl` field and render it conditionally.

## Structure

```
src/
  components/   Reusable UI building blocks (Nav, Hero, ProjectCard, ...)
  pages/        Home.tsx (all sections) and CaseStudy.tsx (per-project page)
  data/         Centralized, editable content
  context/      Theme (dark/light mode) provider
```

## Deploying

This is a standard Vite SPA. For most static hosts you'll want to enable a
history-mode fallback (redirect all paths to `index.html`) so that
`/projects/:slug` URLs work on refresh:

- **Vercel / Netlify**: add a rewrite rule sending `/*` → `/index.html`.
- **GitHub Pages**: use a 404.html fallback or a hash-router if you'd rather
  avoid extra config.

## SEO & social sharing

Title, meta description, and Open Graph/Twitter card tags live in
`index.html`. Replace `og-image.png` in `public/` with a real 1200×630
social-share image, and update the canonical URL once the site has a
real domain.
