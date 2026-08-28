# Vansh Vashistha — Portfolio

A premium, dark-themed personal portfolio built with React, TypeScript, Vite, Tailwind CSS and Framer Motion. Free to deploy on GitHub Pages.

---

## 1. Install

```powershell
npm install
```

## 2. Run locally

```powershell
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`).

## 3. Build for production

```powershell
npm run build
npm run preview   # optional — preview the production build locally
```

---

## 4. How everything is organized

All editable content lives in `src/data/` — you should never need to touch component code just to update your information.

```
src/
├── components/       # Reusable UI (Navbar, cards, cursor, buttons...)
├── sections/         # Page sections (Hero, About, Work, Experience...)
├── data/
│   ├── personal.ts   # Name, positioning, email, social links, nav
│   ├── projects.ts   # Every project in "Selected Work"
│   ├── experience.ts # Timeline entries
│   ├── skills.ts     # Skill categories
│   ├── metrics.ts    # Impact stats
│   └── brands.ts     # "Worked With" logo marquee
├── App.tsx
└── main.tsx
public/
└── images/
    ├── profile/       # Your profile photo
    ├── projects/      # Project screenshots
    └── logos/         # Brand/client logos
```

---

## 5. How to add or edit a project

Open `src/data/projects.ts` and add a new object to the `projects` array:

```ts
{
  slug: "your-project-slug",
  title: "Project Name",
  year: "2026",
  category: "Category / Discipline",
  description: "One or two sentences on what it is.",
  role: "What you actually did.",
  technologies: ["React", "FastAPI"],
  features: ["Feature one", "Feature two"],
  impact: "", // optional — leave empty string to hide
  image: "/images/projects/your-project.jpg", // or "" for a placeholder
  liveUrl: "", // leave "" to hide the Live Project button
  githubUrl: "", // leave "" to hide the GitHub button
}
```

No component code changes are needed — the grid, the card, and the detail modal all read from this array automatically.

## 6. How to change personal information

Edit `src/data/personal.ts`:

- `name`, `positioning`, `heroStatement` — shown in the hero
- `email` — used by the "Get in Touch" button (`mailto:`)
- `location` — shown in the About section
- `socials` array (same file) — LinkedIn / GitHub / Instagram / X links

## 7. How to replace images

Drop files into the matching folder in `public/`, then point to them from the data files:

| What | Folder | Referenced from |
|---|---|---|
| Profile photo | `public/images/profile/` | `src/sections/About.tsx` (swap the placeholder `<div>` for an `<img>`) |
| Project screenshots | `public/images/projects/` | `image` field in `src/data/projects.ts` |
| Client/brand logos | `public/images/logos/` | `logo` field in `src/data/brands.ts` |

Reference images with a root-relative path, e.g. `/images/projects/sentinel-ops.jpg`.

## 8. How to change social links

Edit the `socials` array in `src/data/personal.ts`. Each entry needs a `label`, a full `href`, and an `icon` (`"linkedin" | "github" | "instagram" | "x"`).

## 9. Editing the Experience timeline

Edit `src/data/experience.ts`. Entries render in the order you list them — put your most recent role first. Bracketed placeholders like `[YOUR ROLE / TITLE]` are there so nothing false ever gets published by accident; replace every one of them before going live.

## 10. Editing the Impact metrics

Edit `src/data/metrics.ts`. The numbers animate on scroll once you replace the bracketed placeholders with real figures. Leave the section out (delete the `<Metrics />` line in `src/App.tsx`) if you'd rather not show stats yet.

---

## 11. Deploying to GitHub Pages (free)

1. Push this project to a new GitHub repository.
2. Open `vite.config.ts` and set `REPO_NAME` to your repository's exact name (case-sensitive):
   ```ts
   const REPO_NAME = 'your-repo-name';
   ```
   - If your repository is literally named `YOUR-USERNAME.github.io`, change `base` to `'/'` directly — you'll be served from the domain root.
3. In your GitHub repository, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
4. Push to `main`. The included workflow at `.github/workflows/deploy.yml` builds the site and deploys it automatically on every push.
5. Your site will be live at:
   ```
   https://YOUR-GITHUB-USERNAME.github.io/REPO_NAME/
   ```

You can also trigger a deploy manually from the **Actions** tab using "Run workflow" (the workflow has `workflow_dispatch` enabled).

## 12. Updating the live site later

Just commit and push to `main` — the GitHub Actions workflow rebuilds and redeploys automatically. Nothing to run manually.

## 13. Connecting a custom domain later

1. Add a `CNAME` file inside `public/` containing only your domain, e.g. `www.yourname.com`.
2. In your DNS provider, add a `CNAME` record pointing your subdomain at `YOUR-GITHUB-USERNAME.github.io`.
3. In **Settings → Pages**, add the custom domain and enable **Enforce HTTPS** once it's verified.
4. Once a custom domain is active, set `base: '/'` in `vite.config.ts` (custom domains serve from the root, not a repo subpath).

---

## 14. Before you publish — checklist

- [ ] Replace every `YOUR_EMAIL@example.com`, `YOUR-USERNAME` and `YOUR-GITHUB-USERNAME` placeholder (search the project for `YOUR_`)
- [ ] Replace bracketed placeholders in `experience.ts`, `metrics.ts` and `brands.ts` with real information, or remove those sections
- [ ] Add your real profile photo and project screenshots
- [ ] Fill in `liveUrl` / `githubUrl` for each shipped project
- [ ] Set `REPO_NAME` in `vite.config.ts`
- [ ] Update `og:image` / `twitter:image` paths in `index.html`
- [ ] Run `npm run build` locally once with no errors before pushing

---

## Tech stack

React · TypeScript · Vite · Tailwind CSS v4 · Framer Motion · lucide-react
