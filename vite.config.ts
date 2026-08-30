import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GITHUB PAGES BASE PATH
// -----------------------
// If you deploy to https://<username>.github.io/<repo-name>/  (a normal repo)
//   -> set base to '/<repo-name>/'
// If you deploy to https://<username>.github.io/ directly (a repo literally
// named <username>.github.io)
//   -> set base to '/'
//
// Change ONLY the string below. Everything else is already wired up.
const REPO_NAME = 'https://github.com/vanshvashistha44657/portfolio.git' // <-- replace with your repository name

export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  base: command === 'build' ? `/${'portfolio'}/` : '/',
}))
