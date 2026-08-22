# Manas Pal — Portfolio

A single-page portfolio site built with React + Vite. Systems-dashboard themed,
with an architecture-flow diagram showing real production impact.

## Run locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## Build for production

```bash
npm run build
```

Outputs a static site to `dist/` — this is what you deploy.

## Important: the resume PDF download

`public/Manas_Pal_Resume.pdf` is the file the "Resume ↓" button links to.
Vite copies everything in `public/` straight into the build output, so:

- **To update your resume**, just replace this file with the same filename
  (or update the filename referenced in `src/components/Hero.jsx`, look for
  `RESUME_URL`).
- The link uses `import.meta.env.BASE_URL` so it resolves correctly whether
  you're running locally, on GitHub Pages under a subpath, or on a custom
  domain — **you don't need to hardcode the deployment URL anywhere.**

## Deploying to GitHub Pages (this repo's setup)

`vite.config.js` has `base: '/ManasPl-portfolio/'` set, matching the
`https://manaspl.github.io/ManasPl-portfolio/` URL. If you rename the repo or
move to a different host, update that `base` value — otherwise the JS/CSS
bundle and the resume PDF will 404 on the live site.

Typical GitHub Pages flow (via GitHub Actions):
1. Push this project to the `ManasPl-portfolio` repo.
2. A workflow (e.g. `.github/workflows/deploy.yml`) runs `npm ci && npm run build`
   and publishes the `dist/` folder to the `gh-pages` branch or Pages
   environment.
3. Confirm the resume link works on the *live* URL, not just `npm run dev` —
   dev mode ignores `base`, so a broken base path only shows up after a real
   build.

## Deploying elsewhere (Vercel / Netlify / custom domain)

If you're not using GitHub Pages, change `base` in `vite.config.js` to `'/'`
before building — otherwise every asset path (including the resume) will be
prefixed with `/ManasPl-portfolio/` and 404.

## Project structure

```
public/
  Manas_Pal_Resume.pdf   ← swap this file to update your resume
src/
  components/
    Nav.jsx
    Hero.jsx          (headline + architecture-flow diagram + resume link)
    About.jsx
    Experience.jsx
    Projects.jsx
    Skills.jsx
    Contact.jsx
    Footer.jsx
  useReveal.js         (scroll-reveal animation hook)
  App.jsx
  index.css            (all design tokens + styles)
  main.jsx
```

To update content (new role, new project, new metric), edit the data arrays at
the top of the relevant component file — no need to touch the JSX structure.
