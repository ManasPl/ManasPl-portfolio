import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base is set for GitHub Pages project-page deployment:
// https://manaspl.github.io/ManasPl-portfolio/
// If you deploy elsewhere (Vercel/Netlify, or a custom domain), change this
// to '/' — otherwise asset paths (JS/CSS/resume PDF) will 404.
export default defineConfig({
  base: '/ManasPl-portfolio/',
  plugins: [react()],
  base: '/ManasPl-portfolio/',
})
