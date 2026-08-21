# Manas Pal — Portfolio

A single-page portfolio site built with React + Vite. Systems-dashboard themed,
with real production metrics shown as live-style status badges.

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

## Deploy (free options)

**Vercel** (easiest)
1. Push this folder to a GitHub repo.
2. Go to vercel.com, sign in with GitHub, import the repo.
3. Vercel auto-detects Vite — just click Deploy.

**Netlify**
1. Push to GitHub.
2. netlify.com → "Add new site" → import repo.
3. Build command: `npm run build`, publish directory: `dist`.

**GitHub Pages**
1. `npm install -D gh-pages`
2. Add to `package.json` scripts: `"deploy": "gh-pages -d dist"`
3. Set `base: '/<repo-name>/'` in `vite.config.js`.
4. `npm run build && npm run deploy`

## Project structure

```
src/
  components/
    Nav.jsx
    Hero.jsx        (headline + live metrics status bar)
    Experience.jsx
    Projects.jsx
    Skills.jsx
    Contact.jsx
    Footer.jsx
  useReveal.js       (scroll-reveal animation hook)
  App.jsx
  index.css          (all design tokens + styles)
  main.jsx
```

To update content (new role, new project, new metric), edit the data arrays at
the top of the relevant component file — no need to touch the JSX structure.
