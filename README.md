# Gerardo Alfonso — Data Engineering Portfolio

A bilingual portfolio built with React, TypeScript, and Vite. It presents Gerardo's progression from software engineering to Azure data platforms and applied AI.

## Run locally

1. Install dependencies with `npm install`.
2. Start the development server with `npm run dev`.
3. Open [http://localhost:5173](http://localhost:5173).

To test the production version, run `npm run build` followed by `npm run preview`.

## Publish as your main GitHub Pages site

1. Create a GitHub repository named `<your-username>.github.io` and push this project to its `main` branch. That repository name makes the site available at `https://<your-username>.github.io/`.
2. In the repository, open **Settings → Pages** and choose **GitHub Actions** as the build and deployment source.
3. The workflow in `.github/workflows/pages.yml` builds and publishes the site after each push to `main`. You can also run it manually from the **Actions** tab.

The Vite asset paths are relative, so the site also works if the repository is published as a project site at `https://<your-username>.github.io/<repository>/`.

## Content

All English and Spanish copy, case studies, technologies, profile links, and experience entries are centralized in `src/data.ts`. The language preference is retained for the current browser session.
